import React from "react"
import Modal from "../../components/animated/Modal"
import L from "../../logic/locatization/LocalizationManager";


export default class QuizFeedbackModal extends React.Component {
    /*
    Requires ReferenceScore and ReferenceValue feedbacks
     */

    render() {
        let feedback = this.props.feedback;

        let rows = [];
        let correctAnswers = 0;

        for (const [key, value] of Object.entries(this.props.annotation.data)) {
            let score = parseFloat(feedback.scores[key]['ReferenceScore']);
            let reference = feedback.values[key]['ReferenceValue'];
            let feedbackAnswer = null;
            let order = rows.length + 1;

            if (score > 0) {
                feedbackAnswer = <div className="color-green">{L.quiz.correct}</div>;
                correctAnswers += 1;
            } else {
                feedbackAnswer = reference.map((ref) => <div className="color-red">{ref}</div>);
            }

            rows.push(
                <tr className="feedback-table-row" key={order}>
                    <th className="color-blue small"><b>{L.quiz.question} {order}</b></th>
                    <td>{value}</td>
                    <td>{feedbackAnswer}</td>
                </tr>
            )
        }

        return (
            <Modal className="modal-window feedback-panel card-3-static text-center"
                   pose={this.props.isOpen ? 'open' : 'closed'}
                   style={{
                       pointerEvents: this.props.isOpen ? "auto" : "none",
                   }}>

                <h2 className="feedback-header">{L.quiz.answersHeader}</h2>
                <p>{L.quiz.answersMessage}</p>
                <div>
                    <table className="table little">
                      <thead className="small color-blue">
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">{L.quiz.answer}</th>
                          <th scope="col">{L.quiz.scores}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows}
                      </tbody>
                    </table>
                </div>

                <div style={{marginBottom: "30px"}}>
                    <div>{L.quiz.feedbackMessage}</div>
                    <div><b>{correctAnswers} {L.quiz.from} {rows.length} {L.quiz.questions}</b></div>
                </div>
                <div className="btn btn-primary feedback-button"
                     onClick={this.props.onAccept}>
                    {this.props.buttonText}
                </div>
            </Modal>
        );
    }
}
