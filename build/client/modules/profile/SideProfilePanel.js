"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideProfilePanel = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _Icons = require("../../components/Icons");

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

var _BlackBackground = _interopRequireDefault(require("../../components/BlackBackground"));

var _UserManager = _interopRequireDefault(require("../../logic/UserManager"));

var _reactRouterDom = require("react-router-dom");

var _levels = _interopRequireDefault(require("../../resources/levels"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _AchievementsManager = _interopRequireDefault(require("../../logic/AchievementsManager"));

var _AchievementCircle = _interopRequireDefault(require("../achievements/AchievementCircle"));

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

var Sidebar = _reactPose["default"].nav({
  open: {
    x: '0%',
    staggerChildren: 100
  },
  closed: {
    x: '150%'
  }
});

var NavItem = _reactPose["default"].li({
  open: {
    opacity: 0.6
  },
  closed: {
    opacity: 0
  }
});

var SideProfilePanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideProfilePanel, _React$Component);

  function SideProfilePanel(props) {
    var _this;

    _classCallCheck(this, SideProfilePanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideProfilePanel).call(this, props));
    _this.state = {
      exp: null,
      username: null,
      finishedAchievementsCount: null,
      unfinishedAchievementsCount: null
    };
    _this.onUpdate = _this.onUpdate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SideProfilePanel, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      _UserManager["default"].addExperienceChangeHandler(this.onUpdate);

      _UserManager["default"].addUsernameChangeHandler(this.onUpdate);

      _AchievementsManager["default"].addAchievementsChangeHandler(this.onUpdate);

      _AchievementsManager["default"].update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _UserManager["default"].removeExperienceChangeHandler(this.onUpdate);

      _UserManager["default"].removeUsernameChangeHandler(this.onUpdate);

      _AchievementsManager["default"].removeAchievementsChangeHandler(this.onUpdate);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      var states = {};

      if (_UserManager["default"].user) {
        states['exp'] = _UserManager["default"].user.exp;
        states['username'] = _UserManager["default"].user.username;
      }

      states['finishedAchievementsCount'] = _AchievementsManager["default"].finishedAchievements.length;
      states['unfinishedAchievementsCount'] = _AchievementsManager["default"].unfinishedAchievements.length;
      this.setState(states);
    }
  }, {
    key: "render",
    value: function render() {
      if (_UserManager["default"].level === 0) return null;
      var nextLevel = Math.min(_UserManager["default"].level + 1, Object.keys(_levels["default"]).length);
      var expThreshold = _levels["default"][nextLevel].threshold;
      var expCurrent = 0;
      var username = "";

      if (_UserManager["default"].user) {
        username = _UserManager["default"].user.username;
        expCurrent = Math.min(_UserManager["default"].user.exp, expThreshold);
      }

      var expProgress = expCurrent / expThreshold;
      var achievementsCurrent = this.state.finishedAchievementsCount;
      var achievementsTotal = this.state.finishedAchievementsCount + this.state.unfinishedAchievementsCount;
      var achievementsProgress = achievementsCurrent / achievementsTotal;

      var achievementsLast = _AchievementsManager["default"].getLastFinished(3).map(function (achievement) {
        return _react["default"].createElement(_AchievementCircle["default"], {
          key: achievement.id,
          achievement: achievement
        });
      });

      return _react["default"].createElement("div", null, _react["default"].createElement(_BlackBackground["default"], {
        className: "black-background",
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        },
        pose: this.props.isOpen ? 'open' : 'closed',
        onClick: this.props.hideSideProfile
      }), _react["default"].createElement(Sidebar, {
        className: "little side-profile weight-bold",
        pose: this.props.isOpen ? 'open' : 'closed'
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-6"
      }, _react["default"].createElement("div", {
        onClick: this.props.hideSideProfile
      }, _react["default"].createElement(_Icons.Icon, {
        className: "side-profile-close",
        name: "arrow-right",
        color: "dark"
      }))), _react["default"].createElement("div", {
        className: "col-6 side-profile-settings"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/profile",
        onClick: this.props.hideSideProfile
      }, _react["default"].createElement("div", {
        className: "little"
      }, "Zobacz profil")), _react["default"].createElement(_reactRouterDom.Link, {
        to: "/settings",
        onClick: this.props.hideSideProfile
      }, _react["default"].createElement("div", {
        className: "little"
      }, "Ustawienia"))), _react["default"].createElement("div", {
        className: "col-12 side-profile-username text-center"
      }, _react["default"].createElement("div", null, "Tw\xF3j nick"), _react["default"].createElement("h4", null, username))), _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-6"
      }, _react["default"].createElement("div", {
        className: "side-profile-block card-1-static little text-center"
      }, _react["default"].createElement(_Icons.BigIcon, {
        className: "side-profile-block-icon",
        name: "ranking"
      }), _react["default"].createElement("div", null, "7 miejsce w ranking"))), _react["default"].createElement("div", {
        className: "col-6"
      }, _react["default"].createElement("div", {
        className: "side-profile-block card-1-static little text-center"
      }, _react["default"].createElement(_Icons.BigIcon, {
        className: "side-profile-block-icon",
        name: "missions"
      }), _react["default"].createElement("div", null, "14 rozwi\u0105zanych zada\u0144")))), _react["default"].createElement("div", {
        className: "row",
        style: {
          marginTop: "30px",
          marginBottom: "30px"
        }
      }, _react["default"].createElement("div", {
        className: "col-6 text-left"
      }, _react["default"].createElement("div", null, _LocalizationManager["default"].levels.level, " ", _UserManager["default"].level, ": ", _LocalizationManager["default"].levels["level" + _UserManager["default"].level].toUpperCase())), _react["default"].createElement("div", {
        className: "col-6 text-right"
      }, _react["default"].createElement("div", null, expCurrent, "/", expThreshold, _react["default"].createElement(_Icons.SmallIcon, {
        name: "experience"
      }))), _react["default"].createElement("div", {
        className: "col-12"
      }, _react["default"].createElement(_ProgressBar["default"], {
        className: "side-profile-progress",
        bg: "light-blue",
        fg: "blue",
        progress: expProgress
      }))), _react["default"].createElement("div", {
        className: "row",
        style: {
          marginBottom: "30px"
        }
      }, _react["default"].createElement("div", {
        className: "col-6 text-left"
      }, _react["default"].createElement("div", null, _LocalizationManager["default"].labels.achievements.toUpperCase())), _react["default"].createElement("div", {
        className: "col-6 text-right"
      }, _react["default"].createElement("div", null, achievementsCurrent, "/", achievementsTotal, _react["default"].createElement(_Icons.SmallIcon, {
        name: "achievements"
      }))), _react["default"].createElement("div", {
        className: "col-12"
      }, _react["default"].createElement(_ProgressBar["default"], {
        className: "side-profile-progress",
        bg: "light-blue",
        fg: "blue",
        progress: achievementsProgress
      }))), _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-12"
      }, _react["default"].createElement("div", {
        style: {
          marginBottom: "10px"
        }
      }, _LocalizationManager["default"].general.newest.toUpperCase()))), _react["default"].createElement("div", {
        className: "row text-center"
      }, achievementsLast)));
    }
  }]);

  return SideProfilePanel;
}(_react["default"].Component);

exports.SideProfilePanel = SideProfilePanel;