import React from "react"
import BlackBackground from "../../components/BlackBackground";
import Modal from "../../components/animated/Modal"


export default class FeedbackPanel extends React.Component {

    render() {
        let feedback = this.props.feedback;

        return (
            <div className="modal-base">
                <BlackBackground className="black-background"
                                 style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}
                                 pose={this.props.isOpen ? 'open' : 'closed'}
                                 onClick={this.props.onClose}/>
                <Modal className="modal-window feedback-panel card-3-static text-center"
                       pose={this.props.isOpen ? 'open' : 'closed'}
                       style={{
                           pointerEvents: this.props.isOpen ? "auto" : "none",
                           width: "660px"
                       }}>

                    <h2 className="feedback-header">Annotation saved</h2>
                    <p>Your annotation has been saved</p>
                    <div className="btn btn-primary feedback-button"
                         onClick={this.props.onAccept}>
                        Next item
                    </div>
                </Modal>
            </div>
        );
    }
}
