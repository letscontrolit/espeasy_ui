import { pins } from './_defs';

const mode = [
    { value: 0, name: 'Value' }, 
    { value: 1, name: 'State' }, 
]

const units = [
    { value: 0, name: 'Metric' }, 
    { value: 1, name: 'Imperial' }, 
]

const filters = [
    { value: 0, name: 'None' }, 
    { value: 1, name: 'Median' }, 
]

export const hcsr04 = {
    sensor: {
        name: 'Sensor',
        configs: {
            gpio1: { name: 'GPIO Trigger', type: 'select', options: pins, var: 'gpio1' },
            gpio2: { name: 'GPIO Echo, 5V', type: 'select', options: pins, var: 'gpio2' },
            mode: { name: 'Mode', type: 'select', options: mode, var: 'configs[0]'  },
            treshold: { name: 'Treshold', type: 'number', var: 'configs[1]'  },
            max_distance: { name: 'Max Distance', type: 'number', var: 'configs[2]'  },
            unit: { name: 'Unit', type: 'select', options: units, var: 'configs[3]'  },
            filter: { name: 'Filter', type: 'select', options: filters, var: 'configs[4]'  },
            filter_size: { name: 'Filter Size', type: 'number', var: 'configs[5]'  },
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