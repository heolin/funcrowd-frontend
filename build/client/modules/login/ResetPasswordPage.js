"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UserRepository = _interopRequireDefault(require("../../logic/repositories/UserRepository"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _reactRouterDom = require("react-router-dom");

var _Footer = require("../../Footer");

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _Urls = _interopRequireDefault(require("../../Urls"));

var _ResetPasswordEmailSentPanel = _interopRequireDefault(require("./ResetPasswordEmailSentPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ResetPasswordPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResetPasswordPage, _React$Component);

  function ResetPasswordPage(props) {
    var _this;

    _classCallCheck(this, ResetPasswordPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResetPasswordPage).call(this, props));
    _this.state = {
      email: "",
      stayLoggedIn: false,
      error: null,
      loading: false,
      emailSentPanel: false
    };
    _this.validateForm = _this.validateForm.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ResetPasswordPage, [{
    key: "validateForm",
    value: function validateForm() {
      return this.state.email.length > 0;
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.id, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var email = this.state.email;
      this.setState({
        loading: true
      });

      _UserRepository["default"].resetPassword(email).then(function () {
        _this2.setState({
          emailSentPanel: true,
          loading: false
        });
      })["catch"](function (error) {
        var responseError = error.response.data['detail'];
        var errorMessage = _LocalizationManager["default"].login.unknownError;
        if (responseError === "User with following email not found.") errorMessage = _LocalizationManager["default"].login.emailNotFound;

        _this2.setState({
          loading: false,
          error: errorMessage
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) return _react["default"].createElement(_Loading["default"], null);
      if (this.state.emailSentPanel) return _react["default"].createElement(_ResetPasswordEmailSentPanel["default"], null);
      return _react["default"].createElement("div", {
        className: "container-fluid base-row"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "login-window col-md-6 card-3-static"
      }, _react["default"].createElement("h3", {
        className: "text-center login-header"
      }, _LocalizationManager["default"].login.resetPasswordHeader), _react["default"].createElement("p", {
        className: "small text-center",
        style: {
          marginBottom: "30px"
        }
      }, _LocalizationManager["default"].login.resetPasswordMessage), _react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("input", {
        id: "email",
        type: "email",
        className: "login-input form-control",
        value: this.state.email,
        onChange: this.handleChange,
        placeholder: _LocalizationManager["default"].login.email
      })), _react["default"].createElement("div", {
        className: "text-center small login-error-message"
      }, this.state.error), _react["default"].createElement("button", {
        type: "submit",
        disabled: !this.validateForm(),
        className: "btn btn-orange-primary login-button"
      }, _LocalizationManager["default"].login.send)), _react["default"].createElement("div", {
        className: "text-center small login-link"
      }, _LocalizationManager["default"].login.alreadyHaveAccount, " ", _react["default"].createElement(_reactRouterDom.Link, {
        to: _Urls["default"].LOGIN
      }, _LocalizationManager["default"].login.logInto))))));
    }
  }]);

  return ResetPasswordPage;
}(_react["default"].Component);

exports["default"] = ResetPasswordPage;