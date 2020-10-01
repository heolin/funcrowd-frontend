"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("../../components/animated/Modal"));

var _feedback_ok = _interopRequireDefault(require("../../static/img/feedback/feedback_ok.svg"));

var _feedback_wrong = _interopRequireDefault(require("../../static/img/feedback/feedback_wrong.svg"));

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

var RegressionFeedbackModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegressionFeedbackModal, _React$Component);

  /*
  Requires ReferenceScore feedback
   */
  function RegressionFeedbackModal(props) {
    var _this;

    _classCallCheck(this, RegressionFeedbackModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegressionFeedbackModal).call(this, props));
    _this.state = {
      feedback: null
    };
    return _this;
  }

  _createClass(RegressionFeedbackModal, [{
    key: "render",
    value: function render() {
      var feedback = this.state.feedback;
      var annotation = this.props.annotation;
      var score = feedback ? feedback.score : 0;
      var answerField = Object.keys(feedback.values)[0];
      var reference = feedback.values[answerField]['ReferenceValue'][0];
      var answer = annotation.data[answerField];
      var image = _feedback_wrong["default"];
      var headerText = _LocalizationManager["default"].feedback.annotationWrong;

      var message = _react["default"].createElement("div", null, _react["default"].createElement("p", null, _LocalizationManager["default"].feedback.annotationWrongMessage), _react["default"].createElement("p", null, "Your answer: ", _react["default"].createElement("span", {
        className: "color-red"
      }, _react["default"].createElement("b", null, answer)), _react["default"].createElement("br", null), "Correct answer: ", _react["default"].createElement("span", {
        className: "color-green"
      }, _react["default"].createElement("b", null, reference))));

      var buttonText = _LocalizationManager["default"].feedback.nextItem;

      if (score >= 0.5) {
        image = _feedback_ok["default"];
        headerText = _LocalizationManager["default"].feedback.annotationCorrect;
        message = _react["default"].createElement("div", null, _react["default"].createElement("p", null, _LocalizationManager["default"].feedback.annotationCorrectMessage), _react["default"].createElement("p", null, "Your answer: ", _react["default"].createElement("span", {
          className: "color-green"
        }, _react["default"].createElement("b", null, answer)), _react["default"].createElement("br", null), "Correct answer: ", _react["default"].createElement("span", {
          className: "color-green"
        }, reference)));
      }

      return _react["default"].createElement(_Modal["default"], {
        className: "modal-window feedback-panel card-3-static text-center",
        pose: this.props.isOpen ? 'open' : 'closed',
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        }
      }, _react["default"].createElement("h2", {
        className: "feedback-header"
      }, headerText), message, _react["default"].createElement("div", null, _react["default"].createElement("img", {
        className: "feedback-image",
        src: image
      })), _react["default"].createElement("div", {
        className: "btn btn-primary feedback-button",
        onClick: this.props.onAccept
      }, buttonText));
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

  return RegressionFeedbackModal;
}(_react["default"].Component);

exports["default"] = RegressionFeedbackModal;