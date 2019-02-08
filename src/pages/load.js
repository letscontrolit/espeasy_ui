import { h, Component } from 'preact';
import { Form } from '../components/form';

const formConfig = {
    groups: {
        upload: {
            name: 'Upload',
            configs: {
                file: {
                    name: 'Select File',
                    type: 'file',
                }
            }
        }
    }
}
const config = {};

export class LoadPage extends Component {
    render(props) {
        return (
            <Form config={formConfig} selected={config} />
        );
    }
}