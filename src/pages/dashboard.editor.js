import { h, Component } from 'preact';
import { FlowEditor } from '../lib/floweditor';
import { nodes } from '../lib/dashboard_node_definitions';
import { getDashboardConfigNodes, loadDashboardConfig, storeDashboardConfig, storeRule } from '../lib/espeasy';

export class DashboardEditorPage extends Component {
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
        getDashboardConfigNodes().then((out) => {
            out.nodes.forEach(device => nodes.unshift(device));
            const varNode = nodes.find(node => node.type === 'VARIABLE');
            const meterNode = nodes.find(node => node.type === 'METER');
            out.vars.forEach(v => {
                varNode.config[0].values.push(v); 
                meterNode.config[0].values.push(v); 
            });

            this.chart = new FlowEditor(".editor", nodes, { 
                gridSize: 10,
                onSave: (config, rules) => {
                    storeDashboardConfig(config);
                }
            });
    
            loadDashboardConfig().then(config => {
                this.chart.loadConfig(config);
            });
        });
    }
}