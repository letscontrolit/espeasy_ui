import { h, Component } from 'preact';

const controllers = [
    { nr: 1, name: 'Senzor', type: 'DH11', vars: [{ name: 'Temperature', formula: '', value: 21 }, { name: 'Humidity', formula: '', value: 65 }] },
    { nr: 1, name: 'Humidity', type: 'Linear Regulator', vars: [{ name: 'Output', formula: '', value: 1 }] }
];

const notifications = [
    { nr: 1, name: 'Senzor', type: 'DH11', vars: [{ name: 'Temperature', formula: '', value: 21 }, { name: 'Humidity', formula: '', value: 65 }] },
];

export class ControllersPage extends Component {
    render(props) {
        return (
            <div> <h3>Controllers</h3>
            <div>{controllers.map(device => {
                const editUrl = `#controllers/edit/${device.nr}`;
                return (
                    <div class="device">
                        <span class="info">
                            {(device.enabled) ? (<b>X</b>) : (<b>o</b>)}
                            {device.nr}: {device.type} PORT:{device.port} HOST:{device.host}
                        </span>
                        <span class="actions">
                            <a href={editUrl}>edit</a>
                        </span>
                    </div>
                    )
            })}</div>
            <h3>Notifications</h3>
            <div>{notifications.map(device => {
                return (
                    <div class="device">
                        <span class="info">
                            {(device.enabled) ? (<b>X</b>) : (<b>o</b>)}
                            {device.nr}: {device.name} TYPE:{device.type} GPIO.{device.gpio} PORT:{device.port}
                        </span>
                        <span class="vars">
                            {device.vars.map(v => {
                                return (<span>{v.name}: {v.value}</span>);
                            })}
                        </span>
                    </div>
                    )
            })}</div>
            </div>
        );
    }
}