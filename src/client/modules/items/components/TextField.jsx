import React from "react"


export default class TextField extends React.Component {

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
        return (
            <div className="form-group">
                <label>{this.props.name}</label>
                <input id={this.props.name}
                       value={this.props.value}
                       onChange={this.handleChange}
                       className="form-control"
                       required={this.props.required}
                       type="text"/>
            </div>
        );
    }
}
