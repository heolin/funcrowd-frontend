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
    settings: false,
    game: false,
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
    profile_menu: false,
    profile: false,
    settings: true,
    game: false,
    availablePages: null,
};

ProfileConfigs[ProfileTypes.ELEARNING] = {
    missions: true,
    achievements: false,
    about: true,
    exp: false,
    ranking: false,
    bounties: false,
    profile: true,
    profile_menu: false,
    settings: true,
    game: false,
    availablePages: null,
};

ProfileConfigs[ProfileTypes.GAMIFICATION] = {
    missions: true,
    achievements: true,
    about: true,
    exp: true,
    ranking: true,
    bounties: false,
    profile: false,
    profile_menu: true,
    settings: false,
    game: false,
    availablePages: null,
};

ProfileConfigs[ProfileTypes.SERIOUS_GAME] = {
    missions: false,
    achievements: false,
    about: true,
    exp: false,
    ranking: false,
    bounties: false,
    profile: true,
    profile_menu: false,
    settings: true,
    game: true,
    availablePages: null,
};

ProfileConfigs[ProfileTypes.MTURK] = {
    missions: false,
    achievements: false,
    about: false,
    ranking: false,
    bounties: true,
    profile: false,
    profile_menu: false,
    settings: false,
    game: false,
    availablePages: null,
};

export default ProfileConfigs;
