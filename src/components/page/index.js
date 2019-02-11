import { h, Component } from 'preact';

export class Page extends Component {

    render(props) {
        const PageComponent = props.page.component;
        return (
        <div id="main">
            <div class="header">
                > {props.page.title}
            </div>

            <div class="content">
                <PageComponent params={props.params} />
            </div>
        </div>
        );
    }
}