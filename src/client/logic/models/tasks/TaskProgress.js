
export default class TaskProgress {
    constructor(id, task, items_done, items_count, progress) {
        this.id = id;
        this.task = task;
        this.items_done = items_done;
        this.items_count = items_count;
        this.progress = progress;
    }

    static fromJson(data) {
        let progress = new TaskProgress(
            data.id,
            data.task,
            data.items_done,
            data.items_count,
            data.progress
        );
        return progress;
    }
}
