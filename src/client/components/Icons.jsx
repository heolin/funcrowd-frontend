import React from "react"


export class Icon extends React.Component {
    render() {
        let icon = require("../static/icons/" + this.props.name + ".svg");
        let colorStyle = this.props.color ? " " + this.props.color + "-icon" : "";
        let className = this.props.className || "";
        return (
            <span className={className + colorStyle} dangerouslySetInnerHTML={{__html: icon }}/>
        );
    }
}

export class SmallIcon extends React.Component {
    render() {
        let className = this.props.className || "";
        return <Icon className={className + " small-icon"}
                     color={this.props.color}
                     name={this.props.name}/>;
    }
}

export class BigIcon extends React.Component {
    render() {
        let className = this.props.className || "";
        return <Icon className={className + " big-icon"}
                     color={this.props.color}
                     name={this.props.name}/>;
    }
}


export class AchievementIcon extends React.Component {
    render() {
        let badge = this.props.finished ?
            require("../static/icons/badgeBgGreen.svg") : require("../static/icons/badgeBg.svg");
        let name = require("../static/icons/"+this.props.name+".svg");
        return <div className={"achievement-icon " + (this.props.className || "")}>
            <span className="achievement-icon-badge rotate-90"
                  dangerouslySetInnerHTML={{__html: badge }}/>
            <span className="achievement-icon-image"
                  dangerouslySetInnerHTML={{__html: name }}/>
        </div>
    }
}
