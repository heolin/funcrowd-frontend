import React from "react"
import CheckboxElement from "./element/CheckboxElement";


export default class CheckboxField extends React.Component {

    render() {
        let options = this.props.source.map((option) =>
            <CheckboxElement key={option}
                             onChange={this.props.onChange}
                             name={this.props.name}
                             value={option}/>);
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;
        return (
            <div className="form-group">
                {label}
                <div>{options}</div>
            </div>
        );
    }
}
