
export default class UserStats {
    constructor(id, annotated_documents, high_agreement_count, high_agreement_percentage, agreement_ranking_position,
                agreement_ranking_percentage, annotated_missions) {
        this.id = id;
        this.annotated_documents = annotated_documents;
        this.high_agreement_count = high_agreement_count;
        this.high_agreement_percentage = high_agreement_percentage;
        this.agreement_ranking_position = agreement_ranking_position;
        this.agreement_ranking_percentage = agreement_ranking_percentage;
        this.annotated_missions = annotated_missions;
    }

    static fromJson(user_data) {
        let stats = new UserStats(
            user_data.user_id,
            user_data.annotated_documents,
            user_data.high_agreement_count,
            user_data.high_agreement_percentage,
            user_data.agreement_ranking_position,
            user_data.agreement_ranking_percentage,
            user_data.annotated_missions
        );
        return stats;
    }
}
