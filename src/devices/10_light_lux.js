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

export const bh1750 = {
    defaults: () => ({
        'configs[0]': 35,
        'settings.values[0].name': 'Lux',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            i2c_address: { name: 'I2C Address', type: 'select', options: i2c_address, var: 'configs[0]'  },
            mode: { name: 'Measurement mode', type: 'select', options: measurmentMode, var: 'configs[1]'  },
            send_to_sleep: { name: 'Send sensor to sleep', type: 'checkbox', var: 'configs[2]'  },
        }
    },
    data: true,
    vals: 1,
}