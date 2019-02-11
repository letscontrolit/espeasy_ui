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
                            {i+1}: {(c.enabled) ? (<b>&#x2713;</b>) : (<b>&#x2717;</b>)}
                            &nbsp;&nbsp;[{protocols.find(p => p.value === c.protocol).name}] PORT:{c.settings.port} HOST:{c.settings.host}
                            <a href={editUrl}>edit</a>
                        </span>
                    </div>
                    )
            })}</div>
            <h3>Notifications</h3>
            <div>{notifications.map((n, i) => {
                const editUrl = `#notifications/edit/${i}`;
                return (
                    <div class="device">
                        <span class="info">
                            {i+1}: {(n.enabled) ? (<b>&#x2713;</b>) : (<b>&#x2717;</b>)}
                            &nbsp;&nbsp;[{n.type}] PORT:{n.settings.port} HOST:{n.settings.host}
                            <a href={editUrl}>edit</a>
                        </span>
                    </div>
                    )
            })}</div>
            </div>
        );
    }
}