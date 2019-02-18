import miniToastr from 'mini-toastr';
import { loader } from './loader';

export const getJsonStat = async (url = '') => {
    return await fetch(`${url}/json`).then(response => response.json())
}

export const loadDevices = async (url) => {
    return getJsonStat(url).then(response => response.Sensors);
}

export const getConfigNodes = async () => {
    const devices = await loadDevices();
    const vars = [];
    const nodes = devices.map(device => {
        const taskValues = device.TaskValues || [];
        taskValues.map(value => vars.push(`${device.TaskName}#${value.Name}`));
        const result = [{
            group: 'TRIGGERS',
            type: device.TaskName || `${device.TaskNumber}-${device.Type}`,
            inputs: [],
            outputs: [1],
            config: [{
                name: 'variable',
                type: 'select',
                values: taskValues.map(value => value.Name),
                value: taskValues.length ? taskValues[0].Name : '',
            }, {
                name: 'euqality',
                type: 'select',
                values: ['', '=', '<', '>', '<=', '>=', '!='],
                value: '',
            }, {
                name: 'value',
                type: 'number',
            }],
            indent: true,
            toString: function () { 
                const comparison = this.config[1].value === '' ? 'changes' : `${this.config[1].value} ${this.config[2].value}`;
                return `when ${this.type}.${this.config[0].value} ${comparison}`; 
            },
            toDsl: function () { 
                const comparison = this.config[1].value === '' ? '' : `${this.config[1].value}${this.config[2].value}`;
                return [`on ${this.type}#${this.config[0].value}${comparison} do\n%%output%%\nEndon\n`]; 
            }
        }];

        let fnNames, fnName, name;
        switch (device.Type) {
            // todo: need access to GPIO number
            // case 'Switch input - Switch':
            //     result.push({
            //         group: 'ACTIONS',
            //         type: `${device.TaskName} - switch`,
            //         inputs: [1],
            //         outputs: [1],
            //         config: [{
            //             name: 'value',
            //             type: 'number',
            //         }],
            //         toString: function () { return `${device.TaskName}.level = ${this.config[0].value}`; },
            //         toDsl: function () { return [`config,task,${device.TaskName},setlevel,${this.config[0].value}`]; }
            //     });
            //     break;
            case 'Regulator - Level Control':
                result.push({
                    group: 'ACTIONS',
                    type: `${device.TaskName} - setlevel`,
                    inputs: [1],
                    outputs: [1],
                    config: [{
                        name: 'value',
                        type: 'number',
                    }],
                    toString: function () { return `${device.TaskName}.level = ${this.config[0].value}`; },
                    toDsl: function () { return [`config,task,${device.TaskName},setlevel,${this.config[0].value}`]; }
                });
                break;
            case 'Extra IO - PCA9685':
            case 'Switch input - PCF8574':
            case 'Switch input - MCP23017':
                fnNames = {
                    'Extra IO - PCA9685': 'PCF',
                    'Switch input - PCF8574': 'PCF',
                    'Switch input - MCP23017': 'MCP',
                };
                fnName = fnNames[device.Type];
                result.push({
                    group: 'ACTIONS',
                    type: `${device.TaskName} - GPIO`,
                    inputs: [1],
                    outputs: [1],
                    config: [{
                        name: 'pin',
                        type: 'select',
                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    }, {
                        name: 'value',
                        type: 'select',
                        values: [0, 1],
                    }],
                    toString: function () { return `${device.TaskName}.pin${this.config[0].value} = ${this.config[1].value}`; },
                    toDsl: function () { return [`${fnName}GPIO,${this.config[0].value},${this.config[1].value}`]; }
                });
                result.push({
                    group: 'ACTIONS',
                    type: `${device.TaskName} - Pulse`,
                    inputs: [1],
                    outputs: [1],
                    config: [{
                        name: 'pin',
                        type: 'select',
                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    }, {
                        name: 'value',
                        type: 'select',
                        values: [0, 1],
                    },{
                        name: 'unit',
                        type: 'select',
                        values: ['ms', 's'],
                    },{
                        name: 'duration',
                        type: 'number',
                    }],
                    toString: function () { return `${device.TaskName}.pin${this.config[0].value} = ${this.config[1].value} for ${this.config[3].value}${this.config[2].value}`; },
                    toDsl: function () { 
                        if (this.config[2].value === 's') {
                            return [`${fnName}LongPulse,${this.config[0].value},${this.config[1].value},${this.config[2].value}`]; 
                        } else {
                            return [`${fnName}Pulse,${this.config[0].value},${this.config[1].value},${this.config[2].value}`]; 
                        }
                    }
                });
                break;
            case 'Extra IO - ProMini Extender':
                result.push({
                    group: 'ACTIONS',
                    type: `${device.TaskName} - GPIO`,
                    inputs: [1],
                    outputs: [1],
                    config: [{
                        name: 'pin',
                        type: 'select',
                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    }, {
                        name: 'value',
                        type: 'select',
                        values: [0, 1],
                    }],
                    toString: function () { return `${device.TaskName}.pin${this.config[0].value} = ${this.config[1].value}`; },
                    toDsl: function () { return [`EXTGPIO,${this.config[0].value},${this.config[1].value}`]; }
                });
                break;
            case 'Display - OLED SSD1306':
            case 'Display - LCD2004':
                fnNames = {
                    'Display - OLED SSD1306': 'OLED',
                    'Display - LCD2004': 'LCD',
                };
                fnName = fnNames[device.Type];
                result.push({
                    group: 'ACTIONS',
                    type: `${device.TaskName} - Write`,
                    inputs: [1],
                    outputs: [1],
                    config: [{
                        name: 'row',
                        type: 'select',
                        values: [1, 2, 3, 4],
                    }, {
                        name: 'column',
                        type: 'select',
                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                    }, {
                        name: 'text',
                        type: 'text',
                    }],
                    toString: function () { return `${device.TaskName}.text = ${this.config[2].value}`; },
                    toDsl: function () { return [`${fnName},${this.config[0].value},${this.config[1].value},${this.config[2].value}`]; }
                });
                break;
            case 'Generic - Dummy Device':
                result.push({
                    group: 'ACTIONS',
                    type: `${device.TaskName} - Write`,
                    inputs: [1],
                    outputs: [1],
                    config: [{
                        name: 'variable',
                        type: 'select',
                        values: taskValues.map(value => value.Name),
                    }, {
                        name: 'value',
                        type: 'text',
                    }],
                    toString: function () { return `${device.TaskName}.${this.config[0].value} = ${this.config[1].value}`; },
                    toDsl: function () { return [`TaskValueSet,${device.TaskNumber},${this.config[0].values.findIndex(this.config[0].value)},${this.config[1].value}`]; }
                });
                break;
        }

        return result;
    }).flat();

    return { nodes, vars };
}

