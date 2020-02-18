import EventEmitter from "event-emitter-es6"
import UserRepository from "./repositories/UserRepository";
import ConfigManager from "../logic/config/ConfigManager";
import LevelsConfig from "../resources/levels";
import L from "./locatization/LocalizationManager";
import ToastManager from "./ToastsManager";

const EXPERIENCE_CHANGED = "experience-changed";
const USERNAME_CHANGED = "username-changed";
const PROFILE_CHANGED = "profile-changed";


class _UserManager extends EventEmitter {
    constructor() {
        super();
        this.user = null;
        this.loading = false;
        this.level = 0;
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

    updateProfile() {
        if (this.loading)
            return;

        this.loading = true;
        return UserRepository.details()
            .then((details) => {
                if (details.id !== this.user.id) {
                    console.log("Error. User id mismatch");
                }

                if (this.user.profile !== details.profile) {
                    this.user.profile = details.profile;
                    console.log(details);
                    console.log(this.user);
                    ConfigManager.changeProfile(details.profile);
                    this.emit(PROFILE_CHANGED);
                }
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

    addProfileChangeHandler(handler) {
        this.on(PROFILE_CHANGED, handler);
    }

    removeProfileChangeHandler(handler) {
        this.off(PROFILE_CHANGED, handler);
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

    _addLevelUpToast() {
        let message = L.general.level + " " + this.level + " " + L.levels['level'+this.level];
        ToastManager.addToast("level", message);
    }

    _updateLevel() {
        let currentLevel = this.level;
        this.level = this.getExpLevel(this.user.exp, this.level);
        if (currentLevel < this.level && currentLevel > 0)
            this._addLevelUpToast();
        this.levelProgress = this.getExpProgress(this.level, this.user.exp);
    }
}

const UserManager = new _UserManager();

export default UserManager;
