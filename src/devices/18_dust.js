import { pins } from './_defs';

const i2c_address = [
    { value: 35, name: '0x23 (35) - default' }, 
    { value: 92, name: '0x5c (92)' }, 
]

const measurmentMode = [
    { value: 1, name: 'RESOLUTION_LOW' }, 
    { value: 2, name: 'RESOLUTION_NORMAL' }, 
    { value: 3, name: 'RESOLUTION_HIGH' }, 
    { value: 99, name: 'RESOLUTION_AUTO_HIGH' }, 
]

export const dust = {
    defaults: () => ({
        gpio1: 255,
        'settings.values[0].name': 'Dust',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            gpio1: { name: 'GPIO - LED', type: 'select', options: pins, var: 'gpio1' },
        }
    },
    data: true,
    vals: 1,
}