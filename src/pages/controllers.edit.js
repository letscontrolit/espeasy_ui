import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';

const protocols = [
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
    enabled: { name: 'Enabled', type: 'checkbox' },
    dns: { name: 'Locate Controller', type: 'select', options: [{ value: 0, name: 'Use IP Address'}, { value: 1, name: 'Use Hostname' }] },
    IP: { name: 'IP', type: 'string' },
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

const getFormConfig = (type) => {
    let additionalFields = {};
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
        case 0:
        case 13: //'ESPEasy P2P Networking':
            break;
        default:
            additionalFields = { ...baseFields };
    }
    
    return {
        groups: {
            settings: {
                name: 'Controller Settings',
                configs: {
                    protocol: { name: 'Protocol', type: 'select', options: protocols },
                    ...additionalFields
                }
            },
        },
    }
}

// todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 
export class ControllerEditPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            protocol: 0,
        }
    }

    render(props) {
        const formConfig = getFormConfig(this.state.protocol);
        formConfig.groups.settings.configs.protocol.onChange = (e) => {
            this.setState({ protocol: e.currentTarget.value });
            console.log(e.currentTarget.value);
        };
        const config = settings.get('controllers[0]');
        return (
            <Form config={formConfig} selected={config} />
        );
    }
}
