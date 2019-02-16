import { pins } from './_defs';

const mode = [
    { value: 0, name: 'Digital' }, 
    { value: 1, name: 'Analog' }, 
]

export const pme = {
    sensor: {
        name: 'Sensor',
        configs: {
            port: { name: 'Port', type: 'number', var: 'gpio4' },
            mode: { name: 'Port Type', type: 'select', options: mode, var: 'configs[0]'  },
        }
    },
}