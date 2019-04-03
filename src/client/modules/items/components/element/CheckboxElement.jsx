import React from "react"


export default class RadioElement extends React.Component {

    render() {
        return (
            <label className="radio-container">
                <input name={this.props.name}
                       value={this.props.value}
                       type="checkbox"/>
                <span className="checkmark"></span>
                {this.props.value}
            </label>
        );
    }
}
