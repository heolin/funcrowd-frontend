import EventEmitter from "event-emitter-es6"
import UserRepository from "./repositories/UserRepository";
import LevelsConfig from "../resources/levels";

const EXPERIENCE_CHANGED = "experience-changed";


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

    _updateLevel() {
        while (this.level < Object.keys(LevelsConfig).length
            && this.user.exp >= LevelsConfig[this.level+1].threshold) {
            this.level += 1;
        }

        this.levelProgress = 1.0;
        if (this.level < Object.keys(LevelsConfig).length) {
            let current = LevelsConfig[this.level].threshold;
            let next = LevelsConfig[this.level+1].threshold;
            this.levelProgress = (this.user.exp - current) / next;
        }
    }
}

const UserManager = new _UserManager();

export default UserManager;
