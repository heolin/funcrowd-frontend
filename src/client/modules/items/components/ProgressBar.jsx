import React from "react"


export default class ProgressBar extends React.Component {

    render() {
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;

        let width = this.props.value.width || 250;
        let progress = this.props.value.progress;
        let text = this.props.value.text || "";

        return (
            <div className="form-group">
                {label}
                <div className="text-center">
                    <div className="progress bg-light-blue height-12"
                         style={{
                             width: width+"px",
                             margin: "auto"
                         }}>
                        <div className="progress-bar bg-blue height-12"
                             style={{
                                 width: progress+"%"
                             }}
                             />
                    </div>
                    <div className="small">
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}
