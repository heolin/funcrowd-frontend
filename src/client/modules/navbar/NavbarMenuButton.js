import React from "react"
import { Link } from 'react-router-dom';
import { SmallIcon } from "../../components/Icons";


export default class NavbarMenuButton extends React.Component {

    render() {
        return (
            <Link to={this.props.targetPath}>
                <li className="nav-item">
                    <SmallIcon name={this.props.icon}/>
                    <span className="nav-link">{this.props.name}</span>
                </li>
            </Link>
        );
    }
}
