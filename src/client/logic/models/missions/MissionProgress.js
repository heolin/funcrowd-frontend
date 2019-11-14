
export default class MissionProgress {
    constructor(id, mission, tasks_done, tasks_count, progress, status) {
        this.id = id;
        this.mission = mission;
        this.tasks_done = tasks_done;
        this.tasks_count = tasks_count;
        this.progress = progress;
        this.status = status;
    }

    static fromJson(data) {
        let progress = new MissionProgress(
            data.id,
            data.mission,
            data.tasks_done,
            data.tasks_count,
            data.progress,
            data.status
        );
        return progress;
    }
}
