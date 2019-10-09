import ProfileTypes from "./ProfileTypes";

let ProfileConfigs = {};

ProfileConfigs[ProfileTypes.NORMAL] = {
    missions: true,
    achievements: true,
    about: true,
    ranking: true,
    bounties: false,
    profile: true
};

ProfileConfigs[ProfileTypes.MTURK] = {
    missions: false,
    achievements: false,
    about: false,
    ranking: false,
    bounties: true,
    profile: false
};

export default ProfileConfigs;
