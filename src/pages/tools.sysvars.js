import { h, Component } from 'preact';

export class SysVarsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { device: props.params[0], vars: {} };


        this.saveForm = () => {
            storeFile(this.file.files[0]);
        }

        this.deleteFile = e => {
            const fileName = e.currentTarget.dataset.name;
            deleteFile(fileName).then(() => (this.fetch()));
        }
    }

    fetch() {
        fetch(`/sysinfo_json`).then(response => response.json()).then(vars => {
            this.setState({ vars });
        });
    }

    render(props) {
        return (
            <form class="pure-form pure-form-aligned">
            {
                Object.keys(this.state.vars).map(v => {
                    const value = this.state.vars[v];
                    return (
                        <fieldset>
                        <label>{v}</label>
                        {
                            Object.keys(value).map((v1, i) => {
                                const value1 = value[v1];
                                return (
                                    <div class="pure-control-group">
                                        <label class="pure-checkbox">${vi}</label>
                                        <input readOnly={true} type="text" value={value1} />
                                    </div>
                                )
                            })
                        }
                        </fieldset>
                    )
                    
        
                })
            }
            </form>
        )
    }

    componentDidMount() {
        this.fetch();
    }
}