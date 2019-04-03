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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9sb2dpbi9Mb2dpbi5qc3giXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwibG9naW4iLCJwYXNzd29yZCIsInN0YXlMb2dnZWRJbiIsImxvYWRpbmciLCJ2YWxpZGF0ZUZvcm0iLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwibGVuZ3RoIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJuYW1lIiwiVXNlclJlcG9zaXRvcnkiLCJ0aGVuIiwidXNlciIsIm9uU3VjY2VzcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7OztBQUVqQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLCtFQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLEtBQUssRUFBRSxFQURFO0FBRVRDLE1BQUFBLFFBQVEsRUFBRSxFQUZEO0FBR1RDLE1BQUFBLFlBQVksRUFBRSxLQUhMO0FBSVRDLE1BQUFBLE9BQU8sRUFBRTtBQUpBLEtBQWI7QUFPQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsK0JBQXBCO0FBQ0EsVUFBS0UsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRixJQUFsQiwrQkFBcEI7QUFYZTtBQVlsQjs7OzttQ0FFYztBQUNYLGFBQU8sS0FBS04sS0FBTCxDQUFXQyxLQUFYLENBQWlCUSxNQUFqQixHQUEwQixDQUExQixJQUErQixLQUFLVCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JP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RmxCLGtCQTVCSixDQUZKLENBREosQ0FESixDQURKLENBREosQ0FESjtBQTZDSDs7OztFQS9GOEJvQixrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFVzZXJSZXBvc2l0b3J5IGZyb20gXCIuLi8uLi9sb2dpYy9yZXBvc2l0b3JpZXMvVXNlclJlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9naW46IFwiXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIHN0YXlMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmFsaWRhdGVGb3JtID0gdGhpcy52YWxpZGF0ZUZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2dpbi5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUucGFzc3dvcmQubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0LmlkXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCB1c2VybmFtZSA9IHRoaXMuc3RhdGUubG9naW47XG4gICAgICAgIGxldCBwYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmQ7XG4gICAgICAgIGxldCBzdGF5TG9nZ2VkSW4gPSB0aGlzLnN0YXRlLnN0YXlMb2dnZWRJbjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSk7XG4gICAgICAgIFVzZXJSZXBvc2l0b3J5LmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN1Y2Nlc3ModXNlciwgc3RheUxvZ2dlZEluKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWFwcCBiYXNlYXBwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBvZmZzZXQtc20tMiBjYXJkLTMtc3RhdGljIGxvZ2luLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlphbG9ndWogZG8gc3lzdGVtdTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TG9naW48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMb2dpblwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgaWQ9XCJsb2dpbkhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPk5hendhIHXFvHl0a293bmlrYSBwb2RhbmEgcG9kY3phcyByZWplc3RyYWNqaTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkhhc8WCbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhhc8WCb1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3RheUxvZ2dlZEluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnN0YXlMb2dnZWRJbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5Qb3pvc3RhxYQgemFsb2dvd2FueTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy52YWxpZGF0ZUZvcm0oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==