import { h, Component } from 'preact';
import { fetchProgress } from '../lib/espeasy';
import { loader } from '../lib/loader';

export class UpdatePage extends Component {
    constructor(props) {
        super(props);

        this.state = { progress: 0 }

        this.saveForm = () => {
            loader.show();
            const data = new FormData()
            data.append('file', this.file.files[0])
            data.append('user', 'hubot')
    
            fetchProgress('/update', {
                method: 'POST',
                body: data,
                onProgress: (e) => {
                    const perc = 100 * e.loaded / e.total;
                    this.setState({ progress: perc });
                }
            }).then(() => {
                window.location.href = '#config/reboot';
            });
        }
    }

    render(props) {
        return (
        <form class="pure-form pure-form-aligned">
            <div class="pure-control-group">
                <label for="file" class="pure-checkbox">
                    Firmware:
                </label>
                <input id="file" type="file" ref={ref => this.file = ref} />
                <button type="button" onClick={this.saveForm}>upload</button>
                { (this.state.progress) ? (<span> {Math.round(this.state.progress)}%</span>) : (null) }
            </div>
        </form>
        )
    }
}