import { pins } from './_defs';

const parity = [
    { value: 0, name: 'No Parity' }, 
    { value: 1, name: 'Even' }, 
    { value: 2, name: 'Odd' }, 
]

const eventProcessing = [
    { value: 0, name: 'None' }, 
    { value: 1, name: 'Generic' }, 
    { value: 2, name: 'RFLink' }, 
]

export const ser2net = {
    sensor: {
        name: 'Settings',
        configs: {
            port: { name: 'TCP Port', type: 'number', var: 'configs_float[0]'  },
            baudrate: { name: 'Baudrate', type: 'number', var: 'configs_float[0]'  },
            data_bits: { name: 'Data Bits', type: 'number', var: 'configs_float[0]'  },
            parity: { name: 'Parity', type: 'select', options: parity, var: 'configs[0]'  },
            stop_bits: { name: 'Stop Bits', type: 'number', var: 'configs_float[0]'  },
            reset_after_boot: { name: 'Reset target after boot', type: 'select', options: pins, var: 'configs[1]'  },
            timeout: { name: 'RX Receive Timeout', type: 'number', var: 'configs_float[0]'  },
            event_processing: { name: 'Event Processing', type: 'select', options: eventProcessing, var: 'configs[1]'  },
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