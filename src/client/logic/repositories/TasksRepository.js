import axios from 'axios';
import SessionManager from "../SessionManager";
import Task from "../models/tasks/Task";
import ConfigManager from "../config/ConfigManager";


export default class TasksRepository {
    static list(missionId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/missions/'+missionId+"/tasks",
            SessionManager.config)
            .then((response) => {
                let tasks = response.data.map((task_data) => Task.fromJson(task_data));
                return tasks;
            })
    }

    static get(taskId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/tasks/'+taskId, SessionManager.config)
            .then((response) => {
                let task = Task.fromJson(response.data);
                return task;
            })

    }
}
