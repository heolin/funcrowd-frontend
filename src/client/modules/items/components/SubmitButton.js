import React from "react"


export default class SubmitButton extends React.Component {

    render() {
        return (
            <button type="submit"
                disabled={this.props.disabled}
                style={this.props.style}
                className="item-form-submit btn btn-green">Submit</button>
        );
    }
}
