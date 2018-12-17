import React from "react"
import FeedbackComponentsFactory from "./FeedbackComponentsFactory";


let factory = new FeedbackComponentsFactory();

export default class FieldFeedbackPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {

        let field_values = [];
        for (let name in this.props.values) {
            let value = this.props.values[name];
            field_values.push(factory.create(this.props.field_name, name, value, this.props.annotation));
        }

        return (
            <div className="row" style={{marginBottom: "30px"}}>
                <div className="col-md-3" style={{textAlign: "center"}}>
                    <b>Fields</b>
                </div>
                <div className="col-md-9" style={{textAlign: "center"}}>
                    <b>Scores</b>
                </div>
                <div className="col-md-3" style={{borderRightStyle: "solid"}}>
                    <span style={{top: "calc(50% - 14px)", position: "absolute"}}><i>{this.props.field_name}</i></span>
                </div>
                <div className="col-md-9">
                    <div>
                        {field_values}
                    </div>
                </div>

            </div>
        );
    }
}
