import React from "react"
import RadioElement from "./element/RadioElement";
import RadioOtherElement from "./element/RadioOtherElement";


export default class RadioOtherField extends React.Component {

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
        let options = this.props.source.map((option) =>
            <RadioElement key={option}
                          className="small"
                          name={this.props.name}
                          onChange={this.handleChange}
                          required={this.props.required}
                          value={option}/>);
        options.push(
            <RadioOtherElement key="other"
                               className="small"
                               name={this.props.name}
                               onChange={this.handleChange}
                               required={this.props.required}
                               disabled={!this.state.otherSelected}/>
        );

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
