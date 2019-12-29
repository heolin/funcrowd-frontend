
export default class Mission {
    constructor(id, name, description, instruction, tasksCount, achievements, metadata={}, totalExp) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.instruction = instruction;
        this.tasksCount = tasksCount;
        this.achievements = achievements;
        this.metadata = metadata;
        this.totalExp = totalExp;
    }

    static fromJson(mission_data) {
        let mission = new Mission(
            mission_data.id,
            mission_data.name,
            mission_data.description,
            mission_data.instruction,
            mission_data.tasks_count,
            mission_data.achievements_count,
            mission_data.metadata,
            mission_data.total_exp
        );
        return mission;
    }
}
