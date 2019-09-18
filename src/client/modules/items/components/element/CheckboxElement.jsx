import React from "react"


export default class CheckboxElement extends React.Component {

    render() {
        return (
            <label className="checkbox">
                <input id={this.props.name}
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleChange}
                       type="checkbox"/>
                <span className="outer">
                    <span className="inner"></span>
                </span>
                {this.props.value}
            </label>
        );
    }
}
