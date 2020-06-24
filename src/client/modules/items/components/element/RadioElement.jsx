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
        return nextProps.value !== this.props.value;
    }

    render() {
        let className = this.props.className || "";
        let text = this.props.label == null ? this.props.value : this.props.label;

        return (
            <label className={"radio " + className}>
                <input id={this.props.name}
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleChange}
                       type="radio"/>
                <span className="outer">
                    <span className="inner"/>
                </span>
                <span className={this.props.labelsClassName}>
                    {text}
                </span>
            </label>
        );
    }
}
