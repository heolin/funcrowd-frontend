import React from "react"
import FieldFeedbackPanel from "./FieldFeedbackPanel";


export default class FeedbackPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.onAccept = this.onAccept.bind(this);
    }

    componentDidMount() {
    }

    onAccept() {
        this.props.onAccept();
    }


    getFields(values) {
        let fields = [];
        for (let field_name in values) {
            let scores = values[field_name];
            fields.push(<FieldFeedbackPanel key={field_name}
                                            field_name={field_name}
                                            values={scores}/>);
        }
        return fields;
    }

    render() {
        let feedback = this.props.feedback;

        let score_fields = this.getFields(feedback.scores);
        let values_fields = this.getFields(feedback.values);

        return (
            <div>
                <div className="shadow"></div>
                <div className="feedback-panel card-3-static">
                    Feedback
                    scores
                    {score_fields}
                    values
                    {values_fields}

                    <div className="btn btn-primary" onClick={this.onAccept}>
                        Akcept
                    </div>
                </div>
            </div>
        );
    }
}
