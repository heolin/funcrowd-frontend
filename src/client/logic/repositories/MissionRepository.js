import axios from 'axios';
import SessionManager from "../SessionManager";
import Mission from "../models/missions/Mission";
import ConfigManager from "../config/ConfigManager";


export default class MissionRepository {
    static all() {
        return axios.get(ConfigManager.baseUrl+'/api/v1/missions/', SessionManager.config)
            .then((response) => {
                let missions = response.data.map((mission_data) => Mission.fromJson(mission_data));
                return missions;
            })
    }

    static get(missionId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/missions/'+missionId+'/', SessionManager.config)
            .then((response) => {
                let mission = Mission.fromJson(response.data);
                return mission;
            })

    }
}
