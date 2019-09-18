import React from "react"


export class CircleImage extends React.Component {
    render() {
        let className = this.props.className || "";
        return (
            <div className={className + " card-3-static circle-image"}>
                <img className="circle-image-content" src={this.props.image}/>
            </div>
        );
    }
}
