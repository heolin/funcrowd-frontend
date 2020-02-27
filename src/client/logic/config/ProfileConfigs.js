import ProfileTypes from "./ProfileTypes";
import urls from "../../Urls"

let ProfileConfigs = {};

ProfileConfigs[ProfileTypes.NOTLOGGED] = {
    missions: false,
    achievements: false,
    about: false,
    exp: false,
    ranking: false,
    bounties: false,
    profile: false,
    availablePages: [
        urls.HOME, urls.LOGIN, urls.REGISTER, urls.ACTIVATION,
        urls.ABOUT, urls.RESET_PASSWORD, urls.RESET_PASSWORD_TOKEN
    ]
};

ProfileConfigs[ProfileTypes.NORMAL] = {
    missions: true,
    achievements: false,
    about: true,
    exp: false,
    ranking: false,
    bounties: false,
    profile: false,
    availablePages: null,
};

ProfileConfigs[ProfileTypes.ELEARNING] = {
    missions: true,
    achievements: false,
    about: true,
    exp: false,
    ranking: false,
    bounties: false,
    profile: false,
    availablePages: null,
};

ProfileConfigs[ProfileTypes.GAMIFICATION] = {
    missions: true,
    achievements: true,
    about: true,
    exp: true,
    ranking: true,
    bounties: false,
    profile: true,
    availablePages: null,
};

ProfileConfigs[ProfileTypes.MTURK] = {
    missions: false,
    achievements: false,
    about: false,
    ranking: false,
    bounties: true,
    profile: false,
    availablePages: null,
};

export default ProfileConfigs;
