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
            field_values.push(factory.create(name, value));
        }

        return (
            <div>
                {this.props.field_name}
                Punkty:
                <div>
                    {field_values}
                </div>

            </div>
        );
    }
}
