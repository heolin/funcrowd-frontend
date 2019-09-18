
export default class Task {
    constructor(id, name, description, instruction, keywords, metadata) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.instruction = instruction;
        this.keywords = keywords;
        this.metadata = metadata;
    }

    static fromJson(task_data) {
        let task = new Task(
            task_data.id,
            task_data.name,
            task_data.description,
            task_data.instruction,
            task_data.keywords,
            task_data.metadata
        );
        return task;
    }
}
