import { getKeys } from "./helpers";

// todo:
// improve relability of moving elements around

// global config
const color = '#000000';

const saveChart = renderedNodes => {
    // find initial nodes (triggers);
    const triggers = renderedNodes.filter(node => node.group === 'TRIGGERS');

    // for each initial node walk the tree and produce one 'rule'
    const result = triggers.map(trigger => {
        const walkRule = rule => {
            return {
                t: rule.type,
                v: rule.config.map(config => config.value),
                o: rule.outputs.map(out => out.lines.map(line => walkRule(line.input.nodeObject))),
                c: [rule.position.x, rule.position.y]
            }
        }

        return walkRule(trigger);
    });

    return result;
}

const loadChart = (config, chart, from) => {
    config.map(config => {
        let node = chart.renderedNodes.find(n => n.position.x === config.c[0] && n.position.y === config.c[1]);
        if (!node) {
            const configNode = chart.nodes.find(n => config.t == n.type);
            node = new NodeUI(chart.canvas, configNode, { x: config.c[0], y: config.c[1] });
            node.config.map((cfg, i) => {
                cfg.value = config.v[i];
            });
            node.render();
            chart.renderedNodes.push(node);
        }
        

        if (from) {
            const fromDimension = from.getBoundingClientRect();
            const toDimension = node.inputs[0].getBoundingClientRect();
            const lineSvg = new svgArrow(document.body.clientWidth, document.body.clientHeight, 'none', color);
            chart.canvas.appendChild(lineSvg.element);
            const x1 = fromDimension.x + fromDimension.width;
            const y1 = fromDimension.y + fromDimension.height/2;
            const x2 = toDimension.x;
            const y2 = toDimension.y + toDimension.height/2;
            lineSvg.setPath(x1, y1, x2, y2);

            const connection = {
                output: from,
                input: node.inputs[0],
                svg: lineSvg,
                start: { x: x1, y: y1 },
                end: { x: x2, y: y2 },
            };
            node.inputs[0].lines.push(connection);
            from.lines.push(connection);
        }

        config.o.map((output, outputI) => {
            loadChart(output, chart, node.outputs[outputI]);
        });
    })
}

const exportChart = renderedNodes => {
    // find initial nodes (triggers);
    const triggers = renderedNodes.filter(node => node.group === 'TRIGGERS');

    let result = '';
    // for each initial node walk the tree and produce one 'rule'
    triggers.map(trigger => {
        
        const walkRule = (r, i) => {
            const rules = r.toDsl ? r.toDsl() : [];
            let ruleset = '';
            let padding = r.indent ? '  ' : '';
            
            r.outputs.map((out, outI) => {
                let rule = rules[outI] || r.type;
                let subrule = '';
                if (out.lines) {
                    out.lines.map(line => {
                        subrule += walkRule(line.input.nodeObject, r.indent ? i + 1 : i);
                    });
                    subrule = subrule.split('\n').map(line => (padding + line)).filter(line => line.trim() !== '').join('\n') + '\n';
                } 
                if (rule.includes('%%output%%')) {
                    rule = rule.replace('%%output%%', subrule);
                } else {
                    rule += subrule;
                }
                ruleset += rule;
            });
            
            return ruleset;
        }

        const rule = walkRule(trigger, 0);
        result += rule + "\n\n";
    });

    return result;
}

// drag and drop helpers
const dNd = {
    enableNativeDrag: (nodeElement, data) => {
        nodeElement.draggable = true;
        nodeElement.ondragstart = ev => {
            getKeys(data).map(key => {
                ev.dataTransfer.setData(key, data[key]);
            }); 
        }
    }, enableNativeDrop: (nodeElement, fn) => {
        nodeElement.ondragover = ev => {
            ev.preventDefault();
        }
        nodeElement.ondrop = fn;
    }
}

