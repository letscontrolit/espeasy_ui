import { pins } from './_defs';

const serialConfig = [
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
    defaults: () => ({
        gpio1: 255,
    }),
    sensor: {
        name: 'Settings',
        configs: {
            port: { name: 'TCP Port', type: 'number', var: 'extra.plugin_config_long[0]'  }, 
            baudrate: { name: 'Baudrate', type: 'number', var: 'extra.plugin_config_long[1]'  },
            serial_config: { name: 'Data Bits', type: 'select', options: serialConfig, var: 'configs[2]'  },
            reset_after_boot: { name: 'Reset target after boot', type: 'select', options: pins, var: 'gpio1'  },
            timeout: { name: 'RX Receive Timeout', type: 'number', var: 'configs[0]'  },
            event_processing: { name: 'Event Processing', type: 'select', options: eventProcessing, var: 'configs[1]'  },
        }
    },
}