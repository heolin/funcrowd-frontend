import UserManager from "./UserManager";

let USER = "funcrowd_user";


class _SessionManager {
    constructor() {
        this.token = null;
        this.config = {};
        this.cache = {
            action: null,
            resetPasswordToken: null
        };
    }

    login(user, saveUser) {
        if (user.login === "")
            return;

        this.token = user.token;
        this.isLogged = true;
        this.config = {
            headers: {
                Authorization: "Token " + user.token
            }
        };
        UserManager.setup(user);
        sessionStorage.setItem(USER, JSON.stringify(user));
        if (saveUser) {
            localStorage.setItem(USER, JSON.stringify(user));
        }
    }

    logout() {
        this.isLogged = false;
        this.token = null;
        this.config = {};
        localStorage.removeItem(USER);
        sessionStorage.removeItem(USER);
        UserManager.logout();
    }

    getUser() {
        let user = this.getSessionUser();
        if (user === null)
            user = this.getLocalStorageUser();
        return user;
    }

    getSessionUser() {
        let user = null;
        try {
            user = JSON.parse(sessionStorage.getItem(USER));
        } catch (e) {
        }
        return user;
    }

    getLocalStorageUser() {
        let user = null;
        try {
            user = JSON.parse(localStorage.getItem(USER));
        } catch (e) {
        }
        return user;
    }
}

const SessionManager = new _SessionManager();

export default SessionManager;
