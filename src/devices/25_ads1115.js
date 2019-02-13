
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
    data: {
        name: 'Data Acquisition',
        configs: {
            send1: { name: 'Send to Controller 1', type: 'checkbox', var: 'TaskDeviceSendData[0]' },
            send2: { name: 'Send to Controller 2', type: 'checkbox', var: 'TaskDeviceSendData[1]' },
            send3: { name: 'Send to Controller 3', type: 'checkbox', var: 'TaskDeviceSendData[2]' },
            idx1: { name: 'IDX1', type: 'number', var: 'TaskDeviceID[0]' },
            idx2: { name: 'IDX2', type: 'number', var: 'TaskDeviceID[1]' },
            idx3: { name: 'IDX3', type: 'number', var: 'TaskDeviceID[2]' },
            interval: { name: 'Interval', type: 'number', var: 'interval' },
        }
    }
}