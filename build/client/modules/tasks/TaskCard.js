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

var TaskCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TaskCard, _React$Component);

  function TaskCard() {
    _classCallCheck(this, TaskCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(TaskCard).apply(this, arguments));
  }

  _createClass(TaskCard, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "col-md-4"
      }, _react["default"].createElement("div", {
        className: "task-card card-2",
        onClick: this.props.onSelect
      }, _react["default"].createElement("h4", null, this.props.task.name), _react["default"].createElement("p", null, "0/0 uko\u0144czone")));
    }
  }]);

  return TaskCard;
}(_react["default"].Component);

exports["default"] = TaskCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy90YXNrcy9UYXNrQ2FyZC5qc3giXSwibmFtZXMiOlsiVGFza0NhcmQiLCJwcm9wcyIsIm9uU2VsZWN0IiwidGFzayIsIm5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxROzs7Ozs7Ozs7Ozs7OzZCQUVSO0FBQ0wsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLGtCQUFmO0FBQWtDLFFBQUEsT0FBTyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0M7QUFBdEQsU0FDSSw0Q0FBSyxLQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JDLElBQXJCLENBREosRUFFSSxnRUFGSixDQURKLENBREo7QUFRSDs7OztFQVhpQ0Msa0JBQU1DLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrLWNhcmQgY2FyZC0yXCIgb25DbGljaz17dGhpcy5wcm9wcy5vblNlbGVjdH0+XG4gICAgICAgICAgICAgICAgICAgIDxoND57dGhpcy5wcm9wcy50YXNrLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHA+MC8wIHVrb8WEY3pvbmU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=