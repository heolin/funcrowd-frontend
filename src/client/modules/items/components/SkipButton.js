import React from "react"


export default class SkipButton extends React.Component {

    render() {
        return (
            <button
                disabled={this.props.disabled}
                style={this.props.style}
                className="item-form-submit-skip btn btn-default">Skip</button>
        );
    }
}
