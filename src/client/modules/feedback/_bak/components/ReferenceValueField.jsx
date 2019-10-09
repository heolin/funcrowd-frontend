import React from "react"


export default class ReferenceValueField extends React.Component {

    render() {
        let annotationValue = this.props.annotation.data[this.props.field_name];
        let colorStyle = "badge-danger";

        if (this.props.value[0] === annotationValue)
            colorStyle = "badge-success";

        return (
            <div className="">
                <div style={{textAlign: "right", marginBottom: "10px", position: "relative"}}>
                    <label style={{position: "absolute", top: "calc(50% - 14px)", left: "0"}}>Your answer:</label>
                    <span className={"badge " + colorStyle}
                          style={{fontSize: "14px", width: "100px", textAlign: "center", whiteSpace: "normal"}}>
                        {annotationValue}
                    </span>
                </div>
                <div style={{textAlign: "right", position: "relative"}}>
                    <label style={{position: "absolute", top: "calc(50% - 14px)", left: "0"}}>{this.props.name}:</label>
                    <span className={"badge " + colorStyle}
                          style={{fontSize: "14px", width: "100px", textAlign: "center", whiteSpace: "normal"}}>
                        {this.props.value[0]}
                    </span>
                </div>
            </div>
        );
    }
}
