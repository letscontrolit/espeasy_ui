import { pins } from './_defs';


const resolution = [
    { value: 0, name: 'Temp 14 bits, RH 12 bits' }, 
    { value: 128, name: 'Temp 13 bits, RH 10 bits' }, 
    { value: 1, name: 'Temp 12 bits, RH 8 bits' }, 
    { value: 129, name: 'Temp 11 bits, RH 11 bits' }, 
]

export const si7021 = {
    defaults: () => ({
        interval: 60,
        'settings.values[0].name': 'Temperature',
        'settings.values[1].name': 'Humidity',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            resolution: { name: 'Resolution', type: 'select', options: resolution, var: 'configs[0]'  },
        }
    },
    data: true,
    vals: 2,
}