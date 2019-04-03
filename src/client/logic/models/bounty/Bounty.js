import UserBounty from "./UserBounty";
import Task from "../tasks/Task";


export default class Bounty {
    constructor(id, task, annotationsTarget, closed, userBounty) {
        this.id = id;
        this.task = task;
        this.annotationsTarget = annotationsTarget;
        this.closed = closed;
        this.userBounty = userBounty;
    }

    static fromJson(bounty_data) {
        let bounty = new Bounty(
            bounty_data.id,
            Task.fromJson(bounty_data.task),
            bounty_data.annotations_target,
            bounty_data.closed,
            UserBounty.fromJson(bounty_data.user_bounty)
        );
    return bounty;
    }
}
