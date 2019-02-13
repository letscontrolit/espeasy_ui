import { pins } from './_defs';

const weigandType = [
    { value: 26, name: '26 Bits' }, 
    { value: 34, name: '34 Bits' }, 
]

export const rfidWeigand = {
    sensor: {
        name: 'Sensor',
        configs: {
            gpio1: { name: 'GPIO D0 (green, 5V)', type: 'select', options: pins, var: 'gpio1' },
            gpio2: { name: 'GPIO D1 (white, 5V)', type: 'select', options: pins, var: 'gpio2' },
            type: { name: 'Weigand Type', type: 'select', options: weigandType, var: 'configs[0]'  },
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