// svg helpers
class svgArrow {
    constructor(width, height, fill, color) {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.element.setAttribute('style', 'z-index: -1;position:absolute;top:0px;left:0px');
        this.element.setAttribute('width', width);
        this.element.setAttribute('height', height);
        this.element.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

        this.line = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.line.setAttributeNS(null, "fill", fill);
        this.line.setAttributeNS(null, "stroke", color);
        this.element.appendChild(this.line);
    }

    setPath(x1, y1, x2, y2, tension = 0.5) {
        const delta = (x2-x1)*tension;
        const hx1=x1+delta;
        const hy1=y1;
        const hx2=x2-delta;
        const hy2=y2;
        
        const path = `M ${x1} ${y1} C ${hx1} ${hy1} ${hx2} ${hy2} ${x2} ${y2}`;
        this.line.setAttributeNS(null, "d", path);
    }
}

// node configuration (each node in the left menu is represented by an instance of this object)
class Node {
    constructor(conf) {
        this.type = conf.type;
        this.group = conf.group;
        this.config = conf.config.map(config => (Object.assign({}, config)));
        this.inputs = conf.inputs.map(input => {});
        this.outputs = conf.outputs.map(output => {});
        this.toDsl = conf.toDsl;
        this.toString = conf.toString;
        this.indent = conf.indent;
    }
}

// node UI (each node in your flow diagram is represented by an instance of this object)
class NodeUI extends Node {
    constructor(canvas, conf, position) {
        super(conf);
        this.canvas = canvas;
        this.position = position;
        this.lines = [];
        this.linesEnd = [];
        this.toDsl = conf.toDsl;
        this.toString = conf.toString;
        this.indent = conf.indent;
    }

    updateInputsOutputs(inputs, outputs) {
        inputs.map(input => {
            const rect = input.getBoundingClientRect();
            input.lines.map(line => {
                line.end.x = rect.x;
                line.end.y = rect.y + rect.height/2;
                line.svg.setPath(line.start.x, line.start.y, line.end.x, line.end.y);
            });
        });
        outputs.map(output => {
            const rect = output.getBoundingClientRect();
            output.lines.map(line => {
                line.start.x = rect.x + rect.width;
                line.start.y = rect.y + rect.height/2;
                line.svg.setPath(line.start.x, line.start.y, line.end.x, line.end.y);
            });
        });
    }

    handleMoveEvent(ev) {
        const shiftX = ev.clientX - this.element.getBoundingClientRect().left;
        const shiftY = ev.clientY - this.element.getBoundingClientRect().top;
        const onMouseMove = ev => {
            this.element.style.top = `${ev.y - shiftY}px`;
            this.element.style.left = `${ev.x - shiftX}px`; 
            this.updateInputsOutputs(this.inputs, this.outputs);
        }
        const onMouseUp = ev => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);   
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    handleDblClickEvent(ev) {
        if (this.config.length)
            showConfigBox(this.type, this.config, () => {
                this.text.textContent = this.toString();
            });
    }

    handleRightClickEvent(ev) {
        this.inputs.map(input => {
            input.lines.map(line => {
                line.output.lines = [];
                line.svg.element.parentNode.removeChild(line.svg.element);
            });
            input.lines = [];
        });
        this.outputs.map(output => {
            output.lines.map(line => {
                const index = line.input.lines.indexOf(line);
                line.input.lines.splice(index, 1);
                line.svg.element.parentNode.removeChild(line.svg.element);
            });
            output.lines = [];
        });
        this.element.parentNode.removeChild(this.element);
        if (this.destroy) this.destroy();
        ev.preventDefault();
        ev.stopPropagation();
        return false;
    }

