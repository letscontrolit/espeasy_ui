import { pins } from './_defs';

const eventTypes = [
    { value: 0, name: 'Disabled' }, 
    { value: 1, name: 'Active on LOW' }, 
    { value: 2, name: 'Active on HIGH' }, 
    { value: 3, name: 'Active on LOW and HIGH' }, 
]

export const bmp085 = {
    defaults: () => ({
        'settings.values[0].name': 'Temperature',
        'settings.values[1].name': 'Pressure',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            altitude: { name: 'Altitude', type: 'number', var: 'configs[1]' },
        }
    },
    data: true,
    vals: 2,
}