import React from "react"
import FeedbackModal from "./FeedbackModal";
import feedbackCorrect from "../../static/img/feedback/feedback_ok.svg";
import feedbackWrong from "../../static/img/feedback/feedback_wrong.svg";
import L from "../../logic/locatization/LocalizationManager";


export default class BinaryFeedbackModal extends React.Component {
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
        let message = L.feedback.annotationCorrectMessage;

        if (score >= 0.5) {
            image = feedbackCorrect;
            headerText = L.feedback.annotationCorrect;
            message = L.feedback.annotationWrongMessage;
        }

        return <FeedbackModal isOpen={this.props.isOpen}
                              onAccept={this.props.onAccept}
                              headerText={headerText}
                              message={message}
                              image={image}
                              buttonText={L.feedback.nextItem}/>;
    }
}
