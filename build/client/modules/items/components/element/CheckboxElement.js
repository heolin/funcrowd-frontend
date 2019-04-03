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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RadioElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioElement, _React$Component);

  function RadioElement() {
    _classCallCheck(this, RadioElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioElement).apply(this, arguments));
  }

  _createClass(RadioElement, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("label", {
        className: "radio-container"
      }, _react["default"].createElement("input", {
        name: this.props.name,
        value: this.props.value,
        type: "checkbox"
      }), _react["default"].createElement("span", {
        className: "checkmark"
      }), this.props.value);
    }
  }]);

  return RadioElement;
}(_react["default"].Component);

exports["default"] = RadioElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pdGVtcy9jb21wb25lbnRzL2VsZW1lbnQvQ2hlY2tib3hFbGVtZW50LmpzeCJdLCJuYW1lcyI6WyJSYWRpb0VsZW1lbnQiLCJwcm9wcyIsIm5hbWUiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLFk7Ozs7Ozs7Ozs7Ozs7NkJBRVI7QUFDTCxhQUNJO0FBQU8sUUFBQSxTQUFTLEVBQUM7QUFBakIsU0FDSTtBQUFPLFFBQUEsSUFBSSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsSUFBeEI7QUFDTyxRQUFBLEtBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdFLEtBRHpCO0FBRU8sUUFBQSxJQUFJLEVBQUM7QUFGWixRQURKLEVBSUk7QUFBTSxRQUFBLFNBQVMsRUFBQztBQUFoQixRQUpKLEVBS0ssS0FBS0YsS0FBTCxDQUFXRSxLQUxoQixDQURKO0FBU0g7Ozs7RUFacUNDLGtCQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9FbGVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19