import React from "react"
import BlackBackground from "../../components/BlackBackground";
import FeedbackFactory from "./FeedbackFactory";


export default class FeedbackPanel extends React.Component {

    render() {
        let modal = FeedbackFactory.create(this.props.type,
            this.props.isOpen, this.props.onAccept, this.props.feedback);

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
