
import { pins } from './_defs';

export const sds011 = {
    defaults: () => ({
        gpio1: 255,
        gpio2: 255,
        'settings.values[0].name': 'PM2.5',
        'settings.values[1].name': 'PM10',
    }),
    sensor: {
        name: 'Data Acquisition',
        configs: {
            gpio1: { name: 'GPIO - TX', type: 'select', options: pins, var: 'gpio1'  },
            gpio2: { name: 'GPIO - RX', type: 'select', options: pins, var: 'gpio2'  },
        }
    },
    data: true,
    vals: 2,
}