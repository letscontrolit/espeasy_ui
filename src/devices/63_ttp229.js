
import { pins } from './_defs';

export const ttp229 = {
    defaults: () => ({
        'gpio1' : 1,
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            gpio1: { name: 'GPIO A - CLK', type: 'select', options: pins, var: 'gpio1'  },
            gpio2: { name: 'GPIO B - DT', type: 'select', options: pins, var: 'gpio2'  },
            scancode: { name: 'ScanCode', type: 'checkbox', options: pins, var: 'configs[0]'  },
        }
    },
    data: true,
    vals: 1,
}