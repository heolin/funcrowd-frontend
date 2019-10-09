
export default class Mission {
    constructor(id, name, description, tasksCount, achievementsCount, metadata={}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tasksCount = tasksCount;
        this.achievementsCount = achievementsCount,
        this.metadata = metadata;
    }

    static fromJson(mission_data) {
        let mission = new Mission(
            mission_data.id,
            mission_data.name,
            mission_data.description,
            mission_data.tasks_count,
            mission_data.achievementsCount,
            mission_data.metadata
        );
        return mission;
    }
}
