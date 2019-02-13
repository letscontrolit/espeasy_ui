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
import { pme } from './11_pme';
import { lcd2004 } from './12_lcd';
import { hcsr04 } from './13_hcsr04';
import { si7021 } from './14_si7021';
import { tls2561 } from './15_tls2561';
import { pn532 } from './17_pn532';
import { dust } from './18_dust';
import { pcf8574 } from './19_pcf8574';
import { ser2net } from './20_ser2net';
import { levelControl } from './21_level_control';
import { pca9685 } from './22_pca9685';
import { oled1306 } from './23_oled1306';
import { mlx90614 } from './24_mlx90614';
import { ads1115 } from './25_ads1115';
import { systemInfo } from './26_system_info';
import { ina219 } from './27_ina219';
import { bmx280 } from './28_bmx280';
import { mqttDomoticz } from './29_mqtt_domoticz';
import { bmp280 } from './30_bmp280';
import { sht1x } from './31_sht1x';
import { ms5611 } from './32_ms5611';
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
    { name: 'Extra IO - ProMini Extender', value: 11, fields: pme },
    { name: 'Display - LCD2004', value: 12, fields: lcd2004 },
    { name: 'Position - HC-SR04, RCW-0001, etc.', value: 13, fields: hcsr04 },
    { name: 'Environment - SI7021/HTU21D', value: 14, fields: si7021 },
    { name: 'Light/Lux - TSL2561', value: 15, fields: tls2561 },
    //{ name: 'Communication - IR', value: 16, fields: bh1750 },
    { name: 'RFID - PN532', value: 17, fields: pn532 },
    { name: 'Dust - Sharp GP2Y10', value: 18, fields: dust },
    { name: 'Switch input - PCF8574', value: 19, fields: pcf8574 },
    { name: 'Communication - Serial Server', value: 20, fields: ser2net },
    { name: 'Regulator - Level Control', value: 21, fields: levelControl },
    { name: 'Extra IO - PCA9685', value: 22, fields: pca9685 },
    { name: 'Display - OLED SSD1306', value: 23, fields: oled1306 },
    { name: 'Environment - MLX90614', value: 24, fields: mlx90614 },
    { name: 'Analog input - ADS1115', value: 25, fields: ads1115 },
    { name: 'Generic - System Info', value: 26, fields: systemInfo },
    { name: 'Energy (DC) - INA219', value: 27, fields: ina219 },
    { name: 'Environment - BMx280', value: 28, fields: bmx280 },
    { name: 'Output - Domoticz MQTT Helper', value: 29, fields: mqttDomoticz },
    { name: 'Environment - BMP280', value: 30, fields: bmp280 },
    { name: 'Environment - SHT1X', value: 31, fields: sht1x },
    { name: 'Environment - MS5611 (GY-63)', value: 32, fields: ms5611 },
    { name: 'Generic - Dummy Device', value: 33, fields: dummyDevice },
    { name: 'Environment - DHT12 (I2C)', value: 34, fields: dummyDevice },
    { name: 'Display - OLED SSD1306/SH1106 Framed', value: 36, fields: dummyDevice },
    { name: 'Generic - MQTT Import', value: 37, fields: dummyDevice },
    { name: 'Output - NeoPixel (Basic)', value: 38, fields: dummyDevice },
    { name: 'Environment - Thermocouple', value: 39, fields: dummyDevice },
    { name: 'Output - NeoPixel (Word Clock)', value: 41, fields: dummyDevice },
    { name: 'Output - NeoPixel (Candle)', value: 42, fields: dummyDevice },
    { name: 'Output - Clock', value: 43, fields: dummyDevice },
    { name: 'Communication - P1 Wifi Gateway', value: 44, fields: dummyDevice },
    { name: 'Gases - CO2 MH-Z19', value: 49, fields: dummyDevice },
    { name: 'Gases - CO2 Senseair', value: 52, fields: dummyDevice },
    { name: 'Dust - SDS011/018/198', value: 56, fields: dummyDevice },
    { name: 'Switch Input - Rotary Encoder', value: 59, fields: dummyDevice },
    { name: 'Keypad - TTP229 Touc', value: 63, fields: dummyDevice },
];