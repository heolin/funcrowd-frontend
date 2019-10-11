import LocalizedDictionary from "./LocalizedDictionary";

import labels from "../../resources/labels";
import general from "../../resources/general";
import bounty from "../../resources/bounty";
import feedback from "../../resources/feedback";


class _LocalizationManager {
    constructor() {
        this.labels = new LocalizedDictionary(labels);
        this.general = new LocalizedDictionary(general);
        this.bounty = bounty;
        this.bounty.status = new LocalizedDictionary(bounty.status);
        this.bounty.labels = new LocalizedDictionary(bounty.labels);
        this.feedback = new LocalizedDictionary(feedback);
        this.language = null;
    }

    setup(language) {
        this.language = language;
        this.labels.setup(language);
        this.general.setup(language);
        this.bounty.status.setup(language);
        this.bounty.labels.setup(language);
        this.feedback.setup(language);
    }

}

const LocalizationManager = new _LocalizationManager();

export default LocalizationManager;
