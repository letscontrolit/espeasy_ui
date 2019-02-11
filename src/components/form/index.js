import { h, Component } from 'preact';
import { get } from 'lodash';

const getKeys = object => {
    const keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

export class Form extends Component {
    constructor() {
        super();

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
    }

    renderConfig(id, config, value) {
        switch (config.type) {
            case 'string':
                return (
                    <div class="pure-control-group">
                        <label for={id}>{config.name}</label>
                        <input id={id} type="text" value={value} />
                    </div>
                );
            case 'number':
                return (
                    <div class="pure-control-group">
                        <label for={id}>{config.name}</label>
                        <input id={id} type="number" value={value} />
                    </div>
                ) ;
            case 'password':
                return (
                    <div class="pure-control-group">
                        <label for={id}>{config.name}</label>
                        <input id={id} type="password" />
                    </div>
                ) ;
            case 'checkbox':
                return (
                    <div class="pure-control-group">
                        <label for={id} class="pure-checkbox">
                            {config.name}
                        </label>
                        <input id={id} type="checkbox" defaultChecked={value} />
                    </div>
                ) ;
            case 'select':
                const options = (typeof config.options === 'function') ? config.options() : config.options;
                return (
                    <div class="pure-control-group">
                        <label for={id}>{config.name}</label>
                        <select id={id} type="password" onChange={config.onChange}>
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
                    </div>
                ) ;
            case 'file':
                return (
                    <div class="pure-control-group">
                        <label for={id} class="pure-checkbox">
                            {config.name}
                        </label>
                        <input id={id} type="file" />
                    </div>
                )
        }
    }

    renderGroup(id, group, values) {
        const keys = getKeys(group.configs);
        return (
            <fieldset name={id}>
                <label>{group.name}</label>
                {keys.map(key => {
                    const conf = group.configs[key];
                    let val;
                    if (values) {
                        val = conf.var ? get(values, conf.var) : (values[id] ? values[id][key] : null);
                    }
                    
                    return this.renderConfig(`${id}.${key}`, conf, val);
                })}
            </fieldset>
        )
    }

    render(props) {
        const keys = getKeys(props.config.groups);
        return (<form class="pure-form pure-form-aligned" ref={ref => this.form = ref}>
            {keys.map(key => this.renderGroup(key, props.config.groups[key], props.selected))}
            <div>
                <button type="button" onClick={this.saveForm}>save</button><button onClick={this.resetForm}>cancel</button>
            </div>
        </form>)
    }
}