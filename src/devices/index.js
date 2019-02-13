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
    { name: 'Generic - Dummy Device', value: 33, fields: dummyDevice },
];

/*
<option value="22">Extra IO - PCA9685</option>
<option value="23">Display - OLED SSD1306</option>
<option value="24">Environment - MLX90614</option>
<option value="25">Analog input - ADS1115</option>
<option value="26">Generic - System Info</option>
<option value="27">Energy (DC) - INA219</option>
<option value="28">Environment - BMx280</option>
<option value="29">Output - Domoticz MQTT Helper</option>
<option value="30">Environment - BMP280</option>
<option value="31">Environment - SHT1X</option>
<option value="32">Environment - MS5611 (GY-63)</option>
<option value="34">Environment - DHT12 (I2C)</option>
<option value="36">Display - OLED SSD1306/SH1106 Framed</option>
<option value="37">Generic - MQTT Import</option>
<option value="38">Output - NeoPixel (Basic)</option>
<option value="39">Environment - Thermocouple</option>


<option value="44">Communication - P1 Wifi Gateway</option>
<option value="56">Dust - SDS011/018/198</option>
<option value="49">Gases - CO2 MH-Z19</option>
<option value="52">Gases - CO2 Senseair</option>
<option value="63">Keypad - TTP229 Touch</option>
<option value="43">Output - Clock</option>
<option value="42">Output - NeoPixel (Candle)</option>
<option value="41">Output - NeoPixel (Word Clock)</option>
<option value="59">Switch Input - Rotary Encoder</option>

*/