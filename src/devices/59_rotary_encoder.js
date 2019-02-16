
import { pins } from './_defs';

export const rotaryEncoder = {
    sensor: {
        name: 'Data Acquisition',
        configs: {
            gpio1: { name: 'GPIO A - CLK', type: 'select', options: pins, var: 'gpio1'  },
            gpio2: { name: 'GPIO B - DT', type: 'select', options: pins, var: 'gpio2'  },
            gpio3: { name: 'GPIO I - Z', type: 'select', options: pins, var: 'gpio3'  },
        }
    },
    data: true,
    vals: 1,
}