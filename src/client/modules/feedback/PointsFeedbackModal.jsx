import React from "react"
import FeedbackModal from "./FeedbackModal";
import starIcon from "../../static/icons/experience.svg";
import Modal from "../../components/animated/Modal"
import L from "../../logic/locatization/LocalizationManager";


export default class PointsFeedbackModal extends React.Component {
    /*
    Requires ReferenceScore feedback
     */
    constructor(props) {
        super(props);

        this.state = {
            feedback: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.feedback !== state.feedback && props.feedback !== null) {
            return {
                feedback: props.feedback,
            };
        }
        return null;
    }

    render() {
        let feedback = this.state.feedback;
        let exp = this.props.exp;

        let message = L.feedback.annotationWrongMessage;

        return (
            <Modal className="modal-window feedback-panel card-3-static text-center"
                   pose={this.props.isOpen ? 'open' : 'closed'}
                   style={{
                       pointerEvents: this.props.isOpen ? "auto" : "none",
                   }}>

                <h2 className="feedback-header">Punkty</h2>
                <p>{message}</p>
                <div className="feedback-points">
                    <img className="feedback-points-image" src={starIcon}/>
                    <div className="feedback-points-text">
                        {exp.base} + {exp.bonus}
                    </div>
                </div>
                <div className="btn btn-primary feedback-button"
                     onClick={this.props.onAccept}>
                    {L.feedback.nextItem}
                </div>
            </Modal>
        );
    }
}
