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
    sensor: {
        name: 'Sensor',
        configs: {
            i2c_address: { name: 'I2C Address', type: 'select', options: i2c_address, var: 'configs[0]'  },
            mode: { name: 'Integration time', type: 'select', options: measurmentMode, var: 'configs[1]'  },
            send_to_sleep: { name: 'Send sensor to sleep', type: 'checkbox', var: 'configs[2]'  },
            gain: { name: 'Enable 16x gain', type: 'checkbox', var: 'configs[3]'  },
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
