
import { pins } from './_defs';

export const ttp229 = {
    defaults: () => ({
        'gpio1' : 1,
    }),
    sensor: {
        defaults: () => ({
            ValueCount: 1,
            SendDataOption: 1,
            TimerOption: 1,
            TimerOptional: 1,
            GlobalSync: 1,
        }),
        name: 'Sensor',
        configs: {
            gpio1: { name: 'GPIO A - CLK', type: 'select', options: pins, var: 'gpio1'  },
            gpio2: { name: 'GPIO B - DT', type: 'select', options: pins, var: 'gpio2'  },
            scancode: { name: 'ScanCode', type: 'checkbox', options: pins, var: 'configs[1]'  },
        }
    },
    data: true,
    vals: 1,
}