import React from "react"
import L from "../../../logic/locatization/LocalizationManager";


export default class LinkButton extends React.Component {

    render() {
        if (this.props.value == "")
            return null;

        return (
            <div className="form-group">
                <label><strong>{this.props.label}</strong></label>
                <div>
                    <a href={this.props.value}>
                        <div className="btn btn-primary download-button">
                            {L.labels.download}
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
