import { pins, getTasks, getTaskValues } from './_defs';

const type = [
    { value: 1, name: 'MAX 6675' }, 
    { value: 2, name: 'MAX 31855' }, 
]

export const thermocouple = {
    defaults: () => ({
        gpio1: 255,
        'settings.values[0].name': 'Temperature',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1'  },
            type: { name: 'Adapter IC', type: 'select', options: type, var: 'configs[0]'  },
        }
    },
    data: true,
    vals: 1
}