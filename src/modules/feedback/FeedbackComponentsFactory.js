import React from "react"
import ReferenceScoreField from "./components/ReferenceScoreField";
import ReferenceValueField from "./components/ReferenceValueField";


let Components = {
    "ReferenceScore": ReferenceScoreField,
    "ReferenceValue": ReferenceValueField
};


export default class FeedbackComponentsFactory {

    create(name, value) {
        if (value != null) {
            let component = Components[name];
            return React.createElement(component, {
                key: name,
                name: name,
                value: value,
            });
        } else {
            return null;
        }
    }
}
