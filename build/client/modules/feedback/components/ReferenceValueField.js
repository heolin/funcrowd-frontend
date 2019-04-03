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

var ReferenceValueField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReferenceValueField, _React$Component);

  function ReferenceValueField() {
    _classCallCheck(this, ReferenceValueField);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReferenceValueField).apply(this, arguments));
  }

  _createClass(ReferenceValueField, [{
    key: "render",
    value: function render() {
      var annotationValue = this.props.annotation.data[this.props.field_name];
      var colorStyle = "badge-danger";
      if (this.props.value[0] === annotationValue) colorStyle = "badge-success";
      return _react["default"].createElement("div", {
        className: ""
      }, _react["default"].createElement("div", {
        style: {
          textAlign: "right",
          marginBottom: "10px",
          position: "relative"
        }
      }, _react["default"].createElement("label", {
        style: {
          position: "absolute",
          top: "calc(50% - 14px)",
          left: "0"
        }
      }, "Your answer:"), _react["default"].createElement("span", {
        className: "badge " + colorStyle,
        style: {
          fontSize: "14px",
          width: "100px",
          textAlign: "center",
          whiteSpace: "normal"
        }
      }, annotationValue)), _react["default"].createElement("div", {
        style: {
          textAlign: "right",
          position: "relative"
        }
      }, _react["default"].createElement("label", {
        style: {
          position: "absolute",
          top: "calc(50% - 14px)",
          left: "0"
        }
      }, this.props.name, ":"), _react["default"].createElement("span", {
        className: "badge " + colorStyle,
        style: {
          fontSize: "14px",
          width: "100px",
          textAlign: "center",
          whiteSpace: "normal"
        }
      }, this.props.value[0])));
    }
  }]);

  return ReferenceValueField;
}(_react["default"].Component);

exports["default"] = ReferenceValueField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9mZWVkYmFjay9jb21wb25lbnRzL1JlZmVyZW5jZVZhbHVlRmllbGQuanN4Il0sIm5hbWVzIjpbIlJlZmVyZW5jZVZhbHVlRmllbGQiLCJhbm5vdGF0aW9uVmFsdWUiLCJwcm9wcyIsImFubm90YXRpb24iLCJkYXRhIiwiZmllbGRfbmFtZSIsImNvbG9yU3R5bGUiLCJ2YWx1ZSIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImZvbnRTaXplIiwid2lkdGgiLCJ3aGl0ZVNwYWNlIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLG1COzs7Ozs7Ozs7Ozs7OzZCQUVSO0FBQ0wsVUFBSUMsZUFBZSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkMsSUFBdEIsQ0FBMkIsS0FBS0YsS0FBTCxDQUFXRyxVQUF0QyxDQUF0QjtBQUNBLFVBQUlDLFVBQVUsR0FBRyxjQUFqQjtBQUVBLFVBQUksS0FBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCLENBQWpCLE1BQXdCTixlQUE1QixFQUNJSyxVQUFVLEdBQUcsZUFBYjtBQUVKLGFBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxRQUFBLEtBQUssRUFBRTtBQUFDRSxVQUFBQSxTQUFTLEVBQUUsT0FBWjtBQUFxQkMsVUFBQUEsWUFBWSxFQUFFLE1BQW5DO0FBQTJDQyxVQUFBQSxRQUFRLEVBQUU7QUFBckQ7QUFBWixTQUNJO0FBQU8sUUFBQSxLQUFLLEVBQUU7QUFBQ0EsVUFBQUEsUUFBUSxFQUFFLFVBQVg7QUFBdUJDLFVBQUFBLEdBQUcsRUFBRSxrQkFBNUI7QUFBZ0RDLFVBQUFBLElBQUksRUFBRTtBQUF0RDtBQUFkLHdCQURKLEVBRUk7QUFBTSxRQUFBLFNBQVMsRUFBRSxXQUFXTixVQUE1QjtBQUNNLFFBQUEsS0FBSyxFQUFFO0FBQUNPLFVBQUFBLFFBQVEsRUFBRSxNQUFYO0FBQW1CQyxVQUFBQSxLQUFLLEVBQUUsT0FBMUI7QUFBbUNOLFVBQUFBLFNBQVMsRUFBRSxRQUE5QztBQUF3RE8sVUFBQUEsVUFBVSxFQUFFO0FBQXBFO0FBRGIsU0FFS2QsZUFGTCxDQUZKLENBREosRUFRSTtBQUFLLFFBQUEsS0FBSyxFQUFFO0FBQUNPLFVBQUFBLFNBQVMsRUFBRSxPQUFaO0FBQXFCRSxVQUFBQSxRQUFRLEVBQUU7QUFBL0I7QUFBWixTQUNJO0FBQU8sUUFBQSxLQUFLLEVBQUU7QUFBQ0EsVUFBQUEsUUFBUSxFQUFFLFVBQVg7QUFBdUJDLFVBQUFBLEdBQUcsRUFBRSxrQkFBNUI7QUFBZ0RDLFVBQUFBLElBQUksRUFBRTtBQUF0RDtBQUFkLFNBQTJFLEtBQUtWLEtBQUwsQ0FBV2MsSUFBdEYsTUFESixFQUVJO0FBQU0sUUFBQSxTQUFTLEVBQUUsV0FBV1YsVUFBNUI7QUFDTSxRQUFBLEtBQUssRUFBRTtBQUFDTyxVQUFBQSxRQUFRLEVBQUUsTUFBWDtBQUFtQkMsVUFBQUEsS0FBSyxFQUFFLE9BQTFCO0FBQW1DTixVQUFBQSxTQUFTLEVBQUUsUUFBOUM7QUFBd0RPLFVBQUFBLFVBQVUsRUFBRTtBQUFwRTtBQURiLFNBRUssS0FBS2IsS0FBTCxDQUFXSyxLQUFYLENBQWlCLENBQWpCLENBRkwsQ0FGSixDQVJKLENBREo7QUFrQkg7Ozs7RUEzQjRDVSxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZmVyZW5jZVZhbHVlRmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYW5ub3RhdGlvblZhbHVlID0gdGhpcy5wcm9wcy5hbm5vdGF0aW9uLmRhdGFbdGhpcy5wcm9wcy5maWVsZF9uYW1lXTtcbiAgICAgICAgbGV0IGNvbG9yU3R5bGUgPSBcImJhZGdlLWRhbmdlclwiO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlWzBdID09PSBhbm5vdGF0aW9uVmFsdWUpXG4gICAgICAgICAgICBjb2xvclN0eWxlID0gXCJiYWRnZS1zdWNjZXNzXCI7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogXCJjYWxjKDUwJSAtIDE0cHgpXCIsIGxlZnQ6IFwiMFwifX0+WW91ciBhbnN3ZXI6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImJhZGdlIFwiICsgY29sb3JTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIxNHB4XCIsIHdpZHRoOiBcIjEwMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgd2hpdGVTcGFjZTogXCJub3JtYWxcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Fubm90YXRpb25WYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IFwiY2FsYyg1MCUgLSAxNHB4KVwiLCBsZWZ0OiBcIjBcIn19Pnt0aGlzLnByb3BzLm5hbWV9OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJiYWRnZSBcIiArIGNvbG9yU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMTRweFwiLCB3aWR0aDogXCIxMDBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHdoaXRlU3BhY2U6IFwibm9ybWFsXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZhbHVlWzBdfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=