
export default class UserBounty {
    constructor(id, progress, annotationsDone, annotationsTarget, status, reward) {
        this.id = id;
        this.progress = progress;
        this.annotationsDone = annotationsDone;
        this.annotationsTarget = annotationsTarget;
        this.status = status;
        this.reward = reward;
    }

    static fromJson(bounty_data) {
        if (bounty_data !== null && bounty_data.id) {
            let userBounty = new UserBounty(
                bounty_data.id,
                bounty_data.progress,
                bounty_data.annotations_done,
                bounty_data.annotations_target,
                bounty_data.status,
                bounty_data.reward
            );
            return userBounty;
        }
    }

    get is_closed() {
        return this.status === "FINISHED" || this.status === "CLOSED";
    }

}
