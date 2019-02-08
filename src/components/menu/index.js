import { h, Component } from 'preact';

export class Menu extends Component {
    renderMenuItem(menu) {
        if (menu.action) {
            return (
            <li class="pure-menu-item">
                <a href={`#${menu.href}`} onClick={menu.action} class="pure-menu-link">{menu.title}</a>
            </li>  
            )
        }
        if (menu.href === this.props.selected.href) {
            return [
                (<li class="pure-menu-item pure-menu-item-selected">
                    <a href={`#${menu.href}`} class="pure-menu-link">{menu.title}</a>
                </li>),
                ...menu.children.map(child => {
                    if (child.action) {
                        return (
                        <li class="pure-menu-item submenu">
                            <a href={`#${child.href}`} onClick={child.action} class="pure-menu-link">{child.title}</a>
                        </li>  
                        )
                    }
                    return (<li class="pure-menu-item submenu">
                        <a href={`#${child.href}`} class="pure-menu-link">{child.title}</a>
                    </li>);
                })
            ]
        }
        return (<li class="pure-menu-item">
            <a href={`#${menu.href}`} class="pure-menu-link">{menu.title}</a>
        </li>);
    }

    render(props) {
        if (props.open === false) return;
    
        return (
        <div id="menu">
            <div class="pure-menu">
                <a class="pure-menu-heading" href="/"><b>ESP</b>Easy</a>
                <ul class="pure-menu-list">
                    {props.menus.map(menu => (this.renderMenuItem(menu)))}
                </ul>
            </div>
        </div>
        );
    }
}