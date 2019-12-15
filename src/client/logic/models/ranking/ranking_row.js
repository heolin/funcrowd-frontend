
export default class RankingRow {
    constructor(position, userId, username, value) {
        this.position = position;
        this.userId = userId;
        this.username = username;
        this.value = value;
    }

    static fromJson(data) {
        let row = new RankingRow(
            data.row_number,
            data.user_id,
            data.username,
            data.value
        );
        return row;
    }
}
