import { h, Component } from 'preact';


export class RulesPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected:''
        }

        this.selectionChanged = (e) => {
            this.setState({ selected: e.currentTarget.value });
        }
    }

    saveRule() {

    }

    render(props) {
        return (
            <div>
                <div><select onChange={this.selectionChanged}>
                    <option value="Rules1.txt">Rule 1</option>
                    <option value="Rules2.txt">Rule 2</option>
                    <option value="Rules3.txt">Rule 3</option>
                    <option value="Rules4.txt">Rule 4</option>
                </select></div>
                <form>
                    <textarea style="width: 100%; height: 400px" ref={ref => this.text = ref}>
                    </textarea>
                    <div>
                        <button type="button" onClick={this.saveRule}>Save</button>
                    </div>
                </form>
            </div>
        );
    }

    componentDidMount() {
        this.setState({ selected: 'Rules1.txt' });
    }

    async componentDidUpdate() {
        const text = await fetch(this.state.selected).then(response => response.text());
        this.text.value = text;
    }
}