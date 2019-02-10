import { h, Component } from 'preact';
import { settings } from '../lib/settings';
import { protocols } from './controllers.edit';

export class ControllersPage extends Component {
    render(props) {
        const controllers = settings.get('controllers');
        const notifications = settings.get('notifications');
        return (
            <div> <h3>Controllers</h3>
            <div>{controllers.map((c, i) => {
                const editUrl = `#controllers/edit/${i}`;
                return (
                    <div class="device">
                        <span class="info">
                            {(c.enabled) ? (<b>X</b>) : (<b>o</b>)}
                            {i+1}: {protocols.find(p => p.value === c.protocol).name} PORT:{c.settings.port} HOST:{c.settings.host}
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
                    </div>
                    )
            })}</div>
            </div>
        );
    }
}