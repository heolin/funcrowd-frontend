import React from "react"


export default class ConfirmationPanel extends React.Component {

    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.onClose();
    }

    render() {
        return (
            <div className="modal-base">
                <div className="shadow">
                </div>
                <div className="confirmation-panel card-3-static">
                    <h4 style={{marginBottom: "20px"}}>
                        Answer saved
                    </h4>
                    <button className="btn btn-green"
                            style={{marginLeft: "20px", marginRight: "20px", width: "80px"}}
                            onClick={this.onClose}>
                        Ok
                    </button>
                </div>
            </div>
        );
    }
}

