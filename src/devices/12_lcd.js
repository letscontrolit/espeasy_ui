import { pins } from './_defs';

const i2c_address = [
    { value: 35, name: '0x23 (35) - default' }, 
    { value: 92, name: '0x5c (92)' }, 
]

const displaySize = [
    { value: 1, name: 'RESOLUTION_LOW' }, 
    { value: 2, name: 'RESOLUTION_NORMAL' }, 
    { value: 3, name: 'RESOLUTION_HIGH' }, 
    { value: 99, name: 'RESOLUTION_AUTO_HIGH' }, 
]

const lcdCommand = [
    { value: 1, name: 'RESOLUTION_LOW' }, 
    { value: 2, name: 'RESOLUTION_NORMAL' }, 
    { value: 3, name: 'RESOLUTION_HIGH' }, 
    { value: 99, name: 'RESOLUTION_AUTO_HIGH' }, 
]

export const lcd2004 = {
    defaults: () => ({
        'configs[0]': 32,
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            i2c_address: { name: 'I2C Address', type: 'select', options: i2c_address, var: 'configs[0]'  },
            size: { name: 'Display Size', type: 'select', options: displaySize, var: 'configs[1]'  },
            line1: { name: 'Line 1', type: 'string', /*var: 'configs[2]' */ },
            line2: { name: 'Line 2', type: 'string', /*var: 'configs[2]' */  },
            line3: { name: 'Line 3', type: 'string', /*var: 'configs[2]' */  },
            line4: { name: 'Line 4', type: 'string', /*var: 'configs[2]' */  },
            button: { name: 'Display Button', type: 'select', options: pins, var: 'gpio3'  },
            timeout: { name: 'Display Timeout', type: 'number', var: 'configs[2]'  },
            command: { name: 'LCD Command Mode', type: 'select', options: lcdCommand, var: 'configs[3]'  },
        }
    },
}