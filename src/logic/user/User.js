
export default class User {
    constructor(id, username, email, token) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.token = token;
    }

    static fromJson(user_data) {
        let user = new User(user_data.id,
            user_data.username,
            user_data.email,
            user_data.token);
        return user;
    }
}