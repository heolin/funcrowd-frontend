import React from "react"


export default class ReferenceScoreField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let colorStyle = "badge-danger";
        if (this.props.value > 0)
            colorStyle = "badge-success";

        return (
            <div className="">
                <label>{this.props.name}:</label>
                <span className={"badge " + colorStyle} style={{float: "right", fontSize: "14px", width: "100px"}}>
                    {this.props.value*100} points
                </span>
            </div>
        );
    }
}
