import { pins } from './_defs';

const modeTypes = [
    { value: 0, name: 'LOW' }, 
    { value: 1, name: 'CHANGE' }, 
    { value: 2, name: 'RISING' }, 
    { value: 3, name: 'FALLING' }, 
]

const counterTypes = [
    { value: 0, name: 'Delta' }, 
    { value: 1, name: 'Delta/Total/Time' }, 
    { value: 2, name: 'Total' }, 
    { value: 3, name: 'Delta/Total' }, 
]

export const genericPulse = {
    sensor: {
        name: 'Sensor',
        configs: {
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1' },
            debounce: { name: 'De-bounce (ms)', type: 'number', var: 'configs[0]'  },
            counter_type: { name: 'Counter Type', type: 'select', options: counterTypes, var: 'configs[1]'  },
            mode_type: { name: 'Switch Button Type', type: 'select', options: modeTypes, var: 'configs[2]'  },
        }
    },
    data: true,
    vals: 1,
}