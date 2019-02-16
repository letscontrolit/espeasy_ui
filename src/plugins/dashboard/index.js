import { DashboardPage } from './dashboard';
import { DashboardEditorPage } from './dashboard.editor';

const pluginAPI = window.getPluginAPI();

const menu = { title: 'Dashboard', pagetitle: '', href: 'dashboard', class: 'full', component: DashboardPage, children: [
        { title: 'Editor', pagetitle: '', href: 'dashboard/editor', class: 'full', component: DashboardEditorPage },
    ] };

pluginAPI.menu.addMenu(menu);