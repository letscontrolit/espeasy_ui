import { h, Component } from 'preact';

export class Page extends Component {

    render(props) {
        const PageComponent = props.page.component;
        return (
        <div id="main">
            <div class="header">
                > {props.page.title}
                { props.changed ? (
                    <a style="float: right" href="#tools/diff">CHANGED! Click here to SAVE</a>
                ) : (null) }
            </div>

            <div class="content">
                <PageComponent params={props.params} />
            </div>
        </div>
        );
    }
}