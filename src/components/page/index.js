import { h, Component } from 'preact';

export class Page extends Component {

    render(props) {
        const PageComponent = props.page.component;
        return (
        <div id="main">
            <div class="header">
                <h2>{props.page.title}</h2>
            </div>

            <div class="content">
                <PageComponent />
            </div>
        </div>
        );
    }
}