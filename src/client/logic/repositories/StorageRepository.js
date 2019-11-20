import axios from 'axios';
import SessionManager from "../SessionManager";
import Storage from "../models/storage/storage";
import ConfigManager from "../config/ConfigManager";


export default class StorageRepository {
    static all() {
        return axios.get(ConfigManager.baseUrl+'/api/v1/users/storage/',
            SessionManager.config).then((response) => {
                let storages = response.data.map((data) => Storage.fromJson(data));
                return storages;
            })
    }

    static postBatch(payload) {
        return axios.post(ConfigManager.baseUrl+'/api/v1/users/storage/', payload,
            SessionManager.config).then((response) => {
            let storages = response.data.map((data) => Storage.fromJson(data));
            return storages;
        });
    }

    static get(key) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/users/storage/'+key+'/',
            SessionManager.config).then((response) => {
            let storage = Storage.fromJson(response.data);
            return storage;
        });
    }

    static post(key, payload) {
        return axios.post(ConfigManager.baseUrl+'/api/v1/users/storage/'+key+'/', payload,
        SessionManager.config).then((response) => {
            let storage = Storage.fromJson(response.data);
            return storage;
        });
    }
}
