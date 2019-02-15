import { h, render, Component } from 'preact';
import miniToastr from 'mini-toastr';
import { Menu } from './components/menu';
import { Page } from './components/page';
import { ConfigPage, DevicesPage, DevicesEditPage, ControllersPage, ControllerEditPage, ConfigAdvancedPage, ConfigHardwarePage, RebootPage, LoadPage, RulesPage, UpdatePage, ToolsPage, FSPage, FactoryResetPage, DiscoverPage, DiffPage, RulesEditorPage } from './pages';
import { loadConfig, saveConfig } from './conf/config.dat';
import { settings } from './lib/settings';
import { DashboardPage } from './pages/dashboard';
import { DashboardEditorPage } from './pages/dashboard.editor';
import { loader } from './lib/loader';


miniToastr.init({})

const menus = [
    { title: 'Dashboard', pagetitle: '', href: 'dashboard', class: 'full', component: DashboardPage, children: [
        { title: 'Editor', pagetitle: '', href: 'dashboard/editor', class: 'full', component: DashboardEditorPage },
    ] },
    { title: 'Devices', href: 'devices', component: DevicesPage, children: [] },
    { title: 'Controllers', href: 'controllers', component: ControllersPage, children: [] },
    { title: 'Automation', href: 'rules', component: RulesEditorPage, class: 'full', children: [] },
    { title: 'Config', href: 'config', component: ConfigPage, children: [
        { title: 'Hardware', href: 'config/hardware', component: ConfigHardwarePage },
        { title: 'Advanced', href: 'config/advanced', component: ConfigAdvancedPage },
        { title: 'Rules', href: 'config/rules', component: RulesPage },
        { title: 'Save', href: 'config/save', action: saveConfig },
        { title: 'Load', href: 'config/load', component: LoadPage },
        { title: 'Reboot', href: 'config/reboot', component: RebootPage },
        { title: 'Factory Reset', href: 'config/factory', component: FactoryResetPage },
    ] },
    { title: 'Tools', href: 'tools', component: ToolsPage, children: [
        { title: 'Discover', href: 'tools/discover', component: DiscoverPage },
        { title: 'Update', href: 'tools/update', component: UpdatePage },
        { title: 'Filesystem', href: 'tools/fs', component: FSPage },
    ] },
];

let routes = [
    { title: 'Edit Controller', href:'controllers/edit', component: ControllerEditPage },
    { title: 'Edit Device', href:'devices/edit', component: DevicesEditPage },
    { title: 'Save to Flash', href:'tools/diff', component: DiffPage }
];
menus.map(menu => {
    routes = [...routes, menu, ...menu.children];
});

const clearSlashes = path => {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
};

const getFragment = () => {
    const match = window.location.href.match(/#(.*)$/);
    const fragment = match ? match[1] : '';
    return clearSlashes(fragment);
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            menuActive: false,
            menu: menus[0],
            page: menus[0],
            changed: false,
        }

        this.menuToggle = () => {
            this.setState({ menuActive: !this.state.menuActive });
        }
    }

    render(props, state) {
        
        const params = getFragment().split('/').slice(2);
        const active = this.state.menuActive ? 'active' : '';
        return (
            <div id="layout" class={active}>
                <a id="menuLink" class="menu-link" onClick={this.menuToggle}>
                    <span></span>
                </a>
                <Menu menus={menus} selected={state.menu} />
                <Page page={state.page} params={params} changed={this.state.changed} />
            </div>
        );
    }

    componentDidMount() {
        loader.hide();

        let current = '';
        const fn = () => {
            const newFragment = getFragment();
            const diff = settings.diff();
            if(this.state.changed !== !!diff.length) {
                this.setState({changed: !this.state.changed})
            }
            if(current !== newFragment) {
                current = newFragment;
                const parts = current.split('/');
                const menu = menus.find(menu => menu.href === parts[0]);
                const page = parts.length > 1 ? routes.find(route => route.href === `${parts[0]}/${parts[1]}`) : menu;
                if (page) {
                    this.setState({ page, menu, menuActive: false });
                }
            }
        }
        this.interval = setInterval(fn, 100);
    }

    componentWillUnmount() {}
}

loadConfig().then(() => {
    render(<App />, document.body);
});