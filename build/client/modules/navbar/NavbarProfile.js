"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icons = require("../../components/Icons");

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

var _UserManager = _interopRequireDefault(require("../../logic/UserManager"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

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

var NavbarProfile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavbarProfile, _React$Component);

  function NavbarProfile(props) {
    var _this;

    _classCallCheck(this, NavbarProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavbarProfile).call(this, props));
    _this.state = {
      exp: null
    };
    _this.onUpdate = _this.onUpdate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NavbarProfile, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      _UserManager["default"].addExperienceChangeHandler(this.onUpdate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _UserManager["default"].removeExperienceChangeHandler(this.onUpdate);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      if (_UserManager["default"].user) {
        this.setState({
          exp: _UserManager["default"].user.exp
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "nav-item navbar-profile",
        onClick: this.props.onClick
      }, _react["default"].createElement("div", {
        className: "navbar-profile-icon"
      }, _react["default"].createElement(_Icons.SmallIcon, {
        name: "user"
      })), _react["default"].createElement("div", {
        className: "navbar-profile-label"
      }, _react["default"].createElement("div", null, _LocalizationManager["default"].labels.account), _react["default"].createElement(_ProgressBar["default"], {
        color: "dark",
        bg: "light-blue",
        fg: "blue",
        progress: _UserManager["default"].levelProgress,
        text: _LocalizationManager["default"].levels.level + " " + _UserManager["default"].level
      })));
    }
  }]);

  return NavbarProfile;
}(_react["default"].Component);

exports["default"] = NavbarProfile;