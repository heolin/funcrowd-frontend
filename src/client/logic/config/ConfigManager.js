import ProfileConfigs from "./ProfileConfigs";
import ProfileTypes from "./ProfileTypes";

function createConfig() {
    return {
        showFeedback: true
    };
}


class _ConfigManager {
    constructor() {
        this.config = createConfig();
        this.initilized = false;
        this.baseUrl = process.env.BACKEND_URL;
        this.profile = ProfileConfigs[ProfileTypes.NOTLOGGED];
    }

    setup(user) {
        this.config = createConfig();
        if (user.profile === ProfileTypes.MTURK)
            this.config.showFeedback = user.group > 5;
        this.initilized = true;
        this.profile = ProfileConfigs[user.profile];
    }

    changeProfile(profile) {
        this.profile = ProfileConfigs[profile];
    }

    logout() {
        this.profile = ProfileConfigs[ProfileTypes.NOTLOGGED];
    }
}

const ConfigManager = new _ConfigManager();

export default ConfigManager;
