import React from "react"
import RadioElement from "./element/RadioElement";
import RadioOtherElement from "./element/RadioOtherElement";


export default class TextOrRadioField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            otherSelected: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let other = document.getElementById(this.props.name + "-other");
        this.setState({
            otherSelected: other.checked
        });

        console.log(event.target);
        this.props.onChange(event);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.value !== this.props.value)
            return true;
        if (nextState.otherSelected !== this.state.otherSelected)
            return true;
        return false;
    }

    render() {
        let order = this.props.source.order;

        let textElement = <RadioOtherElement key="other"
                                             className="small"
                                             name={this.props.name}
                                             onChange={this.handleChange}
                                             required={this.props.required}
                                             text={this.props.source.label}
                                             disabled={!this.state.otherSelected}/>;

        const values = this.props.source.values;
        let options = values.map((option) =>
            <RadioElement key={option}
                          className="small"
                          name={this.props.name}
                          onChange={this.handleChange}
                          required={this.props.required}
                          value={option}/>
        );

        if (order === 'first')
            options.unshift(textElement);
        else
            options.push(textElement);

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
