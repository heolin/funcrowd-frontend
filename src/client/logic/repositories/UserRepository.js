import axios from 'axios';
import User from "../../logic/models/user/User";
import SessionManager from "../SessionManager";
import ConfigManager from "../config/ConfigManager";
import UserStatus from "../models/user/UserStatus";


export default class UserRepository {
    static login(username, password) {
        return axios.post(ConfigManager.baseUrl+'/api/v1/users/login', {
            username: username,
            password: password
        }).then((response) => {
            let user = User.fromJson(response.data);
            return user;
        });
    }

    static register(username, email, password1, password2) {
        return axios.post(ConfigManager.baseUrl+'/api/v1/users/register', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        }).then((response) => {
            let user = User.fromJson(response.data);
            return user;
        });
    }

    static mturk(workerId) {
        return axios.post(ConfigManager.baseUrl+'/api/v1/users/mturk', {
            worker_id: workerId,
        }).then((response) => {
            let user = User.fromJson(response.data);
            return user;
        });
    }
    static status() {
        return axios.get(ConfigManager.baseUrl+'/api/v1/users/status', SessionManager.config).then((response) => {
            let status = UserStatus.fromJson(response.data);
            return status;
        });
    }
}
