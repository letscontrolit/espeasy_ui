import { pins } from './_defs';

const mode = [
    { value: 0, name: 'Digital' }, 
    { value: 1, name: 'Analog' }, 
]

export const pme = {
    sensor: {
        name: 'Sensor',
        configs: {
            port: { name: 'Port', type: 'number', var: 'gpio4' },
            mode: { name: 'Port Type', type: 'select', options: mode, var: 'configs[0]'  },
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