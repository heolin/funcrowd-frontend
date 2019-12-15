"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CheckboxElement = _interopRequireDefault(require("./element/CheckboxElement"));

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

var CheckboxField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxField, _React$Component);

  function CheckboxField(props) {
    var _this;

    _classCallCheck(this, CheckboxField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxField).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckboxField, [{
    key: "onChange",
    value: function onChange() {
      var checkboxes = document.querySelectorAll('input[name=' + this.props.name + ']:checked');
      var values = [];

      for (var i = 0; i < checkboxes.length; i++) {
        values.push(checkboxes[i].value);
      }

      var event = {
        target: {
          id: this.props.name,
          value: JSON.stringify(values)
        }
      };
      this.props.onChange(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = this.props.source.map(function (option) {
        return _react["default"].createElement(_CheckboxElement["default"], {
          key: option,
          labelClassName: "small",
          onChange: _this2.onChange,
          name: _this2.props.name,
          value: option
        });
      });
      var label;
      if (this.props.label) label = _react["default"].createElement("label", null, _react["default"].createElement("strong", null, this.props.label));
      return _react["default"].createElement("div", {
        className: "form-group"
      }, label, _react["default"].createElement("div", {
        style: {
          marginLeft: "10px"
        }
      }, options));
    }
  }]);

  return CheckboxField;
}(_react["default"].Component);

exports["default"] = CheckboxField;