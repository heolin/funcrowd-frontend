import React from "react"


export default class TextLabel extends React.Component {

    render() {
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;

        return (
            <div className="form-group">
                {label}
                <div>{this.props.value}</div>
            </div>
        );
    }
}
