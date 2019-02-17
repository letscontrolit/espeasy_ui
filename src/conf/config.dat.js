import { parseConfig, writeConfig } from '../lib/parser';
import { settings } from '../lib/settings';

const TASKS_MAX = 12;
const NOTIFICATION_MAX = 3;
const CONTROLLER_MAX = 3;
const PLUGIN_CONFIGVAR_MAX = 8;
const PLUGIN_CONFIGFLOATVAR_MAX = 4;
const PLUGIN_CONFIGLONGVAR_MAX = 4;
const PLUGIN_EXTRACONFIGVAR_MAX = 16;
const NAME_FORMULA_LENGTH_MAX = 40;
const VARS_PER_TASK = 4;

export const configDatParseConfig = [
    { prop: 'status.PID', type: 'int32' },
    { prop: 'status.version', type: 'int32' },
    { prop: 'status.build', type: 'int16' },
    { prop: 'config.IP.ip', type: 'bytes', length: 4 },
    { prop: 'config.IP.gw', type: 'bytes', length: 4 }, 
    { prop: 'config.IP.subnet', type: 'bytes', length: 4 },
    { prop: 'config.IP.dns', type: 'bytes', length: 4 },
    { prop: 'config.experimental.ip_octet', type: 'byte' },
    { prop: 'config.general.unitnr', type: 'byte' },
    { prop: 'config.general.unitname', type: 'string', length: 26 },
    { prop: 'config.ntp.host', type: 'string', length: 64 },
    { prop: 'config.sleep.sleeptime', type: 'int32' },
    { prop: 'hardware.i2c.sda', type: 'byte' },
    { prop: 'hardware.i2c.scl', type: 'byte' },
    { prop: 'hardware.led.gpio', type: 'byte' },
    { prop: 'Pin_sd_cs', type: 'byte' }, // TODO
    { prop: 'hardware.gpio', type: 'bytes', length: 17 },
    { prop: 'config.log.syslog_ip', type: 'bytes', length: 4 },
    { prop: 'config.espnetwork.port', type: 'int32' },
    { prop: 'config.log.syslog_level', type: 'byte' },
    { prop: 'config.log.serial_level', type: 'byte' },
    { prop: 'config.log.web_level', type: 'byte' },
    { prop: 'config.log.sd_level', type: 'byte' },
    { prop: 'config.serial.baudrate', type: 'int32' },
    { prop: 'config.mqtt.interval', type: 'int32' },
    { prop: 'config.sleep.awaketime', type: 'byte' },
    { prop: 'CustomCSS', type: 'byte' }, // TODO
    { prop: 'config.dst.enabled', type: 'byte' },
    { prop: 'config.experimental.WDI2CAddress', type: 'byte' },
    { prop: 'config.rules.enabled', type: 'byte' },
    { prop: 'config.serial.enabled', type: 'byte' },
    { prop: 'config.ssdp.enabled', type: 'byte' },
    { prop: 'config.ntp.enabled', type: 'byte' },
    { prop: 'config.experimental.WireClockStretchLimit', type: 'int32' },
    { prop: 'GlobalSync', type: 'byte' }, // TODO
    { prop: 'config.experimental.ConnectionFailuresThreshold', type: 'int32' },
    { prop: 'TimeZone', type: 'int16', signed: true},// TODO
    { prop: 'config.mqtt.retain_flag', type: 'byte' },
    { prop: 'hardware.spi.enabled', type: 'byte' },
    [...Array(CONTROLLER_MAX)].map((x, i) => ({ prop: `controllers[${i}].protocol`, type:'byte' })),
    [...Array(NOTIFICATION_MAX)].map((x, i) => ({ prop: `notifications[${i}].type`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].device`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].OLD_TaskDeviceID`, type:'int32' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].gpio1`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].gpio2`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].gpio3`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].gpio4`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].pin1pullup`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].configs`, type:'ints', length: PLUGIN_CONFIGVAR_MAX })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].pin1inversed`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].configs_float`, type:'floats', length: PLUGIN_CONFIGFLOATVAR_MAX })), 
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].configs_long`, type:'longs', length: PLUGIN_CONFIGLONGVAR_MAX })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].OLD_senddata`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].global_sync`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].data_feed`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].interval`, type:'int32' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].enabled`, type:'byte' })),
    [...Array(CONTROLLER_MAX)].map((x, i) => ({ prop: `controllers[${i}].enabled`, type:'byte' })),
    [...Array(NOTIFICATION_MAX)].map((x, i) => ({ prop: `notifications[${i}].enabled`, type:'byte' })), 
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].TaskDeviceID`, type:'longs', length: CONTROLLER_MAX })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].TaskDeviceSendData`, type:'bytes', length: CONTROLLER_MAX })),
    { prop: 'hardware.led.inverse', type: 'byte' }, 
    { prop: 'config.sleep.sleeponfailiure', type: 'byte' },
    { prop: 'UseValueLogger', type: 'byte' },// TODO
    { prop: 'ArduinoOTAEnable', type: 'byte' },// TODO
    { prop: 'config.dst.DST_Start', type: 'int16' },
    { prop: 'config.dst.DST_End', type: 'int16' },
    { prop: 'UseRTOSMultitasking', type: 'byte' },// TODO
    { prop: 'hardware.reset.pin', type: 'byte' }, 
    { prop: 'config.log.syslog_facility', type: 'byte' }, 
    { prop: 'StructSize', type: 'int32' },// TODO
    { prop: 'config.mqtt.useunitname', type: 'byte' },
    { prop: 'config.location.lat', type: 'float' },
    { prop: 'config.location.long', type: 'float' },
    { prop: 'config._emptyBit', type: 'bit' },
    { prop: 'config.general.appendunit', type: 'bit' },
    { prop: 'config.mqtt.changeclientid', type: 'bit' },
    { prop: 'config.rules.oldengine', type: 'bit' },
    { prop: 'config._bit4', type: 'bit' },
    { prop: 'config._bit5', type: 'bit' },
    { prop: 'config._bit6', type: 'bit' },
    { prop: 'config._bit7', type: 'bit' },
    { prop: 'config._bits1', type: 'byte' },
    { prop: 'config._bits2', type: 'byte' },
    { prop: 'config._bits3', type: 'byte' },
    { prop: 'ResetFactoryDefaultPreference', type: 'int32' },// TODO
].flat();

