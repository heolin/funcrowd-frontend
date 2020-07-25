import React from "react"
import Modal from "../../components/animated/Modal"
import feedbackCorrect from "../../static/img/feedback/feedback_ok.svg";
import feedbackWrong from "../../static/img/feedback/feedback_wrong.svg";
import L from "../../logic/locatization/LocalizationManager";


export default class RegressionFeedbackModal extends React.Component {
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
        let annotation = this.props.annotation;
        let score = feedback ? feedback.score : 0;
        let answerField = Object.keys(feedback.values)[0];
        let reference = feedback.values[answerField]['ReferenceValue'][0];
        let answer = annotation.data[answerField];

        let image = feedbackWrong;
        let headerText = L.feedback.annotationWrong;
        let message = <div>
            <p>
                {L.feedback.annotationWrongMessage}
            </p>
            <p>
                Your answer: <span className="color-red"><b>{answer}</b></span><br/>
                Correct answer: <span className="color-green"><b>{reference}</b></span>
            </p>
        </div>;
        let buttonText = L.feedback.nextItem;

        if (score >= 0.5) {
            image = feedbackCorrect;
            headerText = L.feedback.annotationCorrect;
            message = <div>
                <p>
                    {L.feedback.annotationCorrectMessage}
                </p>
                <p>
                    Your answer: <span className="color-green"><b>{answer}</b></span><br/>
                    Correct answer: <span className="color-green">{reference}</span>
                </p>
            </div>;
        }

        return (
            <Modal className="modal-window feedback-panel card-3-static text-center"
                   pose={this.props.isOpen ? 'open' : 'closed'}
                   style={{
                       pointerEvents: this.props.isOpen ? "auto" : "none",
                   }}>

                <h2 className="feedback-header">{headerText}</h2>
                {message}
                <div>
                    <img className="feedback-image" src={image}/>
                </div>
                <div className="btn btn-primary feedback-button"
                     onClick={this.props.onAccept}>
                    {buttonText}
                </div>
            </Modal>
        );
    }
}