export const getVariables = async () => {
    const urls = ['']; //, 'http://192.168.1.130'
    const vars = {};
    await Promise.all(urls.map(async url => {
        const stat = await getJsonStat(url);
        stat.Sensors.map(device => {
            device.TaskValues.map(value => {
                vars[`${stat.System.Name}@${device.TaskName}#${value.Name}`]  = value.Value;
            });
        });
    }));
    return vars;
}

export const getDashboardConfigNodes = async (url) => {
    const devices = await loadDevices(url);
    const vars = [];
    const nodes = devices.map(device => {
        device.TaskValues.map(value => vars.push(`${device.TaskName}#${value.Name}`));
        return [];
    }).flat();

    return { nodes, vars };
}

export const fetchProgress = (url, opts={}) => {
    return new Promise( (res, rej)=>{
        var xhr = new XMLHttpRequest();
        xhr.open(opts.method || 'get', url);
        for (var k in opts.headers||{})
            xhr.setRequestHeader(k, opts.headers[k]);
        xhr.onload = e => res(e.target.responseText);
        xhr.onerror = rej;
        if (xhr.upload && opts.onProgress)
            xhr.upload.onprogress = opts.onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
        xhr.send(opts.body);
    });
}

export const storeFile = async (filename, data, onProgress) => {
    loader.show();
    const file = data ? new File([new Blob([data])], filename) : filename;
    const formData = new FormData();
    formData.append('edit', 1);
    formData.append('file', file);
    
    return await fetchProgress('/upload_json', {
        method: 'post',
        body: formData,
    }, onProgress).then(() => {
        loader.hide();
        miniToastr.success('Successfully saved to flash!', '', 5000);
    }, e => {
        loader.hide();
        miniToastr.error(e.message, '', 5000);
    });
}

export const deleteFile = async (filename,) => {    
    return await fetch('/filelist?delete='+filename).then(() => {
        miniToastr.success('Successfully saved to flash!', '', 5000);
    }, e => {
        miniToastr.error(e.message, '', 5000);
    });
}

export const storeDashboardConfig = async (config) => {
    storeFile('d1.txt', config);
}

export const loadDashboardConfig = async (nodes) => {
    return await fetch('/d1.txt').then(response => response.json());
}

export const storeRuleConfig = async (config) => {
    storeFile('r1.txt', config);
}

export const loadRuleConfig = async () => {
    return await fetch('/r1.txt').then(response => response.json());
}

export const storeRule = async (rule) => {
    const formData = new FormData();
    formData.append('set', 1);
    formData.append('rules', rule);
    
    return await fetch('/rules', {
        method: 'post',
        body: formData,
    });
}


export default {
    getJsonStat, loadDevices, getConfigNodes, getDashboardConfigNodes, getVariables, storeFile, deleteFile, storeDashboardConfig, loadDashboardConfig, storeRuleConfig, loadRuleConfig, storeRule
}