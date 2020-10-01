"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("../../components/animated/Card"));

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

var _ConfigManager = _interopRequireDefault(require("../../logic/config/ConfigManager"));

var _Icons = require("../../components/Icons");

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

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

var MissionCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MissionCard, _React$Component);

  function MissionCard(props) {
    var _this;

    _classCallCheck(this, MissionCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MissionCard).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MissionCard, [{
    key: "onClick",
    value: function onClick() {
      if (this.props.progress.status !== "LOCKED") this.props.onSelect();
    }
  }, {
    key: "render",
    value: function render() {
      var mission = this.props.mission;
      var metadata = mission.metadata;
      if (!metadata.image) return null;
      var progress = this.props.progress;

      var image = require("../../static/" + metadata.image);

      var achievements = null;
      var experience = null;
      var locked = progress.status === "LOCKED";
      var lockedClassName = locked ? "locked" : "";
      var iconClassName = locked ? "greyscale" : "";
      if (_ConfigManager["default"].profile.achievements && mission.achievements) achievements = _react["default"].createElement("div", {
        className: "mission-card-label"
      }, _react["default"].createElement(_Icons.SmallIcon, {
        className: iconClassName,
        name: "achievements"
      }), _react["default"].createElement("span", {
        className: "mission-card-label-text"
      }, mission.achievements, " ", _LocalizationManager["default"].general.achievements));
      if (_ConfigManager["default"].profile.exp && mission.totalExp > 0) experience = _react["default"].createElement("div", {
        className: "mission-card-label"
      }, _react["default"].createElement(_Icons.SmallIcon, {
        className: iconClassName,
        name: "experience"
      }), _react["default"].createElement("span", {
        className: "mission-card-label-text"
      }, mission.totalExp, " ", _LocalizationManager["default"].general.experience));
      return _react["default"].createElement(_Card["default"], {
        className: "col-md-6 col-lg-4"
      }, _react["default"].createElement("div", {
        className: "mission-card card-2 font-light " + lockedClassName,
        onClick: this.onClick
      }, _react["default"].createElement("div", {
        className: "mission-card-top"
      }, _react["default"].createElement("img", {
        className: "mission-card-image " + lockedClassName,
        src: image
      }), _react["default"].createElement(_Icons.Icon, {
        className: "mission-card-icon",
        name: metadata.icon
      }), _react["default"].createElement("svg", {
        className: "mission-card-triangle " + lockedClassName,
        width: "100%",
        viewBox: "0 0 300 60"
      }, _react["default"].createElement("polygon", {
        points: "300,60 300,0 0,60"
      }))), _react["default"].createElement("div", {
        className: "mission-card-content"
      }, _react["default"].createElement("div", {
        className: "mission-card-title"
      }, _react["default"].createElement("h4", null, this.props.mission.name), _react["default"].createElement("span", {
        className: "small mission-card-description"
      }, this.props.mission.description)), _react["default"].createElement("div", {
        className: "mission-card-labels"
      }, _react["default"].createElement("div", {
        className: "mission-card-label"
      }, _react["default"].createElement(_Icons.SmallIcon, {
        name: "missions"
      }), _react["default"].createElement("span", {
        className: "mission-card-label-text"
      }, this.props.mission.tasksCount, " ", _LocalizationManager["default"].general.missions)), achievements, experience), _react["default"].createElement(_ProgressBar["default"], {
        progress: progress.progress,
        text: "Ukończono " + progress.tasks_done + " / " + progress.tasks_count
      }))));
    }
  }]);

  return MissionCard;
}(_react["default"].Component);

exports["default"] = MissionCard;