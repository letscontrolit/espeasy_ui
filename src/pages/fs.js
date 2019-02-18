import { h, Component } from 'preact';
import { deleteFile, storeFile } from '../lib/espeasy';
import { loader } from '../lib/loader';

export class FSPage extends Component {
    constructor(props) {
        super(props);
        this.state = { files: [] }

        this.saveForm = async () => {
            loader.show();
            await storeFile(this.file.files[0]);
            await fetch();
        }

        this.deleteFile = e => {
            const fileName = e.currentTarget.dataset.name;
            deleteFile(fileName).then(() => (this.fetch()));
        }
    }

    fetch() {
        fetch('/filelist_json').then(response => response.json()).then(fileList => {
            this.setState({ files: fileList });
        });
    }

    render(props) {
        loader.hide();
        return (
            <div>
                <form class="pure-form pure-form-aligned">
                    <div class="pure-control-group">
                        <label for="file" class="pure-checkbox">
                            File:
                        </label>
                        <input id="file" type="file" ref={ref => this.file = ref} />
                        
                        <button type="button" onClick={this.saveForm}>upload</button>
                    </div>
                </form>
                <table class="pure-table">
                    <thead>
                        <tr>
                            <th>File</th>
                            <th>Size</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.files.map(file => {
                            const url = `/${file.fileName}`;
                            return (
                        <tr>
                            <td><a href={url}>{file.fileName}</a></td>
                            <td>{file.size}</td>
                            <td>
                                { file.fileName.endsWith('.dat') ? (null) :
                                (<button type="button" onClick={this.deleteFile} data-name={file.fileName}>X</button>)
                                }
                            </td>
                        </tr>
                            ); })}

                    </tbody>
                </table>
            </div>
        );
    }

    componentDidMount() {
        this.fetch();
    }
}