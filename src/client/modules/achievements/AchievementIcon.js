import React from "react"

export default class AchievementIcon extends React.Component {
    render() {
        let name = require("../../static/icons/"+this.props.name+".svg");
        let finished = this.props.finished ? " finished" : "";
        return <div className={"achievement-icon " + (this.props.className || "")}>
            <div className={"achievement-icon-badge" + finished}/>
            <span className={"achievement-icon-image" + finished}>
                <img src={name}/>
            </span>
        </div>
    }
}
