
const sensorModel = [
    { value: 1, name: 'SENSOR_TYPE_SINGLE' }, 
    { value: 2, name: 'SENSOR_TYPE_TEMP_HUM' }, 
    { value: 3, name: 'SENSOR_TYPE_TEMP_BARO' }, 
    { value: 4, name: 'SENSOR_TYPE_TEMP_HUM_BARO' }, 
    { value: 5, name: 'SENSOR_TYPE_DUAL' },
    { value: 5, name: 'SENSOR_TYPE_TRIPLE' },
    { value: 7, name: 'SENSOR_TYPE_QUAD' },
    { value: 10, name: 'SENSOR_TYPE_SWITCH' },
    { value: 11, name: 'SENSOR_TYPE_DIMMER' },
    { value: 20, name: 'SENSOR_TYPE_LONG' },
    { value: 21, name: 'SENSOR_TYPE_WIND' },
]

export const dht12 = {
    data: {
        name: 'Data Acquisition',
        configs: {
            interval: { name: 'Interval', type: 'number' },
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