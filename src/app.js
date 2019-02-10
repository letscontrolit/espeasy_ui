import { h, render, Component } from 'preact';
import { Menu } from './components/menu';
import { Page } from './components/page';
import { ConfigPage, DevicesPage, DevicesEditPage, ControllersPage, ControllerEditPage, ConfigAdvancedPage, ConfigHardwarePage, RebootPage, LoadPage, RulesPage, UpdatePage, ToolsPage, FSPage, FactoryResetPage, DiscoverPage } from './pages';

import { loadConfig, saveConfig } from './conf/config.dat';


const menus = [
    //{ title: 'Dashboard', href: '', component: null, children: [] },
    { title: 'Devices', href: 'devices', component: DevicesPage, children: [] },
    { title: 'Controllers', href: 'controllers', component: ControllersPage, children: [] },
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
    { title: 'Edit Device', href:'devices/edit', component: DevicesEditPage }
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
            menu: menus[0],
            page: menus[0],
        }

        loadConfig();
    }

    render(props, state) {
        const params = getFragment().split('/').slice(2);
        return (
            <div id="layout">
                <Menu menus={menus} open={true} selected={state.menu} />
                <Page page={state.page} params={params} />
            </div>
        );
    }

    componentDidMount() {
        let current = '';
        const fn = () => {
            const newFragment = getFragment();
            if(current !== newFragment) {
                current = newFragment;
                const parts = current.split('/');
                const menu = menus.find(menu => menu.href === parts[0]);
                const page = parts.length > 1 ? routes.find(route => route.href === `${parts[0]}/${parts[1]}`) : menu;
                if (page) {
                    this.setState({ page, menu });
                }
            }
        }
        this.interval = setInterval(fn, 50);
    }

    componentWillUnmount() {}
}

render(<App />, document.body);