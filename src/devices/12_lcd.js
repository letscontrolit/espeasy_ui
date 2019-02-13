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
    sensor: {
        name: 'Sensor',
        configs: {
            i2c_address: { name: 'I2C Address', type: 'select', options: i2c_address, var: 'configs[0]'  },
            size: { name: 'Display Size', type: 'select', options: displaySize, var: 'configs[1]'  },
            line1: { name: 'Line 1', type: 'text', var: 'configs[2]'  },
            line2: { name: 'Line 2', type: 'text', var: 'configs[2]'  },
            line3: { name: 'Line 3', type: 'text', var: 'configs[2]'  },
            line4: { name: 'Line 4', type: 'text', var: 'configs[2]'  },
            button: { name: 'Display Button', type: 'select', options: pins, var: 'gpio1'  },
            command: { name: 'LCD Command Mode', type: 'select', options: lcdCommand, var: 'configs[2]'  },
        }
    },
    data: {
        name: 'Data Acquisition',
        configs: {
            send1: { name: 'Send to Controller 1', type: 'checkbox', var: 'TaskDeviceSendData[0]' },
            send2: { name: 'Send to Controller 2', type: 'checkbox', var: 'TaskDeviceSendData[1]' },
            send3: { name: 'Send to Controller 3', type: 'checkbox', var: 'TaskDeviceSendData[2]' },
            idx1: { name: 'IDX1', type: 'number', var: 'TaskDeviceID[0]' },
            idx2: { name: 'IDX2', type: 'number', var: 'TaskDeviceID[1]' },
            idx3: { name: 'IDX3', type: 'number', var: 'TaskDeviceID[2]' },
            interval: { name: 'Interval', type: 'number', var: 'interval' },
        }
    }
}