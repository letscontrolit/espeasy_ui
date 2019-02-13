import { pins } from './_defs';

const eventTypes = [
    { value: 0, name: 'Disabled' }, 
    { value: 1, name: 'Active on LOW' }, 
    { value: 2, name: 'Active on HIGH' }, 
    { value: 3, name: 'Active on LOW and HIGH' }, 
]

export const inputMcp = {
    sensor: {
        name: 'Sensor',
        configs: {
            port: { name: 'Port', type: 'select', options: pins, var: 'gpio4' },
            inversed: { name: 'Inversed logic', type: 'checkbox', var: 'pin1inversed' },
            send_boot_state: { name: 'Send Boot State', type: 'checkbox', var: 'configs[3]'  },
        }
    },
    advanced: {
        name: 'Advanced event management',
        configs: {
            debounce: { name: 'De-bounce (ms)', type: 'number', var: 'configs_float[0]'  },
            dblclick: { name: 'Doublclick Event', type: 'select', options: eventTypes, var: 'configs[4]' },
            dblclick_interval: { name: 'Doubleclick Max interval (ms)', type: 'number', var: 'configs_float[1]' },
            longpress: { name: 'Longpress event', type: 'select', options: eventTypes, var: 'configs[5]' },
            longpress_interval: { name: 'Longpress min interval (ms)', type: 'number',  var: 'configs_float[2]' },
            safe_button: { name: 'Use safe button', type: 'checkbox', var: 'configs_float[3]' },
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