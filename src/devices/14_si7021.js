import { pins } from './_defs';


const resolution = [
    { value: 0, name: 'Temp 14 bits, RH 12 bits' }, 
    { value: 128, name: 'Temp 13 bits, RH 10 bits' }, 
    { value: 1, name: 'Temp 12 bits, RH 8 bits' }, 
    { value: 129, name: 'Temp 11 bits, RH 11 bits' }, 
]

export const si7021 = {
    sensor: {
        name: 'Sensor',
        configs: {
            resolution: { name: 'Resolution', type: 'select', options: resolution, var: 'configs[0]'  },
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