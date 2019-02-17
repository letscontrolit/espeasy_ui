import { h, Component } from 'preact';
import { loader } from '../lib/loader';


export class RebootPage extends Component {
    render(props) {
        return (
            <div>ESPEasy is rebooting ... please wait a while, this page will auto refresh.</div>
        );
    }

    componentDidMount() {
        loader.show();
        fetch('/?cmd=reboot').then(() => {
            setTimeout(() => {
                loader.hide();
                window.location.hash = '#devices';
                window.location.reload();
            }, 5000)
        })
    }
}