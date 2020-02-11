import React from "react"
import TextLabel from "./components/TextLabel";
import TextField from "./components/TextField";
import RadioField from "./components/RadioField";
import MultiChoiceField from "./components/MultiChoiceField";
import SelectField from "./components/SelectField";
import LinkButton from "./components/LinkButton";
import ImagesGallery from "./components/ImagesGallery/ImagesGallery";
import HtmlLabel from "./components/HtmlLabel";
import TextTagField from "./components/TextTagField";
import ImageField from "./components/ImageField";
import LikertScaleField from "./components/LikertScaleField";
import NumberField from "./components/NumberField";
import CheckboxField from "./components/CheckboxField";
import TextHeader from "./components/TextHeader";
import TextOrRadioField from "./components/TextOrRadioField";
import ProgressBar from "./components/ProgressBar";


let Components = {
    "TextLabel": TextLabel,
    "ChoiceField": RadioField ,
    "CheckboxField": CheckboxField,
    "PDF": TextLabel,
    "TextField": TextField,
    "RadioField": RadioField,
    "TextOrRadioField": TextOrRadioField,
    "ProgressBar": ProgressBar,
    "MultiChoiceField": MultiChoiceField,
    "SelectField": SelectField,
    "LinkButton": LinkButton,
    "ImagesGallery": ImagesGallery,
    "HtmlLabel": HtmlLabel,
    "TextTagField": TextTagField,
    "ImageField": ImageField,
    "LikertScaleField": LikertScaleField,
    "NumberField": NumberField,
    "TextHeader": TextHeader
};

export default class ComponentsFactory {

    create(widget, name, label, value, source, required, blocked, handleChange) {
        if (widget === "Hidden")
            return null;
        let component = Components[widget];
        return React.createElement(component, {
            name: name,
            label: label,
            value: value,
            source: source,
            key: name,
            required: required,
            disabled: blocked,
            onChange: handleChange
        });
    }
}
