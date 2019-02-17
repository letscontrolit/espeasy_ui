import { h, Component } from 'preact';
import { get, set, getKeys } from '../../lib/helpers';
import { settings } from '../../lib/settings';

export class Form extends Component {
    constructor(props) {
        super(props);

        this.onChange = (id, prop, config = {}) => {
            return (e) => {
                let val = this.form.elements[id].value;
                if (config.type === 'checkbox') {
                    val =  this.form.elements[id].checked ? 1 : 0;
                } else if (config.type === 'number' || config.type === 'ip') {
                    val = parseFloat(val);
                } else if (config.type === 'select') {
                    val = isNaN(val) ? val : parseInt(val);
                }
                if (prop.startsWith('ROOT')) {
                    settings.set(prop.replace('ROOT.', ''), val);
                } else {
                    set(this.props.selected, prop, val);
                }
                if (config.onChange) {
                    config.onChange(e);
                }
            }
        }
    }

    renderConfig(id, config, value, varName) {
        switch (config.type) {
            case 'string':
                return (
                    <input id={id} type="text" value={value} onChange={this.onChange(id, varName, config)} />
                );
            case 'number':
                return (
                    <input id={id} type="number" value={value} min={config.min} max={config.max} onChange={this.onChange(id, varName, config)}/>
                ) ;
            case 'ip':
                return [
                    (<input id={`${id}.0`} type="number" min="0" max="255" onChange={this.onChange(`${id}.0`, `${varName}.0`, config)} style="width: 80px" value={value ? value[0] : null} />),
                    (<input id={`${id}.1`} type="number" min="0" max="255" onChange={this.onChange(`${id}.1`, `${varName}.1`, config)} style="width: 80px" value={value ? value[1] : null} />),
                    (<input id={`${id}.2`} type="number" min="0" max="255" onChange={this.onChange(`${id}.2`, `${varName}.2`, config)} style="width: 80px" value={value ? value[2] : null} />),
                    (<input id={`${id}.3`} type="number" min="0" max="255" onChange={this.onChange(`${id}.3`, `${varName}.3`, config)} style="width: 80px" value={value ? value[3] : null} />)
                ]
            case 'password':
                return (
                    <input id={id} type="password" onChange={this.onChange(id, varName, config)} />
                ) ;
            case 'checkbox':
                return (
                    <input id={id} type="checkbox" defaultChecked={value} onChange={this.onChange(id, varName, config)} />
                ) ;
            case 'select':
                const options = (typeof config.options === 'function') ? config.options() : config.options;
                return (
                    <select id={id} type="password" onChange={this.onChange(id, varName, config)}>
                        {options.map(option => {
                            const name = option instanceof Object ? option.name : option;
                            const val = option instanceof Object ? option.value : option;
                            if (val === value) {
                                return (<option value={val} selected>{name}</option>)
                            } else {
                                return (<option value={val}>{name}</option>);
                            }
                        })}
                    </select>
                ) ;
            case 'file':
                return (
                    <input id={id} type="file" />
                )
            case 'button':
                const clickEvent = () => {
                    if (!config.click) return;
                    config.click(this.props.selected);
                }
                return (
                    <button type="button" onClick={clickEvent}>GET IT</button>
                );
        }
    }

    renderConfigGroup(id, configs, values) {
        const configArray = Array.isArray(configs) ? configs : [configs];

        return (
            <div class="pure-control-group">
                {configArray.map((conf, i) => {
                    const varId = configArray.length > 1 ? `${id}.${i}` : id;
                    const varName = conf.var ? conf.var : varId;
                    const val = varName.startsWith('ROOT') ? settings.get(varName.replace('ROOT.', '')) : get(values, varName, null);

                    if (conf.if) {
                        if (!get(settings.settings, conf.if, false)) return(null);
                    }
                    if (conf.type === 'custom') {
                        const CustomComponent = conf.component;
                        return (<CustomComponent conf={conf} values={values} />);
                    }
                    return [
                        (<label for={varId}>{conf.name}</label>),
                        this.renderConfig(varId, conf, val, varName)
                    ];
                })}
            </div>
        )
    }

    renderGroup(id, group, values) {
        if (!group.configs || !Object.keys(group.configs).length) return (null);
        const keys = getKeys(group.configs);
        return (
            <fieldset name={id}>
                <label>{group.name}</label>
                {keys.map(key => {
                    const conf = group.configs[key];
                    return this.renderConfigGroup(`${id}.${key}`, conf, values);
                })}
            </fieldset>
        )
    }

    render(props) {
        const keys = getKeys(props.config.groups);
        return (<form class="pure-form pure-form-aligned" ref={ref => this.form = ref}>
            {keys.map(key => this.renderGroup(key, props.config.groups[key], props.selected))}
        </form>)
    }
}