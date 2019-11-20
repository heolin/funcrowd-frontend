import React from "react"


export default class TextHeader extends React.Component {

    render() {
        return (
            <div className="form-group">
                <h3>{this.props.value}</h3>
            </div>
        );
    }
}
