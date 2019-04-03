
export default class Mission {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static fromJson(mission_data) {
        let mission = new Mission(
            mission_data.id,
            mission_data.name
        );
        return mission;
    }
}
