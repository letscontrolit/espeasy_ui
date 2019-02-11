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
    { prop: 'IP_octet', type: 'byte' },
    { prop: 'config.general.unitnr', type: 'byte' },
    { prop: 'config.general.unitname', type: 'string', length: 26 },
    { prop: 'NTPHost', type: 'string', length: 64 },
    { prop: 'Delay', type: 'int32' },
    { prop: 'hardware.i2c.sda', type: 'byte' },
    { prop: 'hardware.i2c.scl', type: 'byte' },
    { prop: 'hardware.led.gpio', type: 'byte' },
    { prop: 'Pin_sd_cs', type: 'byte' },
    { prop: 'hardware.gpio', type: 'bytes', length: 17 },
    { prop: 'Syslog_IP', type: 'bytes', length: 4 },
    { prop: 'UDPPort', type: 'int32' },
    { prop: 'SyslogLevel', type: 'byte' },
    { prop: 'SerialLogLevel', type: 'byte' },
    { prop: 'WebLogLevel', type: 'byte' },
    { prop: 'SDLogLevel', type: 'byte' },
    { prop: 'BaudRate', type: 'int32' },
    { prop: 'MessageDelay', type: 'int32' },
    { prop: 'deepSleep', type: 'byte' },
    { prop: 'CustomCSS', type: 'byte' },
    { prop: 'DST', type: 'byte' },
    { prop: 'WDI2CAddress', type: 'byte' },
    { prop: 'UseRules', type: 'byte' },
    { prop: 'UseSerial', type: 'byte' },
    { prop: 'UseSSDP', type: 'byte' },
    { prop: 'UseNTP', type: 'byte' },
    { prop: 'WireClockStretchLimit', type: 'int32' },
    { prop: 'GlobalSync', type: 'byte' },
    { prop: 'ConnectionFailuresThreshold', type: 'int32' },
    { prop: 'TimeZone', type: 'int16', signed: true},
    { prop: 'MQTTRetainFlag', type: 'byte' },
    { prop: 'hardware.spi.enabled', type: 'byte' },
    [...Array(CONTROLLER_MAX)].map((x, i) => ({ prop: `controllers[${i}].protocol`, type:'byte' })),
    [...Array(NOTIFICATION_MAX)].map((x, i) => ({ prop: `notifications[${i}].type`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].device`, type:'byte' })),
    { prop: 'OLD_TaskDeviceID', type: 'longs', length: TASKS_MAX }, 
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].gpio1`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].gpio2`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].gpio3`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].gpio4`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].pin1pullup`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].configs`, type:'ints', length: PLUGIN_CONFIGVAR_MAX })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].pin1inversed`, type:'byte' })),
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].configs_float`, type:'floats', length: PLUGIN_CONFIGFLOATVAR_MAX })), 
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].configs_long`, type:'longs', length: PLUGIN_CONFIGFLOATVAR_MAX })),
    { prop: 'OLD_TaskDeviceSendData', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDeviceGlobalSync', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDeviceDataFeed', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDeviceTimer', type: 'longs', length: TASKS_MAX },
    [...Array(TASKS_MAX)].map((x, i) => ({ prop: `tasks[${i}].enabled`, type:'byte' })),
    [...Array(CONTROLLER_MAX)].map((x, i) => ({ prop: `controllers[${i}].enabled`, type:'byte' })),
    [...Array(NOTIFICATION_MAX)].map((x, i) => ({ prop: `notifications[${i}].enabled`, type:'byte' })), 
    { prop: 'TaskDeviceID.1', type: 'longs', length: TASKS_MAX },
    { prop: 'TaskDeviceID.2', type: 'longs', length: TASKS_MAX },
    { prop: 'TaskDeviceID.3', type: 'longs', length: TASKS_MAX },
    { prop: 'TaskDeviceSendData.1', type: 'bytes', length: TASKS_MAX }, 
    { prop: 'TaskDeviceSendData.2', type: 'bytes', length: TASKS_MAX },
    { prop: 'TaskDeviceSendData.3', type: 'bytes', length: TASKS_MAX },
    { prop: 'hardware.led.inverse', type: 'byte' }, 
    { prop: 'config.sleep.sleeponfailiure', type: 'byte' },
    { prop: 'UseValueLogger', type: 'byte' },
    { prop: 'ArduinoOTAEnable', type: 'byte' },
    { prop: 'DST_Start', type: 'int16' },
    { prop: 'DST_End', type: 'int16' },
    { prop: 'UseRTOSMultitasking', type: 'byte' },
    { prop: 'hardware.reset.pin', type: 'byte' }, 
    { prop: 'SyslogFacility', type: 'byte' }, 
    { prop: 'StructSize', type: 'int32' },
    { prop: 'MQTTUseUnitNameAsClientId', type: 'byte' },
    { prop: 'Latitude', type: 'float' },
    { prop: 'Longitude', type: 'float' },
    { prop: 'VariousBits1', type: 'int32' },
    { prop: 'ResetFactoryDefaultPreference', type: 'int32' },
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
            console.log(i);
             return parseConfig(securityResponse, SecuritySettings, 1024 * i);
        });
    
        return settings;
    }).then(sets => {
        settings.init(sets);
        console.log(sets);
    });
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

let ii = 0;
export const saveConfig = () => {
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
                settings: writeConfig(buffer, settings.settings.controllers[i].settings, ControllerSettings, 1024*28 + 1024 * 2 * i),
                extra: writeConfig(buffer, settings.settings.controllers[i].extra, ControllerSettings, 1024*29 + 1024 * 2 * i),
            };
        });
        saveData(buffer, 'config.dat');
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

