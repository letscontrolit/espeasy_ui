import { pins, getTasks, getTaskValues } from './_defs';

export const sht1x = {
    defaults: () => ({
        gpio1: 255,
        gpio2: 255,
        'settings.values[0].name': 'Temperature',
        'settings.values[1].name': 'Humidity',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            pullup: { name: 'Internal PullUp', type: 'checkbox', var: 'pin1pullup' },
            gpio1: { name: 'GPIO Data', type: 'select', options: pins, var: 'gpio1' },
            gpio2: { name: 'GPIO SCK', type: 'select', options: pins, var: 'gpio2' },
        },
    },
    data: true,
    vals: 2,
}