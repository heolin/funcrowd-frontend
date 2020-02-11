import React from "react"
import L from "../../../logic/locatization/LocalizationManager";


export default class SubmitButton extends React.Component {

    render() {
        return (
            <button type="submit"
                disabled={this.props.disabled}
                style={this.props.style}
                className="item-form-submit btn btn-primary">{L.labels.submit}</button>
        );
    }
}