    render() {
        this.element = document.createElement('div');
        this.element.nodeObject = this;
        this.element.className = `node node-chart group-${this.group}`;

        this.text = document.createElement('span');
        this.text.textContent = this.toString();
        this.element.appendChild(this.text);

        this.element.style.top = `${this.position.y}px`;
        this.element.style.left = `${this.position.x}px`;

        const inputs = document.createElement('div');
        inputs.className = 'node-inputs';
        this.element.appendChild(inputs);
        
        this.inputs.map((val, index) => {
            const input = this.inputs[index] = document.createElement('div');
            input.className = 'node-input';
            input.nodeObject = this;
            input.lines = []
            input.onmousedown = ev => {
                ev.preventDefault();
                ev.stopPropagation();
            }
            inputs.appendChild(input);
        })

        const outputs = document.createElement('div');
        outputs.className = 'node-outputs';
        this.element.appendChild(outputs);

        this.outputs.map((val, index) => {
            const output = this.outputs[index] = document.createElement('div');
            output.className = 'node-output';
            output.nodeObject = this;
            output.lines = [];
            output.oncontextmenu = ev => {
                output.lines.map(line => {
                    line.svg.element.parentNode.removeChild(line.svg.element);
                });
                output.lines = [];
                ev.stopPropagation();
                ev.preventDefault();
                return false;
            }
            output.onmousedown = ev => {
                ev.stopPropagation();
                if (output.lines.length) return;
                const rects = output.getBoundingClientRect();
                const x1 = rects.x + rects.width;
                const y1 = rects.y + rects.height/2;

                const lineSvg = new svgArrow(document.body.clientWidth, document.body.clientHeight, 'none', color);
                this.canvas.appendChild(lineSvg.element);

                const onMouseMove = ev => {
                    lineSvg.setPath(x1, y1, ev.pageX, ev.pageY);
                }

                const onMouseUp = ev => {
                    const elemBelow = document.elementFromPoint(ev.clientX, ev.clientY);
                    const input = elemBelow ? elemBelow.closest('.node-input') : null;
                    if (!input) {
                        lineSvg.element.remove();
                    } else {
                        const inputRect = input.getBoundingClientRect();
                        const x2 = inputRect.x;
                        const y2 = inputRect.y + inputRect.height/2;
                        lineSvg.setPath(x1, y1, x2, y2);
                        const connection = {
                            output,
                            input,
                            svg: lineSvg,
                            start: { x: x1, y: y1 },
                            end: { x: x2, y: y2 },
                        };
                        output.lines.push(connection);
                        input.lines.push(connection);
                    }
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                }

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            }
            outputs.appendChild(output);
        });

        this.element.ondblclick = this.handleDblClickEvent.bind(this);
        this.element.onmousedown = this.handleMoveEvent.bind(this);
        this.element.oncontextmenu = this.handleRightClickEvent.bind(this);
        this.canvas.appendChild(this.element);
    }
}

const getCfgUI = cfg => {
    const template = document.createElement('template');

    const getSelectOptions = val => {
        const selected = val == cfg.value ? 'selected' : '';
        return `<option ${selected}>${val}</option>`;
    }

    switch (cfg.type) {
        case 'text':
            template.innerHTML = `<div>${cfg.name}: <input type='text' name='${cfg.name}' value='${cfg.value}' /></div>`;
            break;
        case 'number':
            template.innerHTML = `<div>${cfg.name}: <input type='number' name='${cfg.name}' value='${cfg.value}' /></div>`;
            break;
        case 'select':
            template.innerHTML = `<div>${cfg.name}: <select name='${cfg.name}'>${cfg.values.map(val => (getSelectOptions(val)))}</select></div>`;
            break;
        case 'textselect':
            template.innerHTML = `<div>${cfg.name}<div style="position:relative;width:200px;height:25px;border:0;padding:0;margin:0;">
            <select style="position:absolute;top:0px;left:0px;width:200px; height:25px;line-height:20px;margin:0;padding:0;"
                    onchange="document.getElementById('displayValue').value=this.options[this.selectedIndex].text; document.getElementById('idValue').value=this.options[this.selectedIndex].value;">
                    ${cfg.values.map(val => (getSelectOptions(val)))}
            </select>
            <input type="text" name="${cfg.name}" id="displayValue" 
                   placeholder="add/select a value" onfocus="this.select()"
                   style="position:absolute;top:0px;left:0px;width:183px;width:180px\9;#width:180px;height:23px; height:21px\9;#height:18px;border:1px solid #556;"  >
            <input name="idValue" id="idValue" type="hidden">
          </div></div>`
    }
    return template.content.cloneNode(true);
}

