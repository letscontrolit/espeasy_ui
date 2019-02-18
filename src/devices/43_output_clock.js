import { pins, getTasks, getTaskValues } from './_defs';

const type = [
    { value: 0, name: '' },
    { value: 1, name: 'Off' }, 
    { value: 2, name: 'On' }, 
]

export const clock = {
    defaults: () => ({
        gpio1: 255,
        'settings.values[0].name': 'Output',
    }),
    sensor: {
        name: 'Sensor',
        configs: {
            gpio: { name: 'GPIO - Clock Event', type: 'select', options: pins, var: 'gpio1'  },
            event1: [{ name: 'Day, Time 1', type: 'string', var: 'configs[0]' }, { name: '', type: 'select', options: type, var: 'configs[1]'  }],
            event2: [{ name: 'Day, Time 1', type: 'string', var: 'configs[0]' }, { name: '', type: 'select', options: type, var: 'configs[1]'  }],
            event3: [{ name: 'Day, Time 1', type: 'string', var: 'configs[0]' }, { name: '', type: 'select', options: type, var: 'configs[1]'  }],
            event4: [{ name: 'Day, Time 1', type: 'string', var: 'configs[0]' }, { name: '', type: 'select', options: type, var: 'configs[1]'  }],
            event5: [{ name: 'Day, Time 1', type: 'string', var: 'configs[0]' }, { name: '', type: 'select', options: type, var: 'configs[1]'  }],
            event6: [{ name: 'Day, Time 1', type: 'string', var: 'configs[0]' }, { name: '', type: 'select', options: type, var: 'configs[1]'  }],
            event7: [{ name: 'Day, Time 1', type: 'string', var: 'configs[0]' }, { name: '', type: 'select', options: type, var: 'configs[1]'  }],
            event8: [{ name: 'Day, Time 1', type: 'string', var: 'configs[0]' }, { name: '', type: 'select', options: type, var: 'configs[1]'  }],
        }
    },
    data: true,
    vals: 1
}