import { h, render, Component } from 'preact';
import miniToastr from 'mini-toastr';
import { Menu } from './components/menu';
import { Page } from './components/page';
import { loadConfig } from './conf/config.dat';
import { settings } from './lib/settings';
import { loader } from './lib/loader';
import { loadPlugins } from './lib/plugins';
import { menu } from './lib/menu';

miniToastr.init({})

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
            menu: menu.menus[0],
            page:  menu.menus[0],
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
                <Menu menus={menu.menus} selected={state.menu} />
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
                const m = menu.menus.find(menu => menu.href === parts[0]);
                const page = parts.length > 1 ? menu.routes.find(route => route.href === `${parts[0]}/${parts[1]}`) : m;
                if (page) {
                    this.setState({ page, menu: m, menuActive: false });
                }
            }
        }
        this.interval = setInterval(fn, 100);
    }

    componentWillUnmount() {}
}

const load = async () => {
    await loadConfig();
    await loadPlugins();
    render(<App />, document.body);
}

load();