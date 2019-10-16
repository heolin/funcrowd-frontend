import React from "react"
import Modal from "../../components/animated/Modal"


export default class FeedbackModal extends React.Component {

    render() {
        return (
            <Modal className="modal-window feedback-panel card-3-static text-center"
                   pose={this.props.isOpen ? 'open' : 'closed'}
                   style={{
                       pointerEvents: this.props.isOpen ? "auto" : "none",
                   }}>

                <h2 className="feedback-header">{this.props.headerText}</h2>
                <p>{this.props.message}</p>
                <div>
                    <img className="feedback-image" src={this.props.image}/>
                </div>
                <div className="btn btn-primary feedback-button"
                     onClick={this.props.onAccept}>
                    {this.props.buttonText}
                </div>
            </Modal>
        );
    }
}
