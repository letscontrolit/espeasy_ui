import { h, Component } from 'preact';
import { get, set } from 'lodash';
import { getKeys } from '../../lib/helpers';
import { settings } from '../../lib/settings';

export class Form extends Component {
    constructor(props) {
        super(props);

        this.saveForm = () => {
            const values = {};
            const groups = getKeys(this.props.config.groups);
            groups.map(groupKey => {
                const group = this.props.config.groups[groupKey];
                const keys = getKeys(group.configs);
                if (!values[groupKey]) values[groupKey] = {};
                keys.map(key => {
                    let val = this.form.elements[`${groupKey}.${key}`].value;
                    if (group.configs[key].type === 'checkbox') {
                        val = val === 'on' ? 1 : 0;
                    }
                    values[groupKey][key] = val;
                });
            })
            this.props.config.onSave(values);
        };

        this.resetForm = () => {
            this.form.reset();
        }

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
                set(this.props.selected, prop, val);
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
                    <input id={id} type="number" value={value} onChange={this.onChange(id, varName, config)}/>
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
        }
    }

    renderConfigGroup(id, configs, values) {
        const configArray = Array.isArray(configs) ? configs : [configs];

        return (
            <div class="pure-control-group">
                {configArray.map((conf, i) => {
                    const varId = configArray.length > 1 ? `${id}.${i}` : id;
                    const varName = conf.var ? conf.var : varId;
                    const val = get(values, varName, null);

                    return [
                        (<label for={varId}>{conf.name}</label>),
                        this.renderConfig(varId, conf, val, varName)
                    ];
                })}
            </div>
        )
    }

    renderGroup(id, group, values) {
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
            {/* <div>
                <button type="button" onClick={this.saveForm}>save</button>
                <button onClick={this.resetForm}>cancel</button>
            </div> */}
        </form>)
    }
}