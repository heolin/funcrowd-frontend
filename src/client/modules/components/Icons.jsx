import React from "react"


export class SmallIcon extends React.Component {
    render() {
        let name = require("../../static/icons/"+this.props.name+".svg");
        return <img className="small-icon" src={name}/>;
    }
}


export class AchievementIcon extends React.Component {
    render() {
        let badge = this.props.finished ?
            require("../../static/icons/badgeBgGreen.svg") : require("../../static/icons/badgeBg.svg");
        let name = require("../../static/icons/"+this.props.name+".svg");
        return <div className={"achievement-icon " + (this.props.className || "")}>
            <img className="achievement-icon-badge rotate-90" src={badge}/>
            <img className="achievement-icon-image" src={name}/>
        </div>
    }
}
