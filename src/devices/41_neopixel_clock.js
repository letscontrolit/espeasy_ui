import { pins, getTasks, getTaskValues } from './_defs';

export const neopixelClock = {
    defaults: () => ({
        gpio1: 255,
    }),
    sensor: {
        name: 'Actuator',
        configs: {
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1'  },
            R: { name: 'Red', type: 'number', min: 0, max: 255, var: 'configs[0]' },
            G: { name: 'Green', type: 'number', min: 0, max: 255, var: 'configs[1]' },
            B: { name: 'Blue', type: 'number', min: 0, max: 255, var: 'configs[2]' },
        }
    },
}