
export default class LocalizedDictionary {
    constructor (values) {
        this.values = values;
        this.language = null;
        return new Proxy(this, this);
    }

    setup(language) {
        this.language = language;
    }

    get (target, prop) {
        return this[prop] || this.values[prop][this.language];
    }
}
