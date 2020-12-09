import EventEmitter from "event-emitter-es6"

const SHOW_SURVEY = "show-survey";


class _SurveyManager extends EventEmitter {
    constructor() {
        super();
    }

    show(taskId) {
        this.emit(SHOW_SURVEY, taskId);
    }

    addSurveyChangeHandler(handler) {
        this.on(SHOW_SURVEY, handler);
    }

    removeSurveyChangeHandler(handler) {
        this.off(SHOW_SURVEY, handler);
    }
}

const SurveyManager = new _SurveyManager();

export default SurveyManager;
