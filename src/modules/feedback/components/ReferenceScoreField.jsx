import React from "react"


export default class ReferenceScoreField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="label label-warning">
                <label>{this.props.name}</label>
                <div>{this.props.value}</div>
            </div>
        );
    }
}