export const TaskSettings = [
    { prop: 'index', type:'byte' },
    { prop: 'name', type:'string', length: NAME_FORMULA_LENGTH_MAX + 1 },
    [...Array(VARS_PER_TASK)].map((x, i) => ({ prop: `values[${i}].formula`, type:'string', length: NAME_FORMULA_LENGTH_MAX + 1 })),
    [...Array(VARS_PER_TASK)].map((x, i) => ({ prop: `values[${i}].name`, type:'string', length: NAME_FORMULA_LENGTH_MAX + 1 })),
    { prop: 'value_names', type:'string', length: NAME_FORMULA_LENGTH_MAX + 1 },
    { prop: 'plugin_config_long', type:'longs', length: PLUGIN_EXTRACONFIGVAR_MAX },
    { prop: 'decimals', type:'bytes', length: VARS_PER_TASK },
    { prop: 'plugin_config', type:'ints', length: PLUGIN_EXTRACONFIGVAR_MAX },
].flat();

export const ControllerSettings = [
    { prop: 'dns', type:'byte' },
    { prop: 'IP', type:'bytes', length: 4 },
    { prop: 'port', type:'int32' },
    { prop: 'hostname', type:'string', length: 65 },
    { prop: 'publish', type:'string', length: 129 },
    { prop: 'subscribe', type:'string', length: 129 },
    { prop: 'MQTT_lwt_topic', type:'string', length: 129 },
    { prop: 'lwt_message_connect', type:'string', length: 129 },
    { prop: 'lwt_message_disconnect', type:'string', length: 129 },
    { prop: 'minimal_time_between', type:'int32' },
    { prop: 'max_queue_depth', type:'int32' },
    { prop: 'max_retry', type:'int32' },
    { prop: 'delete_oldest', type:'byte' },
    { prop: 'client_timeout', type:'int32' },
    { prop: 'must_check_reply', type:'byte' },
];

export const NotificationSettings = [
    { prop: 'server', type:'string', length: 65 },
    { prop: 'port', type:'int16' },
    { prop: 'domain', type:'string', length: 65 },
    { prop: 'sender', type:'string', length: 65 },
    { prop: 'receiver', type:'string', length: 65 },
    { prop: 'subject', type:'string', length: 129 },
    { prop: 'body', type:'string', length: 513 },
    { prop: 'pin1', type:'byte' },
    { prop: 'pin2', type:'byte' },
    { prop: 'user', type:'string', length: 49 },
    { prop: 'pass', type:'string', length: 33 },
];

