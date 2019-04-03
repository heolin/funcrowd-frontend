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

var NavbarMenuButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavbarMenuButton, _React$Component);

  function NavbarMenuButton(props) {
    var _this;

    _classCallCheck(this, NavbarMenuButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavbarMenuButton).call(this, props));
    _this.state = {
      name: null,
      onClick: null
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NavbarMenuButton, [{
    key: "onClick",
    value: function onClick() {
      if (this.state.onClick !== null) {
        this.state.onClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("li", {
        className: "nav-item"
      }, _react["default"].createElement("button", {
        className: "nav-link btn btn-link",
        href: "#",
        onClick: this.onClick
      }, this.state.name));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.name !== state.name || props.onClick !== state.onClick) {
        return {
          name: props.name,
          onClick: props.onClick
        };
      }

      return null;
    }
  }]);

  return NavbarMenuButton;
}(_react["default"].Component);

exports["default"] = NavbarMenuButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9uYXZiYXIvTmF2YmFyTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJOYXZiYXJNZW51QnV0dG9uIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJvbkNsaWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLGdCOzs7OztBQUVqQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDBGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLElBQUksRUFBRSxJQURHO0FBRVRDLE1BQUFBLE9BQU8sRUFBRTtBQUZBLEtBQWI7QUFLQSxVQUFLQSxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLCtCQUFmO0FBUGU7QUFRbEI7Ozs7OEJBWVM7QUFDTixVQUFJLEtBQUtILEtBQUwsQ0FBV0UsT0FBWCxLQUF1QixJQUEzQixFQUFpQztBQUM3QixhQUFLRixLQUFMLENBQVdFLE9BQVg7QUFDSDtBQUNKOzs7NkJBRVE7QUFDTCxhQUNJO0FBQUksUUFBQSxTQUFTLEVBQUM7QUFBZCxTQUNJO0FBQVEsUUFBQSxTQUFTLEVBQUMsdUJBQWxCO0FBQTBDLFFBQUEsSUFBSSxFQUFDLEdBQS9DO0FBQW1ELFFBQUEsT0FBTyxFQUFFLEtBQUtBO0FBQWpFLFNBQTJFLEtBQUtGLEtBQUwsQ0FBV0MsSUFBdEYsQ0FESixDQURKO0FBS0g7Ozs2Q0F0QitCRixLLEVBQU9DLEssRUFBTztBQUMxQyxVQUFJRCxLQUFLLENBQUNFLElBQU4sS0FBZUQsS0FBSyxDQUFDQyxJQUFyQixJQUE2QkYsS0FBSyxDQUFDRyxPQUFOLEtBQWtCRixLQUFLLENBQUNFLE9BQXpELEVBQWtFO0FBQzlELGVBQU87QUFDSEQsVUFBQUEsSUFBSSxFQUFFRixLQUFLLENBQUNFLElBRFQ7QUFFSEMsVUFBQUEsT0FBTyxFQUFFSCxLQUFLLENBQUNHO0FBRlosU0FBUDtBQUlIOztBQUNELGFBQU8sSUFBUDtBQUNIOzs7O0VBcEJ5Q0Usa0JBQU1DLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZiYXJNZW51QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICBvbkNsaWNrOiBudWxsLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIGlmIChwcm9wcy5uYW1lICE9PSBzdGF0ZS5uYW1lIHx8IHByb3BzLm9uQ2xpY2sgIT09IHN0YXRlLm9uQ2xpY2spIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBwcm9wcy5vbkNsaWNrXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9uQ2xpY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25DbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXYtbGluayBidG4gYnRuLWxpbmtcIiBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja30+e3RoaXMuc3RhdGUubmFtZX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19