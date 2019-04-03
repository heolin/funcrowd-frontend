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

var RadioElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioElement, _React$Component);

  function RadioElement(props) {
    var _this;

    _classCallCheck(this, RadioElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioElement).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioElement, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.props.onChange(event);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var result = nextProps.value !== this.props.value;
      return result;
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("label", {
        className: "radio-container"
      }, _react["default"].createElement("input", {
        id: this.props.name,
        name: this.props.name,
        value: this.props.value,
        onChange: this.handleChange,
        type: "radio"
      }), _react["default"].createElement("span", {
        className: "radiomark"
      }), this.props.value);
    }
  }]);

  return RadioElement;
}(_react["default"].Component);

exports["default"] = RadioElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pdGVtcy9jb21wb25lbnRzL2VsZW1lbnQvUmFkaW9FbGVtZW50LmpzeCJdLCJuYW1lcyI6WyJSYWRpb0VsZW1lbnQiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJldmVudCIsIm9uQ2hhbmdlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwicmVzdWx0IiwidmFsdWUiLCJuYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsWTs7Ozs7QUFFakIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixzRkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBRmU7QUFHbEI7Ozs7aUNBRVlDLEssRUFBTztBQUNoQixXQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JELEtBQXBCO0FBQ0g7OzswQ0FFcUJFLFMsRUFBV0MsUyxFQUFXO0FBQ3hDLFVBQUlDLE1BQU0sR0FBR0YsU0FBUyxDQUFDRyxLQUFWLEtBQW9CLEtBQUtSLEtBQUwsQ0FBV1EsS0FBNUM7QUFDQSxhQUFPRCxNQUFQO0FBQ0g7Ozs2QkFFUTtBQUNMLGFBQ0k7QUFBTyxRQUFBLFNBQVMsRUFBQztBQUFqQixTQUNJO0FBQU8sUUFBQSxFQUFFLEVBQUUsS0FBS1AsS0FBTCxDQUFXUyxJQUF0QjtBQUNPLFFBQUEsSUFBSSxFQUFFLEtBQUtULEtBQUwsQ0FBV1MsSUFEeEI7QUFFTyxRQUFBLEtBQUssRUFBRSxLQUFLVCxLQUFMLENBQVdRLEtBRnpCO0FBR08sUUFBQSxRQUFRLEVBQUUsS0FBS1AsWUFIdEI7QUFJTyxRQUFBLElBQUksRUFBQztBQUpaLFFBREosRUFNSTtBQUFNLFFBQUEsU0FBUyxFQUFDO0FBQWhCLFFBTkosRUFPSyxLQUFLRCxLQUFMLENBQVdRLEtBUGhCLENBREo7QUFXSDs7OztFQTVCcUNFLGtCQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9FbGVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhZGlvbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19