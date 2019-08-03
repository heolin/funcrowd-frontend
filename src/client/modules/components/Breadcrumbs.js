import React from "react"
import { Link } from 'react-router-dom';


export class BreadcrumbItem extends React.Component {

    render() {
        if (this.props.link) {
            return (
                <li className="breadcrumb-item small">
                    <Link to={this.props.link}>
                        {this.props.label}
                    </Link>
                </li>
            );
        } else {
            return (
                <li className="breadcrumb-item small active">
                    {this.props.label}
                </li>
            );
        }
    }
}

export class Breadcrumbs extends React.Component {

    render() {
        return (
            <nav className={this.props.className || ""} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {this.props.children}
                </ol>
            </nav>
        )
    }
}
