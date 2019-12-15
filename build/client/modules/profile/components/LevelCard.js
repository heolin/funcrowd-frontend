"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _levels = _interopRequireDefault(require("../../../resources/levels"));

var _LocalizationManager = _interopRequireDefault(require("../../../logic/locatization/LocalizationManager"));

var _UserManager = _interopRequireDefault(require("../../../logic/UserManager"));

var _ProgressBar = _interopRequireDefault(require("../../../components/ProgressBar"));

var _Icons = require("../../../components/Icons");

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

var LevelCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LevelCard, _React$Component);

  function LevelCard() {
    _classCallCheck(this, LevelCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(LevelCard).apply(this, arguments));
  }

  _createClass(LevelCard, [{
    key: "render",
    value: function render() {
      var threshold = _levels["default"][this.props.level].threshold;
      var current = Math.min(_UserManager["default"].user.exp, threshold);
      var progress = current / threshold;
      var className = this.props.level == _UserManager["default"].level + 1 ? " level-card-current" : "";
      var icon = null;
      if (parseInt(this.props.level) <= _UserManager["default"].level) icon = _react["default"].createElement(_Icons.Icon, {
        name: "tick-sign-green"
      });
      return _react["default"].createElement("div", {
        className: "col-02"
      }, _react["default"].createElement("div", {
        className: "level-card card-2-static" + className
      }, _react["default"].createElement("div", {
        className: "little"
      }, _LocalizationManager["default"].levels.level + " " + this.props.level), _react["default"].createElement("div", null, _react["default"].createElement("b", null, _LocalizationManager["default"].levels['level' + this.props.level])), _react["default"].createElement("div", {
        className: "level-card-icon"
      }, icon), _react["default"].createElement("div", {
        className: "level-card-exp"
      }, _react["default"].createElement("span", {
        className: "small"
      }, current, "/", threshold), _react["default"].createElement(_Icons.SmallIcon, {
        name: "experience"
      })), _react["default"].createElement(_ProgressBar["default"], {
        className: "level-card-progress",
        progress: progress,
        fg: "blue",
        bg: "light-blue"
      })));
    }
  }]);

  return LevelCard;
}(_react["default"].Component);

exports["default"] = LevelCard;