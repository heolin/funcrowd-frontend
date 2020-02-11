import React from "react"
import L from "../../../logic/locatization/LocalizationManager";


export default class SkipButton extends React.Component {

    render() {
        return (
            <button
                disabled={this.props.disabled}
                style={this.props.style}
                className="item-form-submit-skip btn btn-default">{L.labels.skip}</button>
        );
    }
}
