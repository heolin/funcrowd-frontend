import React from "react"


export default class SkippingPanel extends React.Component {

    constructor(props) {
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onAccept = this.onAccept.bind(this);
    }

    onCancel() {
        this.props.onCancel();
    }

    onAccept() {
        this.props.onAccept();
    }

    render() {
        return (
            <div className="modal-base">
                <div className="shadow" onClick={this.onCancel}>
                </div>
                <div className="skipping-panel card-3-static">
                    <h4>
                        Skip this item
                    </h4>
                    <p>
                        Are you sure you want to skip this item?
                    </p>
                    <button className="btn btn-default"
                            style={{marginLeft: "20px", marginRight: "20px", width: "80px"}}
                            onClick={this.onAccept}>
                        Yes
                    </button>
                    <button className="btn btn-green"
                            style={{marginLeft: "20px", marginRight: "20px", width: "80px"}}
                            onClick={this.onCancel}>
                        No
                    </button>
                </div>
            </div>
        );
    }
}

