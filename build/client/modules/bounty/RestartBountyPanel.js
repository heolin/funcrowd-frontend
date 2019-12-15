"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _reactIconsKit = require("react-icons-kit");

var _close = require("react-icons-kit/fa/close");

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

var RestartBountyPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RestartBountyPanel, _React$Component);

  function RestartBountyPanel() {
    _classCallCheck(this, RestartBountyPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(RestartBountyPanel).apply(this, arguments));
  }

  _createClass(RestartBountyPanel, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "modal-base"
      }, _react["default"].createElement(_BlackBackground["default"], {
        className: "black-background",
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        },
        pose: this.props.isOpen ? 'open' : 'closed'
      }), _react["default"].createElement(Modal, {
        className: "modal-window restart-bounty-panel card-3-static",
        pose: this.props.isOpen ? 'open' : 'closed',
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        }
      }, _react["default"].createElement("h3", {
        className: "text-center",
        style: {
          marginBottom: "30px"
        }
      }, "Start next bounty"), _react["default"].createElement("p", null, "You are about to start a next bounty."), _react["default"].createElement("ul", {
        className: "instruction-steps"
      }, _react["default"].createElement("li", null, "Your ", _react["default"].createElement("b", null, "progress bar will reset"), " but you will still have access to all your ", _react["default"].createElement("b", null, "previous reward codes"), "."), _react["default"].createElement("li", null, "After you finish you will received ", _react["default"].createElement("b", null, "next reward code"), "."), _react["default"].createElement("li", null, _react["default"].createElement("b", null, "Copy the code"), " back to the mturk page to complete the task.")), _react["default"].createElement("div", {
        className: "text-center"
      }, _react["default"].createElement("button", {
        className: "btn btn-primary",
        onClick: this.props.startBounty,
        style: {
          width: "140px",
          marginTop: "20px"
        }
      }, "Start"))));
    }
  }]);

  return RestartBountyPanel;
}(_react["default"].Component);

exports["default"] = RestartBountyPanel;