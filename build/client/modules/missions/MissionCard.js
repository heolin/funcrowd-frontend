"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

var MissionCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MissionCard, _React$Component);

  function MissionCard() {
    _classCallCheck(this, MissionCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(MissionCard).apply(this, arguments));
  }

  _createClass(MissionCard, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "col-md-4"
      }, _react["default"].createElement("div", {
        className: "mission-card card-2 font-light",
        onClick: this.props.onSelect
      }, _react["default"].createElement("h4", null, this.props.mission.name), _react["default"].createElement("p", null, this.props.mission.description), _react["default"].createElement("div", {
        className: "progress mission-progress"
      }, _react["default"].createElement("div", {
        className: "progress-bar mission-progress-bar",
        style: {
          width: "25%"
        }
      })), _react["default"].createElement("p", null, "0/0 uko\u0144czone")));
    }
  }]);

  return MissionCard;
}(_react["default"].Component);

exports["default"] = MissionCard;