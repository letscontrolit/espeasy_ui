import { h, Component } from 'preact';
import { storeFile } from '../lib/espeasy';

export class LoadPage extends Component {
    constructor(props) {
        super(props);

        this.saveForm = () => {
            storeFile(this.file.files[0]);
        }
    }

    render(props) {
        return (<form class="pure-form pure-form-aligned">
                <div class="pure-control-group">
                    <label for="file" class="pure-checkbox">
                        File:
                    </label>
                    <input id="file" type="file" ref={ref => this.file = ref} />
                    <button type="button" onClick={this.saveForm}>upload</button>
                </div>
        </form>)
    }
}