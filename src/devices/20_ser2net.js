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
}