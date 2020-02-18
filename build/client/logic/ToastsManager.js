"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventEmitterEs = _interopRequireDefault(require("event-emitter-es6"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOASTS_CHANGED = "toasts-changed";
var toastIndex = 0;

var Toast = function Toast(type, message) {
  _classCallCheck(this, Toast);

  this.index = toastIndex++;
  this.type = type;
  this.message = message;
};

var _ToastsManager =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(_ToastsManager, _EventEmitter);

  function _ToastsManager() {
    var _this;

    _classCallCheck(this, _ToastsManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_ToastsManager).call(this));
    _this.toasts = [];
    return _this;
  }

  _createClass(_ToastsManager, [{
    key: "addToast",
    value: function addToast(type, message) {
      this.toasts.push(new Toast(type, message));
      this.emit(TOASTS_CHANGED);
    }
  }, {
    key: "removeToast",
    value: function removeToast(index) {
      for (var i = 0; i < this.toasts.length; i++) {
        if (this.toasts[i].index === index) {
          this.toasts.splice(i, 1);
          this.emit(TOASTS_CHANGED);
          break;
        }
      }
    }
  }, {
    key: "addToastsChangeHandler",
    value: function addToastsChangeHandler(handler) {
      this.on(TOASTS_CHANGED, handler);
    }
  }, {
    key: "removeToastsChangeHandler",
    value: function removeToastsChangeHandler(handler) {
      this.off(TOASTS_CHANGED, handler);
    }
  }, {
    key: "hideAll",
    value: function hideAll() {
      this.toasts = [];
      this.emit(TOASTS_CHANGED);
    }
  }]);

  return _ToastsManager;
}(_eventEmitterEs["default"]);

var ToastManager = new _ToastsManager();
var _default = ToastManager;
exports["default"] = _default;