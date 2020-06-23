import Bounty from "./Bounty";

export default class UserBounty {
    constructor(progress, annotationsDone, annotationsTarget, status, reward, bounty) {
        this.progress = progress;
        this.annotationsDone = annotationsDone;
        this.annotationsTarget = annotationsTarget;
        this.status = status;
        this.bounty = bounty;
        this.reward = reward;
    }

    static fromJson(bounty_data) {
        if (bounty_data !== null) {
            let userBounty = new UserBounty(
                bounty_data.progress,
                bounty_data.items_done,
                bounty_data.items_count,
                bounty_data.status,
                bounty_data.reward,
                Bounty.fromJson(bounty_data.package)
            );
            return userBounty;
        }
    }

    get isClosed() {
        return this.status === "FINISHED" || this.status === "CLOSED";
    }

    getStatusOrder() {
        let status = this.status;
        if (status === "CLOSED") {
            if (this.progress === 1)
                return 3;
            else
                return 4;
        }
        if (status === "FINISHED")
            return 3;
        else
            return 1;
    }

}
