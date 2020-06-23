import React from "react"


export default class Link extends React.Component {

    render() {
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;

        return (
            <div className="form-group">
                {label}
                <div>
                    <a target="_blank" href={this.props.value}>{this.props.value}</a>
                </div>
            </div>
        );
    }
}
