import EventEmitter from "event-emitter-es6"
import ConfigManager from "../logic/config/ConfigManager";

const TOASTS_CHANGED = "toasts-changed";

let toastIndex = 0;

class Toast {
    constructor(type, message) {
        this.index = toastIndex++;
        this.type = type;
        this.message = message;
    }
}


class _ToastsManager extends EventEmitter {
    constructor() {
        super();
        this.toasts = [];
    }

    addToast(type, message) {
        if (ConfigManager.profile.achievements) {
            this.toasts.push(new Toast(type, message));
            this.emit(TOASTS_CHANGED);
        }
    }

    removeToast(index) {
        for (let i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].index === index) {
                this.toasts.splice(i, 1);
                this.emit(TOASTS_CHANGED);
                break;
            }
        }
    }

    addToastsChangeHandler(handler) {
        this.on(TOASTS_CHANGED, handler);
    }

    removeToastsChangeHandler(handler) {
        this.off(TOASTS_CHANGED, handler);
    }

    hideAll() {
        this.toasts = [];
        this.emit(TOASTS_CHANGED);
    }
}

const ToastManager = new _ToastsManager();

export default ToastManager;
