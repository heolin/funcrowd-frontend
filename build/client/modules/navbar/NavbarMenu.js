"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavbarMenuButton = _interopRequireDefault(require("./NavbarMenuButton"));

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

var NavbarMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavbarMenu, _React$Component);

  function NavbarMenu(props) {
    var _this;

    _classCallCheck(this, NavbarMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavbarMenu).call(this, props));
    _this.state = {
      user: null
    };
    _this.onLogout = _this.onLogout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NavbarMenu, [{
    key: "onLogout",
    value: function onLogout() {
      this.props.onLogout();
    }
  }, {
    key: "render",
    value: function render() {
      //<div>Hello, {this.state.user.username}</div>-->
      //<NavbarMenuButton onClick={this.props.onNavigateToMissions} name="Missions"/>
      //                            <NavbarMenuButton onClick={this.onLogout} name="Logout"/>
      if (this.state.user) {
        return _react["default"].createElement("div", null, _react["default"].createElement("div", {
          style: {
            position: "absolute",
            right: "80px",
            top: "18px"
          }
        }, "Hello, ", this.state.user.username), _react["default"].createElement("button", {
          className: "navbar-toggler",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarToggler",
          "aria-controls": "navbarToggler",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }, _react["default"].createElement("span", {
          className: "navbar-toggler-icon"
        })), _react["default"].createElement("div", {
          className: "collapse navbar-collapse",
          id: "navbarToggler"
        }, _react["default"].createElement("ul", {
          className: "navbar-nav mr-auto mt-2 mt-lg-0"
        }, _react["default"].createElement(_NavbarMenuButton["default"], {
          onClick: this.props.onNavigateToBounties,
          name: "Bounties"
        }))));
      } else {
        return null;
      }
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

  return NavbarMenu;
}(_react["default"].Component);

exports["default"] = NavbarMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9uYXZiYXIvTmF2YmFyTWVudS5qcyJdLCJuYW1lcyI6WyJOYXZiYXJNZW51IiwicHJvcHMiLCJzdGF0ZSIsInVzZXIiLCJvbkxvZ291dCIsImJpbmQiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwidXNlcm5hbWUiLCJvbk5hdmlnYXRlVG9Cb3VudGllcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLFU7Ozs7O0FBRWpCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2Ysb0ZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsSUFBSSxFQUFFO0FBREcsS0FBYjtBQUdBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUxlO0FBTWxCOzs7OytCQVdVO0FBQ1AsV0FBS0osS0FBTCxDQUFXRyxRQUFYO0FBQ0g7Ozs2QkFHUTtBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQUksS0FBS0YsS0FBTCxDQUFXQyxJQUFmLEVBQXFCO0FBQ2pCLGVBQ0ksNkNBQ0k7QUFBSyxVQUFBLEtBQUssRUFBRTtBQUFFRyxZQUFBQSxRQUFRLEVBQUUsVUFBWjtBQUF3QkMsWUFBQUEsS0FBSyxFQUFFLE1BQS9CO0FBQXVDQyxZQUFBQSxHQUFHLEVBQUU7QUFBNUM7QUFBWixzQkFDWSxLQUFLTixLQUFMLENBQVdDLElBQVgsQ0FBZ0JNLFFBRDVCLENBREosRUFJSTtBQUFRLFVBQUEsU0FBUyxFQUFDLGdCQUFsQjtBQUFtQyxVQUFBLElBQUksRUFBQyxRQUF4QztBQUFpRCx5QkFBWSxVQUE3RDtBQUNRLHlCQUFZLGdCQURwQjtBQUNxQywyQkFBYyxlQURuRDtBQUNtRSwyQkFBYyxPQURqRjtBQUVRLHdCQUFXO0FBRm5CLFdBR0k7QUFBTSxVQUFBLFNBQVMsRUFBQztBQUFoQixVQUhKLENBSkosRUFVSTtBQUFLLFVBQUEsU0FBUyxFQUFDLDBCQUFmO0FBQTBDLFVBQUEsRUFBRSxFQUFDO0FBQTdDLFdBQ0k7QUFBSSxVQUFBLFNBQVMsRUFBQztBQUFkLFdBQ0ksZ0NBQUMsNEJBQUQ7QUFBa0IsVUFBQSxPQUFPLEVBQUUsS0FBS1IsS0FBTCxDQUFXUyxvQkFBdEM7QUFBNEQsVUFBQSxJQUFJLEVBQUM7QUFBakUsVUFESixDQURKLENBVkosQ0FESjtBQWtCSCxPQW5CRCxNQW1CTztBQUNILGVBQU8sSUFBUDtBQUNIO0FBQ0o7Ozs2Q0F4QytCVCxLLEVBQU9DLEssRUFBTztBQUMxQyxVQUFJRCxLQUFLLENBQUNFLElBQU4sS0FBZUQsS0FBSyxDQUFDQyxJQUF6QixFQUErQjtBQUMzQixlQUFPO0FBQ0hBLFVBQUFBLElBQUksRUFBRUYsS0FBSyxDQUFDRTtBQURULFNBQVA7QUFHSDs7QUFDRCxhQUFPLElBQVA7QUFDSDs7OztFQWpCbUNRLGtCQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTmF2YmFyTWVudUJ1dHRvbiBmcm9tIFwiLi9OYXZiYXJNZW51QnV0dG9uXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB1c2VyOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Mb2dvdXQgPSB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAgICAgaWYgKHByb3BzLnVzZXIgIT09IHN0YXRlLnVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXNlcjogcHJvcHMudXNlcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgb25Mb2dvdXQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Mb2dvdXQoKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy88ZGl2PkhlbGxvLCB7dGhpcy5zdGF0ZS51c2VyLnVzZXJuYW1lfTwvZGl2Pi0tPlxuICAgICAgICAvLzxOYXZiYXJNZW51QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMub25OYXZpZ2F0ZVRvTWlzc2lvbnN9IG5hbWU9XCJNaXNzaW9uc1wiLz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhck1lbnVCdXR0b24gb25DbGljaz17dGhpcy5vbkxvZ291dH0gbmFtZT1cIkxvZ291dFwiLz5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjgwcHhcIiwgdG9wOiBcIjE4cHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgSGVsbG8sIHt0aGlzLnN0YXRlLnVzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclRvZ2dsZXJcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyVG9nZ2xlclwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyVG9nZ2xlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0byBtdC0yIG10LWxnLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyTWVudUJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTmF2aWdhdGVUb0JvdW50aWVzfSBuYW1lPVwiQm91bnRpZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==