
export default class Task {
    constructor(id, mission_id, name, description, instruction, keywords, metadata, totalExp) {
        this.id = id;
        this.mission_id  = mission_id;
        this.name = name;
        this.description = description;
        this.instruction = instruction;
        this.keywords = keywords;
        this.metadata = metadata;
        this.totalExp = totalExp;
    }

    static fromJson(task_data) {
        let task = new Task(
            task_data.id,
            task_data.mission,
            task_data.name,
            task_data.description,
            task_data.instruction,
            task_data.keywords,
            task_data.metadata,
            task_data.total_exp
        );
        return task;
    }
}
