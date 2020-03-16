
export default class Feedback {
    constructor(score, scores, values) {
        this.score = score;
        this.scores = scores;
        this.values = values;
    }

    static fromJson(feedback_data) {
        if (feedback_data) {
            let feedback = new Feedback(
                feedback_data.score,
                feedback_data.scores,
                feedback_data.values
            );
            return feedback;
        }
    }
}
