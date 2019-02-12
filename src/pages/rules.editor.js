import { h, Component } from 'preact';
import { FlowEditor } from '../lib/floweditor';
import { nodes } from '../lib/node_definitions';
import { getConfigNodes, loadConfig, storeConfig, storeRule } from '../lib/espeasy';

export class RulesEditorPage extends Component {
    constructor(props) {
        super(props);
        this.nodes = nodes;
    }

    render(props) {
        return (
            <div class="editor">
            </div>
        );
    }

    componentDidMount() {
        getConfigNodes().then((out) => {
            out.nodes.forEach(device => nodes.unshift(device));
            const ifElseNode = nodes.find(node => node.type === 'if/else');
            out.vars.forEach(v => ifElseNode.config[0].values.push(v)); 

            this.chart = new FlowEditor(".editor", nodes, (config, rules) => {
                storeConfig(config);
                storeRule(rules);
            });
    
            // loadConfig().then(config => {
            //     this.chart.loadConfig(config);
            // });
        });
    }
}