import React from "react"


export default class NavbarMenuButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            onClick: null,
        };

        this.onClick = this.onClick.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.name !== state.name || props.onClick !== state.onClick) {
            return {
                name: props.name,
                onClick: props.onClick
            };
        }
        return null;
    }

    onClick() {
        if (this.state.onClick !== null) {
            this.state.onClick();
        }
    }

    render() {
        return (
            <li className="nav-item">
                <button className="nav-link btn btn-link" href="#" onClick={this.onClick}>{this.state.name}</button>
            </li>
        );
    }
}
