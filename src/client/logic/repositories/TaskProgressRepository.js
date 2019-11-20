import axios from 'axios';
import SessionManager from "../SessionManager";
import ConfigManager from "../config/ConfigManager";
import TaskProgress from "../models/tasks/TaskProgress";


export default class TaskProgressRepository {
    static list(missionId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/missions/'+missionId+"/tasks/progress/",
            SessionManager.config)
            .then((response) => {
                let progress = response.data.map((task_data) => TaskProgress.fromJson(task_data));
                return progress;
            })
    }

    static get(taskId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/tasks/'+taskId+"/progress/", SessionManager.config)
            .then((response) => {
                let progress = TaskProgress.fromJson(response.data);
                return progress;
            })

    }
}
