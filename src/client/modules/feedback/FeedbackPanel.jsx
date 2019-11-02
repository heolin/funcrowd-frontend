import React from "react"
import BlackBackground from "../../components/BlackBackground";
import FeedbackFactory from "./FeedbackFactory";
import FeedbackTypes from "../feedback/FeedbackTypes";


export default class FeedbackPanel extends React.Component {

    render() {
        let feedback = null;
        let type = FeedbackTypes.NONE;

        if (this.props.annotation && this.props.annotation.feedback) {
            feedback = this.props.annotation.feedback;
            type = this.props.annotation.feedback.type;
        }

        let modal = FeedbackFactory.create(type,
            this.props.isOpen, this.props.onAccept, feedback);

        return (
            <div className="modal-base">
                <BlackBackground className="black-background"
                                 style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}
                                 pose={this.props.isOpen ? 'open' : 'closed'}
                                 onClick={this.props.onClose}/>
                {modal}
            </div>
        );
    }
}
