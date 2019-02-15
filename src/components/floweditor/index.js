import { h, Component } from 'preact';
import { FlowEditor } from '../../lib/floweditor';

export class FlowEditorComponent extends Component {
    render() {
        return (<div class="editor" ref={ref=>this.element = ref} />);
    }

    saveConfig() {
        return this.chart.saveConfig();
    }

    componentDidMount() {
        this.chart = new FlowEditor(this.element, this.props.nodes, { 
            gridSize: this.props.gridSize,
            onSave: (config, rules) => {
                if (this.props.onSave) this.props.onSave(config);
            }
        });
        this.chart.loadConfig(this.props.config);
    }
}