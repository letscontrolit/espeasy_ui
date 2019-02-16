import { pins } from './_defs';

const sensorModel = [
    { value: 11, name: 'DHT11' }, 
    { value: 22, name: 'DHT22' }, 
    { value: 12, name: 'DHT12' }, 
    { value: 23, name: 'Sonoff am2301' }, 
    { value: 70, name: 'Sonoff si7021' },
]

export const dht = {
    defaults: () => ({
        gpio1: 255,
        interval: 60,
        'configs[0]': 11,
        'settings.values[0].name': 'Temperature',
        'settings.values[1].name': 'Humidity',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            gpio: { name: 'GPIO Data', type: 'select', options: pins, var: 'gpio1' },
            switch_type: { name: 'Sensor model', type: 'select', options: sensorModel, var: 'configs[0]'  },
        }
    },
    data: true,
    vals: 2,
}