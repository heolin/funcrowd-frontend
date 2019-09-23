import React from "react"


export default class Image extends React.Component {

    render() {
        return (
            <div className="gallery-image grow"
                 onClick={this.props.onClick}>
                <img src={this.props.url}/>
            </div>
        );
    }
}
