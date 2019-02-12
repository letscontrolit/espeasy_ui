import { h, Component } from 'preact';

const devices = [
    { nr: 1, name: 'Senzor', type: 'DH11', vars: [{ name: 'Temperature', formula: '', value: 21 }, { name: 'Humidity', formula: '', value: 65 }] },
    { nr: 1, name: 'Humidity', type: 'Linear Regulator', vars: [{ name: 'Output', formula: '', value: 1 }] }
]

export class DiscoverPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: []
        }

        this.scani2c = () => {
            fetch('/i2cscanner').then(r => r.json()).then(r => {
                this.setState({ devices: r });
            });
        }

        this.scanwifi = () => {
            fetch('/wifiscanner').then(r => r.json()).then(r => {
                this.setState({ devices: r });
            });
        }
    }

    render(props) {
        return (
            <div>
                <div>
                    <button type="button" onClick={this.scani2c}>Scan I2C</button>
                    <button type="button" onClick={this.scanwifi}>Scan WiFi</button>
                </div>
                <table>{this.state.devices.map(device => {
                    return (
                        <tr class="device">
                            <td class="info">
                                {JSON.stringify(device)}
                            </td>
                        </tr>
                        )
                })}</table>
            </div>
        );
    }
}