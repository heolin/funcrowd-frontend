import React from "react"

export class Blob extends React.Component {
    render() {
        let icon = require("../static/img/pictures/" + this.props.name + ".svg");
        let className = this.props.className || "";

        let top = this.props.top || "auto";
        let left = this.props.left || "auto";
        let right = this.props.right || "auto";
        let bottom = this.props.bottom || "auto";

        let textAlign = this.props.textAlign || "left";
        let align = this.props.align || "left";

        return (
            <div className={"blob " + className}
                 style={{top: top, left: left, right: right, bottom: bottom,
                         textAlign: textAlign, float: align}}>
                <img src={icon} style={this.props.style}/>
                {this.props.children}
            </div>
        );
    }
}

