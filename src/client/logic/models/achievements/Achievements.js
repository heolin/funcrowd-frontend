
export default class Achievement {
    constructor(id, order, status, value, target, progress, metadata) {
        this.id = id;
        this.order = order;
        this.status = status;
        this.value = value;
        this.target = target;
        this.progress = progress;
        this.metadata = metadata;
    }

    static fromJson(data) {
        let achievement = new Achievement(
            data.id,
            data.order,
            data.status,
            data.value,
            data.target,
            data.progress,
            data.metadata
        );
        return achievement;
    }
}
