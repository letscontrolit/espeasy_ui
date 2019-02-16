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
    SetupPage
} from '../pages';

import { saveConfig } from '../conf/config.dat';

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
        { title: 'Update', href: 'tools/update', component: UpdatePage },
        { title: 'Filesystem', href: 'tools/fs', component: FSPage },
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