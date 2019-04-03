import Feedback from "./Feedback";

export default class Annotation {
    constructor(itemId, data, feedback, skipped) {
        this.itemId = itemId;
        this.data = data;
        this.feedback = feedback;
        this.skipped = skipped;
    }

    static fromJson(annotation_data) {
        let annotation = new Annotation(
            annotation_data.item_id,
            annotation_data.data,
            Feedback.fromJson(annotation_data.feedback),
            annotation_data.skipped,
        );
        return annotation;
    }
}
