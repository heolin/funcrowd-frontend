
export default class UserBounty {
    constructor(id, progress, annotationsDone, annotationsTarget, status, reward, rewardsList) {
        this.id = id;
        this.progress = progress;
        this.annotationsDone = annotationsDone;
        this.annotationsTarget = annotationsTarget;
        this.status = status;
        this.reward = reward;
        this.rewardsList = rewardsList ? rewardsList : [];
    }

    static fromJson(bounty_data) {
        if (bounty_data !== null && bounty_data.id) {
            let userBounty = new UserBounty(
                bounty_data.id,
                bounty_data.progress,
                bounty_data.annotations_done,
                bounty_data.annotations_target,
                bounty_data.status,
                bounty_data.reward,
                bounty_data.rewards_list
            );
            return userBounty;
        }
    }

    get isClosed() {
        return this.status === "FINISHED" || this.status === "CLOSED";
    }

}
