import React from "react"
import {SmallIcon} from "./Icons";


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
                <div className="text-collapse-head" onClick={this.onClick}>
                    <SmallIcon name={icon}/>{this.props.headText}
                </div>
                <div className={"text-collapse-body" + className}>
                    <div style={{padding: "10px"}}>
                        {this.props.bodyText}
                    </div>
                </div>
            </div>
        )
    }
}
