import { pins, getTasks, getTaskValues } from './_defs';

const type = [
    { value: 1, name: 'GRB' }, 
    { value: 2, name: 'GRBW' }, 
]

export const neopixelBasic = {
    defaults: () => ({
        gpio1: 255,
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            leds: { name: 'LEd Count', type: 'number', var: 'configs[0]' },
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1'  },
            type: { name: 'Strip Type', type: 'select', options: type, var: 'configs[1]'  },
        }
    },
}