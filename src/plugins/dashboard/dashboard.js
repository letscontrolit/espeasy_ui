import { h, Component } from 'preact';
import { nodes } from './dashboard_node_definitions';
import { getVariables, loadDashboardConfig } from './api';

export class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.shutdown = false;
        this.state = {
            pages: [], vals: [], tab: 0
        }

        this.selectTab = (e) => {
            const tab = parseInt(e.currentTarget.dataset.tab);
            this.setState({ tab: tab });
        }
    }

    render(props) {
        return (
            <div>
                <div class="dash_menu">
                    <ul ref={ref => this.menu = ref}>
                        {this.state.pages.map((page, i) => {
                            return (<li><a onClick={this.selectTab} data-tab={i}>{page.title}</a></li>)
                        })}
                    </ul>
                </div>
                <ul class="tabs">
                    {this.state.pages.map((page, i) => {
                        const classname = `editor ${i === this.state.tab ? 'active' : ''}`;
                        return (
                            <li class={classname}>
                                {page.nodes.map(cfg => {
                                    const node = nodes.find(n => n.type === cfg.t);
                                    const cssClass = `node-dash node-${node.group}`;
                                    const style = `top: ${cfg.c[1]}px; left: ${cfg.c[0]}px;`;
                                    const context = {
                                        config: cfg.v.map(v => ({ value: v })),
                                    }
                                    return (
                                        <div class={cssClass} style={style} dangerouslySetInnerHTML={{ __html: node.toHtml.bind(context)(this.state.vals)}}></div>
                                    )
                                })}
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        );
    }

    componentDidMount() {
        loadDashboardConfig().then(config => {
            this.setState({ pages: config });
        });

        const timeout = async () => {
            const variables = await getVariables();
            this.setState({ vals: variables });
            if (!this.shutdown) setTimeout(timeout, 1000);
        };

        timeout();
    }

    componentWillUnmount() {
        this.shutdown = true;
    }
}