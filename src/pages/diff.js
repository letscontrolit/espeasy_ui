import { h, Component } from 'preact';
import { settings } from '../lib/settings';
import { saveConfig } from '../conf/config.dat';
import { storeFile } from '../lib/espeasy';


export class DiffPage extends Component {
    constructor(props) {
        super(props);

        this.diff = settings.diff();

        this.applyChanges = () => {
            this.diff.map(d => {
                const input = this.form.elements[d.path];
                if (!input.checked) {
                    settings.set(input.name, d.val1);
                }
            });
            settings.apply();
            const data = saveConfig(false);
            storeFile('config.dat', data);
            window.location.href='#devices';
        };
    }
    

    render(props) {
        return (
            <form ref={ref => this.form = ref}>
                {this.diff.map(change => {
                    return (
                        <div>
                            <b>{change.path}</b>: before: <b>{JSON.stringify(change.val1)}</b> now:<b>{JSON.stringify(change.val2)}</b> <input name={change.path} type='checkbox' defaultChecked={true} />
                        </div>
                    )
                })}
                <button type="button" onClick={this.applyChanges}>APPLY</button>
            </form>
        );
    }
}