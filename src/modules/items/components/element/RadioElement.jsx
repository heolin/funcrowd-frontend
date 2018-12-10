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
        let result = nextProps.value != this.props.value;
        return result;
    }

    render() {
        return (
            <label className="radio-container">
                <input id={this.props.name}
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleChange}
                       type="radio"/>
                <span className="radiomark"></span>
                {this.props.value}
            </label>
        );
    }
}
