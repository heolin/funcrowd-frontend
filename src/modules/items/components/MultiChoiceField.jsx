import React from "react"


export default class MultiChoiceField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label>{this.props.name}</label>
                <div>{this.props.value}</div>
            </div>
        );
    }
}
