import React from "react"
import { Link } from 'react-router-dom';
import { SmallIcon } from "../../components/Icons";


export default class NavbarMenuButton extends React.Component {

    render() {
        let className = this.props.className || "";

        return (
            <Link to={this.props.targetPath}>
                <li className={"nav-item " + className}>
                    <SmallIcon className="d-md-none d-lg-inline" name={this.props.icon} style={this.props.iconStyle}/>
                    <span className="nav-link">{this.props.name}</span>
                </li>
            </Link>
        );
    }
}
