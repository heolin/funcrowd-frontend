"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _close = require("react-icons-kit/fa/close");

var _reactRouterDom = require("react-router-dom");

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _Urls = _interopRequireDefault(require("../../Urls"));

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

var ResetPasswordEmailSentPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResetPasswordEmailSentPanel, _React$Component);

  function ResetPasswordEmailSentPanel() {
    _classCallCheck(this, ResetPasswordEmailSentPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResetPasswordEmailSentPanel).apply(this, arguments));
  }

  _createClass(ResetPasswordEmailSentPanel, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "container-fluid base-row"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "login-reset-email-panel col-lg-6 col-md-10 col-12 card-3-static"
      }, _react["default"].createElement("h3", {
        className: "text-center",
        style: {
          marginBottom: "30px"
        }
      }, _LocalizationManager["default"].login.resetPasswordEmailHeader), _react["default"].createElement("p", {
        className: "small text-center"
      }, _LocalizationManager["default"].login.resetPasswordEmailMessage), _react["default"].createElement("div", {
        className: "text-center"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: _Urls["default"].LOGIN
      }, _react["default"].createElement("button", {
        className: "btn btn-orange-primary",
        style: {
          width: "140px",
          marginTop: "20px"
        }
      }, _LocalizationManager["default"].login.resetPasswordEmailButton)))))));
    }
  }]);

  return ResetPasswordEmailSentPanel;
}(_react["default"].Component);

exports["default"] = ResetPasswordEmailSentPanel;