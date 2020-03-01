"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UserManager = _interopRequireDefault(require("../../logic/UserManager"));

var _UserRepository = _interopRequireDefault(require("../../logic/repositories/UserRepository"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _Footer = require("../../Footer");

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

var SettingsPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SettingsPage, _React$Component);

  function SettingsPage(props) {
    var _this;

    _classCallCheck(this, SettingsPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SettingsPage).call(this, props));
    _this.state = {
      username: "",
      oldPassword: "",
      newPassword1: "",
      newPassword2: "",
      loading: false,
      settingsMessage: "",
      settingsError: false,
      passwordMessage: "",
      passwordError: false
    };
    _this.handleSettingsSubmit = _this.handleSettingsSubmit.bind(_assertThisInitialized(_this));
    _this.handlePasswordSubmit = _this.handlePasswordSubmit.bind(_assertThisInitialized(_this));
    _this.validatePasswordForm = _this.validatePasswordForm.bind(_assertThisInitialized(_this));
    _this.validateSettingsForm = _this.validateSettingsForm.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SettingsPage, [{
    key: "validateSettingsForm",
    value: function validateSettingsForm() {
      return this.state.username.length > 0;
    }
  }, {
    key: "validatePasswordForm",
    value: function validatePasswordForm() {
      return this.state.oldPassword.length > 0 && this.state.newPassword1.length > 0 && this.state.newPassword2.length > 0;
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.id, event.target.value));
    }
  }, {
    key: "handleSettingsSubmit",
    value: function handleSettingsSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      this.setState({
        loading: true,
        settingsError: false,
        settingsMessage: ""
      });
      console.log("handleSettingsSubmit");

      _UserRepository["default"].changeSettings(this.state.username).then(function (user) {
        console.log("handleSettingsSubmit - success");

        _UserManager["default"].changeUsername(user.username);

        _this2.setState({
          loading: false,
          settingsMessage: _LocalizationManager["default"].login.usernameChanged
        });
      })["catch"](function (error) {
        var settingsMessage = error.response.data['detail'];

        switch (settingsMessage) {
          case "Username is already used":
            settingsMessage = _LocalizationManager["default"].login.usernameAlreadyUsed;
            break;
        }

        _this2.setState({
          loading: false,
          settingsError: true,
          settingsMessage: settingsMessage
        });
      });
    }
  }, {
    key: "handlePasswordSubmit",
    value: function handlePasswordSubmit(event) {
      var _this3 = this;

      event.preventDefault();
      this.setState({
        loading: true,
        passwordMessage: "",
        passwordError: false
      });

      _UserRepository["default"].changePassword(this.state.oldPassword, this.state.newPassword1, this.state.newPassword2).then(function (user) {
        _this3.setState({
          loading: false,
          passwordMessage: _LocalizationManager["default"].login.passwordChanged
        });
      })["catch"](function (error) {
        console.log(error);
        var passwordMessage = error.response.data['detail'];
        console.log(passwordMessage);

        switch (passwordMessage) {
          case "Authentication credentials were not provided.":
            passwordMessage = _LocalizationManager["default"].login.currentPasswordNotCorrect;
            break;

          case "Passwords does not match":
            passwordMessage = _LocalizationManager["default"].login.passwordsNotMatch;
            break;
        }

        _this3.setState({
          loading: false,
          passwordError: true,
          passwordMessage: passwordMessage
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading || _UserManager["default"].user === null) return _react["default"].createElement(_Loading["default"], null);
      var settingsMessageClassName = this.state.settingsError ? "error" : "";
      var passwordMessageClassName = this.state.passwordError ? "error" : "";
      return _react["default"].createElement("div", {
        className: "container-fluid base-row"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row tasks-row",
        style: {
          paddingTop: "60px"
        }
      }, _react["default"].createElement("div", {
        className: "col-sm-12"
      }, _react["default"].createElement("h3", null, _LocalizationManager["default"].labels.settings), _react["default"].createElement("p", null, _LocalizationManager["default"].general.settingsMessage)), _react["default"].createElement("div", {
        className: "col-xl-4 col-md-6"
      }, _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", {
        className: "weight-bold small settings-form-label",
        htmlFor: "username"
      }, _LocalizationManager["default"].login.username), _react["default"].createElement("small", {
        id: "usernameHelp",
        className: "text-muted settings-form-text"
      }, _LocalizationManager["default"].general.emailSafe), _react["default"].createElement("input", {
        type: "username",
        className: "form-control settings-form-input",
        id: "username",
        placeholder: _UserManager["default"].user.username,
        onChange: this.handleChange
      }), _react["default"].createElement("button", {
        onClick: this.handleSettingsSubmit,
        disabled: !this.validateSettingsForm(),
        className: "btn btn-orange-primary settings-button"
      }, _LocalizationManager["default"].general.saveChanges), _react["default"].createElement("p", {
        className: "settings-form-error-message text-center small " + settingsMessageClassName
      }, this.state.settingsMessage)))), _react["default"].createElement("div", {
        className: "row tasks-row"
      }, _react["default"].createElement("div", {
        className: "col-xl-4 col-md-6"
      }, _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", {
        className: "weight-bold small settings-form-label",
        htmlFor: "password1"
      }, _LocalizationManager["default"].general.password), _react["default"].createElement("small", {
        className: "settings-form-text text-muted"
      }, _LocalizationManager["default"].general.typeOldPassword), _react["default"].createElement("input", {
        type: "password",
        className: "form-control settings-form-input",
        id: "oldPassword",
        placeholder: _LocalizationManager["default"].general.currentPassword,
        onChange: this.handleChange
      }), _react["default"].createElement("small", {
        className: "settings-form-text text-muted"
      }, _LocalizationManager["default"].general.typeNewPassword), _react["default"].createElement("input", {
        type: "password",
        className: "form-control settings-form-input",
        id: "newPassword1",
        placeholder: _LocalizationManager["default"].general.newPassword,
        onChange: this.handleChange
      }), _react["default"].createElement("input", {
        type: "password",
        className: "form-control settings-form-input",
        id: "newPassword2",
        placeholder: _LocalizationManager["default"].general.repeatNewPassword,
        onChange: this.handleChange
      }), _react["default"].createElement("button", {
        onClick: this.handlePasswordSubmit,
        disabled: !this.validatePasswordForm(),
        className: "btn btn-orange-primary settings-button"
      }, _LocalizationManager["default"].general.changePassword), _react["default"].createElement("p", {
        className: "settings-form-error-message text-center small " + passwordMessageClassName
      }, this.state.passwordMessage))))), _react["default"].createElement(_Footer.Footer, {
        style: {
          marginTop: "80px"
        }
      }));
    }
  }]);

  return SettingsPage;
}(_react["default"].Component);

exports["default"] = SettingsPage;