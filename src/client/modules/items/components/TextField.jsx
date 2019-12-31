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
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;
        return (
            <div className="form-group">
                {label}
                <input id={this.props.name}
                       style={{maxWidth: "400px"}}
                       value={this.props.value}
                       onChange={this.handleChange}
                       className="form-control"
                       required={this.props.required}
                       type="text"/>
            </div>
        );
    }
}
