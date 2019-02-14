import { pins, getTasks, getTaskValues } from './_defs';

export const neopixelCandle = {
    sensor: {
        name: 'Sensor',
        configs: {
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1'  },
        }
    },
}