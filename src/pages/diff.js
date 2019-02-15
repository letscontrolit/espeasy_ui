import { h, Component } from 'preact';
import { settings } from '../lib/settings';
import { saveConfig } from '../conf/config.dat';
import { storeFile } from '../lib/espeasy';


export class DiffPage extends Component {
    constructor(props) {
        super(props);

        this.diff = settings.diff();
        this.stage = 0;

        this.applyChanges = () => {
            if (this.stage === 0) {
                this.diff.map(d => {
                    const input = this.form.elements[d.path];
                    if (!input.checked) {
                        settings.set(input.name, d.val1);
                    }
                });
                settings.apply();
                this.diff = settings.diff();
                this.data = saveConfig(false);
                
                this.bytediff = Array.from(new Uint8Array(this.data));
                this.bytediff = this.bytediff.map((byte, i) => {
                    if (byte !== settings.binary[i]) {
                        return `<b style='color:red'>${byte.toString(16)}</b>`;
                    } else return `${byte.toString(16)}`;
                });
                this.bytediff = this.bytediff.join(' ');
                this.stage = 1;
                return;
            }
            
            storeFile('config.dat', this.data);
            this.stage = 0;
            window.location.href='#devices';
        };
    }
    

    render(props) {
        if (this.bytediff) {
            return (<div><div dangerouslySetInnerHTML={{ __html: this.bytediff}}></div><button type="button" onClick={this.applyChanges}>APPLY</button></div>)
        }
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