import { h, Component } from 'preact';
import { settings } from '../lib/settings';
import { devices } from '../devices';

export class DevicesPage extends Component {
    constructor(props) {
        super(props);

        this.handleEnableToggle = (e) => {
            settings.set(e.currentTarget.dataset.prop, e.currentTarget.checked ? 1 : 0);
        }
    }
    render(props) {
        const tasks = settings.get('tasks');
        if (!tasks) return;
        return (
            <div>
            {tasks.map((task, i) => {
                const editUrl = `#devices/edit/${i}`;
                const device = devices.find(d => d.value === task.device);
                const deviceType = device ? device.name : '--unknown--';
                const enabledProp = `tasks[${i}].enabled`;
                return (
                    <div class="device">
                        <span class="info">
                             {i+1}: <input type="checkbox" defaultChecked={task.enabled} data-prop={enabledProp} onChange={this.handleEnableToggle}></input>
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