import React from "react"
import FieldFeedbackPanel from "./FieldFeedbackPanel";


export default class FeedbackPanel extends React.Component {

    constructor(props) {
        super(props);
        this.onAccept = this.onAccept.bind(this);
    }

    onAccept() {
        this.props.onAccept();
    }


    getFields() {
        let feedback = this.props.feedback;
        let fields_values = {};

        for (let field_name in feedback.scores) {
            if (field_name in fields_values === false)
                fields_values[field_name] = [];
            for (let key in feedback.scores[field_name]) {
                let value = feedback.scores[field_name][key];
                fields_values[field_name][key] = value;
            }
        }

        for (let field_name in feedback.values) {
            for (let key in feedback.values[field_name]) {
                let value = feedback.values[field_name][key];
                fields_values[field_name][key] = value;
            }
        }

        let fields = [];
        for (let field_name in fields_values) {
            let scores = fields_values[field_name];
            fields.push(<FieldFeedbackPanel key={field_name}
                                            field_name={field_name}
                                            annotation={this.props.annotation}
                                            values={scores}/>);
        }
        return fields;
    }

    getAverageScore() {
        let scores = {};

        let feedback = this.props.feedback;

        for (let field_name in feedback.scores) {
            scores[field_name] = 0;
            for (let key in feedback.scores[field_name]) {
                let value = feedback.scores[field_name][key];
                scores[field_name] += value;
            }
            scores[field_name] = scores[field_name] / Object.keys(feedback.scores[field_name]).length;
        }
        return scores;
    }


    render() {
        let feedback = this.props.feedback;
        let scores = this.getAverageScore();
        let maxScore = Math.max(Object.values(scores));
        let summary = null;
        if (maxScore === 0)
            summary = <span>Your answer was not correct</span>;
        else
            summary = <span>Your answer was correct</span>;

        let fields = this.getFields();

        return (
            <div className="modal-base">
                <div className="shadow"></div>
                <div className="feedback-panel card-3-static">
                    <h4 style={{textAlign: "center"}}>Feedback</h4>
                    <div className="row">
                        <div className="col-md-12"
                             style={{marginTop: "10px", marginBottom: "20px", textAlign: "center"}}>
                            {summary}
                        </div>
                    </div>
                    {fields}

                    <div style={{textAlign: "center"}}>
                        <button className="btn btn-green"
                             style={{width: "120px"}}
                             onClick={this.onAccept}>
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
