return {
    PID: p.getInt32(true), // 4
    Version: p.getInt32(), // 8
    Build: p.getInt16(), // 10
    IP: p.getBytes(4), // 14
    Gateway: p.getBytes(4), // 18
    Subnet: p.getBytes(4),
    DNS: p.getBytes(4),
    IP_octet: p.getByte(),
    Unit: p.getByte(),
    Name: p.getString(26),
    NTPHost: p.getString(64),
    Delay: p.getInt32(),
    Pin_i2c_sda: p.getByte(),
    Pin_i2c_scl: p.getByte(),
    Pin_status_led: p.getByte(),
    Pin_sd_cs: p.getByte(),
    PinBootStates: p.getBytes(17),
    Syslog_IP: p.getBytes(4),
    ___padding2: p.getInt16(),
    UDPPort: p.getInt16(),
    ___padding4: p.getInt16(),
    SyslogLevel: p.getByte(),
    SerialLogLevel: p.getByte(),
    WebLogLevel: p.getByte(),
    SDLogLevel: p.getByte(),
    BaudRate: p.getInt32(),
    MessageDelay: p.getInt32(),
    deepSleep: p.getByte(),
    CustomCSS: p.getByte(),
    DST: p.getByte(),
    WDI2CAddress: p.getByte(),
    UseRules: p.getByte(),
    UseSerial: p.getByte(),
    UseSSDP: p.getByte(),
    UseNTP: p.getByte(),
    WireClockStretchLimit: p.getInt32(),
    GlobalSync: p.getByte(),
    ConnectionFailuresThreshold: p.getInt32(),
    TimeZone: p.getInt16(true),
    MQTTRetainFlag: p.getByte(),
    InitSPI: p.getByte(),
    Protocol: p.getBytes(CONTROLLER_MAX),
    Notification: p.getBytes(NOTIFICATION_MAX), // till here its verified to be correct, but might be few next lines are still good
    TaskDeviceNumber: p.getBytes(TASKS_MAX),
    OLD_TaskDeviceID: p.getInts(TASKS_MAX), 
    TaskDevicePin: [...Array(4)].map(() => p.getBytes(TASKS_MAX)),
    TaskDevicePin1PullUp: p.getBytes(TASKS_MAX),
    TaskDevicePluginConfig: [...Array(TASKS_MAX)].map(() => p.getBytes(PLUGIN_CONFIGVAR_MAX)),
    TaskDevicePin1Inversed: p.getBytes(TASKS_MAX), // good till here ?
    TaskDevicePluginConfigFloat: [...Array(TASKS_MAX)].map((v, i) => p.getFloats(PLUGIN_CONFIGFLOATVAR_MAX)), // 12 * 4 * 4 = 192
    TaskDevicePluginConfigLong: [...Array(TASKS_MAX)].map((v, i) => p.getLongs(PLUGIN_CONFIGLONGVAR_MAX)), // 192 /// 384        
    OLD_TaskDeviceSendData: p.getBytes(TASKS_MAX),
    TaskDeviceGlobalSync: p.getBytes(TASKS_MAX),
    TaskDeviceDataFeed: p.getBytes(TASKS_MAX),
    TaskDeviceTimer: p.getLongs(TASKS_MAX),
    TaskDeviceEnabled: p.getBytes(TASKS_MAX),
    ControllerEnabled: p.getBytes(CONTROLLER_MAX),
    NotificationEnabled: p.getBytes(NOTIFICATION_MAX),
    TaskDeviceID: [...Array(CONTROLLER_MAX)].map((v, i) => p.getInts(TASKS_MAX)), // 3 * 2 * 12 = 72
    TaskDeviceSendData: [...Array(CONTROLLER_MAX)].map((v, i) => p.getBytes(TASKS_MAX)), // 3 * 12 = 36
    __padding5: p.getBytes(194),  // somewhere in above part we lost 194 bytes ... hmmm
    Pin_status_led_Inversed: p.getByte(), // from here on it's correct again
    deepSleepOnFail: p.getByte(),
    UseValueLogger: p.getByte(),
    ArduinoOTAEnable: p.getByte(),
    DST_Start: p.getInt16(),
    DST_End: p.getInt16(),
    UseRTOSMultitasking: p.getByte(),
    Pin_Reset: p.getByte(), // 12
    SyslogFacility: p.getByte(), // 23
    StructSize: p.getInt32(),
    MQTTUseUnitNameAsClientId: p.getByte(),
    Latitude: p.getFloat(),
    Longitude: p.getFloat(),
    VariousBits1: p.getInt32(),
    ResetFactoryDefaultPreference: p.getInt32(),
};