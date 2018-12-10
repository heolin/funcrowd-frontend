import React from "react"


export default class ReferenceValueField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="label label-info">
                <label>{this.props.name}</label>
                <div>{this.props.value}</div>
            </div>
        );
    }
}
