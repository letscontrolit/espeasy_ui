import { h, Component } from 'preact';
import { Form } from '../components/form';

const formConfig = {
    onSave: (vals) => { console.log(vals); },
    groups: {
        rules: {
            name: 'Rules Settings',
            configs: {
                enabled: { name: 'Enabled', type: 'checkbox' },
                oldengine: { name: 'Old Engine', type: 'checkbox' },
            }
        },
        mqtt: {
            name: 'Controller Settings',
            configs: {
                retainmsg: { name: 'MQTT Retain Msg', type: 'checkbox' },
                interval: { name: 'Message Interval', type: 'number' },
                useunitname: { name: 'MQTT use unit name as ClientId', type: 'checkbox' },
                changeclientid: { name: 'MQTT change ClientId at reconnect', type: 'checkbox' },
            }
        },
        ntp: {
            name: 'NTP Settings',
            configs: {
                enabled: { name: 'Use NTP', type: 'checkbox' },
                hostname: { name: 'NTP Hostname', type: 'string' },
            }
        },
        dst: {
            name: 'DST Settings',
            configs: {
                enabled: { name: 'Use NTP', type: 'checkbox' },
            }
        },
        location: {
            name: 'Location Settings',
            configs: {
                long: { name: 'Longitude', type: 'number' },
                lat: { name: 'Latitude', type: 'number' },
            }
        },
        log: {
            name: 'Log Settings',
            configs: {
            }
        },
        serial: {
            name: 'Serial Settings',
            configs: {
            }
        },
        experimental: {
            name: 'Experimental Settings',
            configs: {
            }
        }
    },
}

const config = {}

export class ConfigAdvancedPage extends Component {
    render(props) {
        return (
            <Form config={formConfig} selected={config} />
        );
    }
}