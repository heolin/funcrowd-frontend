"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _feedback_wrong = _interopRequireDefault(require("../../static/img/feedback/feedback_wrong.svg"));

var _experience = _interopRequireDefault(require("../../static/icons/experience.svg"));

var _Modal = _interopRequireDefault(require("../../components/animated/Modal"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

var _UserManager = _interopRequireDefault(require("../../logic/UserManager"));

var _Icons = require("../../components/Icons");

var _FeedbackModal = _interopRequireDefault(require("./FeedbackModal"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AnimationStates = {
  NONE: "NONE",
  SHOW_EXP: "SHOW_EXP",
  HIDE_EXP: "HIDE_EXP",
  SHOW_BONUS: "SHOW_BONUS",
  HIDE_BONUS: "HIDE_BONUS"
};
var SHOW_TIME = 2000;
var HIDE_TIME = 1000;

var PointsFeedbackModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PointsFeedbackModal, _React$Component);

  /*
  Requires ReferenceScore feedback
   */
  function PointsFeedbackModal(props) {
    var _this;

    _classCallCheck(this, PointsFeedbackModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PointsFeedbackModal).call(this, props));
    _this.state = {
      feedback: null,
      loading: true,
      animationState: AnimationStates.NONE
    };
    _this.onAnimationFinish = _this.onAnimationFinish.bind(_assertThisInitialized(_this));
    _this.onExpUpdate = _this.onExpUpdate.bind(_assertThisInitialized(_this));
    _this.startAnimation = _this.startAnimation.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PointsFeedbackModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _UserManager["default"].addExperienceChangeHandler(this.onExpUpdate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _UserManager["default"].removeExperienceChangeHandler(this.onExpUpdate);
    }
  }, {
    key: "onExpUpdate",
    value: function onExpUpdate() {
      if (this.props.exp.base > 0) {
        this.setState({
          loading: false,
          animationState: AnimationStates.SHOW_EXP
        }, this.startAnimation);
      } else {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      setTimeout(this.onAnimationFinish, SHOW_TIME);
    }
  }, {
    key: "onAnimationFinish",
    value: function onAnimationFinish() {
      var newAnimationState = null;
      var time = 0;

      if (this.state.animationState === AnimationStates.SHOW_EXP) {
        newAnimationState = AnimationStates.HIDE_EXP;
        time = HIDE_TIME;
      } else if (this.state.animationState === AnimationStates.HIDE_EXP) {
        newAnimationState = AnimationStates.SHOW_BONUS;
        time = SHOW_TIME;
      } else if (this.state.animationState === AnimationStates.SHOW_BONUS) {
        newAnimationState = AnimationStates.HIDE_BONUS;
        time = HIDE_TIME;
      }

      if (newAnimationState) {
        this.setState({
          animationState: newAnimationState
        });
        setTimeout(this.onAnimationFinish, time);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) return null;
      var exp = this.props.exp;

      if (exp.base === 0) {
        return _react["default"].createElement(_FeedbackModal["default"], {
          isOpen: this.props.isOpen,
          onAccept: this.props.onAccept,
          headerText: _LocalizationManager["default"].feedback.annotationWrong,
          message: _LocalizationManager["default"].feedback.annotationWrongMessage,
          image: _feedback_wrong["default"],
          buttonText: _LocalizationManager["default"].feedback.tryAgain
        });
      }

      var prevExp = _UserManager["default"].user.exp - exp.base - exp.bonus;
      var userExp = prevExp;
      var animationClass = "";
      var starPoints = exp.base;

      if (this.state.animationState === AnimationStates.SHOW_EXP) {
        animationClass = "jello-horizontal";
        userExp = prevExp;
      } else if (this.state.animationState === AnimationStates.HIDE_EXP) {
        animationClass = "scale-out-center-fast";
        userExp = prevExp + exp.base;
      } else if (this.state.animationState === AnimationStates.SHOW_BONUS) {
        animationClass = "jello-horizontal";
        starPoints = exp.bonus;
        userExp = prevExp + exp.base;
      } else if (this.state.animationState === AnimationStates.HIDE_BONUS) {
        animationClass = "scale-out-center-fast";
        starPoints = exp.bonus;
        userExp = prevExp + exp.base + exp.bonus;
      }

      var userLevel = _UserManager["default"].getExpLevel(userExp);

      var userLevelName = _LocalizationManager["default"].levels['level' + userLevel];

      var userLevelProgress = _UserManager["default"].getExpProgress(userLevel, userExp);

      return _react["default"].createElement(_Modal["default"], {
        className: "modal-window feedback-panel card-3-static text-center",
        pose: this.props.isOpen ? 'open' : 'closed',
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        }
      }, _react["default"].createElement("h2", {
        className: "feedback-header"
      }, _LocalizationManager["default"].feedback.annotationCorrect), _react["default"].createElement("p", null, _LocalizationManager["default"].feedback.annotationCorrectMessage), _react["default"].createElement("div", {
        className: "feedback-points " + animationClass
      }, _react["default"].createElement("img", {
        className: "feedback-points-image",
        src: _experience["default"]
      }), _react["default"].createElement("div", {
        className: "feedback-points-text"
      }, starPoints)), _react["default"].createElement("div", {
        style: {
          padding: "0 10%"
        }
      }, _react["default"].createElement("div", {
        className: "feedback-progress-info-left"
      }, userLevelName, " - ", _LocalizationManager["default"].levels.level + " " + userLevel), _react["default"].createElement("div", {
        className: "feedback-progress-info-right"
      }, userExp, _react["default"].createElement(_Icons.SmallIcon, {
        name: "experience"
      })), _react["default"].createElement(_ProgressBar["default"], {
        className: "feedback-progress",
        color: "dark",
        bg: "light-blue",
        fg: "blue",
        progress: userLevelProgress
      })), _react["default"].createElement(_reactRouterDom.Link, {
        to: '/mission/' + this.props.task.mission_id + '/tasks'
      }, _react["default"].createElement("div", {
        className: "btn btn-primary feedback-button"
      }, _LocalizationManager["default"].feedback.nextItem)));
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

  return PointsFeedbackModal;
}(_react["default"].Component);

exports["default"] = PointsFeedbackModal;