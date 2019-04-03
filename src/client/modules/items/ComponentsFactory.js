import React from "react"
import TextLabel from "./components/TextLabel";
import TextField from "./components/TextField";
import RadioField from "./components/RadioField";
import MultiChoiceField from "./components/MultiChoiceField";
import SelectField from "./components/SelectField";


let Components = {
    "TextLabel": TextLabel,
    "ChoiceField": RadioField ,
    "PDF": TextLabel,
    "TextField": TextField,
    "RadioField": RadioField,
    "MultiChoiceField": MultiChoiceField,
    "SelectField": SelectField,
};

export default class ComponentsFactory {

    create(widget, name, value, source, required, blocked, handleChange) {
        if (widget === "Hidden")
            return null;
        let component = Components[widget];
        return React.createElement(component, {
            name: name,
            value: value,
            source: source,
            key: name,
            required: required,
            disabled: blocked,
            onChange: handleChange
        });
    }
}
