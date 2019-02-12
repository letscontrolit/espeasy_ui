import { h, Component } from 'preact';

export class ToolsPage extends Component {
    constructor(props) {
        super(props);

        this.history = '';

        this.sendCommand = (e) => {
            fetch(`/control?cmd=${this.cmd.value}`).then(response => response.text()).then(response => {
                this.cmdOutput.value = response;
            });
        }
    }

    fetch() {
        fetch('/logjson').then(response => response.json()).then(response => {
            response.Log.Entries.map(log => {
                this.history += `<div class="log_level${log.level}"><span class="date">${(new Date(log.timestamp).toLocaleTimeString())}</span><span class="value">${log.text}</span></div>`;
                this.log.innerHTML = this.history;
                if (true) {
                    this.log.scrollTop = this.log.scrollHeight;
                }
            })
        });
    }

    render(props) {
        return (
            <div>
                <div style="width: 100%; height: 200px; overflow-y: scroll;" ref={ref => this.log = ref}>loading logs ...</div>
                <div>Command: <input type="text" ref={ref => this.cmd = ref}/><button type="button" onClick={this.sendCommand}>send</button></div>
                <textarea style="width: 100%; height: 200px" ref={ref => this.cmdOutput = ref}></textarea>
            </div>
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.fetch();
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) clearInterval(this.interval);
    }
}