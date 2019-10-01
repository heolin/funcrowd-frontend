import axios from 'axios';
import SessionManager from "../SessionManager";
import ConfigManager from "../config/ConfigManager";
import Achievement from "../models/achievements/Achievements";


export default class AchievementsRepository {
    static all() {
        return axios.get(ConfigManager.baseUrl+'/api/v1/achievements', SessionManager.config)
            .then((response) => {
                let achievements = response.data.map((data) => Achievement.fromJson(data));
                return achievements;
            })
    }

    static mission(missionId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/achievements/mission/'+missionId, SessionManager.config)
            .then((response) => {
                let achievements = response.data.map((data) => Achievement.fromJson(data));
                return achievements;
            })
    }

    static task(taskId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/achievements/task/'+taskId, SessionManager.config)
            .then((response) => {
                let achievements = response.data.map((data) => Achievement.fromJson(data));
                return achievements;
            })
    }

    static unclosed() {
        return axios.get(ConfigManager.baseUrl+'/api/v1/achievements/unclosed', SessionManager.config)
            .then((response) => {
                let achievements = response.data.map((data) => Achievement.fromJson(data));
                return achievements;
            })
    }
}