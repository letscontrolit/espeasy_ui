import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';
import { loader } from '../lib/loader';

const formConfig = {
    groups: {
        wifi: {
            name: 'WiFi',
            configs: {
                ssid: { name: 'SSID', type: 'select', options: [], var: 'security[0].WifiSSID' },
                passwd: { name: 'Password', type: 'password', var: 'security[0].WifiKey' },
            }
        },
    },
}

export class SetupPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devices: [],
        }
        loader.show();

        this.save = () => {
            loader.show();

            const data = new FormData();
            data.append('ssid', this.config.security[0].WifiSSID);
            data.append('pass', this.config.security[0].WifiKey);
            fetch('/setup', {
                method: 'POST',
                data
            }).then(() => {
                setTimeout(() => {
                    loader.hide();
                    window.location.href = '/';
                }, 5000);
            })
        }
    }

    render(props) {
        formConfig.groups.wifi.configs.ssid.options = this.state.devices.map(device => ({ name: device.ssid, value: device.ssd }));
        const config = settings.get('config');
        return (
            <div>
                <Form config={formConfig} selected={config} />
                <button type="button" onClick={this.save}>CONTINUE</button>
            </div>
        );
    }

    componentDidMount() {
        fetch('/wifiscanner').then(r => r.json()).then(r => {
            this.setState({ devices: r });
            loader.hide();
        });
    }
}