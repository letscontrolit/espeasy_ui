import { h, Component } from 'preact';


export class RebootPage extends Component {
    render(props) {
        return (
            <div>ESPEasy is rebooting ... please wait a while, this page will auto refresh.</div>
        );
    }

    componentDidMount() {
        fetch('/reboot').then(() => {
            setTimeout(() => {
                window.location.hash = '#devices';
            }, 5000)
        })
    }
}