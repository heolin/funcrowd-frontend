"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _feedback_ok = _interopRequireDefault(require("../../static/img/feedback/feedback_ok.svg"));

var _feedback_wrong = _interopRequireDefault(require("../../static/img/feedback/feedback_wrong.svg"));

var _Modal = _interopRequireDefault(require("../../components/animated/Modal"));

var _reactRouterDom = require("react-router-dom");

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BinaryPointsFeedbackModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BinaryPointsFeedbackModal, _React$Component);

  /*
  Requires ReferenceScore feedback
   */
  function BinaryPointsFeedbackModal(props) {
    var _this;

    _classCallCheck(this, BinaryPointsFeedbackModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BinaryPointsFeedbackModal).call(this, props));
    _this.state = {
      feedback: null
    };
    return _this;
  }

  _createClass(BinaryPointsFeedbackModal, [{
    key: "render",
    value: function render() {
      var feedback = this.state.feedback;
      var score = feedback ? feedback.score : 0;
      var image = _feedback_wrong["default"];
      var headerText = _LocalizationManager["default"].feedback.annotationWrong;
      var message = _LocalizationManager["default"].feedback.annotationWrongMessage;

      var button = _react["default"].createElement("div", {
        className: "btn btn-primary feedback-button",
        onClick: this.props.onAccept
      }, _LocalizationManager["default"].feedback.tryAgain);

      if (score >= 0.5) {
        image = _feedback_ok["default"];
        headerText = _LocalizationManager["default"].feedback.annotationCorrect;
        message = _LocalizationManager["default"].feedback.annotationCorrectMessage;
        button = _react["default"].createElement(_reactRouterDom.Link, {
          to: '/mission/' + this.props.task.mission_id + '/tasks'
        }, _react["default"].createElement("div", {
          className: "btn btn-primary feedback-button"
        }, _LocalizationManager["default"].feedback.nextItem));
      }

      return _react["default"].createElement(_Modal["default"], {
        className: "modal-window feedback-panel card-3-static text-center",
        pose: this.props.isOpen ? 'open' : 'closed',
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        }
      }, _react["default"].createElement("h2", {
        className: "feedback-header"
      }, headerText), _react["default"].createElement("p", null, message), _react["default"].createElement("div", null, _react["default"].createElement("img", {
        className: "feedback-image",
        src: image
      })), button);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.feedback !== state.feedback && props.feedback !== null) {
        return {
          feedback: props.feedback
        };
      }

      return null;
    }
  }]);

  return BinaryPointsFeedbackModal;
}(_react["default"].Component);

exports["default"] = BinaryPointsFeedbackModal;