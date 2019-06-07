
export default class Storage {
    constructor(key, data) {
        this.key = key;
        this.data = data;
    }

    static fromJson(data) {
        if (data) {
            let storage = new Storage(
                data.key,
                data.data
            );
            return storage;
        }
    }
}
