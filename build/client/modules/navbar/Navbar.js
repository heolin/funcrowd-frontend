"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavbarMenu = _interopRequireDefault(require("./NavbarMenu"));

var _reactIconsKit = require("react-icons-kit");

var _user = require("react-icons-kit/metrize/user");

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _NavbarProfile = _interopRequireDefault(require("./NavbarProfile"));

var _NavbarLoginMenu = _interopRequireDefault(require("./NavbarLoginMenu"));

var _fun_crowd = _interopRequireDefault(require("../../static/img/common/fun_crowd-02.svg"));

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

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));
    _this.state = {
      user: null,
      location: null
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var menu = null;
      if (this.state.user) menu = _react["default"].createElement(_NavbarMenu["default"], {
        location: this.state.location,
        showSideProfile: this.props.showSideProfile,
        onLogout: this.props.onLogout
      });else menu = _react["default"].createElement(_NavbarLoginMenu["default"], {
        location: this.state.location
      });
      return _react["default"].createElement("nav", {
        className: "navbar fixed-top navbar-light bg-light navbar-expand-md py-3"
      }, _react["default"].createElement("a", {
        className: "navbar-brand",
        href: "#"
      }, _react["default"].createElement("img", {
        className: "logo",
        src: _fun_crowd["default"]
      })), _react["default"].createElement("button", {
        className: "navbar-toggler ml-auto",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarNavDropdown",
        "aria-controls": "navbarNavDropdown",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react["default"].createElement("span", {
        className: "navbar-toggler-icon"
      })), _react["default"].createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarNavDropdown"
      }, _react["default"].createElement("ul", {
        className: "navbar-nav mr-auto"
      }), menu));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var result = {};

      if (props.user !== state.user) {
        result['user'] = props.user;
      }

      if (props.location !== state.location) {
        result['location'] = props.location;
      }

      return result;
    }
  }]);

  return Navbar;
}(_react["default"].Component);

exports["default"] = Navbar;