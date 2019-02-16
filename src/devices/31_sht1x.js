import { pins, getTasks, getTaskValues } from './_defs';

export const sht1x = {
    sensor: {
        name: 'Sensor',
        configs: {
            pullup: { name: 'Internal PullUp', type: 'checkbox', var: 'pin1pullup' },
            gpio1: { name: 'GPIO Data', type: 'select', options: pins, var: 'gpio1' },
            gpio2: { name: 'GPIO SCK', type: 'select', options: pins, var: 'gpio2' },
        },
    },
    data: true,
    vals: 1,
}