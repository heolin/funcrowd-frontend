import React from "react"
import feedbackCorrect from "../../static/img/feedback/feedback_ok.svg";
import feedbackWrong from "../../static/img/feedback/feedback_wrong.svg";
import Modal from "../../components/animated/Modal"
import { Link } from 'react-router-dom';
import L from "../../logic/locatization/LocalizationManager";


export default class BinaryPointsFeedbackModal extends React.Component {
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
        let score = feedback ? feedback.score : 0;

        let image = feedbackWrong;
        let headerText = L.feedback.annotationWrong;
        let message = L.feedback.annotationWrongMessage;
        let button = (
            <div className="btn btn-primary feedback-button"
                 onClick={this.props.onAccept}>
                {L.feedback.tryAgain}
            </div>
        );

        if (score >= 0.5) {
            image = feedbackCorrect;
            headerText = L.feedback.annotationCorrect;
            message = L.feedback.annotationCorrectMessage;
            button = (
                <Link to={'/mission/'+this.props.task.mission_id+'/tasks'}>
                    <div className="btn btn-primary feedback-button">
                        {L.feedback.nextItem}
                    </div>
                </Link>
            );
        }
        return (
            <Modal className="modal-window feedback-panel card-3-static text-center"
                   pose={this.props.isOpen ? 'open' : 'closed'}
                   style={{
                       pointerEvents: this.props.isOpen ? "auto" : "none",
                   }}>

                <h2 className="feedback-header">{headerText}</h2>
                <p>{message}</p>
                <div>
                    <img className="feedback-image" src={image}/>
                </div>
                {button}
            </Modal>
        );
    }
}
