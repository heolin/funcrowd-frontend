import React from "react"
import RadioElement from "./element/RadioElement";


export default class RadioField extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let result = (nextProps.value !== this.props.value) ||
                     (nextProps.source !== this.props.source);
        return result;
    }

    render() {
        let options = this.props.source.map((option) =>
            <RadioElement key={option}
                          className="small"
                          name={this.props.name}
                          onChange={this.handleChange}
                          required={this.props.required}
                          value={option}/>);
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;
        return (
            <div className="form-group">
                {label}
                <div>{options}</div>
            </div>
        );
    }
}
