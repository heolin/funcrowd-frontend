import EventEmitter from "event-emitter-es6"
import AchievementsRepository from "./repositories/AchievementsRepository";
import UserManager from "./UserManager";

const ACHIEVEMENTS_CHANGED = "achievements-changed";


class _AchievementsManager extends EventEmitter {
    constructor() {
        super();
        this.loading = false;
        this.unfinishedAchievements = [];
        this.finishedAchievements = [];
    }


    update() {
        if (!UserManager.user)
            return;

        if (this.loading)
            return;

        this.loading = true;

        AchievementsRepository.all()
            .then((achievements) => {
                this.loading = false;
                this.finishedAchievements = [];
                this.unfinishedAchievements = [];

                achievements.forEach((achievement) => {
                    if (achievement.status == "FINISHED" || achievement.status == "CLOSED")
                        this.finishedAchievements.push(achievement);
                    else
                        this.unfinishedAchievements.push(achievement);
                });

                this.finishedAchievements.sort((a1, a2) => {
                    if (a1.updated > a2.updated) {
                        return -1;
                    }
                    if (a1.updated > a2.updated) {
                        return 1;
                    }
                    return 0;
                });

                this.emit(ACHIEVEMENTS_CHANGED);
            }).catch((error) => {
                this.loading = false;
                console.log(error)
            });
    }

    getUnclosedAchievements() {
        return AchievementsRepository.unclosed()
            .then((achievements) => {
                return achievements;
            }).catch((error) => {
                console.log(error)
            });
    }

    getLastFinished(top=3) {
        return this.finishedAchievements.slice(0, top);
    }

    addAchievementsChangeHandler(handler) {
        this.on(ACHIEVEMENTS_CHANGED, handler);
    }

    removeAchievementsChangeHandler(handler) {
        this.off(ACHIEVEMENTS_CHANGED, handler);
    }

}

const AchievementsManager = new _AchievementsManager();

export default AchievementsManager;
