import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';
import { devices } from '../devices';
import { set } from '../lib/helpers';

const baseFields = { 
    enabled: { name: 'Enabled', type: 'checkbox', var: 'enabled' },
    name: { name: 'Name', type: 'string' },
};

const getFormConfig = (type) => {
    const device = devices.find(d => d.value === parseInt(type));
    if (!device) return null;
       
    return {
        groups: {
            settings: {
                name: 'Device Settings',
                configs: {
                    device: { name: 'Device', type: 'select', var: 'device', options: devices },
                    ...baseFields,
                    
                }
            },
            ...device.fields,
            values: {
                name: 'Values',
                configs: {
                    ...[...new Array(4)].reduce((acc, x, i) => {
                        acc[`value${i}`] = [{ name: 'Name ${i}', var: `settings.values[${i}].name`, type: 'string' }, { name: 'Formula ${i}', var: `settings.values[${i}].formula`, type: 'string' }];
                        return acc;
                    }, {})
                }
            }
        },
    }
}

const setDefaultConfig = (type, config) => {
    const device = devices.find(d => d.value === parseInt(type));
    Object.keys(device.fields).forEach((groupKey) => {
        const group = device.fields[groupKey];
        if (!group.configs) return;
        Object.keys(group.configs).forEach((configKey) => {
            const cfg = group.configs[configKey];
            const key = cfg.var || `${groupKey}.${configKey}`;
            let val = 0;
            if (cfg.type === 'string') val = '';
            else if (cfg.type === 'ip') val = [0, 0, 0, 0];
            set(config, key, val);
        });
    });
    if (device.fields.defaults) {
        const defaultConfig = device.fields.defaults();
        Object.keys(defaultConfig).forEach(key => {
            const val = defaultConfig[key];
            set(config, key, val);    
        })
    }
    
}

// todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 
export class DevicesEditPage extends Component {
    constructor(props) {
        super(props);

        this.config = settings.get(`tasks[${props.params[0]}]`);
        this.state = {
            device: this.config.device,
        }
    }

    render(props) {
        const formConfig = getFormConfig(this.state.device);
        if (!formConfig) {
            alert('something went wrong, cant edit device');
            window.location.href='#devices';
        }
        formConfig.groups.settings.configs.device.onChange = (e) => {
            this.setState({ device: e.currentTarget.value });
            setDefaultConfig(e.currentTarget.value, this.config);
        };
        formConfig.onSave = (values) => {
            settings.set(`tasks[${props.params[0]}]`, values);
            window.location.href='#devices';
        }
        return (
            <Form config={formConfig} selected={this.config} />
        );
    }
}
