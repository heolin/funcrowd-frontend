import React from "react"


export default class Image extends React.Component {

    render() {
        return (
            <div className="gallery-image stat"
                 onClick={this.props.onClick}>
                <img src={this.props.url}/>
            </div>
        );
    }
}
