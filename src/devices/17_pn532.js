import { pins } from './_defs';

export const pn532 = {
    sensor: {
        name: 'Sensor',
        configs: {
            gpio1: { name: 'Reset Pin', type: 'select', options: pins, var: 'gpio1' },
        }
    },
}