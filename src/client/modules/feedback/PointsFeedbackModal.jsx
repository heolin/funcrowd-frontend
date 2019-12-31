import React from "react"
import feedbackWrong from "../../static/img/feedback/feedback_wrong.svg";
import starIcon from "../../static/icons/experience.svg";
import Modal from "../../components/animated/Modal"
import L from "../../logic/locatization/LocalizationManager";
import ProgressBar from "../../components/ProgressBar";
import UserManager from "../../logic/UserManager";
import {SmallIcon} from "../../components/Icons";
import FeedbackModal from "./FeedbackModal";
import { Link } from 'react-router-dom';


let AnimationStates = {
    NONE: "NONE",
    SHOW_EXP: "SHOW_EXP",
    HIDE_EXP: "HIDE_EXP",
    SHOW_BONUS: "SHOW_BONUS",
    HIDE_BONUS: "HIDE_BONUS",
};

const SHOW_TIME = 2000;
const HIDE_TIME = 1000;


export default class PointsFeedbackModal extends React.Component {
    /*
    Requires ReferenceScore feedback
     */
    constructor(props) {
        super(props);

        this.state = {
            feedback: null,
            loading: true,
            animationState: AnimationStates.NONE
        };
        this.onAnimationFinish = this.onAnimationFinish.bind(this);
        this.onExpUpdate = this.onExpUpdate.bind(this);
        this.startAnimation = this.startAnimation.bind(this);
    }

    componentDidMount() {
        UserManager.addExperienceChangeHandler(this.onExpUpdate);
    }

    componentWillUnmount() {
        UserManager.removeExperienceChangeHandler(this.onExpUpdate);
    }

    onExpUpdate() {
        if (this.props.exp.base > 0) {
            this.setState({
                loading: false,
                animationState: AnimationStates.SHOW_EXP
            }, this.startAnimation);
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    startAnimation() {
        setTimeout(this.onAnimationFinish, SHOW_TIME);
    }

    onAnimationFinish() {
        let newAnimationState = null;
        let time = 0;

        if (this.state.animationState === AnimationStates.SHOW_EXP) {
            newAnimationState = AnimationStates.HIDE_EXP;
            time = HIDE_TIME;
        } else if (this.state.animationState === AnimationStates.HIDE_EXP) {
            newAnimationState = AnimationStates.SHOW_BONUS;
            time = SHOW_TIME;
        } else if (this.state.animationState === AnimationStates.SHOW_BONUS) {
            newAnimationState = AnimationStates.HIDE_BONUS;
            time = HIDE_TIME;
        }

        if (newAnimationState) {
            this.setState({
                animationState: newAnimationState
            });
            setTimeout(this.onAnimationFinish, time);
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
        if (this.state.loading)
            return null;

        let exp = this.props.exp;
        if (exp.base === 0) {
            return <FeedbackModal isOpen={this.props.isOpen}
                                  onAccept={this.props.onAccept}
                                  headerText={L.feedback.annotationWrong}
                                  message={L.feedback.annotationWrongMessage}
                                  image={feedbackWrong}
                                  buttonText={L.feedback.tryAgain}/>;
        }

        let prevExp = UserManager.user.exp - exp.base - exp.bonus;
        let userExp = prevExp;

        let attemptMessage = <p className="color-blue small weight-bold" style={{minHeight: "24px"}}></p>;
        let animationClass = "";
        let starPoints = exp.base;

        if (this.state.animationState === AnimationStates.SHOW_EXP) {
            animationClass = "jello-horizontal";
            userExp = prevExp;
        } else if (this.state.animationState === AnimationStates.HIDE_EXP) {
            animationClass = "scale-out-center-fast";
            userExp = prevExp + exp.base;
        } else if (this.state.animationState === AnimationStates.SHOW_BONUS) {
            animationClass = "jello-horizontal";
            starPoints = exp.bonus;
            userExp = prevExp + exp.base;
            attemptMessage = <p className="color-blue small weight-bold">
                {L.feedback.attemptsMessage1 + this.props.annotation.attempt + L.feedback.attemptsMessage2}
            </p>;
        } else if (this.state.animationState === AnimationStates.HIDE_BONUS) {
            animationClass = "scale-out-center-fast";
            starPoints = exp.bonus;
            userExp = prevExp + exp.base + exp.bonus;
            attemptMessage = <p className="color-blue small weight-bold">
                {L.feedback.attemptsMessage1 + this.props.annotation.attempt + L.feedback.attemptsMessage2}
            </p>;
        }

        let userLevel = UserManager.getExpLevel(userExp);
        let userLevelName = L.levels['level'+userLevel];
        let userLevelProgress = UserManager.getExpProgress(userLevel, userExp);

        return (
            <Modal className="modal-window feedback-panel card-3-static text-center"
                   pose={this.props.isOpen ? 'open' : 'closed'}
                   style={{
                       pointerEvents: this.props.isOpen ? "auto" : "none",
                   }}>

                <h2 className="feedback-header">{L.feedback.annotationCorrect}</h2>
                <p>{L.feedback.annotationCorrectMessage}</p>
                <div className={"feedback-points " + animationClass}>
                    <img className="feedback-points-image" src={starIcon}/>
                    <div className="feedback-points-text">
                        {starPoints}
                    </div>
                </div>
                {attemptMessage}
                <div style={{padding: "0 10%"}}>
                    <div className="feedback-progress-info-left">
                        {userLevelName} - {L.levels.level + " " + userLevel}
                    </div>
                    <div className="feedback-progress-info-right">
                        {userExp}
                        <SmallIcon name="experience"/>
                    </div>

                    <ProgressBar className="feedback-progress"
                                 color="dark"
                                 bg="light-blue"
                                 fg="blue"
                                 progress={userLevelProgress}/>
                </div>
                <Link to={'/mission/'+this.props.task.mission_id+'/tasks'}>
                    <div className="btn btn-primary feedback-button">
                         {L.feedback.nextItem}
                    </div>
                </Link>
            </Modal>
        );
    }
}
