import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';
import { set } from '../lib/helpers';
import { pins } from '../devices/_defs';

export const types = [
    { name: '- None -', value: 0 },
    { name: 'Email', value: 1 },
    { name: 'Buzzer', value: 2 },
];

const baseDefaults = {}
const getDefaults = {
    0: () => ({}),
    1: () => ({ // Email
    }), 2: () => ({ // Buzzer
    }),
}

const setDefaultConfig = (type, config) => {
    const defaults = {...baseDefaults, ...getDefaults[type]()};
    Object.keys(defaults).forEach((key) => {
        const val = defaults[key];
        set(config.settings, key, val);
    });
}

const getFormConfig = (type) => {
    let additionalFields = {};
    switch (Number(type)) {
        case 1: // Email
            additionalFields = { 
                domain: { name: 'Domain', type: 'string' },
                hostname: { name: 'Hostname', type: 'string' },
                port: { name: 'Port', type: 'number' },
                sender: { name: 'Sender', type: 'string' },
                receiver: { name: 'Receiver', type: 'string' },
                subject: { name: 'Subject', type: 'string' },
                user: { name: 'Username', type: 'string' },
                pass: { name: 'Password', type: 'string' },
                body: { name: 'Body', type: 'textarea' },
            };
            break;
        case 2: // Buzzer
            additionalFields = { 
                pin1: { name: '1st GPIO', type: 'select', options: pins }
             };
            break;
    }
    
    return {
        groups: {
            settings: {
                name: 'Notification Settings',
                configs: {
                    type: { name: 'Type', type: 'select', var: 'type', options: types },
                    enabled: { name: 'Enabled', type: 'checkbox', var: 'enabled' },
                    ...additionalFields
                }
            },
        },
    }
}


// todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 
export class ControllerNotificationsPage extends Component {
    constructor(props) {
        super(props);

        this.config = settings.get(`notifications[${props.params[0]}]`);
        this.state = {
            type: this.config.type,
        }
    }

    render(props) {
        const formConfig = getFormConfig(this.state.type);
        formConfig.groups.settings.configs.type.onChange = (e) => {
            this.setState({ type: e.currentTarget.value });
            setDefaultConfig(e.currentTarget.value, this.config);
        };
        formConfig.onSave = (values) => {
            settings.set(`notifications[${props.params[0]}]`, values);
            window.location.href='#controllers';
        }
        
        return (
            <Form config={formConfig} selected={this.config} />
        );
    }
}
