import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';

const logLevelOptions = [
    { name: 'None', value: 0 },
    { name: 'Error', value: 1 },
    { name: 'Info', value: 2 },
    { name: 'Debug', value: 3 },
    { name: 'Debug More', value: 4 },
    { name: 'Debug Dev', value: 9 },
];

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
                retain_flag: { name: 'MQTT Retain Msg', type: 'checkbox' },
                interval: { name: 'Message Interval', type: 'number' },
                useunitname: { name: 'MQTT use unit name as ClientId', type: 'checkbox' },
                changeclientid: { name: 'MQTT change ClientId at reconnect', type: 'checkbox' },
            }
        },
        ntp: {
            name: 'NTP Settings',
            configs: {
                enabled: { name: 'Use NTP', type: 'checkbox' },
                host: { name: 'NTP Hostname', type: 'string' },
            }
        },
        dst: {
            name: 'DST Settings',
            configs: {
                enabled: { name: 'Use DST', type: 'checkbox' },
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
                syslog_ip: { name: 'Syslog IP', type: 'ip' },
                syslog_level: { name: 'Syslog Level', type: 'select', options: logLevelOptions },
                syslog_facility: { name: 'Syslog Level', type: 'select', options: [
                    { name: 'Kernel', value: 0 },
                    { name: 'User', value: 1 },
                    { name: 'Daemon', value: 3 },
                    { name: 'Message', value: 5 },
                    { name: 'Local0', value: 16 },
                    { name: 'Local1', value: 17 },
                    { name: 'Local2', value: 18 },
                    { name: 'Local3', value: 19 },
                    { name: 'Local4', value: 20 },
                    { name: 'Local5', value: 21 },
                    { name: 'Local6', value: 22 },
                    { name: 'Local7', value: 23 },
                ] },
                serial_level: { name: 'Serial Level', type: 'select', options: logLevelOptions },
                web_level: { name: 'Web Level', type: 'select', options: logLevelOptions },
            }
        },
        serial: {
            name: 'Serial Settings',
            configs: {
                enabled: { name: 'Enable Serial', type: 'checkbox' },
                baudrate: { name: 'Baud Rate', type: 'number' },
            }
        },
        experimental: {
            name: 'Experimental Settings',
            configs: {
                ip_octet: { name: 'Fixed IP Octet', type: 'number' },
                WDI2CAddress: { name: 'WD I2C Address', type: 'number' },
                ssdp: { name: 'Use SSDP', type: 'checkbox', var: 'ssdp.enabled' },
                ConnectionFailuresThreshold: { name: 'Connection Failiure Treshold', type: 'number' },
                WireClockStretchLimit: { name: 'I2C ClockStretchLimit', type: 'number' },
            }
        }
    },
}

export class ConfigAdvancedPage extends Component {
    render(props) {
        formConfig.onSave = (values) => {
            settings.set('config', values);
            window.location.href='#devices';
        }
        return (
            <Form config={formConfig} selected={settings.get('config')} />
        );
    }
}