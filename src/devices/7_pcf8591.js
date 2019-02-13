import { pins } from './_defs';

const eventTypes = [
    { value: 0, name: 'Disabled' }, 
    { value: 1, name: 'Active on LOW' }, 
    { value: 2, name: 'Active on HIGH' }, 
    { value: 3, name: 'Active on LOW and HIGH' }, 
]

export const pcf8591 = {
    sensor: {
        name: 'Sensor',
        configs: {
            port: { name: 'PORT', type: 'number', var: 'gpio4' },
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