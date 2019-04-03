"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FeedbackComponentsFactory = _interopRequireDefault(require("./FeedbackComponentsFactory"));

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

var factory = new _FeedbackComponentsFactory["default"]();

var FieldFeedbackPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FieldFeedbackPanel, _React$Component);

  function FieldFeedbackPanel() {
    _classCallCheck(this, FieldFeedbackPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(FieldFeedbackPanel).apply(this, arguments));
  }

  _createClass(FieldFeedbackPanel, [{
    key: "render",
    value: function render() {
      var field_values = [];

      for (var name in this.props.values) {
        var value = this.props.values[name];
        field_values.push(factory.create(this.props.field_name, name, value, this.props.annotation));
      }

      return _react["default"].createElement("div", {
        className: "row",
        style: {
          marginBottom: "30px"
        }
      }, _react["default"].createElement("div", {
        className: "col-md-3",
        style: {
          textAlign: "center"
        }
      }, _react["default"].createElement("b", null, "Fields")), _react["default"].createElement("div", {
        className: "col-md-9",
        style: {
          textAlign: "center"
        }
      }, _react["default"].createElement("b", null, "Scores")), _react["default"].createElement("div", {
        className: "col-md-3",
        style: {
          borderRightStyle: "solid"
        }
      }, _react["default"].createElement("span", {
        style: {
          top: "calc(50% - 14px)",
          position: "absolute"
        }
      }, _react["default"].createElement("i", null, this.props.field_name))), _react["default"].createElement("div", {
        className: "col-md-9"
      }, _react["default"].createElement("div", null, field_values)));
    }
  }]);

  return FieldFeedbackPanel;
}(_react["default"].Component);

exports["default"] = FieldFeedbackPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9mZWVkYmFjay9GaWVsZEZlZWRiYWNrUGFuZWwuanN4Il0sIm5hbWVzIjpbImZhY3RvcnkiLCJGZWVkYmFja0NvbXBvbmVudHNGYWN0b3J5IiwiRmllbGRGZWVkYmFja1BhbmVsIiwiZmllbGRfdmFsdWVzIiwibmFtZSIsInByb3BzIiwidmFsdWVzIiwidmFsdWUiLCJwdXNoIiwiY3JlYXRlIiwiZmllbGRfbmFtZSIsImFubm90YXRpb24iLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJib3JkZXJSaWdodFN0eWxlIiwidG9wIiwicG9zaXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSUEsT0FBTyxHQUFHLElBQUlDLHFDQUFKLEVBQWQ7O0lBRXFCQyxrQjs7Ozs7Ozs7Ozs7Ozs2QkFFUjtBQUVMLFVBQUlDLFlBQVksR0FBRyxFQUFuQjs7QUFDQSxXQUFLLElBQUlDLElBQVQsSUFBaUIsS0FBS0MsS0FBTCxDQUFXQyxNQUE1QixFQUFvQztBQUNoQyxZQUFJQyxLQUFLLEdBQUcsS0FBS0YsS0FBTCxDQUFXQyxNQUFYLENBQWtCRixJQUFsQixDQUFaO0FBQ0FELFFBQUFBLFlBQVksQ0FBQ0ssSUFBYixDQUFrQlIsT0FBTyxDQUFDUyxNQUFSLENBQWUsS0FBS0osS0FBTCxDQUFXSyxVQUExQixFQUFzQ04sSUFBdEMsRUFBNENHLEtBQTVDLEVBQW1ELEtBQUtGLEtBQUwsQ0FBV00sVUFBOUQsQ0FBbEI7QUFDSDs7QUFFRCxhQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsS0FBZjtBQUFxQixRQUFBLEtBQUssRUFBRTtBQUFDQyxVQUFBQSxZQUFZLEVBQUU7QUFBZjtBQUE1QixTQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsVUFBZjtBQUEwQixRQUFBLEtBQUssRUFBRTtBQUFDQyxVQUFBQSxTQUFTLEVBQUU7QUFBWjtBQUFqQyxTQUNJLG9EQURKLENBREosRUFJSTtBQUFLLFFBQUEsU0FBUyxFQUFDLFVBQWY7QUFBMEIsUUFBQSxLQUFLLEVBQUU7QUFBQ0EsVUFBQUEsU0FBUyxFQUFFO0FBQVo7QUFBakMsU0FDSSxvREFESixDQUpKLEVBT0k7QUFBSyxRQUFBLFNBQVMsRUFBQyxVQUFmO0FBQTBCLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLGdCQUFnQixFQUFFO0FBQW5CO0FBQWpDLFNBQ0k7QUFBTSxRQUFBLEtBQUssRUFBRTtBQUFDQyxVQUFBQSxHQUFHLEVBQUUsa0JBQU47QUFBMEJDLFVBQUFBLFFBQVEsRUFBRTtBQUFwQztBQUFiLFNBQThELDJDQUFJLEtBQUtYLEtBQUwsQ0FBV0ssVUFBZixDQUE5RCxDQURKLENBUEosRUFVSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSSw2Q0FDS1AsWUFETCxDQURKLENBVkosQ0FESjtBQW1CSDs7OztFQTdCMkNjLGtCQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgRmVlZGJhY2tDb21wb25lbnRzRmFjdG9yeSBmcm9tIFwiLi9GZWVkYmFja0NvbXBvbmVudHNGYWN0b3J5XCI7XG5cblxubGV0IGZhY3RvcnkgPSBuZXcgRmVlZGJhY2tDb21wb25lbnRzRmFjdG9yeSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZEZlZWRiYWNrUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBmaWVsZF92YWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLnByb3BzLnZhbHVlcykge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbbmFtZV07XG4gICAgICAgICAgICBmaWVsZF92YWx1ZXMucHVzaChmYWN0b3J5LmNyZWF0ZSh0aGlzLnByb3BzLmZpZWxkX25hbWUsIG5hbWUsIHZhbHVlLCB0aGlzLnByb3BzLmFubm90YXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjMwcHhcIn19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICA8Yj5GaWVsZHM8L2I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxiPlNjb3JlczwvYj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCIgc3R5bGU9e3tib3JkZXJSaWdodFN0eWxlOiBcInNvbGlkXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0b3A6IFwiY2FsYyg1MCUgLSAxNHB4KVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+PGk+e3RoaXMucHJvcHMuZmllbGRfbmFtZX08L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZF92YWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=