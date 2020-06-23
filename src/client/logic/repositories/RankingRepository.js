import axios from 'axios';
import SessionManager from "../SessionManager";
import Mission from "../models/missions/Mission";
import ConfigManager from "../config/ConfigManager";
import Ranking from "../models/ranking/ranking";
import RankingRow from "../models/ranking/ranking_row";


export default class MissionRepository {
    static global(page) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/ranking/exp/top?size=10&page='+page, SessionManager.config)
            .then((response) => {
                let ranking = new Ranking();
                ranking.rows = response.data.map((data) => RankingRow.fromJson(data));
                return ranking;
            })
    }

    static user(userId) {
        return axios.get(ConfigManager.baseUrl+'/api/v1/ranking/exp/around/' + userId + '/?size=0',
            SessionManager.config)
            .then((response) => {
                if (response.data.length === 0)
                    return null;

                let row = RankingRow.fromJson(response.data[0]);
                return row;
            })
    }
}
