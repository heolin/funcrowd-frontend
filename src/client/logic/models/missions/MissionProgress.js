
export default class MissionProgress {
    constructor(id, mission, tasks_done, tasks_count, progress) {
        this.id = id;
        this.mission = mission;
        this.tasks_done = tasks_done;
        this.tasks_count = tasks_count;
        this.progress = progress;
    }

    static fromJson(data) {
        let progress = new MissionProgress(
            data.id,
            data.mission,
            data.tasks_done,
            data.tasks_count,
            data.progress
        );
        return progress;
    }
}
