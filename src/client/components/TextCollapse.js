import React from "react"
import {Icon} from "./Icons";


export class TextCollapse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            shown: !this.state.shown
        });
    }

    render() {
        let icon = this.state.shown ? "arrow-down" : "arrow-right";
        let className = this.state.shown ? "" : " collapsed";

        return (
            <div className="text-collapse" style={this.props.style}>
                <div className="text-collapse-head noselect smal" onClick={this.onClick}>
                    <Icon className="very-small-icon" name={icon} style={{marginRight: "10px"}}/>
                    {this.props.headText}
                </div>
                <div className={"text-collapse-body" + className}>
                    <div style={{padding: "20px"}}
                         dangerouslySetInnerHTML={{__html: this.props.bodyText}}/>
                </div>
            </div>
        )
    }
}
