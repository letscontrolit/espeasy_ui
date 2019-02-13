import { pins } from './_defs';

export const analogInput = {
    sensor: {
        name: 'Sensor',
        configs: {
            oversampling: { name: 'Oversampling', type: 'checkbox', var: 'configs[0]' },
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