"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("bootstrap/dist/js/bootstrap");

require("./static/scss/navbar.scss");

require("./static/scss/style.scss");

var _safari = _interopRequireDefault(require("./static/img/common/browsers/safari.png"));

var _chrome = _interopRequireDefault(require("./static/img/common/browsers/chrome.png"));

var _firefox = _interopRequireDefault(require("./static/img/common/browsers/firefox.png"));

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

var NotSupported =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotSupported, _React$Component);

  function NotSupported() {
    _classCallCheck(this, NotSupported);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotSupported).apply(this, arguments));
  }

  _createClass(NotSupported, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        id: "notsupported",
        style: {
          textAlign: "center"
        }
      }, _react["default"].createElement("h3", {
        style: {
          marginTop: "30px"
        }
      }, "Sorry, but this browser is not supported."), "Please try using one of the browsers listed below:", _react["default"].createElement("div", {
        style: {
          marginTop: "30px",
          marginBottom: "20px"
        }
      }, _react["default"].createElement("div", {
        style: {
          display: "inline-block",
          marginRight: "20px"
        }
      }, _react["default"].createElement("div", null, _react["default"].createElement("img", {
        src: _firefox["default"],
        style: {
          width: "90px"
        }
      })), _react["default"].createElement("a", {
        href: "https://www.mozilla.org/pl/firefox/",
        target: "_blank"
      }, "FireFox")), _react["default"].createElement("div", {
        style: {
          display: "inline-block"
        }
      }, _react["default"].createElement("div", null, _react["default"].createElement("img", {
        src: _chrome["default"],
        style: {
          width: "94px"
        }
      })), _react["default"].createElement("a", {
        href: "https://www.google.com/chrome/",
        target: "_blank"
      }, "Chrome")), _react["default"].createElement("div", {
        style: {
          display: "inline-block",
          marginLeft: "20px"
        }
      }, _react["default"].createElement("div", null, _react["default"].createElement("img", {
        src: _safari["default"],
        style: {
          "width": "84px"
        }
      })), _react["default"].createElement("a", {
        href: "https://support.apple.com/downloads/safari",
        target: "_blank"
      }, "Safari"))));
    }
  }]);

  return NotSupported;
}(_react["default"].Component);

var _default = NotSupported;
exports["default"] = _default;