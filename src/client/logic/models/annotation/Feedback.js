
export default class Feedback {
    constructor(score, scores, values, type) {
        this.score = score;
        this.scores = scores;
        this.values = values;
        this.type = type;
    }

    static fromJson(feedback_data) {
        if (feedback_data) {
            let feedback = new Feedback(
                feedback_data.score,
                feedback_data.scores,
                feedback_data.values,
                feedback_data.type
            );
            return feedback;
        }
    }
}
