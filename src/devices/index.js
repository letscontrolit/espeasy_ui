import { inputSwitch } from './1_input_switch';
import { dht } from './5_dht';
import { levelControl } from './21_level_control';
import { dummyDevice } from './33_dummy_device';

export const devices = [
    { name: '- None -', value: 0, fields: [] },
    { name: 'Environment - DHT11/12/22  SONOFF2301/7021', value: 5, fields: dht },
    { name: 'Regulator - Level Control', value: 21, fields: levelControl },
    { name: 'Generic - Dummy Device', value: 33, fields: dummyDevice },
    { name: 'Switch input - Switch', value: 1, fields: inputSwitch },
];