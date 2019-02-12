export const nodes = [
    // TRIGGERS
    {
        group: 'TRIGGERS',
        type: 'timer',
        inputs: [],
        outputs: [1],
        config: [{
            name: 'timer',
            type: 'select',
            values: [1, 2, 3, 4, 5, 6, 7, 8],
        }],
        indent: true,
        toString: function () { return `timer ${this.config[0].value}`; },
        toDsl: function () { return [`on Rules#Timer=${this.config[0].value} do\n%%output%%\nEndon\n`]; }
    }, {
        group: 'TRIGGERS',
        type: 'event',
        inputs: [],
        outputs: [1],
        config: [{
            name: 'name',
            type: 'text',
        }],
        indent: true,
        toString: function () { return `event ${this.config[0].value}`; },
        toDsl: function () { return [`on ${this.config[0].value} do\n%%output%%\nEndon\n`]; }
    }, {
        group: 'TRIGGERS',
        type: 'clock',
        inputs: [],
        outputs: [1],
        config: [],
        indent: true,
        toString: () => { return 'clock'; },
        toDsl: () => { return ['on Clock#Time do\n%%output%%\nEndon\n']; }
    }, {
        group: 'TRIGGERS',
        type: 'system boot',
        inputs: [],
        outputs: [1],
        config: [],
        indent: true,
        toString: function() {
            return `on boot`;
        },
        toDsl: function() {
            return [`On System#Boot do\n%%output%%\nEndon\n`];
        }
    }, {
        group: 'TRIGGERS',
        type: 'Device',
        inputs: [],
        outputs: [1],
        config: [],
        indent: true,
        toString: function() {
            return `on boot`;
        },
        toDsl: function() {
            return [`On Device#Value do\n%%output%%\nEndon\n`];
        }
    }, 
    // LOGIC
    {
        group: 'LOGIC',
        type: 'if/else',
        inputs: [1],
        outputs: [1, 2],
        config: [{
            name: 'variable',
            type: 'textselect',
            values: ['Clock#Time'],
        },{
            name: 'equality',
            type: 'select',
            values: ['=', '<', '>', '<=', '>=', '!=']
        },{
            name: 'value',
            type: 'text',
        }],
        indent: true,
        toString: function() {
            return `IF ${this.config[0].value}${this.config[1].value}${this.config[2].value}`;
        },
        toDsl: function() {
            return [`If [${this.config[0].value}]${this.config[1].value}${this.config[2].value}\n%%output%%`, `Else\n%%output%%\nEndif`];
        }
    }, {
        group: 'LOGIC',
        type: 'delay',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'delay',
            type: 'number',
        }],
        toString: function() {
            return `delay: ${this.config[0].value}`;
        },
        toDsl: function() {
            return [`Delay ${this.config[0].value}\n`];
        }
    },
    // ACTIONS
    {
        group: 'ACTIONS',
        type: 'GPIO',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'gpio',
            type: 'select',
            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        }, {
            name: 'value',
            type: 'select',
            values: [0, 1],
        }],
        toString: function() {
            return `GPIO ${this.config[0].value}, ${this.config[1].value}`;
        },
        toDsl: function() {
            return [`GPIO,${this.config[0].value},${this.config[1].value}\n`];
        }
    }, {
        group: 'ACTIONS',
        type: 'Pulse',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'gpio',
            type: 'select',
            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            value: 0
        }, {
            name: 'value',
            type: 'select',
            values: [0, 1],
            value: 1
        }, {
            name: 'unit',
            type: 'select',
            values: ['s', 'ms'],
            value: 'ms',
        }, {
            name: 'duration',
            type: 'number',
            value: 1000
        }],
        toString: function() {
            return `Pulse ${this.config[0].value}=${this.config[1].value} for ${this.config[3].value}${this.config[2].value}`;
        },
        toDsl: function() {
            const fn = this.config[2].value === 's' ? 'LongPulse' : 'Pulse';
            return [`${fn},${this.config[0].value},${this.config[1].value},${this.config[2].value}\n`];
        }
    }, {
        group: 'ACTIONS',
        type: 'PWM',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'gpio',
            type: 'select',
            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            value: 0
        }, {
            name: 'value',
            type: 'number',
            value: 1023,
        }],
        toString: function() {
            return `PWM.GPIO${this.config[0].value} = ${this.config[1].value}`;
        },
        toDsl: function() {
            return [`PWM,${this.config[0].value},${this.config[1].value}\n`];
        }
    }, {
        group: 'ACTIONS',
        type: 'SERVO',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'gpio',
            type: 'select',
            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            value: 0
        }, {
            name: 'servo',
            type: 'select',
            values: [1, 2],
            value: 0
        }, {
            name: 'position',
            type: 'number',
            value: 90,
        }],
        toString: function() {
            return `SERVO.GPIO${this.config[0].value} = ${this.config[2].value}`;
        },
        toDsl: function() {
            return [`Servo,${this.config[1].value},${this.config[0].value},${this.config[2].value}\n`];
        }
    }, {
        group: 'ACTIONS',
        type: 'fire event',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'name',
            type: 'text'
        }],
        toString: function() {
            return `event ${this.config[0].value}`;
        },
        toDsl: function() {
            return [`event,${this.config[0].value}\n`];
        }
    }, {
        group: 'ACTIONS',
        type: 'settimer',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'timer',
            type: 'select',
            values: [1, 2, 3, 4, 5, 6, 7, 8],
        }, {
            name: 'value',
            type: 'number'
        }],
        toString: function() {
            return `timer${this.config[0].value} = ${this.config[1].value}`;
        },
        toDsl: function() {
            return [`timerSet,${this.config[0].value},${this.config[1].value}\n`];
        }
    }, {
        group: 'ACTIONS',
        type: 'MQTT',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'topic',
            type: 'text',
        }, {
            name: 'command',
            type: 'text',
        }],
        toString: function() {
            return `mqtt ${this.config[1].value}`;
        },
        toDsl: function() {
            return [`Publish ${this.config[0].value},${this.config[1].value}\n`];
        }
    }, {
        group: 'ACTIONS',
        type: 'UDP',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'ip',
            type: 'text',
        }, {
            name: 'port',
            type: 'number',
        }, {
            name: 'command',
            type: 'text',
        }],
        toString: function() {
            return `UDP ${this.config[1].value}`;
        },
        toDsl: function() {
            return [`SendToUDP ${this.config[0].value},${this.config[1].value},${this.config[2].value}\n`];
        }
    }, {
        group: 'ACTIONS',
        type: 'HTTP',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'host',
            type: 'text',
        }, {
            name: 'port',
            type: 'number',
            value: 80
        }, {
            name: 'url',
            type: 'text',
        }],
        toString: function() {
            return `HTTP ${this.config[2].value}`;
        },
        toDsl: function() {
            return [`SentToHTTP ${this.config[0].value},${this.config[1].value},${this.config[2].value}\n`];
        }
    }, {
        group: 'ACTIONS',
        type: 'ESPEASY',
        inputs: [1],
        outputs: [1],
        config: [{
            name: 'device',
            type: 'number',
        }, {
            name: 'command',
            type: 'text',
        }],
        toString: function() {
            return `mqtt ${this.config[1].value}`;
        },
        toDsl: function() {
            return [`SendTo ${this.config[0].value},${this.config[1].value}\n`];
        }
    }
]