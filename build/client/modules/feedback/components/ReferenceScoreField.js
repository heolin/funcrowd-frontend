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

var ReferenceScoreField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReferenceScoreField, _React$Component);

  function ReferenceScoreField() {
    _classCallCheck(this, ReferenceScoreField);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReferenceScoreField).apply(this, arguments));
  }

  _createClass(ReferenceScoreField, [{
    key: "render",
    value: function render() {
      var colorStyle = "badge-danger";
      if (this.props.value > 0) colorStyle = "badge-success";
      return _react["default"].createElement("div", {
        className: ""
      }, _react["default"].createElement("label", null, this.props.name, ":"), _react["default"].createElement("span", {
        className: "badge " + colorStyle,
        style: {
          "float": "right",
          fontSize: "14px",
          width: "100px"
        }
      }, this.props.value * 100, " points"));
    }
  }]);

  return ReferenceScoreField;
}(_react["default"].Component);

exports["default"] = ReferenceScoreField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9mZWVkYmFjay9jb21wb25lbnRzL1JlZmVyZW5jZVNjb3JlRmllbGQuanN4Il0sIm5hbWVzIjpbIlJlZmVyZW5jZVNjb3JlRmllbGQiLCJjb2xvclN0eWxlIiwicHJvcHMiLCJ2YWx1ZSIsIm5hbWUiLCJmb250U2l6ZSIsIndpZHRoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsbUI7Ozs7Ozs7Ozs7Ozs7NkJBRVI7QUFDTCxVQUFJQyxVQUFVLEdBQUcsY0FBakI7QUFDQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixDQUF2QixFQUNJRixVQUFVLEdBQUcsZUFBYjtBQUVKLGFBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0ksK0NBQVEsS0FBS0MsS0FBTCxDQUFXRSxJQUFuQixNQURKLEVBRUk7QUFBTSxRQUFBLFNBQVMsRUFBRSxXQUFXSCxVQUE1QjtBQUF3QyxRQUFBLEtBQUssRUFBRTtBQUFDLG1CQUFPLE9BQVI7QUFBaUJJLFVBQUFBLFFBQVEsRUFBRSxNQUEzQjtBQUFtQ0MsVUFBQUEsS0FBSyxFQUFFO0FBQTFDO0FBQS9DLFNBQ0ssS0FBS0osS0FBTCxDQUFXQyxLQUFYLEdBQWlCLEdBRHRCLFlBRkosQ0FESjtBQVFIOzs7O0VBZjRDSSxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZmVyZW5jZVNjb3JlRmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY29sb3JTdHlsZSA9IFwiYmFkZ2UtZGFuZ2VyXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlID4gMClcbiAgICAgICAgICAgIGNvbG9yU3R5bGUgPSBcImJhZGdlLXN1Y2Nlc3NcIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMubmFtZX06PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiYmFkZ2UgXCIgKyBjb2xvclN0eWxlfSBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCIsIGZvbnRTaXplOiBcIjE0cHhcIiwgd2lkdGg6IFwiMTAwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZSoxMDB9IHBvaW50c1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==