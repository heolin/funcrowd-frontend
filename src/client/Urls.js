
export default {
    HOME: "/",
    LOGIN: "/",
    ACTIVATION: "/activation",
    REGISTER: "/register",
    MISSIONS: "/missions",
    RESET_PASSWORD: "/reset_password",
    RESET_PASSWORD_TOKEN: "/reset_password_token",
    ABOUT: "/about",
    WELCOME: "/welcome",
    PROFILE: "/profile",
    SETTINGS: "/settings",
    GAME: "/game",
    RANKING: "/ranking",
    ACHIEVEMENTS: "/achievements",
    BOUNTY: "/bounty/:id",
    BOUNTIES: "/bounties",
    TASK: "/task/:id",
    TASKS: "/mission/:id/tasks",

    checkUrl: function(url1, url2) {
        return url1.replace("#", "") === url2.replace("#", "")
    }
}

