import { pins, getTasks, getTaskValues } from './_defs';

const sensorModel = [
    { value: 11, name: 'DHT11' }, 
    { value: 22, name: 'DHT22' }, 
    { value: 12, name: 'DHT12' }, 
    { value: 23, name: 'Sonoff am2301' }, 
    { value: 70, name: 'Sonoff si7021' },
]

export const levelControl = {
    defaults: () => ({
        gpio1: 255,
        'settings.values[0].name': 'Output',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            gpio: { name: 'GPIO Level Low', type: 'select', options: pins, var: 'gpio1' },
            check_task: { name: 'Check Task', type: 'select', options: getTasks, var: 'configs[0]'  },
            check_value: { name: 'Check Value', type: 'select', options: getTaskValues, var: 'configs[1]'  },
            level: { name: 'Set Level', type: 'number', var: 'configs_float[0]' },
            hysteresis: { name: 'Hysteresis', type: 'number', var: 'configs_float[1]' },
        }
    },
    data: true,
    vals: 1,
}