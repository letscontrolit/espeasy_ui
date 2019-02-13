import { pins } from './_defs';

const modeTypes = [
    { value: 0, name: 'LOW' }, 
    { value: 1, name: 'CHANGE' }, 
    { value: 2, name: 'RISING' }, 
    { value: 3, name: 'FALLING' }, 
]

const counterTypes = [
    { value: 0, name: 'Delta' }, 
    { value: 1, name: 'Delta/Total/Time' }, 
    { value: 2, name: 'Total' }, 
    { value: 3, name: 'Delta/Total' }, 
]

export const genericPulse = {
    sensor: {
        name: 'Sensor',
        configs: {
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1' },
            debounce: { name: 'De-bounce (ms)', type: 'number', var: 'configs[0]'  },
            counter_type: { name: 'Counter Type', type: 'select', options: counterTypes, var: 'configs[1]'  },
            mode_type: { name: 'Switch Button Type', type: 'select', modeTypes, var: 'configs[2]'  },
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