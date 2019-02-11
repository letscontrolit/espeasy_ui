import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';
import { pins } from './config.hardware';

export const devices = [
    { name: '- None -', value: 0 },
    { name: 'Environment - DHT11/12/22  SONOFF2301/7021', value: 5 },
    { name: 'Regulator - Level Control', value: 21 },
    { name: 'Generic - Dummy Device', value: 33 },
    { name: 'Switch input - Switch', value: 1 },
];

const eventTypes = [
    { value: 0, name: 'Disabled' }, 
    { value: 1, name: 'Active on LOW' }, 
    { value: 2, name: 'Active on HIGH' }, 
    { value: 3, name: 'Active on LOW and HIGH' }, 
]

const baseFields = { 
    enabled: { name: 'Enabled', type: 'checkbox', var: 'enabled' },
    name: { name: 'Name', type: 'string' },
};

const inputSwitch = {
    sensor: {
        name: 'Sensor',
        configs: {
            pullup: { name: 'Internal PullUp', type: 'checkbox', var: 'pin1pullup' },
            inversed: { name: 'Inversed logic', type: 'checkbox', var: 'pin1inversed' },
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1' },
            switch_type: { name: 'Switch Type', type: 'select', options: [{ name: 'switch', value: 0}, { name: 'dimmer', value: 3 }], var: 'configs[0]'  },
            switch_button_type: { name: 'Switch Button Type', type: 'select', options: [
                { name: 'normal', value: 0}, { name: 'active low', value: 1 }, { name: 'active high', value: 2 }
            ], var: 'configs[2]'  },
            send_boot_state: { name: 'Send Boot State', type: 'checkbox', var: 'configs[3]'  },
        }
    },
    advanced: {
        name: 'Advanced event management',
        configs: {
            debounce: { name: 'De-bounce (ms)', type: 'number', var: 'configs_float[0]'  },
            dblclick: { name: 'Doublclick Event', type: 'select', options: eventTypes, var: 'configs[4]' },
            dblclick_interval: { name: 'Doubleclick Max interval (ms)', type: 'number', var: 'configs_float[1]' },
            longpress: { name: 'Longpress event', type: 'select', options: eventTypes, var: 'configs[5]' },
            longpress_interval: { name: 'Longpress min interval (ms)', type: 'number',  var: 'configs_float[2]' },
            safe_button: { name: 'Use safe button', type: 'checkbox', var: 'configs_float[3]' },
        }
    },
    data: {
        name: 'Data Acquisition',
        configs: {
            send: { name: 'Send to Controller', type: 'checkbox' },
            idx: { name: 'IDX', type: 'number' },
            interval: { name: 'Interval', type: 'number' },
        }
    }
}

const getFormConfig = (type) => {
    let additionalFields = {};
    let customFields = {};
    switch (Number(type)) {
        case 0:
            break;
        case 1:
            customFields = inputSwitch;
        default:
            additionalFields = { ...baseFields };
    }
    
    return {
        groups: {
            settings: {
                name: 'Device Settings',
                configs: {
                    device: { name: 'Device', type: 'select', var: 'device', options: devices },
                    ...additionalFields
                }
            },
            ...inputSwitch,
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

        this.config = settings.get(`tasks[${props.params[0]}]`);
        this.state = {
            device: this.config.device,
        }
    }

    render(props) {
        const formConfig = getFormConfig(this.state.device);
        formConfig.groups.settings.configs.device.onChange = (e) => {
            this.setState({ device: e.currentTarget.value });
        };
        
        return (
            <Form config={formConfig} selected={this.config} />
        );
    }
}
