import axios from 'axios';
import SessionManager from "../SessionManager";
import Item from "../models/item/Item";
import AnnotationResponse from "../models/annotation/AnnotationResponse";
import ConfigManager from "../config/ConfigManager";


export default class ItemRepository {
    static getFirstItem(taskId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/tasks/'+taskId+'/next_item/', SessionManager.config)
            .then((response) => {
                let item = Item.fromJson(response.data);
                return item;
            });
    }

    static getNextItem(itemId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/items/'+itemId+'/next_item/', SessionManager.config)
            .then((response) => {
                let item = Item.fromJson(response.data);
                return item;
            });
    }

    static postAnnotation (itemId, payload) {
        return axios.post(ConfigManager.baseUrl+'/api/v1/items/' + itemId + '/annotation/', payload, SessionManager.config)
            .then((response) => {
                let annotationResponse = AnnotationResponse.fromJson(response.data);
                return annotationResponse;
            });
    }
}
