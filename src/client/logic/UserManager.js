import EventEmitter from "event-emitter-es6"
import UserRepository from "./repositories/UserRepository";
import LevelsConfig from "../resources/levels";

const EXPERIENCE_CHANGED = "experience-changed";
const USERNAME_CHANGED = "username-changed";


class _UserManager extends EventEmitter {
    constructor() {
        super();
        this.user = null;
        this.loading = false;
        this.level = 1;
        this.levelProgress = 0;
    }

    setup(user) {
        this.user = user;
        this.emit(EXPERIENCE_CHANGED);
        this.update();
    }

    logout() {
        this.user = null;
    }

    update() {
        if (this.loading)
            return;


        this.loading = true;
        return UserRepository.status()
            .then((userStatus) => {
                if (userStatus.id !== this.user.id) {
                    console.log("Error. User id mismatch");
                }

                this.user.exp = userStatus.exp;
                this._updateLevel();
                this.emit(EXPERIENCE_CHANGED);
                this.loading = false;
            })
            .catch((error) => {
                console.log(error)
            });
    }

    addExperienceChangeHandler(handler) {
        this.on(EXPERIENCE_CHANGED, handler);
    }

    removeExperienceChangeHandler(handler) {
        this.off(EXPERIENCE_CHANGED, handler);
    }

    addUsernameChangeHandler(handler) {
        this.on(USERNAME_CHANGED, handler);
    }

    removeUsernameChangeHandler(handler) {
        this.off(USERNAME_CHANGED, handler);
    }

    changeUsername(username) {
        this.user.username = username;
        this.emit(USERNAME_CHANGED);
    }

    getExpLevel(exp, initialLevel=0) {
        let level = initialLevel;
        while (level < Object.keys(LevelsConfig).length
            && exp >= LevelsConfig[level+1].threshold) {
            level += 1;
        }
        return level;
    }

    getExpProgress(level, exp) {
        let levelProgress = 1.0;
        if (level < Object.keys(LevelsConfig).length) {
            let current = LevelsConfig[level].threshold;
            let next = LevelsConfig[level+1].threshold;
            levelProgress = (exp - current) / next;
        }
        return levelProgress;
    }

    _updateLevel() {
        this.level = this.getExpLevel(this.user.exp, this.level);
        this.levelProgress = this.getExpProgress(this.level, this.user.exp);
    }
}

const UserManager = new _UserManager();

export default UserManager;
