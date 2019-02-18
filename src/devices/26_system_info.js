const indicator = [
    { value: 0, name: 'Uptime' }, 
    { value: 1, name: 'Free Ram' }, 
    { value: 2, name: 'WiFi RSSI' }, 
    { value: 3, name: 'Input VCC' }, 
    { value: 4, name: 'System load' }, 
    { value: 5, name: 'IP 1.Octet' }, 
    { value: 6, name: 'IP 2.Octet' }, 
    { value: 7, name: 'IP 3.Octet' }, 
    { value: 8, name: 'IP 4.Octet' }, 
    { value: 9, name: 'Web activity' }, 
    { value: 10, name: 'Free Stack' }, 
    { value: 11, name: 'None' }, 
]

export const systemInfo = {
    defaults: () => ({
        gpio4: 0,
        'settings.values[0].name': 'Uptime',
        'settings.values[1].name': 'Uptime',
        'settings.values[2].name': 'Uptime',
        'settings.values[3].name': 'Uptime',
    }),
    sensor: {
        name: 'Settings',
        configs: {
            indicator1: { name: 'Indicator 1', type: 'select', options: indicator, var: 'configs_long[0]' },
            indicator1: { name: 'Indicator 2', type: 'select', options: indicator, var: 'configs_long[1]' },
            indicator1: { name: 'Indicator 3', type: 'select', options: indicator, var: 'configs_long[2]' },
            indicator1: { name: 'Indicator 4', type: 'select', options: indicator, var: 'configs_long[3]' },
        }
    },
    data: true,
    vars: 4,
}