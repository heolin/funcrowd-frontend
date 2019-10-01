import React from "react"


export default class RadioElement extends React.Component {

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
        let className = this.props.className || "";
        let text = this.props.label ? this.props.label : this.props.value;

        return (
            <label className={"radio " + className}>
                <input id={this.props.name}
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleChange}
                       type="radio"/>
                <span className="outer">
                    <span className="inner"></span>
                </span>
                {text}
            </label>
        );
    }
}
