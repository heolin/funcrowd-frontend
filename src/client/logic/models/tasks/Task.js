
export default class Task {
    constructor(id, name, description, instruction) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.instruction = instruction;
    }

    static fromJson(task_data) {
        let task = new Task(
            task_data.id,
            task_data.name,
            task_data.description,
            task_data.instruction
        );
        return task;
    }
}
