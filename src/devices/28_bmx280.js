import { pins, getTasks, getTaskValues } from './_defs';

const i2c_address = [
    { value: 118, name: '0x76 (118) - (default)' }, 
    { value: 119, name: '0x77 (119) - (default)' }, 
]

export const bmx280 = {
    defaults: () => ({
        'configs[0]': 118,
        'settings.values[0].name': 'Temperature',
        'settings.values[1].name': 'Humidity',
        'settings.values[2].name': 'Pressure',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            i2c_address: { name: 'I2C Address', type: 'select', options: i2c_address, var: 'configs[0]'  },
            altitude: { name: 'Altitude', type: 'number', var: 'configs[1]' },
            offset: { name: 'Temperature Offset', type: 'number', var: 'configs[2]' },
        }
    },
    data: true,
    vals: 3,
}