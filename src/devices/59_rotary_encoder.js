
import { pins } from './_defs';

export const rotaryEncoder = {
    defaults: () => ({
        gpio1: 255,
        gpio2: 255,
        gpio3: 255,
        'configs_long[1]': 100,
        'settings.values[0].name': 'Counter',
    }),
    sensor: {
        name: 'Data Acquisition',
        configs: {
            gpio1: { name: 'GPIO A - CLK', type: 'select', options: pins, var: 'gpio1'  },
            gpio2: { name: 'GPIO B - DT', type: 'select', options: pins, var: 'gpio2'  },
            gpio3: { name: 'GPIO I - Z', type: 'select', options: pins, var: 'gpio3'  },
            limit_min: { name: 'Limit - Min', type: 'number', var: 'configs_long[0]'  },
            limit_max: { name: 'Limit - Max', type: 'number', var: 'configs_long[1]'  },
        }
    },
    data: true,
    vals: 1,
}