import React from "react"
import CheckboxElement from "./element/CheckboxElement";
import CheckboxOtherElement from "./element/CheckboxOtherElement";


export default class TextOrCheckboxField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            otherSelected: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let otherCheck = document.getElementById(this.props.name + "-other");
        let otherText = document.getElementById(this.props.name + "-text");
        this.setState({
            otherSelected: otherCheck.checked
        });

        let checkboxes = document.querySelectorAll('input[name='+this.props.name+']:checked');

        let values = [];
        for (let i = 0; i < checkboxes.length; i++)
            if (checkboxes[i].value !== "")
                values.push(checkboxes[i].value);
        if (otherCheck.checked)
            values.push(otherText.value);

        event = {
            target: {
                id: this.props.name,
                value: JSON.stringify(values)
            }
        };
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

        let textElement = <CheckboxOtherElement key="other"
                                                className="small"
                                                name={this.props.name}
                                                onChange={this.handleChange}
                                                required={this.props.required}
                                                text={this.props.source.label}
                                                disabled={!this.state.otherSelected}/>;

        const values = this.props.source.values;
        let options = values.map((option) =>
            <CheckboxElement key={option}
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
