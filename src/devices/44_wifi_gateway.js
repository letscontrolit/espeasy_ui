import { pins } from './_defs';

const parity = [
    { value: 0, name: 'No Parity' }, 
    { value: 1, name: 'Even' }, 
    { value: 2, name: 'Odd' }, 
]

export const wifiGateway = {
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
        }
    }
}