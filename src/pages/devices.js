import { h, Component } from 'preact';
import { settings } from '../lib/settings';
import { devices } from './devices.edit';

export class DevicesPage extends Component {
    render(props) {
        const tasks = settings.get('tasks');
        if (!tasks) return;
        const devs = tasks.map(task => {
            const vars = []; //task.settings.values.map(val => val);
            return {
                nr: task.settings.index,
                name: task.settings.name,
                type: devices.find(d => d.value === task.device).name,
                vars
            };
        });
        // const devices = tasks.map(task => {
        //     return {
        //         nr: task.settings.index,
        //         name: task.settings.name,
        //         type: 'DH11',
        //         vars: task.settings.values
        //     }
        // });
        return (
            <div>
            {devs.map(device => {
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
            })}
            </div>
        );
    }
}