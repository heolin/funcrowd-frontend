import React from "react"
import RadioElement from "./element/RadioElement";


export default class LikertScaleField extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let result = nextProps.value !== this.props.value;
        return result;
    }

    render() {
        /*
        let options = this.props.source.map((option) =>
                          */
        let options = [];

        let min = this.props.source['min'];
        let max = this.props.source['max'];
        let count = this.props.source['count'];
        let labelsClassName = this.props.source['labels'] === true ? "radio-likert-value-label" : "";

        for (let i = 0; i < count; i++) {
            let value = min['value'] + i * (max['value'] - min['value'] + 1) / count;
            options.push(
                <RadioElement key={value}
                              label={value}
                              name={this.props.name}
                              className="radio-likert"
                              labelsClassName={labelsClassName}
                              onChange={this.handleChange}
                              required={this.props.required}
                              value={value}/>);
        }

        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;
        return (
            <div className="form-group">
                {label}
                <div className="position-relative">
                    <div className="d-lg-inline-block radio-likert-label min">
                        <small>
                            <b>
                                {min['text']}
                            </b>
                        </small>
                    </div>
                    <div className="d-inline-block">
                        {options}
                    </div>
                    <div className="d-inline-block radio-likert-label max">
                        <small>
                            <b>
                                {max['text']}
                            </b>
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}
