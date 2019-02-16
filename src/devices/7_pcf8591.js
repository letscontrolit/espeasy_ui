import { pins } from './_defs';

const eventTypes = [
    { value: 0, name: 'Disabled' }, 
    { value: 1, name: 'Active on LOW' }, 
    { value: 2, name: 'Active on HIGH' }, 
    { value: 3, name: 'Active on LOW and HIGH' }, 
]

export const pcf8591 = {
    sensor: {
        name: 'Sensor',
        configs: {
            port: { name: 'PORT', type: 'number', var: 'gpio4' },
        }
    },
    data: true,
}