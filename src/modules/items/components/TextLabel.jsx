import React from "react"


export default class TextLabel extends React.Component {

    render() {
        return (
            <div className="form-group">
                <label><strong>{this.props.name}</strong></label>
                <div>{this.props.value}</div>
            </div>
        );
    }
}
