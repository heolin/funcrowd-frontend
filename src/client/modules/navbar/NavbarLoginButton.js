import React from "react"
import { Link } from 'react-router-dom';


export default class NavbarLoginButton extends React.Component {

    render() {
        let className = "btn-orange-primary";
        if (this.props.isSelected)
            className = "btn-orange";

        return (
            <Link to={this.props.targetPath}>
                <li className={"btn small navbar-login-button " + className}
                    style={this.props.style}>
                    {this.props.name}
                </li>
            </Link>
        );
    }
}
