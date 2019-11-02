
export default class UserStatus {
    constructor(id, username, exp) {
        this.id = id;
        this.username = username;
        this.exp = exp;
    }

    static fromJson(user_data) {
        let user = new UserStatus(user_data.id,
            user_data.username,
            user_data.exp
        );
        return user;
    }
}
