
import { pins } from './_defs';

export const rotaryEncoder = {
    defaults: () => ({
        ValueCount: 1,
        SendDataOption: 1,
        TimerOption: 1,
        TimerOptional: 1,
        GlobalSync: 1,
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