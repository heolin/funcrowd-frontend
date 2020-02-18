
export default class UserDetails {
    constructor(id, username, email, profile, group, exp) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.profile = profile;
        this.group = group;
        this.exp = exp;
    }

    static fromJson(user_data) {
        let user = new UserDetails(user_data.id,
            user_data.username,
            user_data.email,
            user_data.profile,
            user_data.group,
            user_data.exp
        );
        return user;
    }
}