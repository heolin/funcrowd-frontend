"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavbarMenu = _interopRequireDefault(require("./NavbarMenu"));

var _reactIconsKit = require("react-icons-kit");

var _user = require("react-icons-kit/metrize/user");

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

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));
    _this.state = {
      user: null
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("nav", {
        className: "navbar card-2-static fixed-top navbar-expand-lg navbar-light bg-light"
      }, _react["default"].createElement("div", {
        className: "navbar-brand"
      }, _react["default"].createElement(_reactIconsKit.Icon, {
        icon: _user.user,
        size: 24,
        style: {
          position: "absolute",
          top: "calc(50% - 18px)"
        }
      }), _react["default"].createElement("span", {
        style: {
          marginLeft: "32px"
        }
      }, "FunCrowd")), _react["default"].createElement(_NavbarMenu["default"], {
        user: this.state.user,
        onLogout: this.props.onLogout,
        onNavigateToMissions: this.props.onNavigateToMissions,
        onNavigateToBounties: this.props.onNavigateToBounties
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.user !== state.user) {
        return {
          user: props.user
        };
      }

      return null;
    }
  }]);

  return Navbar;
}(_react["default"].Component);

exports["default"] = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9uYXZiYXIvTmF2YmFyLmpzeCJdLCJuYW1lcyI6WyJOYXZiYXIiLCJwcm9wcyIsInN0YXRlIiwidXNlciIsInBvc2l0aW9uIiwidG9wIiwibWFyZ2luTGVmdCIsIm9uTG9nb3V0Iiwib25OYXZpZ2F0ZVRvTWlzc2lvbnMiLCJvbk5hdmlnYXRlVG9Cb3VudGllcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE07Ozs7O0FBRWpCLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsZ0ZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsSUFBSSxFQUFFO0FBREcsS0FBYjtBQUZlO0FBS2xCOzs7OzZCQVdRO0FBQ0wsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSSxnQ0FBQyxtQkFBRDtBQUFNLFFBQUEsSUFBSSxFQUFFQSxVQUFaO0FBQWtCLFFBQUEsSUFBSSxFQUFFLEVBQXhCO0FBQTRCLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLFFBQVEsRUFBRSxVQUFYO0FBQXVCQyxVQUFBQSxHQUFHLEVBQUU7QUFBNUI7QUFBbkMsUUFESixFQUVJO0FBQU0sUUFBQSxLQUFLLEVBQUU7QUFBQ0MsVUFBQUEsVUFBVSxFQUFFO0FBQWI7QUFBYixvQkFGSixDQURKLEVBS0ksZ0NBQUMsc0JBQUQ7QUFBWSxRQUFBLElBQUksRUFBRSxLQUFLSixLQUFMLENBQVdDLElBQTdCO0FBQ1ksUUFBQSxRQUFRLEVBQUUsS0FBS0YsS0FBTCxDQUFXTSxRQURqQztBQUVZLFFBQUEsb0JBQW9CLEVBQUUsS0FBS04sS0FBTCxDQUFXTyxvQkFGN0M7QUFHWSxRQUFBLG9CQUFvQixFQUFFLEtBQUtQLEtBQUwsQ0FBV1E7QUFIN0MsUUFMSixDQURKO0FBWUg7Ozs2Q0F0QitCUixLLEVBQU9DLEssRUFBTztBQUMxQyxVQUFJRCxLQUFLLENBQUNFLElBQU4sS0FBZUQsS0FBSyxDQUFDQyxJQUF6QixFQUErQjtBQUMzQixlQUFPO0FBQ0hBLFVBQUFBLElBQUksRUFBRUYsS0FBSyxDQUFDRTtBQURULFNBQVA7QUFHSDs7QUFDRCxhQUFPLElBQVA7QUFDSDs7OztFQWhCK0JPLGtCQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTmF2YmFyTWVudSBmcm9tIFwiLi9OYXZiYXJNZW51XCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0J1xuaW1wb3J0IHt1c2VyfSBmcm9tICdyZWFjdC1pY29ucy1raXQvbWV0cml6ZS91c2VyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIGlmIChwcm9wcy51c2VyICE9PSBzdGF0ZS51c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXI6IHByb3BzLnVzZXIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGNhcmQtMi1zdGF0aWMgZml4ZWQtdG9wIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17dXNlcn0gc2l6ZT17MjR9IHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiBcImNhbGMoNTAlIC0gMThweClcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjMycHhcIn19PkZ1bkNyb3dkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZiYXJNZW51IHVzZXI9e3RoaXMuc3RhdGUudXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxvZ291dD17dGhpcy5wcm9wcy5vbkxvZ291dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hdmlnYXRlVG9NaXNzaW9ucz17dGhpcy5wcm9wcy5vbk5hdmlnYXRlVG9NaXNzaW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hdmlnYXRlVG9Cb3VudGllcz17dGhpcy5wcm9wcy5vbk5hdmlnYXRlVG9Cb3VudGllc30vPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19