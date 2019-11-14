import React from "react"
import CheckboxElement from "./element/CheckboxElement";


export default class CheckboxField extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        let checkboxes = document.querySelectorAll('input[name='+this.props.name+']:checked');

        let values = [];
        for (let i = 0; i < checkboxes.length; i++)
            values.push(checkboxes[i].value);


        let event = {
            target: {
                id: this.props.name,
                value: JSON.stringify(values)
            }
        };
        this.props.onChange(event);
    }

    render() {
        let options = this.props.source.map((option) =>
            <CheckboxElement key={option}
                             labelClassName="small"
                             onChange={this.onChange}
                             name={this.props.name}
                             value={option}/>);
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;
        return (
            <div className="form-group">
                {label}
                <div style={{marginLeft: "10px"}}>{options}</div>
            </div>
        );
    }
}
