import { pins } from './_defs';

const mode = [
    { value: 0, name: 'Digital' }, 
    { value: 1, name: 'Analog' }, 
]

export const pme = {
    defaults: () => ({
        'settings.values[0].name': 'Value',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            port: { name: 'Port', type: 'number', var: 'gpio4' },
            mode: { name: 'Port Type', type: 'select', options: mode, var: 'configs[0]'  },
        }
    },
    data: true,
    vals: 1
}