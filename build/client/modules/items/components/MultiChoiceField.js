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

var MultiChoiceField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MultiChoiceField, _React$Component);

  function MultiChoiceField() {
    _classCallCheck(this, MultiChoiceField);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiChoiceField).apply(this, arguments));
  }

  _createClass(MultiChoiceField, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", null, this.props.name), _react["default"].createElement("div", null, this.props.value));
    }
  }]);

  return MultiChoiceField;
}(_react["default"].Component);

exports["default"] = MultiChoiceField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pdGVtcy9jb21wb25lbnRzL011bHRpQ2hvaWNlRmllbGQuanN4Il0sIm5hbWVzIjpbIk11bHRpQ2hvaWNlRmllbGQiLCJwcm9wcyIsIm5hbWUiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLGdCOzs7Ozs7Ozs7Ozs7OzZCQUVSO0FBQ0wsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSSwrQ0FBUSxLQUFLQyxLQUFMLENBQVdDLElBQW5CLENBREosRUFFSSw2Q0FBTSxLQUFLRCxLQUFMLENBQVdFLEtBQWpCLENBRkosQ0FESjtBQU1IOzs7O0VBVHlDQyxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpQ2hvaWNlRmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnByb3BzLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLnZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19