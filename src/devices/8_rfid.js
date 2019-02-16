import { pins } from './_defs';

const weigandType = [
    { value: 26, name: '26 Bits' }, 
    { value: 34, name: '34 Bits' }, 
]

export const rfidWeigand = {
    sensor: {
        name: 'Sensor',
        configs: {
            gpio1: { name: 'GPIO D0 (green, 5V)', type: 'select', options: pins, var: 'gpio1' },
            gpio2: { name: 'GPIO D1 (white, 5V)', type: 'select', options: pins, var: 'gpio2' },
            type: { name: 'Weigand Type', type: 'select', options: weigandType, var: 'configs[0]'  },
        }
    },
}