import React from "react"


export class Icon extends React.Component {
    render() {
        let icon = require("../static/icons/" + this.props.name + ".svg");
        let className = this.props.className || "";
        return (
            <span className={className}>
                <img src={icon} style={this.props.style}/>
            </span>
        );
    }
}

export class SmallIcon extends React.Component {
    render() {
        let className = this.props.className || "";
        return <Icon className={className + " small-icon"}
                     style={this.props.style}
                     name={this.props.name}/>;
    }
}

export class BigIcon extends React.Component {
    render() {
        let className = this.props.className || "";
        return <Icon className={className + " big-icon"}
                     name={this.props.name}/>;
    }
}

