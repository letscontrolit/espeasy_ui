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
        type: 'IMAGE',
        inputs: [],
        outputs: [],
        config: [{
            name: 'url',
            type: 'text',
            value: 'https://www.letscontrolit.com/wiki/images/4/44/ESPeasyLOGO.png'
        }, {
            name: 'width',
            type: 'number',
            value: '200',
        }],
        vals: [],
        indent: true,
        toHtml: function () { return `<img src="${this.config[0].value}" width="${this.config[1].value}" />`; },
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
        group: 'DEVICES',
        type: 'METER',
        inputs: [],
        outputs: [],
        vals: [],
        config: [{
            name: 'device',
            type: 'select',
            values: [],
            value: 0
        }, {
            name: 'max',
            type: 'number',
            value: '255',
        }, {
            name: 'size',
            type: 'number',
            value: '255',
        }, {
            name: 'orientation',
            type: 'select',
            values: ['horizontal', 'vertical'],
            value: 'horizontal',
        }],
        toHtml: function(vals) {
            const val = vals ? vals[this.config[0].value] : 0;
            const vertical = this.config[3].value === 'vertical';
            const width = vertical ? 24 : this.config[2].value;
            const height = vertical ? this.config[2].value : 24;
            const widthPercent = vertical ? 100 : 100 * val / this.config[1].value;
            const heightPercent = !vertical ? 100 : 100 * val / this.config[1].value;

            return `<div class="c_meter" style="width: ${width}px; height: ${height}px;"><div class="c_meter_val" style="width: ${widthPercent}%; height: ${heightPercent}%;">${this.config[0].value}: ${val}</div></div>`;
        }
    }, {
        group: 'DEVICES',
        type: 'IMAGE_METER',
        inputs: [],
        outputs: [],
        vals: [],
        config: [{
            name: 'device',
            type: 'select',
            values: [],
            value: 0
        }, {
            name: 'max',
            type: 'number',
            value: '255',
        }, {
            name: 'image width',
            type: 'number',
            value: '255',
        },  {
            name: 'image height',
            type: 'number',
            value: '255',
        }, {
            name: 'image 1 url',
            type: 'text',
            value: '#',
        }, {
            name: 'image 2 url',
            type: 'text',
            value: 'https://www.letscontrolit.com/wiki/images/4/44/ESPeasyLOGO.png',
        }, {
            name: 'orientation',
            type: 'select',
            values: ['left', 'right', 'top', 'bottom'],
            value: 'left',
        }],
        toHtml: function(vals) {
            const val = vals ? vals[this.config[0].value] : 0;
            const width = this.config[2].value;
            const height = this.config[3].value;
            const image1 = this.config[4].value;
            const image2 = this.config[5].value;
            let percent = 100 * val / this.config[1].value;
            let widthPercent, heightPercent;
            switch (this.config[6].value) {
                case 'right':
                    percent = 100 - percent;
                case 'left':
                    widthPercent = percent;
                    heightPercent = 100;
                    break;
                case 'top':
                    percent = 100 - percent;
                case 'bottom':
                    widthPercent = 100;
                    heightPercent = percent;
                    break;
            }

            return `<div class="c_fill" style="width: ${width}px; height: ${height}px; background: url(${image1});">
                        <div class="c_fill_val" style="width: ${widthPercent}%; height: ${heightPercent}%;">
                            <img src="${image2}" width="${width}px" height="${height}px" />
                        </div>
                    </div>`;
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
        },{
            name: 'type',
            type: 'select',
            values: ['input', 'slider'],
            value: 'slider',
        }],
        toHtml: function(vals) {
            return `${this.config[0].value}: <input type="${this.config[3].value === 'input' ? 'number' : 'range'}" min="${this.config[1].value}" max="${this.config[2].value}" value="${vals ? vals[this.config[0].value] : 0}" />`;
        }
    }
]