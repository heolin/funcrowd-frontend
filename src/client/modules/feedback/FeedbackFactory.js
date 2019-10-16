import React from "react"
import FeedbackTypes from "./FeedbackTypes";
import FeedbackModal from "./FeedbackModal";
import L from "../../logic/locatization/LocalizationManager";
import feedbackSurvey from "../../static/img/feedback/feedback_survey.svg";
import BinaryFeedbackModal from "./BinaryFeedbackModal";


class _FeedbackFactory {

    create(type, isOpen, onAccept, feedback) {
        if (type === FeedbackTypes.NONE)
            return <FeedbackModal isOpen={isOpen}
                                  onAccept={onAccept}
                                  headerText={L.feedback.annotationSaved}
                                  message={L.feedback.annotationSavedMessage}
                                  image={feedbackSurvey}
                                  buttonText={L.feedback.nextItem}/>;

        else if (type === FeedbackTypes.QUIZ)
            return <FeedbackModal isOpen={isOpen}
                                  onAccept={onAccept}
                                  headerText={L.feedback.annotationSaved}
                                  message={L.feedback.annotationSavedMessage}
                                  image={feedbackSurvey}
                                  buttonText={L.feedback.nextItem}/>;

        else if (type === FeedbackTypes.BINARY)
            return <BinaryFeedbackModal isOpen={isOpen}
                                        onAccept={onAccept}
                                        feedback={feedback}/>;
        return null;
    }
}

const FeedbackFactory = new _FeedbackFactory();

export default FeedbackFactory;
