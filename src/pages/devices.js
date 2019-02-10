import { h, Component } from 'preact';

const devices = [
    { nr: 1, name: 'Senzor', type: 'DH11', vars: [{ name: 'Temperature', formula: '', value: 21 }, { name: 'Humidity', formula: '', value: 65 }] },
    { nr: 1, name: 'Humidity', type: 'Linear Regulator', vars: [{ name: 'Output', formula: '', value: 1 }] }
]

export class DevicesPage extends Component {
    render(props) {
        return (
            <div>{devices.map(device => {
                const editUrl = `#devices/edit/${device.nr}`;
                return (
                    <div class="device">
                        <span class="info">
                            {(device.enabled) ? (<b>X</b>) : (<b>o</b>)}
                            {device.nr}: {device.name} TYPE:{device.type} GPIO.{device.gpio} PORT:{device.port}
                            <a href={editUrl}>edit</a>
                        </span>
                        <span class="vars">
                            {device.vars.map(v => {
                                return (<span>{v.name}: {v.value}</span>);
                            })}
                        </span>
                    </div>
                    )
            })}</div>
        );
    }
}