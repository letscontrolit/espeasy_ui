export const nodes = [
    // TRIGGERS
    {
        group: 'DEVICES',
        type: 'CLOCK',
        inputs: [],
        outputs: [],
        config: [],
        vals: [],
        indent: true,
        toHtml: () => { return `<b>${(new Date()).toTimeString()}</b>`; },
    },
    {
        group: 'DEVICES',
        type: 'VARIABLE',
        inputs: [],
        outputs: [],
        vals: [],
        config: [{
            name: 'device',
            type: 'select',
            values: [],
            value: 0
        }],
        toHtml: function(vals) {
            return `${this.config[0].value}: ${vals ? vals[this.config[0].value] : 0}`;
        }
    }, {
        group: 'ACTIONS',
        type: 'BUTTON',
        inputs: [],
        outputs: [],
        vals: [],
        config: [{
            name: 'text',
            type: 'text',
            value: 'CLICK'
        },{
            name: 'cmd',
            type: 'text',
            value: 'event,test'
        }],
        toHtml: function() {
            return `<button type="button" onclick="fetch('/control?cmd=${this.config[1].value}')">${this.config[0].value}</button>`;
        }
    }, {
        group: 'ACTIONS',
        type: 'INPUT',
        inputs: [],
        outputs: [],
        vals: [],
        config: [{
            name: 'name',
            type: 'text',
            value: 'var',
        },{
            name: 'min',
            type: 'number',
            value: '0',
        },{
            name: 'max',
            type: 'number',
            value: '255',
        },{
            name: 'cmd',
            type: 'text',
            value: 'set_level,1',
        }],
        toHtml: function(vals) {
            return `${this.config[0].value}: <input type="number" min="${this.config[1].value}" max="${this.config[2].value}" value="${vals ? vals[this.config[0].value] : 0}" />`;
        }
    }
]