import axios from 'axios';
import User from "../../logic/models/user/User";
import ConfigManager from "../config/ConfigManager";


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

    static mturk(workerId) {
        return axios.post(ConfigManager.baseUrl+'/api/v1/users/mturk', {
            worker_id: workerId,
        }).then((response) => {
            let user = User.fromJson(response.data);
            return user;
        });
    }
}
