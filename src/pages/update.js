import { h, Component } from 'preact';

export class LoadPage extends Component {
    constructor(props) {
        super(props);

        this.saveForm = () => {
            const data = new FormData()
            data.append('file', this.file.files[0])
            data.append('user', 'hubot')
    
            fetch('/update', {
                method: 'POST',
                body: data
            }).then(() => {
    
            });
        }
    }

    render(props) {
        return (<form class="pure-form pure-form-aligned">
                <div class="pure-control-group">
                    <label for="file" class="pure-checkbox">
                        Firmware:
                    </label>
                    <input id="file" type="file" ref={ref => this.file = ref} />
                </div>
            <div>
                <button type="button" onClick={this.saveForm}>upload</button>
            </div>
        </form>)
    }
}