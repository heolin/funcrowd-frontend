import React from "react"

export default class AchievementIcon extends React.Component {
    render() {
        let name = require("../../static/icons/"+this.props.name+".svg");
        let blocked = !this.props.finished ? "blocked" : "";
        return <div className={"achievement-icon " + (this.props.className || "")}>
            <div className={"achievement-icon-badge " + blocked}/>
            <span className="achievement-icon-image">
                <img src={name}/>
            </span>
        </div>
    }
}
