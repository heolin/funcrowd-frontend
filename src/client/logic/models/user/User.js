
export default class User {
    constructor(id, username, email, token, profile, group) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.token = token;
        this.profile = profile;
        this.group = group;
    }

    static fromJson(user_data) {
        let user = new User(user_data.id,
            user_data.username,
            user_data.email,
            user_data.token,
            user_data.profile,
            user_data.group);
        return user;
    }
}