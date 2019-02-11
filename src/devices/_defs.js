import { settings } from '../lib/settings';

export { pins } from '../pages/config.hardware';


export const getTasks = () => {
    return settings.get('tasks').filter(task => task.enabled).map(task => ({ value: task.settings.index, name: task.settings.name }));
}

export const getTaskValues = () => {
    return [ 1, 2, 3, 4 ];
}