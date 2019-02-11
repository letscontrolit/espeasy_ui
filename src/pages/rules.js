import { h, Component } from 'preact';


const rules = [
    { name: 'Rule 1', file: 'rules1.txt', index: 1 },
    { name: 'Rule 2', file: 'rules2.txt', index: 2 },
    { name: 'Rule 3', file: 'rules3.txt', index: 3 },
    { name: 'Rule 4', file: 'rules4.txt', index: 4 },
];

export class RulesPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: rules[0]
        }

        this.selectionChanged = (e) => {
            this.setState({ selected: rules[e.currentTarget.value] });
        }

        this.saveRule = () => {
            const data = new FormData();
            data.append('set', this.state.selected.index);
            data.append('rules', this.text.value);
            fetch('/rules', {
                method: 'POST',
                body: data 
            }).then(res => {
                console.log('succesfully saved');
                console.log(res.text());
            });
        }

        this.fetch();
    }

    render(props) {
        return (
            <div>
                <div><select onChange={this.selectionChanged}>
                    <option value="0">Rule 1</option>
                    <option value="1">Rule 2</option>
                    <option value="2">Rule 3</option>
                    <option value="3">Rule 4</option>
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

    async fetch() {
        const text = await fetch(this.state.selected.file).then(response => response.text());
        this.text.value = text;
    }

    async componentDidUpdate() {
        this.fetch();
    }
}