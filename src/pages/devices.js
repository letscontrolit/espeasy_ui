import { h, Component } from 'preact';
import { settings } from '../lib/settings';
import { devices } from '../devices';

export class DevicesPage extends Component {
    render(props) {
        const tasks = settings.get('tasks');
        if (!tasks) return;
        return (
            <div>
            {tasks.map((task, i) => {
                const editUrl = `#devices/edit/${i}`;
                const device = devices.find(d => d.value === task.device);
                const deviceType = device ? device.name : '--unknown--';
                return (
                    <div class="device">
                        <span class="info">
                             {i+1}: {(task.enabled) ? (<b>&#x2713;</b>) : (<b>&#x2717;</b>)}
                             &nbsp;&nbsp;{task.settings.name} [{deviceType}] {task.gpio1!==255?`GPIO:${task.gpio1}`:''}
                            <a href={editUrl}>edit</a>
                        </span>
                        <span class="vars">
                            {/* {device.settings.values.map(v => {
                                return (<span>{v.name}: {v.value}</span>);
                            })} */}
                        </span>
                    </div>
                    )
            })}
            </div>
        );
    }
}