import React from "react"


export default class CheckboxElement extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event);
    }

    render() {
        let className = this.props.className || "";
        let labelClassName = this.props.labelClassName || "";
        let text = this.props.label ? this.props.label : this.props.value;

        return (
            <label className={"checkbox " + className}>
                <input id={this.props.name}
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleChange}
                       type="checkbox"/>
                <span className="outer">
                    <span className="inner"></span>
                </span>
                <div className={"text " + labelClassName}>
                    {text}
                </div>
            </label>
        );
    }
}
