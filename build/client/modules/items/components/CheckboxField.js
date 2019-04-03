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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CheckboxField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxField, _React$Component);

  function CheckboxField() {
    _classCallCheck(this, CheckboxField);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckboxField).apply(this, arguments));
  }

  _createClass(CheckboxField, [{
    key: "render",
    value: function render() {
      var _this = this;

      var options = this.props.value.map(function (option) {
        return _react["default"].createElement(_CheckboxElement["default"], {
          key: option,
          name: _this.props.name,
          value: option
        });
      });
      return _react["default"].createElement("div", {
        className: "form-group"
      }, options);
    }
  }]);

  return CheckboxField;
}(_react["default"].Component);

exports["default"] = CheckboxField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pdGVtcy9jb21wb25lbnRzL0NoZWNrYm94RmllbGQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94RmllbGQiLCJvcHRpb25zIiwicHJvcHMiLCJ2YWx1ZSIsIm1hcCIsIm9wdGlvbiIsIm5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxhOzs7Ozs7Ozs7Ozs7OzZCQUVSO0FBQUE7O0FBQ0wsVUFBSUMsT0FBTyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsTUFBRDtBQUFBLGVBQy9CLGdDQUFDLDJCQUFEO0FBQWlCLFVBQUEsR0FBRyxFQUFFQSxNQUF0QjtBQUNpQixVQUFBLElBQUksRUFBRSxLQUFJLENBQUNILEtBQUwsQ0FBV0ksSUFEbEM7QUFFaUIsVUFBQSxLQUFLLEVBQUVEO0FBRnhCLFVBRCtCO0FBQUEsT0FBckIsQ0FBZDtBQUlBLGFBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0tKLE9BREwsQ0FESjtBQUtIOzs7O0VBWnNDTSxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IENoZWNrYm94RWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L0NoZWNrYm94RWxlbWVudFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94RmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMudmFsdWUubWFwKChvcHRpb24pID0+XG4gICAgICAgICAgICA8Q2hlY2tib3hFbGVtZW50IGtleT17b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb259Lz4pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=