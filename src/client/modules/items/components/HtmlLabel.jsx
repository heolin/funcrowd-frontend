import React from "react"


export default class HtmlLabel extends React.Component {

    render() {
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;

        return (
            <div className="form-group">
                {label}
                <div dangerouslySetInnerHTML={{__html: this.props.value}}/>
            </div>
        );
    }
}
