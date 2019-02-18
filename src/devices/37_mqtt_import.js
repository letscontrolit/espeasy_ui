

export const mqttImport = {
    defaults: () => ({
        'settings.values[0].name': 'Value1',
        'settings.values[1].name': 'Value2',
        'settings.values[2].name': 'Value3',
        'settings.values[3].name': 'Value4',
    }),
    settings: {
        name: 'Data Settings',
        configs: {
            switch_type: { name: 'MQTT Topic 1', type: 'text', var: 'configs[0]'  },
            switch_type: { name: 'MQTT Topic 2', type: 'text', var: 'configs[0]'  },
            switch_type: { name: 'MQTT Topic 3', type: 'text', var: 'configs[0]'  },
            switch_type: { name: 'MQTT Topic 4', type: 'text', var: 'configs[0]'  },
        }
    },
    vars: 4
}