"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextCollapse = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icons = require("./Icons");

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

var TextCollapse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextCollapse, _React$Component);

  function TextCollapse(props) {
    var _this;

    _classCallCheck(this, TextCollapse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextCollapse).call(this, props));
    _this.state = {
      shown: false
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextCollapse, [{
    key: "onClick",
    value: function onClick() {
      this.setState({
        shown: !this.state.shown
      });
    }
  }, {
    key: "render",
    value: function render() {
      var icon = this.state.shown ? "arrow-down" : "arrow-right";
      var className = this.state.shown ? "" : " collapsed";
      return _react["default"].createElement("div", {
        className: "text-collapse",
        style: this.props.style
      }, _react["default"].createElement("div", {
        className: "text-collapse-head noselect smal",
        onClick: this.onClick
      }, _react["default"].createElement(_Icons.Icon, {
        className: "very-small-icon",
        name: icon,
        style: {
          marginRight: "10px"
        }
      }), this.props.headText), _react["default"].createElement("div", {
        className: "text-collapse-body" + className
      }, _react["default"].createElement("div", {
        style: {
          padding: "20px"
        },
        dangerouslySetInnerHTML: {
          __html: this.props.bodyText
        }
      })));
    }
  }]);

  return TextCollapse;
}(_react["default"].Component);

exports.TextCollapse = TextCollapse;