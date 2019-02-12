import { h, Component } from 'preact';
import { settings } from '../lib/settings';


export class DiffPage extends Component {
    applyChanges() {
        settings.apply();
        window.location.href='#devices';
    }

    render(props) {
        const diff = settings.diff();
        console.log(diff);
        return (
            <form ref={ref => this.form = ref}>
                {diff.map(change => {
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