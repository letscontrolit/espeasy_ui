import { 
    ConfigPage, 
    DevicesPage, 
    DashboardPage,
    DashboardEditorPage,
    DevicesEditPage, 
    ControllersPage, 
    ControllerEditPage, 
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
    RulesEditorPage 
} from '../pages';

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

export { menu };