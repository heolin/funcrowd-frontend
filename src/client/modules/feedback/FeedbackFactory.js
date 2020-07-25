import React from "react"
import FeedbackTypes from "./FeedbackTypes";
import FeedbackModal from "./FeedbackModal";
import L from "../../logic/locatization/LocalizationManager";
import feedbackSurvey from "../../static/img/feedback/feedback_survey.svg";
import BinaryFeedbackModal from "./BinaryFeedbackModal";
import PointsFeedbackModal from "./PointsFeedbackModal";
import QuizFeedbackModal from "./QuizFeedbackModal";
import ConfigManager from "../../logic/config/ConfigManager";
import ClassificationFeedbackModal from "./ClassificationFeedbackModal";
import RegressionFeedbackModal from "./RegressionFeedbackModal";
import NERFeedbackModal from "./NERFeedbackModal";


class _FeedbackFactory {

    create(type, isOpen, onAccept, task, annotation, feedback, exp) {
        if (ConfigManager.profile.exp === false && type === FeedbackTypes.POINTS)
            type = FeedbackTypes.BINARY;
        if (ConfigManager.config.showFeedback === false)
            type = FeedbackTypes.CONFIRM_ONLY;

        switch(type) {
            case FeedbackTypes.NONE:
                return null;

            case FeedbackTypes.CONFIRM_ONLY:
                return <FeedbackModal isOpen={isOpen}
                                      onAccept={onAccept}
                                      headerText={L.feedback.annotationSaved}
                                      message={L.feedback.annotationSavedMessage}
                                      image={feedbackSurvey}
                                      buttonText={L.feedback.nextItem}/>;

            case FeedbackTypes.QUIZ:
                return <QuizFeedbackModal isOpen={isOpen}
                                           onAccept={onAccept}
                                           headerText={L.feedback.annotationSaved}
                                           message={L.feedback.annotationSavedMessage}
                                           image={feedbackSurvey}
                                           annotation={annotation}
                                           feedback={feedback}
                                           buttonText={L.feedback.nextItem}/>;

            case FeedbackTypes.BINARY:
                return <BinaryFeedbackModal isOpen={isOpen}
                                            onAccept={onAccept}
                                            feedback={feedback}/>;

            case FeedbackTypes.POINTS:
                return <PointsFeedbackModal isOpen={isOpen}
                                            onAccept={onAccept}
                                            feedback={feedback}
                                            annotation={annotation}
                                            task={task}
                                            exp={exp}/>;

            case FeedbackTypes.QUESTIONNAIRE:
                return <FeedbackModal isOpen={isOpen}
                                      onAccept={onAccept}
                                      headerText={L.feedback.questionnaireSaved}
                                      message={L.feedback.questionnaireSavedMessage}
                                      image={feedbackSurvey}
                                      buttonText={L.feedback.nextItem}/>;

            case FeedbackTypes.CLASSIFICATION:
                return <ClassificationFeedbackModal isOpen={isOpen}
                                                    onAccept={onAccept}
                                                    annotation={annotation}
                                                    feedback={feedback}
                                                    buttonText={L.feedback.nextItem}/>;

            case FeedbackTypes.REGRESSION:
                return <RegressionFeedbackModal isOpen={isOpen}
                                                onAccept={onAccept}
                                                annotation={annotation}
                                                feedback={feedback}
                                                buttonText={L.feedback.nextItem}/>;

            case FeedbackTypes.NER:
                return <NERFeedbackModal isOpen={isOpen}
                                         onAccept={onAccept}
                                         annotation={annotation}
                                         feedback={feedback}
                                         buttonText={L.feedback.nextItem}/>;

            default:
                return null;
        }
    }
}

const FeedbackFactory = new _FeedbackFactory();

export default FeedbackFactory;
