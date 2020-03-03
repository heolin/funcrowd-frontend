"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavbarMenuButton = _interopRequireDefault(require("./NavbarMenuButton"));

var _NavbarProfile = _interopRequireDefault(require("./NavbarProfile"));

var _ConfigManager = _interopRequireDefault(require("../../logic/config/ConfigManager"));

var _Urls = _interopRequireDefault(require("../../Urls"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

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

var NavbarMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavbarMenu, _React$Component);

  function NavbarMenu(props) {
    var _this;

    _classCallCheck(this, NavbarMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavbarMenu).call(this, props));
    _this.state = {
      user: null,
      location: null
    };
    return _this;
  }

  _createClass(NavbarMenu, [{
    key: "render",
    value: function render() {
      if (!this.state.location) return null;
      var elements = [];
      if (_ConfigManager["default"].profile.bounties) elements.push(_react["default"].createElement(_NavbarMenuButton["default"], {
        key: "bounties",
        targetPath: _Urls["default"].BOUNTIES,
        name: _LocalizationManager["default"].labels.bounties,
        icon: "bounties",
        isSelected: _Urls["default"].checkUrl(this.state.location.pathname, _Urls["default"].BOUNTIES),
        iconStyle: {
          marginTop: "-10px"
        }
      }));
      if (_ConfigManager["default"].profile.missions) elements.push(_react["default"].createElement(_NavbarMenuButton["default"], {
        key: "missions",
        targetPath: _Urls["default"].MISSIONS,
        name: _LocalizationManager["default"].labels.missions,
        isSelected: _Urls["default"].checkUrl(this.state.location.pathname, _Urls["default"].MISSIONS),
        icon: "missions"
      }));
      if (_ConfigManager["default"].profile.about) elements.push(_react["default"].createElement(_NavbarMenuButton["default"], {
        key: "about",
        targetPath: _Urls["default"].ABOUT,
        name: _LocalizationManager["default"].labels.about,
        isSelected: _Urls["default"].checkUrl(this.state.location.pathname, _Urls["default"].ABOUT),
        icon: "about"
      }));
      if (_ConfigManager["default"].profile.achievements) elements.push(_react["default"].createElement(_NavbarMenuButton["default"], {
        key: "achievements",
        targetPath: _Urls["default"].ACHIEVEMENTS,
        name: _LocalizationManager["default"].labels.achievements,
        isSelected: _Urls["default"].checkUrl(this.state.location.pathname, _Urls["default"].ACHIEVEMENTS),
        icon: "achievements"
      }));
      if (_ConfigManager["default"].profile.ranking) elements.push(_react["default"].createElement(_NavbarMenuButton["default"], {
        key: "ranking",
        targetPath: _Urls["default"].RANKING,
        name: _LocalizationManager["default"].labels.ranking,
        isSelected: _Urls["default"].checkUrl(this.state.location.pathname, _Urls["default"].RANKING),
        icon: "ranking"
      }));
      if (_ConfigManager["default"].profile.profile) elements.push(_react["default"].createElement(_NavbarProfile["default"], {
        key: "profile",
        onClick: this.props.showSideProfile
      }));else {
        elements.push(_react["default"].createElement(_NavbarMenuButton["default"], {
          key: "settings",
          targetPath: _Urls["default"].SETTINGS,
          name: _LocalizationManager["default"].labels.settings,
          isSelected: _Urls["default"].checkUrl(this.state.location.pathname, _Urls["default"].SETTINGS),
          icon: "gear"
        }));
        elements.push(_react["default"].createElement(_NavbarMenuButton["default"], {
          key: "profile",
          targetPath: _Urls["default"].PROFILE,
          name: _LocalizationManager["default"].labels.profile,
          isSelected: _Urls["default"].checkUrl(this.state.location.pathname, _Urls["default"].PROFILE),
          icon: "user"
        }));
      }
      return _react["default"].createElement("ul", {
        className: "navbar-nav ml-auto small"
      }, elements, _react["default"].createElement("li", {
        className: "nav-item",
        onClick: this.props.onLogout
      }, _react["default"].createElement("span", {
        className: "nav-link"
      }, _LocalizationManager["default"].labels.logout)));
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

  return NavbarMenu;
}(_react["default"].Component);

exports["default"] = NavbarMenu;