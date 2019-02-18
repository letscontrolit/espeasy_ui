import { pins, getTasks, getTaskValues } from './_defs';

export const neopixelCandle = {
    defaults: () => ({
        gpio1: 255,
        'configs[0]': 11,
        'settings.values[0].name': 'Color',
        'settings.values[1].name': 'Brightness',
        'settings.values[2].name': 'Type',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1'  },
        }
    },
    data: true,
    vals: 3
}