import { h, Component } from 'preact';
import { Form } from '../components/form';

const formConfig = {
    onSave: (vals) => { console.log(vals); },
    groups: {
        keep: {
            name: 'Settings to keep',
            configs: {
                unit: { name: 'Keep Unit/Name', type: 'checkbox' },
                wifi: { name: 'Keep WiFi config', type: 'checkbox' },
                network: { name: 'Keep network config', type: 'checkbox' },
                ntp: { name: 'Keep NTP/DST config', type: 'checkbox' },
                log: { name: 'Keep log config', type: 'checkbox' },
            }
        },
        load: {
            name: 'Pre-defined configurations',
            configs: {
                config: { name: 'Pre-Defined config', type: 'select', options: [
                    { name: 'default', value: 0 },
                    { name: 'Sonoff Basic', value: 1 },
                    { name: 'Sonoff TH1x', value: 2 },
                    { name: 'Sonoff S2x', value: 3 },
                    { name: 'Sonoff TouchT1', value: 4 },
                    { name: 'Sonoff TouchT2', value: 5 },
                    { name: 'Sonoff TouchT3', value: 6 },
                    { name: 'Sonoff 4ch', value: 7 },
                    { name: 'Sonoff POW', value: 8 },
                    { name: 'Sonoff POW-r2', value: 9 },
                    { name: 'Shelly1', value: 10 },
                ] },
            }
        },
    },
}

const config = {}

export class FactoryResetPage extends Component {
    render(props) {
        formConfig.onSave = (config) => {
            const data = new FormData();
            data.append('kun', config.keep.unit);
            data.append('kw', config.keep.wifi);
            data.append('knet', config.keep.network);
            data.append('kntp', config.keep.ntp);
            data.append('klog', config.keep.log);
            data.append('fdm', config.load.config);
            fetch('/factoryreset', {
                method: 'POST',
                body: data 
            }).then(() => {
                setTimeout(() => {
                    window.location.href="/";
                }, 5000);
            });
        };
        return (
            <Form config={formConfig} selected={config} />
        );
    }
}