"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icons = require("../../components/Icons");

var _reactRouterDom = require("react-router-dom");

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _reactPose = _interopRequireDefault(require("react-pose"));

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

var ToastCard = _reactPose["default"].div({
  exit: {
    opacity: 0
  },
  enter: {
    opacity: 1
  }
});

var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    _classCallCheck(this, Toast);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
  }

  _createClass(Toast, [{
    key: "render",
    value: function render() {
      var icon = "achievements";
      var toastHeader = _LocalizationManager["default"].toasts.headerAchievement;
      var linkPath = "/achievements";
      var linkMessage = _LocalizationManager["default"].toasts.linkMessageAchievement;

      if (this.props.type === "level") {
        icon = "experience";
        toastHeader = _LocalizationManager["default"].toasts.headerLevel;
        linkPath = "/profile";
        linkMessage = _LocalizationManager["default"].toasts.linkMessageLevel;
      }

      return _react["default"].createElement(ToastCard, {
        className: "toast-card card-3-static small"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-2"
      }, _react["default"].createElement(_Icons.Icon, {
        className: "toast-icon",
        name: icon
      })), _react["default"].createElement("div", {
        className: "col-10",
        style: {
          paddingLeft: "25px"
        }
      }, _react["default"].createElement("div", {
        className: "d-inline-block"
      }, toastHeader), _react["default"].createElement("div", {
        className: "weight-bold"
      }, this.props.message))), _react["default"].createElement("div", {
        className: "toast-close",
        onClick: this.props.onClose
      }, _react["default"].createElement(_Icons.Icon, {
        className: "very-small-icon",
        name: "cancel-sign"
      })), _react["default"].createElement("div", {
        className: "toast-link little"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: linkPath
      }, linkMessage)));
    }
  }]);

  return Toast;
}(_react["default"].Component);

exports["default"] = Toast;