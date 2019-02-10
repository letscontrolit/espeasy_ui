import { h, Component } from 'preact';

export class FSPage extends Component {
    constructor(props) {
        super(props);
        this.state = { files: [] }
    }

    fetch() {
        fetch('/filelist').then(response => response.json()).then(fileList => {
            this.setState({ files: fileList });
        });
    }

    render(props) {
        return (
            <div>
                <form class="pure-form pure-form-aligned">
                    <div class="pure-control-group">
                        <label for="file" class="pure-checkbox">
                            File:
                        </label>
                        <input id="file" type="file" ref={ref => this.file = ref} />
                    </div>
                    <div>
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
                                <button type="button">X</button>
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