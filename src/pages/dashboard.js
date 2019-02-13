import { h, Component } from 'preact';
import { nodes } from '../lib/dashboard_node_definitions';
import { getVariables, loadDashboardConfig } from '../lib/espeasy';

export class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: [], vals: []
        }
    }

    render(props) {
        return (
            <div class="editor">
                {this.state.config.map(cfg => {
                    const node = nodes.find(n => n.type === cfg.t);
                    const cssClass = `node-dash node-${node.group}`;
                    const style = `top: ${cfg.c[1]}px; left: ${cfg.c[0]}px;`;
                    const context = {
                        config: cfg.v.map(v => ({ value: v })),
                        vals: this.state.vals,
                    }
                    return (
                        <div class={cssClass} style={style} dangerouslySetInnerHTML={{ __html: node.toHtml.bind(context)()}}></div>
                    )
                })}
            </div>
        );
    }

    componentDidMount() {
        loadDashboardConfig().then(config => {
            this.setState({ config });
        });

        this.interval = setInterval(async () => {
            const variables = await getVariables();
            this.setState({ vals: variables });
        }, 1000);
    }
}