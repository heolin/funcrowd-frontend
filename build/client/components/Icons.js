"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigIcon = exports.SmallIcon = exports.Icon = void 0;

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

var Icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var icon = require("../static/icons/" + this.props.name + ".svg");

      var className = this.props.className || "";
      return _react["default"].createElement("span", {
        className: className
      }, _react["default"].createElement("img", {
        src: icon,
        style: this.props.style
      }));
    }
  }]);

  return Icon;
}(_react["default"].Component);

exports.Icon = Icon;

var SmallIcon =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SmallIcon, _React$Component2);

  function SmallIcon() {
    _classCallCheck(this, SmallIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmallIcon).apply(this, arguments));
  }

  _createClass(SmallIcon, [{
    key: "render",
    value: function render() {
      var className = this.props.className || "";
      return _react["default"].createElement(Icon, {
        className: className + " small-icon",
        style: this.props.style,
        name: this.props.name
      });
    }
  }]);

  return SmallIcon;
}(_react["default"].Component);

exports.SmallIcon = SmallIcon;

var BigIcon =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(BigIcon, _React$Component3);

  function BigIcon() {
    _classCallCheck(this, BigIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(BigIcon).apply(this, arguments));
  }

  _createClass(BigIcon, [{
    key: "render",
    value: function render() {
      var className = this.props.className || "";
      return _react["default"].createElement(Icon, {
        className: className + " big-icon",
        name: this.props.name
      });
    }
  }]);

  return BigIcon;
}(_react["default"].Component);

exports.BigIcon = BigIcon;