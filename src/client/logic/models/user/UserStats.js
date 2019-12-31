
export default class UserStats {
    constructor(id, annotatedDocuments, highAgreementCount, highAgreementPercentage, agreementRankingPosition,
                agreementRankingPercentage, annotatedMissions, annotatedTasks) {
        this.id = id;
        this.annotatedDocuments = annotatedDocuments;
        this.highAgreementCount = highAgreementCount;
        this.highAgreementPercentage = highAgreementPercentage;
        this.agreementRankingPosition = agreementRankingPosition;
        this.agreementRankingPercentage = agreementRankingPercentage;
        this.annotatedMissions = annotatedMissions;
        this.annotatedTasks = annotatedTasks;
    }

    static fromJson(user_data) {
        let stats = new UserStats(
            user_data.user_id,
            user_data.annotated_documents,
            user_data.high_agreement_count,
            user_data.high_agreement_percentage,
            user_data.agreement_ranking_position,
            user_data.agreement_ranking_percentage,
            user_data.annotated_missions,
            user_data.annotated_tasks
        );
        return stats;
    }
}
