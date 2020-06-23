import axios from 'axios';
import SessionManager from "../SessionManager";
import UserBounty from "../models/bounty/UserBounty";
import ConfigManager from "../config/ConfigManager";
import Item from "../models/item/Item";


export default class BountyRepository {
    static all() {
        return axios.get(ConfigManager.baseUrl+'/api/v1/packages/status/', SessionManager.config)
            .then((response) => {
                let bounties = response.data.map((bounty_data) => UserBounty.fromJson(bounty_data));
                return bounties;
            })
    }

    static get(bountyId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/packages/'+bountyId+'/status/', SessionManager.config)
            .then((response) => {
                let bounty = UserBounty.fromJson(response.data);
                return bounty;
            })
    }

    static getNextItem(bountyId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/packages/'+bountyId+'/items/next/', SessionManager.config)
            .then((response) => {
                let item = Item.fromJson(response.data);
                return item;
            })
    }
}
