import { pins } from './_defs';

const i2c_address = [
    { value: 57, name: '0x39 (57) - default' }, 
    { value: 73, name: '0x49 (73)' }, 
    { value: 41, name: '0x29 (41)' }, 
]

const measurmentMode = [
    { value: 0, name: '13 ms' }, 
    { value: 1, name: '101 ms' }, 
    { value: 2, name: '402 ms' }, 
]

export const tls2561 = {
    defaults: () => ({
        'configs[0]': 57,
        'settings.values[0].name': 'Lux',
        'settings.values[1].name': 'Infrared',
        'settings.values[2].name': 'Broadband',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            i2c_address: { name: 'I2C Address', type: 'select', options: i2c_address, var: 'configs[0]'  },
            mode: { name: 'Integration time', type: 'select', options: measurmentMode, var: 'configs[1]'  },
            send_to_sleep: { name: 'Send sensor to sleep', type: 'checkbox', var: 'configs[2]'  },
            gain: { name: 'Enable 16x gain', type: 'checkbox', var: 'configs[3]'  },
        }
    },
    data: true,
    vals: 3
}
