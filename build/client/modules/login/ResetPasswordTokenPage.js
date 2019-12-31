"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _close = require("react-icons-kit/fa/close");

var _reactRouterDom = require("react-router-dom");

var _queryString = _interopRequireDefault(require("query-string"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _UserRepository = _interopRequireDefault(require("../../logic/repositories/UserRepository"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _Urls = _interopRequireDefault(require("../../Urls"));

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

var ResetPasswordTokenPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResetPasswordTokenPage, _React$Component);

  function ResetPasswordTokenPage(props) {
    var _this;

    _classCallCheck(this, ResetPasswordTokenPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResetPasswordTokenPage).call(this, props));
    _this.state = {
      token: null,
      password1: "",
      password2: "",
      error: null,
      loading: false
    };
    _this.validateForm = _this.validateForm.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ResetPasswordTokenPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkUrlParams();
    }
  }, {
    key: "checkUrlParams",
    value: function checkUrlParams() {
      if (this.props.location.search) {
        var params = _queryString["default"].parse(this.props.location.search);

        if ("resetPasswordToken" in params) {
          this.setState({
            token: params['resetPasswordToken']
          });
        }
      }
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      return this.state.password1.length > 0 && this.state.password2.length > 0;
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
      this.setState({
        loading: true
      });

      _UserRepository["default"].changePasswordWithToken(this.state.token, this.state.password1, this.state.password2).then(function (user) {
        _this2.props.history.push(_Urls["default"].LOGIN);
      })["catch"](function (error) {
        var errorMessage = error.response.data['detail'];

        switch (errorMessage) {
          case "Password token is incorrect":
            errorMessage = _LocalizationManager["default"].login.resetPasswordTokenIncorrect;
            break;

          case "Passwords does not match":
            errorMessage = _LocalizationManager["default"].login.passwordsNotMatch;
            break;
        }

        _this2.setState({
          loading: false,
          error: errorMessage
        });

        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) return _react["default"].createElement(_Loading["default"], null);
      return _react["default"].createElement("div", {
        className: "container-fluid base-row"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "login-window col-lg-6 col-md-10 col-12 card-3-static"
      }, _react["default"].createElement("h3", {
        className: "text-center login-header"
      }, _LocalizationManager["default"].login.resetPasswordHeader), _react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("input", {
        id: "password1",
        type: "password",
        className: "login-input form-control",
        value: this.state.password1,
        onChange: this.handleChange,
        placeholder: _LocalizationManager["default"].login.password
      })), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("input", {
        id: "password2",
        type: "password",
        className: "login-input form-control",
        value: this.state.password2,
        onChange: this.handleChange,
        placeholder: _LocalizationManager["default"].login.password
      })), _react["default"].createElement("div", {
        className: "text-center small login-error-message"
      }, this.state.error), _react["default"].createElement("button", {
        type: "submit",
        disabled: !this.validateForm(),
        className: "btn btn-orange-primary login-button"
      }, _LocalizationManager["default"].labels.login))))));
    }
  }]);

  return ResetPasswordTokenPage;
}(_react["default"].Component);

exports["default"] = ResetPasswordTokenPage;