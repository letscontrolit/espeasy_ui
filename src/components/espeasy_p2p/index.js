import { h, Component } from 'preact';

export class EspEaspP2PComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { nodes: [] }

        this.refresh = () => {
            fetch('/node_list_json').then(res => res.json()).then((nodes) => {
                this.setState({ nodes })
            });
            
        }
    }

    render(props) {
        return (
            <ul>
                {this.state.nodes.map(node => {
                    return (<li>Unit {node.first}: {node.name} [{node.ip}]</li>);
                })}
                <button type="button" onClick={this.refresh}>REFRESH</button>
            </ul>
        )
    }

    componentDidMount() {
        this.refresh();
    }
}