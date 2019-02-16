import { h, Component } from 'preact';
import { FlowEditor } from '../../lib/floweditor';
import { nodes } from './dashboard_node_definitions';
import { loadDashboardConfig, storeDashboardConfig, getVariables } from './api';

export class DashboardEditorPage extends Component {
    constructor(props) {
        super(props);
        this.pages = []
        this.nodes = nodes;

        this.saveConfig = () => {
            const config = this.pages.map(page => {
                return { title: page.title, nodes: page.chart.saveConfig() };
            });
            storeDashboardConfig(JSON.stringify(config));
        }

        this.addPage = ({ title, nodes = []} = {}) => {
            if (!title) title = prompt('enter page name', 'new');
            this.pages.push({
                title, nodes, chart: this.createPage({ title, nodes })
            });
            this.selectTab(null, this.pages.length - 1);
        }

        this.selectTab = (e, tabIndex) => {
            const tab = tabIndex != null ? tabIndex : e.currentTarget.dataset.tab;
            const elements = document.querySelectorAll('ul.tabs li');
            elements.forEach((element, i) => {
                if (i === parseInt(tab)) element.classList.add('active');
                else element.classList.remove('active');
            });
        }
    }

    createPage(page) {
        // add menu
        const menu = document.createElement('li');
        menu.innerText = page.title;
        menu.dataset.tab = this.pages.length;
        menu.onclick = this.selectTab; 
        this.menu.appendChild(menu);

        // add tab
        const el = document.createElement('li');
        const chart = this.renderChart(el, page.nodes)
        this.tabs.appendChild(el);
        return chart;
    }

    renderChart(domNode, elements) {
        const chart = new FlowEditor(domNode, nodes, { 
            gridSize: 10, debug: false
        });
        chart.loadConfig(elements);
        return chart;
    }

    render(props) {
        this.editors = [];
        return (
            <div>
                <div class="dash_menu">
                    <ul>
                        <div style="display: inline" ref={ref => this.menu = ref}></div>
                        <li><a onClick={this.addPage}>add page</a></li>
                    </ul>
                    
                </div>
                <div class="dash_menu_right">
                    <div><a onClick={this.saveConfig}>SAVE</a></div>
                </div>
                <ul class="tabs" ref={ref => this.tabs = ref}></ul>
            </div>
            
        );
    }

    componentDidMount() {
        getVariables().then((out) => {
            const varNode = nodes.find(node => node.type === 'VARIABLE');
            const meterNode = nodes.find(node => node.type === 'METER');
            const imageNode = nodes.find(node => node.type === 'IMAGE_METER');
            Object.keys(out).forEach(v => {
                varNode.config[0].values.push(v); 
                meterNode.config[0].values.push(v); 
                imageNode.config[0].values.push(v); 
            });
    
            loadDashboardConfig().then(configs => {
                configs.forEach(page => {
                    this.addPage(page);
                });
                this.selectTab(null, 0);
            });
        });
    }
}