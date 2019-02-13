import { pins, getTasks, getTaskValues } from './_defs';

export const mqttDomoticz = {
    sensor: {
        name: 'Actuator',
        configs: {
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1' },
            idx: { name: 'IDX', type: 'number', var: 'configs[0]' },
        }
    },
}