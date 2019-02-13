import { pins, getTasks, getTaskValues } from './_defs';

const measurmentRange = [
    { value: 0, name: '32V, 2A' }, 
    { value: 1, name: '32V, 1A' }, 
    { value: 2, name: '16V, 0.4A' }, 
]

const measurmentType = [
    { value: 0, name: 'Voltage' }, 
    { value: 1, name: 'Current' }, 
    { value: 2, name: 'Power' }, 
    { value: 3, name: 'Voltage/Current/Power' }, 
]

const i2c_address = [
    { value: 64, name: '0x40 (64) - (default)' }, 
    { value: 65, name: '0x41 (65)' }, 
    { value: 68, name: '0x44 (68)' }, 
    { value: 69, name: '0x45 (69)' }, 
]

export const ina219 = {
    sensor: {
        name: 'Sensor',
        configs: {
            i2c_address: { name: 'I2C Address', type: 'select', options: i2c_address, var: 'configs[0]'  },
            check_task: { name: 'Measurment Range', type: 'select', options: measurmentRange, var: 'configs[1]'  },
            check_value: { name: 'Measurment Type', type: 'select', options: measurmentType, var: 'configs[2]'  },
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