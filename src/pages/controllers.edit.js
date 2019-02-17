import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';
import { set } from '../lib/helpers';
import { EspEaspP2PComponent } from '../components/espeasy_p2p';

export const protocols = [
    { name: '- Standalone -', value: 0 },
    { name: 'Domoticz HTTP', value: 1 },
    { name: 'Domoticz MQTT', value: 2 },
    { name: 'Nodo Telnet', value: 3 },
    { name: 'ThingSpeak', value: 4 },
    { name: 'OpenHAB MQTT', value: 5 },
    { name: 'PiDome MQTT', value: 6 },
    { name: 'Emoncms', value: 7 },
    { name: 'Generic HTTP', value: 8 },
    { name: 'FHEM HTTP', value: 9 },
    { name: 'Generic UDP', value: 10 },
    { name: 'ESPEasy P2P Networking', value: 13 },
    { name: 'Email', value: 25 },
];

const baseFields = { 
    
    dns: { name: 'Locate Controller', type: 'select', options: [{ value: 0, name: 'Use IP Address'}, { value: 1, name: 'Use Hostname' }] },
    IP: { name: 'IP', type: 'ip' },
    hostname: { name: 'Hostname', type: 'string' },
    port: { name: 'Port', type: 'number' },
    minimal_time_between: { name: 'Minimum Send Interval', type: 'number' },
    max_queue_depth: { name: 'Max Queue Depth', type: 'number' },
    max_retry: { name: 'Max Retries', type: 'number' },
    delete_oldest: { name: 'Full Queue Action', type: 'select', options: [{ value: 0, name: 'Ignore New'}, { value: 1, name: 'Delete Oldest' }] },
    must_check_reply: { name: 'Check Reply', type: 'select', options: [{ value: 0, name: 'Ignore Acknowledgement'}, { value: 1, name: 'Check Acknowledgement' }] },
    client_timeout: { name: 'Client Timeout', type: 'number' },
};

const user = { name: 'Controller User', type: 'string' };
const password = { name: 'Controller Password', type: 'password' };
const subscribe = { name: 'Controller Subscribe', type: 'string' };
const publish = { name: 'Controller Publish', type: 'string' };
const lwtTopicField = { MQTT_lwt_topic: { name: 'Controller LWT topic:', type: 'string' }, lwt_message_connect: { name: 'LWT Connect Message', type: 'string' }, lwt_message_disconnect: { name: 'LWT Disconnect Message', type: 'string' }, };

const baseDefaults = {
    port: 1883,
    minimal_time_between: 100,
    max_queue_depth: 10,
    max_retry: 10,
    client_timeout: 1000,
}
const getDefaults = {
    1: () => ({ // Domoticz HTTP
        port: 8080,
    }), 2: () => ({ // Domoticz MQTT
        subscribe: 'domoticz/out',
        public: 'domoticz/in'
    }), 3: () => ({ // Nodo Telnet
        port: 23,
    }), 4: () => ({ // ThingSpeak
        port: 80,
    }), 5: () => ({ // OpenHAB MQTT
        subscribe: '/%sysname%/#',
        publish: '/%sysname%/%tskname%/%valname%',
    }), 6: () => ({ // PiDome MQTT
        subscribe: '/Home/#',
        publish: '/hooks/devices/%id%/SensorData/%valname%',
    }), 7: () => ({ // Emoncms
        port: 80,
    }), 8: () => ({ // Generic HTTP
        port: 80,
        publish: 'demo.php?name=%sysname%&task=%tskname%&valuename=%valname%&value=%value%',
    }), 9: () => ({ // FHEM HTTP
        port: 8383,
    }), 10: () => ({ // Generic UDP
        port: 514,
        publish: '%sysname%_%tskname%_%valname%=%value%',
    }), 13: () => ({ // EspEasy P2P
        port: 65501,
        Custom: 1
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
    let additionalGroups = {};
    switch (Number(type)) {
        case 2: // Domoticz MQTT
        case 5: // OpenHAB MQTT
            additionalFields = { ...baseFields, user, password, subscribe, publish, ...lwtTopicField };
            break;
        case 6: // 'PiDome MQTT'
            additionalFields = { ...baseFields, subscribe, publish, ...lwtTopicField };
            break;
        case 3: //'Nodo Telnet'
        case 7: //'Emoncms':
            additionalFields = { ...baseFields, password };
            break;
        case 8: // 'Generic HTTP'
            additionalFields = { ...baseFields, user, password, subscribe, publish };
            break;
        case 1: // Domoticz HTTP
        case 9: // 'FHEM HTTP'
            additionalFields = { ...baseFields, user, password };
            break;
        case 10: //'Generic UDP': 
            additionalFields = { ...baseFields, subscribe, publish };
            break;
        case 13: //'ESPEasy P2P Networking':
            additionalGroups = {
                global: {
                    name: 'Global Settings',
                    configs: {
                        port: { name: 'UDP Port', type: 'number', var: 'ROOT.config.espnetwork.port' }
                    }
                },
                nodes: {
                    name: 'Connected Nodes',
                    configs: {
                        nodes: { type: 'custom', component: EspEaspP2PComponent}
                    }
                } 
            }
            break;
        case 0:
        default:
            additionalFields = { ...baseFields };
    }
    
    return {
        groups: {
            settings: {
                name: 'Controller Settings',
                configs: {
                    protocol: { name: 'Protocol', type: 'select', var: 'protocol', options: protocols },
                    enabled: { name: 'Enabled', type: 'checkbox', var: 'enabled' },
                    ...additionalFields
                }
            },
            ...additionalGroups
        },
    }
}


// todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 
export class ControllerEditPage extends Component {
    constructor(props) {
        super(props);

        this.config = settings.get(`controllers[${props.params[0]}]`);
        this.state = {
            protocol: this.config.protocol,
        }
    }

    render(props) {
        const formConfig = getFormConfig(this.state.protocol);
        formConfig.groups.settings.configs.protocol.onChange = (e) => {
            this.setState({ protocol: e.currentTarget.value });
            setDefaultConfig(e.currentTarget.value, this.config);
        };
        
        return (
            <Form config={formConfig} selected={this.config} />
        );
    }
}
