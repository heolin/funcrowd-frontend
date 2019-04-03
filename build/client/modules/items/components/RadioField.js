"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _RadioElement = _interopRequireDefault(require("./element/RadioElement"));

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

var RadioField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioField, _React$Component);

  function RadioField(props) {
    var _this;

    _classCallCheck(this, RadioField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioField).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioField, [{
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
      var _this2 = this;

      var options = this.props.source.map(function (option) {
        return _react["default"].createElement(_RadioElement["default"], {
          key: option,
          name: _this2.props.name,
          onChange: _this2.handleChange,
          required: _this2.props.required,
          value: option
        });
      });
      return _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", null, _react["default"].createElement("strong", null, this.props.name)), options);
    }
  }]);

  return RadioField;
}(_react["default"].Component);

exports["default"] = RadioField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pdGVtcy9jb21wb25lbnRzL1JhZGlvRmllbGQuanN4Il0sIm5hbWVzIjpbIlJhZGlvRmllbGQiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJldmVudCIsIm9uQ2hhbmdlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwicmVzdWx0IiwidmFsdWUiLCJvcHRpb25zIiwic291cmNlIiwibWFwIiwib3B0aW9uIiwibmFtZSIsInJlcXVpcmVkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsVTs7Ozs7QUFFakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixvRkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBRmU7QUFHbEI7Ozs7aUNBRVlDLEssRUFBTztBQUNoQixXQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JELEtBQXBCO0FBQ0g7OzswQ0FFcUJFLFMsRUFBV0MsUyxFQUFXO0FBQ3hDLFVBQUlDLE1BQU0sR0FBR0YsU0FBUyxDQUFDRyxLQUFWLEtBQW9CLEtBQUtSLEtBQUwsQ0FBV1EsS0FBNUM7QUFDQSxhQUFPRCxNQUFQO0FBQ0g7Ozs2QkFFUTtBQUFBOztBQUNMLFVBQUlFLE9BQU8sR0FBRyxLQUFLVCxLQUFMLENBQVdVLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLE1BQUQ7QUFBQSxlQUNoQyxnQ0FBQyx3QkFBRDtBQUFjLFVBQUEsR0FBRyxFQUFFQSxNQUFuQjtBQUNjLFVBQUEsSUFBSSxFQUFFLE1BQUksQ0FBQ1osS0FBTCxDQUFXYSxJQUQvQjtBQUVjLFVBQUEsUUFBUSxFQUFFLE1BQUksQ0FBQ1osWUFGN0I7QUFHYyxVQUFBLFFBQVEsRUFBRSxNQUFJLENBQUNELEtBQUwsQ0FBV2MsUUFIbkM7QUFJYyxVQUFBLEtBQUssRUFBRUY7QUFKckIsVUFEZ0M7QUFBQSxPQUF0QixDQUFkO0FBTUEsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSSwrQ0FBTyxnREFBUyxLQUFLWixLQUFMLENBQVdhLElBQXBCLENBQVAsQ0FESixFQUVLSixPQUZMLENBREo7QUFNSDs7OztFQTdCbUNNLGtCQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmFkaW9FbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvUmFkaW9FbGVtZW50XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9GaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWU7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMuc291cmNlLm1hcCgob3B0aW9uKSA9PlxuICAgICAgICAgICAgPFJhZGlvRWxlbWVudCBrZXk9e29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ufS8+KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPnt0aGlzLnByb3BzLm5hbWV9PC9zdHJvbmc+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==