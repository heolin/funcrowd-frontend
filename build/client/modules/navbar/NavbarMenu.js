"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavbarMenuButton = _interopRequireDefault(require("./NavbarMenuButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NavbarMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavbarMenu, _React$Component);

  function NavbarMenu(props) {
    var _this;

    _classCallCheck(this, NavbarMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavbarMenu).call(this, props));
    _this.state = {
      user: null
    };
    _this.onLogout = _this.onLogout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NavbarMenu, [{
    key: "onLogout",
    value: function onLogout() {
      this.props.onLogout();
    }
  }, {
    key: "render",
    value: function render() {
      //<div>Hello, {this.state.user.username}</div>-->
      //<NavbarMenuButton onClick={this.props.onNavigateToMissions} name="Missions"/>
      //                            <NavbarMenuButton onClick={this.onLogout} name="Logout"/>
      if (this.state.user) {
        return _react["default"].createElement("div", null, _react["default"].createElement("div", {
          style: {
            position: "absolute",
            right: "80px",
            top: "18px"
          }
        }, "Hello, ", this.state.user.username), _react["default"].createElement("button", {
          className: "navbar-toggler",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarToggler",
          "aria-controls": "navbarToggler",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }, _react["default"].createElement("span", {
          className: "navbar-toggler-icon"
        })), _react["default"].createElement("div", {
          className: "collapse navbar-collapse",
          id: "navbarToggler"
        }, _react["default"].createElement("ul", {
          className: "navbar-nav mr-auto mt-2 mt-lg-0"
        }, _react["default"].createElement(_NavbarMenuButton["default"], {
          onClick: this.props.onNavigateToBounties,
          name: "Bounties"
        }))), _react["default"].createElement("div", {
          className: "collapse navbar-collapse",
          id: "navbarToggler"
        }, _react["default"].createElement("ul", {
          className: "navbar-nav mr-auto mt-2 mt-lg-0"
        }, _react["default"].createElement(_NavbarMenuButton["default"], {
          onClick: this.props.onNavigateToMissions,
          name: "Missions"
        }))));
      } else {
        return null;
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.user !== state.user) {
        return {
          user: props.user
        };
      }

      return null;
    }
  }]);

  return NavbarMenu;
}(_react["default"].Component);

exports["default"] = NavbarMenu;