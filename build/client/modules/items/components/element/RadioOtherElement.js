"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

var RadioOtherElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioOtherElement, _React$Component);

  function RadioOtherElement(props) {
    var _this;

    _classCallCheck(this, RadioOtherElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioOtherElement).call(this, props));
    _this.state = {
      value: ""
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleTextChange = _this.handleTextChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioOtherElement, [{
    key: "handleChange",
    value: function handleChange(event) {
      event = {
        target: {
          id: this.props.name,
          value: this.state.value
        }
      };
      this.props.onChange(event);
    }
  }, {
    key: "handleTextChange",
    value: function handleTextChange(event) {
      this.setState({
        value: event.target.value
      }, this.handleChange);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextState.value !== this.state.value) return true;
      if (nextProps.disabled !== this.props.disabled) return true;
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className || "";
      return _react["default"].createElement("label", {
        className: "radio " + className
      }, _react["default"].createElement("input", {
        id: this.props.name + "-other",
        name: this.props.name,
        value: this.props.value,
        onChange: this.handleChange,
        type: "radio"
      }), _react["default"].createElement("span", {
        className: "outer"
      }, _react["default"].createElement("span", {
        className: "inner"
      })), this.props.text, _react["default"].createElement("input", {
        id: this.props.name,
        value: this.state.value,
        name: this.props.name,
        className: "form-control radio-other",
        onChange: this.handleTextChange,
        disabled: this.props.disabled,
        style: {
          marginLeft: "15px"
        },
        type: "text"
      }));
    }
  }]);

  return RadioOtherElement;
}(_react["default"].Component);

exports["default"] = RadioOtherElement;