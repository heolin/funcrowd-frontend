import React from "react"


export default class LinkButton extends React.Component {

    render() {
        return (
            <div className="form-group">
                <label><strong>{this.props.label}</strong></label>
                <div>
                    <a href={this.props.value}>
                        <div className="btn btn-primary">
                            Download
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
