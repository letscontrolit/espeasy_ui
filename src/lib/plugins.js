import { settings } from './settings';
import espeasy from './espeasy';
import { loader } from './loader';
import { menu } from './menu';

const PLUGINS = [
    '/dash.js.gz'
];

const dynamicallyLoadScript = (url) => {
    return new Promise(resolve => {
        var script = document.createElement("script");  // create a script DOM node
        script.src = url;  // set its src to the provided URL
        script.onreadystatechange = resolve;
        script.onload = resolve;
        script.onerror = resolve;
        document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    });
}

const getPluginAPI = () => {
    return {
        settings,
        loader,
        menu,
        espeasy,
    }
}

window.getPluginAPI = getPluginAPI;

export const loadPlugins = async () => {
    return Promise.all(PLUGINS.map(async plugin => {
        return dynamicallyLoadScript(plugin);
    }));
}