const showConfigBox = (type, config, onclose) => {
    const template = document.createElement('template');
    template.innerHTML = `
        <div class='configbox'>
            <div class="configbox-title">${type}</div>
            <form class="configbox-body" name=configform onsubmit="return false;">
            </form>
            <div class="configbox-footer">
                <button id=ob>OK</button>
                <button id=cb>Cancel</button>
            </div>
        </div>
    `;

    const configBox = document.body.appendChild(template.content.cloneNode(true));
    const body = document.body.querySelectorAll('.configbox-body')[0];
    const okButton = document.getElementById('ob');
    const cancelButton = document.getElementById('cb');
    cancelButton.onclick = () => {
        body.parentElement.remove();
    }
    okButton.onclick = () => {
        // set configuration to node
        config.map(cfg => {
            cfg.value = document.forms['configform'].elements[cfg.name].value;
        });
        body.parentElement.remove();
        onclose();
    }
    config.map(cfg => {
        const cfgUI = getCfgUI(cfg);
        body.appendChild(cfgUI);
    })
}

export class FlowEditor {
    constructor(selector, nodes, onSave) {
        this.nodes = [];
        this.renderedNodes = [];
        this.onSave = onSave;

        this.element = document.querySelectorAll(selector)[0];

        nodes.map(nodeConfig => {
            const node = new Node(nodeConfig);
            this.nodes.push(node);
        });
        this.render();

        dNd.enableNativeDrop(this.canvas, ev => {
            const configNode = this.nodes.find(node => node.type == ev.dataTransfer.getData('type'));
            let node = new NodeUI(this.canvas, configNode, { x: ev.x, y: ev.y });
            node.render();
            node.destroy = () => {
                this.renderedNodes.splice( this.renderedNodes.indexOf(node), 1 );
                node = null;
            }
            // todo, remove from rendered nodes on destroy
            this.renderedNodes.push(node);            
        });
    }

    loadConfig(config) {
        loadChart(config, this);
    }

    renderContainers() {
        this.sidebar = document.createElement('div');
        this.sidebar.className = 'sidebar';
        this.element.appendChild(this.sidebar);

        this.canvas = document.createElement('div');
        this.canvas.className = 'canvas';
        this.element.appendChild(this.canvas);

        this.debug = document.createElement('div');
        this.debug.className = 'debug';

        const text = document.createElement('div');
        this.debug.appendChild(text);

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'SAVE';
        saveBtn.onclick = () => {
            const config = JSON.stringify(saveChart(this.renderedNodes));
            const rules = exportChart(this.renderedNodes);
            this.onSave(config, rules);
        }

        const loadBtn = document.createElement('button');
        loadBtn.textContent = 'LOAD';
        loadBtn.onclick = () => {
            const input = prompt('enter config');
            loadChart(JSON.parse(input), this);
        }

        const exportBtn = document.createElement('button');
        exportBtn.textContent = 'EXPORT';
        exportBtn.onclick = () => {
            const exported = exportChart(this.renderedNodes);
            text.textContent = exported;
        }
        this.debug.appendChild(exportBtn);
        this.debug.appendChild(saveBtn);
        this.debug.appendChild(loadBtn);
        this.debug.appendChild(text);
        this.element.appendChild(this.debug);
    }

    renderConfigNodes() {
        const groups = {};
        this.nodes.map(node => {
            if (!groups[node.group]) {
                const group = document.createElement('div');
                group.className = 'group';
                group.textContent = node.group;
                this.sidebar.appendChild(group);
                groups[node.group] = group;
            }
            const nodeElement = document.createElement('div');
            nodeElement.className = `node group-${node.group}`;
            nodeElement.textContent = node.type;
            groups[node.group].appendChild(nodeElement);

            dNd.enableNativeDrag(nodeElement, { type: node.type });
        })
    }

    render() {
        this.renderContainers();
        this.renderConfigNodes();
    }
}