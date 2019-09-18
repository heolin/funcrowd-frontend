import React from "react"


export class HorizontalLine extends React.Component {
    render() {
        let colorStyle = this.props.color ? " border-color-" + this.props.color : "";
        let className = this.props.className || "";
        return (
            <div className={className + colorStyle + " horizontal-line"}
                 style={this.props.style || {}}/>
        );
    }
}