export const SecuritySettings = [
    { prop: 'WifiSSID', type:'string', length: 32 },
    { prop: 'WifiKey', type:'string', length: 64 },
    { prop: 'WifiSSID2', type:'string', length: 32 },
    { prop: 'WifiKey2', type:'string', length: 64 },
    { prop: 'WifiAPKey', type:'string', length: 64 },
    [...Array(CONTROLLER_MAX)].map((x, i) => ({ prop: `controllers[${i}].user`, type:'string', length: 26 })),
    [...Array(CONTROLLER_MAX)].map((x, i) => ({ prop: `controllers[${i}].password`, type:'string', length: 64 })),
    { prop: 'password', type:'string', length: 26 },
    { prop: 'AllowedIPrangeLow', type:'bytes', length: 4 },
    { prop: 'AllowedIPrangeHigh', type:'bytes', length: 4 },
    { prop: 'IPblockLevel', type:'byte' },
    { prop: 'ProgmemMd5', type:'bytes', length: 16 },
    { prop: 'md5', type:'bytes', length: 16 },
].flat();

export const loadConfig = () => {
    return fetch('config.dat').then(response => response.arrayBuffer()).then(async response => { 
        const settings = parseConfig(response, configDatParseConfig);

        [...Array(12)].map((x, i) => {
            settings.tasks[i].settings = parseConfig(response, TaskSettings, 1024*4 + 1024 * 2 * i);
            settings.tasks[i].extra = parseConfig(response, TaskSettings, 1024*5 + 1024 * 2 * i);
        });
    
        [...Array(3)].map((x, i) => {
            settings.controllers[i].settings = parseConfig(response, ControllerSettings, 1024*27 + 1024 * 2 * i);
            settings.controllers[i].extra = parseConfig(response, ControllerSettings, 1024*28 + 1024 * 2 * i);
        });
    
        const notificationResponse = await fetch('notification.dat').then(response => response.arrayBuffer());
        [...Array(3)].map((x, i) => {
            settings.notifications[i].settings = parseConfig(notificationResponse, NotificationSettings, 1024 * i);
        });
    
        const securityResponse = await fetch('security.dat').then(response => response.arrayBuffer());
        settings.config.security = [...Array(3)].map((x, i) => {
             return parseConfig(securityResponse, SecuritySettings, 1024 * i);
        });
    
        return { response, settings };
    }).then(conf => {
        settings.init(conf.settings);
        settings.binary = new Uint8Array(conf.response);
        console.log(conf.settings);
    });
}

let ii = 0;
export const saveConfig = (save = true) => {
    if (ii === 0) {
        const buffer = new ArrayBuffer(65536);
        writeConfig(buffer, settings.settings, configDatParseConfig);
        [...Array(12)].map((x, i) => {
            return {
                settings: writeConfig(buffer, settings.settings.tasks[i].settings, TaskSettings, 1024*4 + 1024 * 2 * i),
                extra: writeConfig(buffer, settings.settings.tasks[i].extra, TaskSettings, 1024*5 + 1024 * 2 * i),
            };
        });

        [...Array(3)].map((x, i) => {
            return {
                settings: writeConfig(buffer, settings.settings.controllers[i].settings, ControllerSettings, 1024*27 + 1024 * 2 * i),
                extra: writeConfig(buffer, settings.settings.controllers[i].extra, ControllerSettings, 1024*28 + 1024 * 2 * i),
            };
        });
        if (save) saveData(buffer, 'config.dat');
        else return buffer;
    } else if (ii === 1) {
        const bufferNotifications = new ArrayBuffer(4096);
        [...Array(3)].map((x, i) => {
            return writeConfig(bufferNotifications, settings.settings.notifications[i], NotificationSettings, 1024 * i);
        });
        saveData(bufferNotifications, 'notification.dat');
    } else if (ii === 2) {
        const bufferSecurity = new ArrayBuffer(4096);
        [...Array(3)].map((x, i) => {
            return writeConfig(bufferSecurity, settings.settings.security[i], SecuritySettings, 1024 * i);
        });
        saveData(bufferSecurity, 'security.dat');
    }
    ii = (ii + 1) % 3;
}

const saveData = (function () {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        const blob = new Blob([new Uint8Array(data)]);
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());
