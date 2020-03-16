"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _BlackBackground = _interopRequireDefault(require("../../components/BlackBackground"));

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

var Modal = _reactPose["default"].div({
  open: {
    opacity: 1.0,
    x: "-50%",
    y: "-45%"
  },
  closed: {
    opacity: 0,
    x: "-50%",
    y: "-35%"
  }
});

var MobileWarningPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileWarningPanel, _React$Component);

  function MobileWarningPanel() {
    _classCallCheck(this, MobileWarningPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(MobileWarningPanel).apply(this, arguments));
  }

  _createClass(MobileWarningPanel, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "modal-base"
      }, _react["default"].createElement(_BlackBackground["default"], {
        className: "black-background",
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        },
        pose: this.props.isOpen ? 'open' : 'closed',
        onClick: this.props.onClose
      }), _react["default"].createElement(Modal, {
        className: "modal-window mobile-warning-panel card-3-static",
        pose: this.props.isOpen ? 'open' : 'closed',
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        }
      }, _react["default"].createElement("h3", {
        className: "text-center"
      }, "\u0141atwiej b\u0119dzie na komputerze"), _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Cze\u015B\u0107!"), _react["default"].createElement("p", null, "Wygl\u0105da na to, \u017Ce chcesz rozwi\u0105za\u0107 to zadanie, ale przegl\u0105dasz je na smartfonie. Nasz kurs wygodniej rozwi\u0105zywa\u0107 na wi\u0119kszym ekranie. Nasza rada? Przesi\u0105d\u017A si\u0119 na laptop lub komputer."), _react["default"].createElement("p", null, "Pami\u0119taj, do rozwi\u0105zywania zada\u0144 potrzebujesz programu Excel. \u0141atwiej i szybciej obs\u0142u\u017Cysz go na komputerze.")), _react["default"].createElement("div", {
        className: "text-center"
      }, _react["default"].createElement("div", {
        className: "btn btn-primary feedback-button",
        style: {
          marginTop: "20px"
        },
        onClick: this.props.onClose
      }, "Ok, dzi\u0119ki"))));
    }
  }]);

  return MobileWarningPanel;
}(_react["default"].Component);

exports["default"] = MobileWarningPanel;