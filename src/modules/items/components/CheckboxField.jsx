import React from "react"
import CheckboxElement from "./element/CheckboxElement";


export default class CheckboxField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let options = this.props.value.map((option) =>
            <CheckboxElement key={option}
                             name={this.props.name}
                             value={option}/>);
        return (
            <div className="form-group">
                {options}
            </div>
        );
    }
}
