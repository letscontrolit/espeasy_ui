import { pins } from './_defs';

export const pn532 = {
    defaults: () => ({
        gpio1: 255,
        'settings.values[0].name': 'Tag',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            gpio1: { name: 'Reset Pin', type: 'select', options: pins, var: 'gpio1' },
        }
    },
    data: true,
    vals: 1,
}