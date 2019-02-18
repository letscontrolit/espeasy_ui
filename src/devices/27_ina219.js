import { pins, getTasks, getTaskValues } from './_defs';

const measurmentRange = [
    { value: 0, name: '32V, 2A' }, 
    { value: 1, name: '32V, 1A' }, 
    { value: 2, name: '16V, 0.4A' }, 
]

const measurmentType = [
    { value: 0, name: 'Voltage' }, 
    { value: 1, name: 'Current' }, 
    { value: 2, name: 'Power' }, 
    { value: 3, name: 'Voltage/Current/Power' }, 
]

const i2c_address = [
    { value: 64, name: '0x40 (64) - (default)' }, 
    { value: 65, name: '0x41 (65)' }, 
    { value: 68, name: '0x44 (68)' }, 
    { value: 69, name: '0x45 (69)' }, 
]

export const ina219 = {
    defaults: () => ({
        'configs[0]': 64,
        'settings.values[0].name': 'Voltage',
        'settings.values[1].name': 'Current',
        'settings.values[2].name': 'Power',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            i2c_address: { name: 'I2C Address', type: 'select', options: i2c_address, var: 'configs[0]'  },
            check_task: { name: 'Measurment Range', type: 'select', options: measurmentRange, var: 'configs[1]'  },
            check_value: { name: 'Measurment Type', type: 'select', options: measurmentType, var: 'configs[2]'  },
        }
    },
    data: true,
    vals: 3,
}