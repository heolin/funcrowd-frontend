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

    getStatusOrder() {
        if (this.userBounty) {
            let status = this.userBounty.status;
            if (status === "CLOSED") {
                if (this.userBounty.progress === 1)
                    return 3;
                else
                    return 4;
            }
            if (status === "FINISHED")
                return 3;
            else
                return 1;
        }
        return 4;
    }
}
