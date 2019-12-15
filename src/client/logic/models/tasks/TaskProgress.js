
export default class TaskProgress {
    constructor(id, task, items_done, items_count, progress, status, maxScore, score) {
        this.id = id;
        this.task = task;
        this.items_done = items_done;
        this.items_count = items_count;
        this.progress = progress;
        this.status = status;
        this.maxScore = maxScore;
        this.score = score;
    }

    static fromJson(data) {
        let progress = new TaskProgress(
            data.id,
            data.task,
            data.items_done,
            data.items_count,
            data.progress,
            data.status,
            data.max_score,
            data.score
        );
        return progress;
    }
}
