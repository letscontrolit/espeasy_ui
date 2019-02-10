import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';

const devices = [
    { name: '- None -', value: 0 },
    { name: 'Environment - DHT11/12/22  SONOFF2301/7021', value: 5 },
    { name: 'Regulator - Level Control', value: 21 },
    { name: 'Switch input - Switch', value: 1 },
];

const baseFields = { 
    enabled: { name: 'Enabled', type: 'checkbox' },
    name: { name: 'Name', type: 'string' },
};

const getFormConfig = (type) => {
    let additionalFields = {};
    switch (Number(type)) {
        case 0:
            break;
        default:
            additionalFields = { ...baseFields };
    }
    
    return {
        groups: {
            settings: {
                name: 'Device Settings',
                configs: {
                    device: { name: 'Device', type: 'select', options: devices },
                    ...additionalFields
                }
            },
            values: {
                name: 'Values',
                configs: {

                }
            }
        },
    }
}

// todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 
export class DevicesEditPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            device: 0,
        }
    }

    render() {
        const formConfig = getFormConfig(this.state.device);
        formConfig.groups.settings.configs.device.onChange = (e) => {
            this.setState({ device: e.currentTarget.value });
            console.log(e.currentTarget.value);
        };
        const config = settings.get('devices[0]');
        return (
            <Form config={formConfig} selected={config} />
        );
    }
}
