import Annotation from "./Annotation";
import Exp from "./Exp";

export default class AnnotationResponse {
    constructor(annotation, isVerified, errors, expBase, expBonus, nextItemId) {
        this.annotation = annotation;
        this.isVerified = isVerified;
        this.nextItemId = nextItemId;
        this.errors = errors;
        this.exp = new Exp(expBase, expBonus);
    }

    static fromJson(responseData) {
        let annotationResponse = new AnnotationResponse(
            Annotation.fromJson(responseData.annotation),
            responseData.is_verified,
            responseData.errors,
            responseData.exp_base,
            responseData.exp_bonus,
            responseData.next_item_id
        );
        return annotationResponse;
    }

    get isLastItem() {
        return this.nextItemId === null;
    }
}
