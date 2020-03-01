"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _undraw_female_avatar = _interopRequireDefault(require("./static/img/pictures/undraw_female_avatar.svg"));

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

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var style = this.props.style || {};
      var className = this.props.className || "";
      return _react["default"].createElement("div", {
        className: "footer row bg-black-blue color-white " + className,
        style: style
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-3 col-lg-2",
        style: {
          paddingTop: "10px"
        }
      }, _react["default"].createElement("img", {
        src: _undraw_female_avatar["default"],
        style: {
          width: "80%"
        }
      })), _react["default"].createElement("div", {
        className: "col-12 col-md-6",
        style: {
          paddingTop: "20px"
        }
      }, _react["default"].createElement("p", null, "Masz pytania? Chcesz wiedziec wi\u0119cej?", _react["default"].createElement("br", null), "Skontaktuj si\u0119 ze mn\u0105:"), _react["default"].createElement("p", null, _react["default"].createElement("a", {
        className: "light-blue-link",
        href: "mailto: kontakt@spacecalc.pl"
      }, "kontakt@spacecalc.pl"))), _react["default"].createElement("div", {
        className: "col-md-3 col-12",
        style: {
          paddingTop: "20px",
          textAlign: "right"
        }
      }, _react["default"].createElement("p", null, "Przydatne linki:", _react["default"].createElement("br", null), _react["default"].createElement("a", {
        className: "light-blue-link",
        target: "_blank",
        href: "https://funcrowd-s3.s3.eu-central-1.amazonaws.com/Files/Space+Calc+-+Regulamin+serwisu.pdf"
      }, "Regulamin strony"), _react["default"].createElement("br", null), _react["default"].createElement("a", {
        className: "light-blue-link",
        target: "_blank",
        href: "https://funcrowd-s3.s3.eu-central-1.amazonaws.com/Files/Space+Calc+-+Polityka+Prywatno%C5%9Bci.pdf"
      }, "Polityka Prywatno\u015Bci"))))));
    }
  }]);

  return Footer;
}(_react["default"].Component);

exports.Footer = Footer;