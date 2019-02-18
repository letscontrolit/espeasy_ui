
const i2c_address = [
    { value: 72, name: '0x48 (72)' }, 
    { value: 73, name: '0x49 (73)' }, 
    { value: 74, name: '0x4A (74)' }, 
    { value: 75, name: '0x4B (75)' }, 
];

const gainOptions = [
    { value: 0, name: '2/3x gain (FS=6.144V)' }, 
    { value: 1, name: '1x gain (FS=4.096V)' }, 
    { value: 2, name: '2x gain (FS=2.048V)' }, 
    { value: 3, name: '4x gain (FS=1.024V)' }, 
    { value: 4, name: '8x gain (FS=0.512V)' },
    { value: 5, name: '16x gain (FS=0.256V)' },
];

const multiplexerOptions = [
    { value: 0, name: 'AIN0 - AIN1 (Differential)' }, 
    { value: 1, name: 'AIN0 - AIN3 (Differential)' }, 
    { value: 2, name: 'AIN1 - AIN3 (Differential)' }, 
    { value: 3, name: 'AIN2 - AIN3 (Differential)' }, 
    { value: 4, name: 'AIN0 - GND (Single-Ended)' }, 
    { value: 5, name: 'AIN1 - GND (Single-Ended)' }, 
    { value: 6, name: 'AIN2 - GND (Single-Ended)' }, 
    { value: 7, name: 'AIN3 - GND (Single-Ended)' }, 
];


export const ads1115 = {
    defaults: () => ({
        'configs[0]': 72,
        'settings.values[0].name': 'Analog',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            i2c_address: { name: 'I2C Address', type: 'select', options: i2c_address, var: 'configs[0]'  },
            gain: { name: 'Gain', type: 'select', options: gainOptions, var: 'configs[1]'  },
            multiplexer: { name: 'Input Multiplexer', type: 'select', options: multiplexerOptions, var: 'configs[2]'  },
        }
    },
    advanced: {
        name: 'Two point calibration',
        configs: {
            enabled: { name: 'Calibration Enabled', type: 'number', var: 'configs[3]'  },
            point1: [{ name: 'Point 1', type: 'number', var: 'configs_long[0]' }, { name: '=', type: 'number', var: 'configs_float[1]' }],
            point2: [{ name: 'Point 2', type: 'number', var: 'configs_long[1]' }, { name: '=', type: 'number', var: 'configs_float[1]' }],
        }
    },
    data: true,
    vars: 1,
}