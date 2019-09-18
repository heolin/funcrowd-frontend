import axios from 'axios';
import SessionManager from "../SessionManager";
import ConfigManager from "../config/ConfigManager";
import MissionProgress from "../models/missions/MissionProgress";


export default class MissionProgressRepository {
    static all() {
        return axios.get(ConfigManager.baseUrl+'/api/v1/missions/progress', SessionManager.config)
            .then((response) => {
                let progress = response.data.map((mission_data) => MissionProgress.fromJson(mission_data));
                return progress;
            })
    }

    static get(missionId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/missions/'+missionId+"/progress", SessionManager.config)
            .then((response) => {
                let progress = MissionProgress.fromJson(response.data);
                return progress;
            })

    }
}
