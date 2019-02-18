import { pins, getTasks, getTaskValues } from './_defs';

export const mqttDomoticz = {
    defaults: () => ({
        gpio1: 255,
        'settings.values[0].name': 'Output',
    }),
    sensor: {
        name: 'Actuator',
        configs: {
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1' },
            idx: { name: 'IDX', type: 'number', var: 'configs[0]' },
        }
    },
    vals: 1
}