"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UserRepository = _interopRequireDefault(require("../../logic/repositories/UserRepository"));

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

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
    _this.state = {
      login: "",
      password: "",
      stayLoggedIn: false,
      loading: false
    };
    _this.validateForm = _this.validateForm.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "validateForm",
    value: function validateForm() {
      return this.state.login.length > 0 && this.state.password.length > 0;
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
      var username = this.state.login;
      var password = this.state.password;
      var stayLoggedIn = this.state.stayLoggedIn;
      this.setState({
        loading: true
      });

      _UserRepository["default"].login(username, password).then(function (user) {
        _this2.props.onSuccess(user, stayLoggedIn);
      })["catch"](function (error) {
        _this2.setState({
          loading: false
        });

        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) {
        return _react["default"].createElement("div", null, "Loading");
      }

      return _react["default"].createElement("div", {
        className: "login-app baseapp"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-sm-8 offset-sm-2 card-3-static login-card"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-sm-12"
      }, _react["default"].createElement("h3", null, "Zaloguj do systemu"), _react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", null, "Login"), _react["default"].createElement("input", {
        id: "login",
        type: "login",
        className: "form-control",
        value: this.state.email,
        onChange: this.handleChange,
        placeholder: "Login"
      }), _react["default"].createElement("small", {
        id: "loginHelp",
        className: "form-text text-muted"
      }, "Nazwa u\u017Cytkownika podana podczas rejestracji")), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", null, "Has\u0142o"), _react["default"].createElement("input", {
        id: "password",
        type: "password",
        className: "form-control",
        value: this.state.password,
        onChange: this.handleChange,
        placeholder: "Has\u0142o"
      })), _react["default"].createElement("div", {
        className: "form-check"
      }, _react["default"].createElement("input", {
        id: "stayLoggedIn",
        type: "checkbox",
        className: "form-check-input",
        value: this.state.stayLoggedIn,
        onChange: this.handleChange
      }), _react["default"].createElement("label", {
        className: "form-check-label"
      }, "Pozosta\u0144 zalogowany")), _react["default"].createElement("button", {
        type: "submit",
        disabled: !this.validateForm(),
        className: "btn btn-primary"
      }, "Submit")))))));
    }
  }]);

  return Login;
}(_react["default"].Component);

exports["default"] = Login;