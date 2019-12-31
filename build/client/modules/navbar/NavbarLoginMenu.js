"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _NavbarMenuButton = _interopRequireDefault(require("./NavbarMenuButton"));

var _NavbarLoginButton = _interopRequireDefault(require("./NavbarLoginButton"));

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

var NavbarLoginMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavbarLoginMenu, _React$Component);

  function NavbarLoginMenu() {
    _classCallCheck(this, NavbarLoginMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavbarLoginMenu).apply(this, arguments));
  }

  _createClass(NavbarLoginMenu, [{
    key: "render",
    value: function render() {
      if (!this.props.location) return null;
      return _react["default"].createElement("div", {
        className: "small"
      }, _react["default"].createElement(_NavbarMenuButton["default"], {
        className: "d-inline-block color-dark",
        targetPath: _Urls["default"].ABOUT,
        name: _LocalizationManager["default"].labels.about,
        icon: "about"
      }), _react["default"].createElement(_NavbarLoginButton["default"], {
        targetPath: _Urls["default"].LOGIN,
        name: _LocalizationManager["default"].labels.login,
        isSelected: _Urls["default"].checkUrl(this.props.location.hash, _Urls["default"].LOGIN) || _Urls["default"].checkUrl(this.props.location.hash, _Urls["default"].RESET_PASSWORD)
      }), _react["default"].createElement(_NavbarLoginButton["default"], {
        targetPath: _Urls["default"].REGISTER,
        name: _LocalizationManager["default"].labels.register,
        isSelected: _Urls["default"].checkUrl(this.props.location.hash, _Urls["default"].REGISTER),
        style: {
          marginLeft: "20px"
        }
      }));
    }
  }]);

  return NavbarLoginMenu;
}(_react["default"].Component);

exports["default"] = NavbarLoginMenu;