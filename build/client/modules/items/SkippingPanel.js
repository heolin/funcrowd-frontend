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

var SkippingPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SkippingPanel, _React$Component);

  function SkippingPanel(props) {
    var _this;

    _classCallCheck(this, SkippingPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SkippingPanel).call(this, props));
    _this.onCancel = _this.onCancel.bind(_assertThisInitialized(_this));
    _this.onAccept = _this.onAccept.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SkippingPanel, [{
    key: "onCancel",
    value: function onCancel() {
      this.props.onCancel();
    }
  }, {
    key: "onAccept",
    value: function onAccept() {
      this.props.onAccept();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "modal-base"
      }, _react["default"].createElement("div", {
        className: "shadow",
        onClick: this.onCancel
      }), _react["default"].createElement("div", {
        className: "skipping-panel card-3-static"
      }, _react["default"].createElement("h4", null, "Skip this item"), _react["default"].createElement("p", null, "Are you sure you want to skip this item?"), _react["default"].createElement("button", {
        className: "btn btn-default",
        style: {
          marginLeft: "20px",
          marginRight: "20px",
          width: "80px"
        },
        onClick: this.onAccept
      }, "Yes"), _react["default"].createElement("button", {
        className: "btn btn-green",
        style: {
          marginLeft: "20px",
          marginRight: "20px",
          width: "80px"
        },
        onClick: this.onCancel
      }, "No")));
    }
  }]);

  return SkippingPanel;
}(_react["default"].Component);

exports["default"] = SkippingPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pdGVtcy9Ta2lwcGluZ1BhbmVsLmpzeCJdLCJuYW1lcyI6WyJTa2lwcGluZ1BhbmVsIiwicHJvcHMiLCJvbkNhbmNlbCIsImJpbmQiLCJvbkFjY2VwdCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIndpZHRoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsYTs7Ozs7QUFFakIseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZix1RkFBTUEsS0FBTjtBQUVBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLCtCQUFoQjtBQUplO0FBS2xCOzs7OytCQUVVO0FBQ1AsV0FBS0YsS0FBTCxDQUFXQyxRQUFYO0FBQ0g7OzsrQkFFVTtBQUNQLFdBQUtELEtBQUwsQ0FBV0csUUFBWDtBQUNIOzs7NkJBRVE7QUFDTCxhQUNJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsUUFBZjtBQUF3QixRQUFBLE9BQU8sRUFBRSxLQUFLRjtBQUF0QyxRQURKLEVBR0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0ksNkRBREosRUFJSSxzRkFKSixFQU9JO0FBQVEsUUFBQSxTQUFTLEVBQUMsaUJBQWxCO0FBQ1EsUUFBQSxLQUFLLEVBQUU7QUFBQ0csVUFBQUEsVUFBVSxFQUFFLE1BQWI7QUFBcUJDLFVBQUFBLFdBQVcsRUFBRSxNQUFsQztBQUEwQ0MsVUFBQUEsS0FBSyxFQUFFO0FBQWpELFNBRGY7QUFFUSxRQUFBLE9BQU8sRUFBRSxLQUFLSDtBQUZ0QixlQVBKLEVBWUk7QUFBUSxRQUFBLFNBQVMsRUFBQyxlQUFsQjtBQUNRLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLFVBQVUsRUFBRSxNQUFiO0FBQXFCQyxVQUFBQSxXQUFXLEVBQUUsTUFBbEM7QUFBMENDLFVBQUFBLEtBQUssRUFBRTtBQUFqRCxTQURmO0FBRVEsUUFBQSxPQUFPLEVBQUUsS0FBS0w7QUFGdEIsY0FaSixDQUhKLENBREo7QUF3Qkg7Ozs7RUExQ3NDTSxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraXBwaW5nUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25BY2NlcHQgPSB0aGlzLm9uQWNjZXB0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DYW5jZWwoKTtcbiAgICB9XG5cbiAgICBvbkFjY2VwdCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFjY2VwdCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmFzZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCIgb25DbGljaz17dGhpcy5vbkNhbmNlbH0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lwcGluZy1wYW5lbCBjYXJkLTMtc3RhdGljXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNraXAgdGhpcyBpdGVtXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNraXAgdGhpcyBpdGVtP1xuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5SaWdodDogXCIyMHB4XCIsIHdpZHRoOiBcIjgwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFjY2VwdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLCB3aWR0aDogXCI4MHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DYW5jZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbiJdfQ==