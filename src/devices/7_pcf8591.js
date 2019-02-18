import { pins } from './_defs';


export const pcf8591 = {
    defaults: () => ({
        'settings.values[0].name': 'Analog',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            port: { name: 'PORT', type: 'number', var: 'gpio4' },
        }
    },
    data: true,
    vars: 1
}