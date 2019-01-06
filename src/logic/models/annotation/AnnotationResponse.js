import Annotation from "./Annotation";

export default class AnnotationResponse {
    constructor(annotation, isVerified, errors) {
        this.annotation = annotation;
        this.isVerified = isVerified;
        this.errors = errors;
    }

    static fromJson(response_data) {
        let annotationResponse = new AnnotationResponse(
            Annotation.fromJson(response_data.annotation),
            response_data.is_verified,
            response_data.errors
        );
        return annotationResponse;
    }
}
