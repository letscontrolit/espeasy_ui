import { h, Component } from 'preact';

export class ToolsPage extends Component {
    constructor(props) {
        super(props);

        this.sendCommand = (e) => {
            fetch(`/control?cmd=${this.cmd.value}`).then(response => response.text()).then(response => {
                this.cmdOutput.value = response;
            });
        }
    }

    fetch() {
        fetch('/logjson').then(response => response.json()).then(response => {
            response.Log.Entries.map(log => {
                this.log.innerText += `${JSON.stringify(log)}\n`;
                if (true) {
                    this.log.scrollTop = this.log.scollHeight;
                }
            })
        });
    }

    render(props) {
        return (
            <div>
                <div style="width: 100%; height: 200px; overflow-y: scroll;" ref={ref => this.log = ref}>loading logs ...</div>
                <div>Command: <input type="text" ref={ref => this.cmd = ref}/><button type="button" onClick={this.sendCommand}>send</button></div>
                <input type="textarea" style="width: 100%; height: 100px" ref={ref => this.cmdOutput = ref}></input>
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