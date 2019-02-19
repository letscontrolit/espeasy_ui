import { h, Component } from 'preact';
import { settings } from '../lib/settings';
import { devices } from '../devices';
import { loadDevices } from '../lib/espeasy';

export class DevicesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devices: [],
        }

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
                const deviceLive = this.state.devices.find(device => device.TaskNumber == i);
                const vals = deviceLive ? deviceLive.TaskValues : [];
                return (
                    <div class="device">
                        <div class="info">
                             {i+1}: <input type="checkbox" defaultChecked={task.enabled} data-prop={enabledProp} onChange={this.handleEnableToggle}></input>
                             &nbsp;&nbsp;{task.settings.name} [{deviceType}] {task.gpio1!==255?`GPIO:${task.gpio1}`:''}
                            <a href={editUrl}>edit</a>
                        </div>
                        <div class="vars">
                         {vals.map(v => {
                                return (<span>{v.Name}: {v.Value} </span>);
                            })}
                        </div>
                    </div>
                    )
            })}
            </div>
        );
    }

    fetchDevices() {
        loadDevices().then(devices => {
            this.setState({ devices });
            if (!this.shutdown)
                setTimeout(() => {
                    this.fetchDevices();
                }, 1000);
        });
        
    }

    componentDidMount() {
        this.fetchDevices();
    }

    componentWillMount() {
        this.shutdown = true;
    }
}