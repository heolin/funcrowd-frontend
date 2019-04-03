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

var ConfirmationPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfirmationPanel, _React$Component);

  function ConfirmationPanel(props) {
    var _this;

    _classCallCheck(this, ConfirmationPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfirmationPanel).call(this, props));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ConfirmationPanel, [{
    key: "onClose",
    value: function onClose() {
      this.props.onClose();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "modal-base"
      }, _react["default"].createElement("div", {
        className: "shadow"
      }), _react["default"].createElement("div", {
        className: "confirmation-panel card-3-static"
      }, _react["default"].createElement("h4", {
        style: {
          marginBottom: "20px"
        }
      }, "Answer saved"), _react["default"].createElement("button", {
        className: "btn btn-green",
        style: {
          marginLeft: "20px",
          marginRight: "20px",
          width: "80px"
        },
        onClick: this.onClose
      }, "Ok")));
    }
  }]);

  return ConfirmationPanel;
}(_react["default"].Component);

exports["default"] = ConfirmationPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pdGVtcy9Db25maXJtYXRpb25QYW5lbC5qc3giXSwibmFtZXMiOlsiQ29uZmlybWF0aW9uUGFuZWwiLCJwcm9wcyIsIm9uQ2xvc2UiLCJiaW5kIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxpQjs7Ozs7QUFFakIsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiwyRkFBTUEsS0FBTjtBQUVBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFDLElBQWIsK0JBQWY7QUFIZTtBQUlsQjs7Ozs4QkFFUztBQUNOLFdBQUtGLEtBQUwsQ0FBV0MsT0FBWDtBQUNIOzs7NkJBRVE7QUFDTCxhQUNJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixRQURKLEVBR0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSSxRQUFBLEtBQUssRUFBRTtBQUFDRSxVQUFBQSxZQUFZLEVBQUU7QUFBZjtBQUFYLHdCQURKLEVBSUk7QUFBUSxRQUFBLFNBQVMsRUFBQyxlQUFsQjtBQUNRLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLFVBQVUsRUFBRSxNQUFiO0FBQXFCQyxVQUFBQSxXQUFXLEVBQUUsTUFBbEM7QUFBMENDLFVBQUFBLEtBQUssRUFBRTtBQUFqRCxTQURmO0FBRVEsUUFBQSxPQUFPLEVBQUUsS0FBS0w7QUFGdEIsY0FKSixDQUhKLENBREo7QUFnQkg7Ozs7RUE3QjBDTSxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1hdGlvblBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJhc2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZmlybWF0aW9uLXBhbmVsIGNhcmQtMy1zdGF0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgQW5zd2VyIHNhdmVkXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI4MHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBPa1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuIl19