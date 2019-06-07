
function createConfig() {
    return {
        showFeedback: false
    };
}


class _ConfigManager {
    constructor() {
        this.config = createConfig();
        this.initilized = false;
        this.baseUrl = process.env.BACKEND_URL;
    }

    setup(user) {
        this.config = createConfig();
        this.config.showFeedback = true;// user.group > 5;
        this.initilized = true;
    }
}

const ConfigManager = new _ConfigManager();

export default ConfigManager;
