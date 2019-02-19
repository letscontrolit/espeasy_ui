import { 
    ConfigPage, 
    DevicesPage, 
    DevicesEditPage, 
    ControllersPage, 
    ControllerEditPage, 
    ControllerNotificationsPage,
    ConfigAdvancedPage, 
    ConfigHardwarePage, 
    RebootPage, 
    LoadPage, 
    RulesPage, 
    UpdatePage, 
    ToolsPage, 
    FSPage, 
    FactoryResetPage, 
    DiscoverPage, 
    DiffPage, 
    RulesEditorPage, 
    SetupPage,
    SysVarsPage
} from '../pages';

import { saveConfig } from '../conf/config.dat';
import { deleteFile } from './espeasy';

const oldUI = () => {
    deleteFile('index.htm.gz').then(() => {
        window.location.href = '/';
    });
}

class Menus {
    constructor() {
        this.menus = [];
        this.routes = [];

        this.addMenu = (menu) => {
            this.menus.push(menu);
            this.addRoute(menu);
        }

        this.addRoute = (route) => {
            this.routes.push(route);
            if (route.children) {
                route.children.forEach(child => this.routes.push(child));
            }
        }
    }
    
}

const menus = [
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
        { title: 'Info', href: 'tools/sysinfo', component: SysVarsPage },
        { title: 'Update', href: 'tools/update', component: UpdatePage },
        { title: 'Filesystem', href: 'tools/fs', component: FSPage },
        { title: 'Back to old UI', href: 'tools/oldui', action: oldUI },
    ] },
];

const routes = [
    { title: 'Edit Controller', href:'controllers/edit', component: ControllerEditPage },
    { title: 'Edit Notification', href:'controllers/notification', component: ControllerNotificationsPage },
    { title: 'Edit Device', href:'devices/edit', component: DevicesEditPage },
    { title: 'Save to Flash', href:'tools/diff', component: DiffPage },
    { title: 'Setup', href: 'config/setup', component: SetupPage }
];

const menu = new Menus();
routes.forEach(menu.addRoute);
menus.forEach(menu.addMenu)

export { menu };