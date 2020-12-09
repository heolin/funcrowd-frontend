import React from "react"


export default class CheckboxOtherElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleChange(event) {
        event = {
            target: {
                id: this.props.name,
                value: this.state.value
            }
        };
        this.props.onChange(event);
    }

    handleTextChange(event) {
        this.setState({
           value: event.target.value
        }, this.handleChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.value !== this.state.value)
            return true;
        if (nextProps.disabled !== this.props.disabled)
            return true;
        return false;
    }

    render() {
        let className = this.props.className || "";

        return (
            <label className={"checkbox " + className}>
                <input id={this.props.name + "-other"}
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleChange}
                       type="checkbox"/>
                <span className="outer">
                    <span className="inner"></span>
                </span>
                {this.props.text}
                <input id={this.props.name + "-text"}
                       value={this.state.value}
                       name={this.props.name}
                       className="form-control radio-other"
                       onChange={this.handleTextChange}
                       disabled={this.props.disabled}
                       style={{marginLeft: "15px"}}
                       type="text"/>
            </label>
        );
    }
}
