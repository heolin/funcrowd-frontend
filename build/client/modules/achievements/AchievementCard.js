"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

var _AchievementIcon = _interopRequireDefault(require("./AchievementIcon"));

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

var AchievementCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AchievementCard, _React$Component);

  function AchievementCard(props) {
    _classCallCheck(this, AchievementCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(AchievementCard).call(this, props));
  }

  _createClass(AchievementCard, [{
    key: "render",
    value: function render() {
      var achievement = this.props.achievement;
      var metadata = achievement.metadata;
      var finished = achievement.status == "FINISHED" || achievement.status == "CLOSED";
      var icon = "achievements/unknown";
      if (finished) icon = "achievements/" + metadata.icon;
      var text = metadata.text;
      if (finished) text = metadata.finishText;
      var value = Math.min(achievement.value, achievement.target);
      value = Math.round(value * 100) / 100;
      return _react["default"].createElement("div", {
        className: "achievement-card"
      }, _react["default"].createElement("div", {
        className: "achievement-card-icon"
      }, _react["default"].createElement(_AchievementIcon["default"], {
        finished: finished,
        name: icon
      })), _react["default"].createElement("div", {
        className: "achievement-card-info"
      }, _react["default"].createElement("h5", {
        style: {
          marginBottom: 0
        }
      }, metadata.name), _react["default"].createElement("div", {
        className: "little",
        style: {
          height: "45px"
        }
      }, text), _react["default"].createElement("div", {
        className: "achievement-card-progress"
      }, _react["default"].createElement("div", {
        className: "little text-right color-green",
        style: {
          marginBottom: "4px"
        }
      }, _react["default"].createElement("b", null, "+", achievement.exp, " exp")), _react["default"].createElement(_ProgressBar["default"], {
        bg: "dark",
        fg: "green",
        color: "dark",
        textAlign: "right",
        progress: achievement.progress,
        text: value + "/" + achievement.target + " zadań"
      }))));
    }
  }]);

  return AchievementCard;
}(_react["default"].Component);

exports["default"] = AchievementCard;