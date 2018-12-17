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
        let result = nextProps.value !== this.props.value;
        return result;
    }

    render() {
        let options = this.props.source.map((option) =>
            <RadioElement key={option}
                          name={this.props.name}
                          onChange={this.handleChange}
                          required={this.props.required}
                          value={option}/>);
        return (
            <div className="form-group">
                <label><strong>{this.props.name}</strong></label>
                {options}
            </div>
        );
    }
}
