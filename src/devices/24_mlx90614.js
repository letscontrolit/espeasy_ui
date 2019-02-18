const options = [
    { value: 0, name: 'IR Object Temperature' }, 
    { value: 1, name: 'Ambient Temperature' }, 
]

export const mlx90614 = {
    defaults: () => ({
        gpio4: 0,
        'settings.values[0].name': 'Temperature',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            port: { name: 'Port', type: 'number', var: 'gpio4' },
            option: { name: 'Option', type: 'select', options: options, var: 'configs[0]'  },
        }
    },
    data: true,
    vars: 1
}