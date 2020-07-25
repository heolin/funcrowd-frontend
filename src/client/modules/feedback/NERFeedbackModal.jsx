import React from "react"
import Modal from "../../components/animated/Modal"
import feedbackCorrect from "../../static/img/feedback/feedback_ok.svg";
import feedbackWrong from "../../static/img/feedback/feedback_wrong.svg";
import L from "../../logic/locatization/LocalizationManager";
import {SmallIcon} from "../../components/Icons";


export default class NERFeedbackModal extends React.Component {
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
        let answerField = Object.keys(feedback.values)[0];
        let reference = feedback.values[answerField]['NERReferenceValue'];
        let buttonText = L.feedback.nextItem;

        let rows = [];
        reference.forEach((row) => {
            console.log(row);
            let resultIcon = row['is_correct'] ? "tick-sign-green" : "cancel-sign-red";
            let annotationClass = row['is_correct'] ? 'color-green' : 'color-red';

            rows.push(
                <tr key={row['text']}>
                    <td>{row['text']}</td>
                    <td className={annotationClass}>{row['annotation'] || "--"}</td>
                    <td className="color-green">{row['reference']}</td>
                    <td><SmallIcon name={resultIcon}/></td>
                </tr>
            );
        });

        return (
            <Modal className="modal-window feedback-panel card-3-static text-center"
                   pose={this.props.isOpen ? 'open' : 'closed'}
                   style={{
                       pointerEvents: this.props.isOpen ? "auto" : "none",
                   }}>

                <h2 className="feedback-header">Your results</h2>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Text</th>
                                <th>Correct Tag</th>
                                <th>Your Tag</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
                <div className="btn btn-primary feedback-button"
                     onClick={this.props.onAccept}>
                    {buttonText}
                </div>
            </Modal>
        );
    }
}
