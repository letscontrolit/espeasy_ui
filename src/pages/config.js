import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';

const formConfig = {
    onSave: (vals) => { console.log(vals); },
    groups: {
        general: {
            name: 'General',
            configs: {
                unitname: { name: 'Unit Name', type: 'string' },
                unitnr: { name: 'Unit Number', type: 'number' },
                appendunit: { name: 'Append Unit Name to Hostname', type: 'checkbox' },
                password: { name: 'Admin Password', type: 'password', var: 'security[0].password' },
            }
        },
        wifi: {
            name: 'WiFi',
            configs: {
                ssid: { name: 'SSID', type: 'string', var: 'security[0].WifiSSID' },
                passwd: { name: 'Password', type: 'password', var: 'security[0].WifiKey' },
                fallbackssid: { name: 'Fallback SSID', type: 'string', var: 'security[0].WifiSSID2' },
                fallbackpasswd: { name: 'Fallback Password', type: 'password', var: 'security[0].WifiKey2' },
                wpaapmode: { name: 'WPA AP Mode Key:', type: 'string', var: 'security[0].WifiAPKey' },
            }
        },
        clientIP: {
            name: 'Client IP Filtering',
            configs: {
                blocklevel: { name: 'IP Block Level', type: 'select', options: ['Allow All', 'Allow Local Subnet', 'Allow IP Range'] },
                lowerrange: { name: 'Access IP lower range', type: 'string' },
                upperrange: { name: 'Access IP upper range', type: 'string' },
            }
        },
        IP: {
            name: 'IP Settings',
            configs: {
                ip: { name: 'IP', type: 'string' },
                gw: { name: 'Gateway', type: 'string' },
                subnet: { name: 'Subnet', type: 'string' },
                dns: { name: 'DNS', type: 'string' },
            }
        },
        sleep: {
            name: 'Sleep Mode',
            configs: {
                awaketime: { name: 'Sleep awake time', type: 'string' },
                sleeptime: { name: 'Sleep time', type: 'string' },
                sleeponfailiure: { name: 'Sleep on connection failure', type: 'checkbox' },
            }
        }
    },
}

export class ConfigPage extends Component {
    render(props) {

        const config = settings.get('config');
        return (
            <Form config={formConfig} selected={config} />
        );
    }
}