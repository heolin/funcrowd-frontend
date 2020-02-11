
export default class Task {
    constructor(id, mission_id, name, description, instruction, keywords,
                achievements, metadata, totalExp, feedback) {
        this.id = id;
        this.mission_id  = mission_id;
        this.name = name;
        this.description = description;
        this.instruction = instruction;
        this.keywords = keywords;
        this.achievements = achievements;
        this.metadata = metadata;
        this.totalExp = totalExp;
        this.feedback = feedback;
    }

    static fromJson(task_data) {
        let task = new Task(
            task_data.id,
            task_data.mission,
            task_data.name,
            task_data.description,
            task_data.instruction,
            task_data.keywords,
            task_data.achievements_count,
            task_data.metadata,
            task_data.total_exp,
            task_data.feedback
        );
        return task;
    }
}
