import React from "react"
import ReferenceScoreField from "./components/ReferenceScoreField";
import ReferenceValueField from "./components/ReferenceValueField";


let Components = {
    "ReferenceScore": ReferenceScoreField,
    "ReferenceValue": ReferenceValueField
};

let NamesMap = {
    "ReferenceScore": "Score",
    "ReferenceValue": "Correct answer"
};


export default class FeedbackComponentsFactory {

    create(field_name, name, value, annotation) {
        if (value != null) {
            let component = Components[name];
            return React.createElement(component, {
                key: name,
                name: NamesMap[name],
                field_name: field_name,
                value: value,
                annotation: annotation
            });
        } else {
            return null;
        }
    }
}
