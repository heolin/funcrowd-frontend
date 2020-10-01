"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BlackBackground = _interopRequireDefault(require("../../components/BlackBackground"));

var _FeedbackFactory = _interopRequireDefault(require("./FeedbackFactory"));

var _FeedbackTypes = _interopRequireDefault(require("../feedback/FeedbackTypes"));

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

var FeedbackPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FeedbackPanel, _React$Component);

  function FeedbackPanel() {
    _classCallCheck(this, FeedbackPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(FeedbackPanel).apply(this, arguments));
  }

  _createClass(FeedbackPanel, [{
    key: "render",
    value: function render() {
      var annotation = this.props.annotation;
      var feedback = null;
      var type = null;

      if (annotation) {
        feedback = annotation.feedback;
        if (feedback) type = feedback['type'];else type = _FeedbackTypes["default"].CONFIRM_ONLY;
      }

      var modal = _FeedbackFactory["default"].create(type, this.props.isOpen, this.props.onAccept, this.props.task, annotation, feedback, this.props.exp);

      return _react["default"].createElement("div", {
        className: "modal-base"
      }, _react["default"].createElement(_BlackBackground["default"], {
        className: "black-background",
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        },
        pose: this.props.isOpen ? 'open' : 'closed',
        onClick: this.props.onClose
      }), modal);
    }
  }]);

  return FeedbackPanel;
}(_react["default"].Component);

exports["default"] = FeedbackPanel;