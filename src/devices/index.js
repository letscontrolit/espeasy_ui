import { inputSwitch } from './1_input_switch';
import { analogInput } from './2_analog_input';
import { genericPulse } from './3_generic_pulse';
import { ds18b20 } from './4_ds18b20';
import { dht } from './5_dht';
import { bmp085 } from './6_bmp085';
import { pcf8591 } from './7_pcf8591';
import { rfidWeigand } from './8_rfid';
import { inputMcp } from './9_io_mcp';
import { bh1750 } from './10_light_lux';
import { levelControl } from './21_level_control';
import { dummyDevice } from './33_dummy_device';

export const devices = [
    { name: '- None -', value: 0, fields: [] },
    { name: 'Switch input - Switch', value: 1, fields: inputSwitch },
    { name: 'Analog input - internal', value: 2, fields: analogInput },
    { name: 'Generic - Pulse counter', value: 3, fields: genericPulse },
    { name: 'Environment - DS18b20', value: 4, fields: ds18b20 },
    { name: 'Environment - DHT11/12/22  SONOFF2301/7021', value: 5, fields: dht },
    { name: 'Environment - BMP085/180', value: 6, fields: bmp085 },
    { name: 'Analog input - PCF8591', value: 7, fields: pcf8591 },
    { name: 'RFID - Wiegand', value: 8, fields: rfidWeigand },
    { name: 'Switch input - MCP23017', value: 9, fields: inputMcp },
    { name: 'Light/Lux - BH1750', value: 10, fields: bh1750 },
    { name: 'Regulator - Level Control', value: 21, fields: levelControl },
    { name: 'Generic - Dummy Device', value: 33, fields: dummyDevice },
];