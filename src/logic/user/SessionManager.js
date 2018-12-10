
let USER = "funcrowd_user";


class _SessionManager {
    constructor() {
        this.token = null;
        this.config = {};
        this.is_logged = false;
    }

    login(user, saveUser) {
        this.token = user.token;
        this.is_logged = true;
        this.config = {
            headers: {
                Authorization: "Token " + user.token
            }
        };
        if (saveUser) {
            localStorage.setItem(USER, JSON.stringify(user));
        }
    }

    logout() {
        this.is_logged = false;
        this.token = null;
        this.config = {};
        localStorage.removeItem(USER);
    }

    getUser() {
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
