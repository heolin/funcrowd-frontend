
export default class Bounty {
    constructor(id, name, order, status, metadata, instruction) {
        this.id = id;
        this.name = name;
        this.order = order;
        this.status = status;
        this.metadata = metadata;
        this.instruction = instruction;
    }

    static fromJson(bounty_data) {
        let bounty = new Bounty(
            bounty_data.id,
            bounty_data.name,
            bounty_data.order,
            bounty_data.status,
            bounty_data.metadata,
            bounty_data.instruction
        );
        return bounty;
    }
}
