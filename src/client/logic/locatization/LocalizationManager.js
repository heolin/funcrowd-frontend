import LocalizedDictionary from "./LocalizedDictionary";

import labels from "../../resources/labels";
import general from "../../resources/general";


class _LocalizationManager {
    constructor() {
        this.labels = new LocalizedDictionary(labels);
        this.general = new LocalizedDictionary(general);
        this.language = null;
    }

    setup(language) {
        this.language = language;
        this.labels.setup(language);
        this.general.setup(language);
    }

}

const LocalizationManager = new _LocalizationManager();

export default LocalizationManager;
