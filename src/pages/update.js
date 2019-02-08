import { h, Component } from 'preact';
import { Form } from '../components/form';

const formConfig = {
    groups: {
        upload: {
            name: '',
            configs: {
                file: {
                    name: 'Select Firmware to upload',
                    type: 'file',
                }
            }
        }
    }
}
const config = {};

export class UpdatePage extends Component {
    render(props) {
        return (
            <Form config={formConfig} selected={config} />
        );
    }
}