"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactPose = _interopRequireWildcard(require("react-pose"));

var _MissionsMenu = _interopRequireDefault(require("./modules/missions/MissionsMenu"));

var _Login = _interopRequireDefault(require("./modules/login/Login"));

var _Navbar = _interopRequireDefault(require("./modules/navbar/Navbar"));

var _TasksMenu = _interopRequireDefault(require("./modules/tasks/TasksMenu"));

var _SessionManager = _interopRequireDefault(require("./logic/SessionManager"));

var _ItemPanel = _interopRequireDefault(require("./modules/items/ItemPanel"));

var _BountyMenu = _interopRequireDefault(require("./modules/bounty/BountyMenu"));

var _queryString = _interopRequireDefault(require("query-string"));

var _UserRepository = _interopRequireDefault(require("./logic/repositories/UserRepository"));

var _ConfigManager = _interopRequireDefault(require("./logic/config/ConfigManager"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RouteContainer = _reactPose["default"].div({});

var Base =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Base, _React$Component);

  function Base(props) {
    var _this;

    _classCallCheck(this, Base);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Base).call(this, props));
    _this.state = {
      checkingUser: true,
      checkingParams: true,
      user: null,
      mission: null,
      task: null,
      bounty: null
    };
    _this.onLogin = _this.onLogin.bind(_assertThisInitialized(_this));
    _this.onLogout = _this.onLogout.bind(_assertThisInitialized(_this));
    _this.onMissionSelect = _this.onMissionSelect.bind(_assertThisInitialized(_this));
    _this.onTaskSelect = _this.onTaskSelect.bind(_assertThisInitialized(_this));
    _this.onBountySelect = _this.onBountySelect.bind(_assertThisInitialized(_this));
    _this.navigateToMissions = _this.navigateToMissions.bind(_assertThisInitialized(_this));
    _this.navigateToBounties = _this.navigateToBounties.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Base, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkSessionUser();
      this.checkUrlParams();
    }
  }, {
    key: "checkSessionUser",
    value: function checkSessionUser() {
      var user = _SessionManager["default"].getUser();

      if (user) {
        this.onLogin(user);
      } else {
        this.setState({
          checkingUser: false
        });
      }
    }
  }, {
    key: "checkUrlParams",
    value: function checkUrlParams() {
      var _this2 = this;

      if (this.props.location.search) {
        var params = _queryString["default"].parse(this.props.location.search);

        if ("workerId" in params) {
          _UserRepository["default"].mturk(params['workerId']).then(function (user) {
            _this2.onLogin(user, true);

            _this2.setState({
              checkingParams: false
            });
          });
        }
      } else {
        this.setState({
          checkingParams: false
        });
      }
    } //handlers

  }, {
    key: "onLogin",
    value: function onLogin(user, saveUser) {
      _SessionManager["default"].login(user, saveUser);

      _ConfigManager["default"].setup(user);

      this.setState({
        user: user,
        checkingUser: false
      });
      if (this.props.location.pathname === "/") this.props.history.push('/bounties');
    }
  }, {
    key: "onLogout",
    value: function onLogout() {
      this.setState({
        user: null
      });

      _SessionManager["default"].logout();

      this.props.history.push('/');
    }
  }, {
    key: "onMissionSelect",
    value: function onMissionSelect(mission) {
      this.setState({
        mission: mission
      });
      this.props.history.push('/mission/' + mission.id + '/tasks');
    }
  }, {
    key: "onTaskSelect",
    value: function onTaskSelect(task) {
      this.setState({
        task: task
      });
      this.props.history.push('/task/' + task.id);
    }
  }, {
    key: "onBountySelect",
    value: function onBountySelect(bounty) {
      this.setState({
        bounty: bounty,
        task: bounty.task
      });
      this.props.history.push('/bounty/' + bounty.id);
    } //navigation

  }, {
    key: "navigateToMissions",
    value: function navigateToMissions() {
      this.props.history.push('/missions');
    }
  }, {
    key: "navigateToBounties",
    value: function navigateToBounties() {
      this.props.history.push('/bounties');
    } //render

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react["default"].createElement(_reactRouterDom.Route, {
        render: function render(_ref) {
          var location = _ref.location;
          return _react["default"].createElement("div", {
            className: "container h-100"
          }, _react["default"].createElement(_Navbar["default"], {
            user: _this3.state.user,
            onLogout: _this3.onLogout,
            onNavigateToMissions: _this3.navigateToMissions,
            onNavigateToBounties: _this3.navigateToBounties
          }), _this3.state.checkingUser || _this3.state.checkingParams ? _react["default"].createElement("div", null, "Loading") : _react["default"].createElement(_reactPose.PoseGroup, {
            preEnterPose: "preenter",
            className: "h-100 w-100"
          }, _react["default"].createElement(RouteContainer, {
            key: location.pathname
          }, _react["default"].createElement(_reactRouterDom.Switch, {
            location: location
          }, _react["default"].createElement(_reactRouterDom.Route, {
            exact: true,
            path: "/",
            render: function render(props) {
              return _react["default"].createElement(_Login["default"], _extends({
                onSuccess: _this3.onLogin
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: "/missions",
            render: function render(props) {
              return _react["default"].createElement(_MissionsMenu["default"], _extends({
                onMissionSelect: _this3.onMissionSelect,
                user: _this3.state.user
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: "/bounty/:id",
            render: function render(props) {
              return _react["default"].createElement(_ItemPanel["default"], _extends({
                task: _this3.state.task,
                user: _this3.state.user,
                bounty: _this3.state.bounty,
                onBountySelect: _this3.onBountySelect
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: "/bounties",
            render: function render(props) {
              return _react["default"].createElement(_BountyMenu["default"], _extends({
                onBountySelect: _this3.onBountySelect,
                user: _this3.state.user
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: "/task/:id",
            render: function render(props) {
              return _react["default"].createElement(_ItemPanel["default"], _extends({
                task: _this3.state.task,
                user: _this3.state.user,
                onTaskSelect: _this3.onTaskSelect
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: "/mission/:id/tasks",
            render: function render(props) {
              return _react["default"].createElement(_TasksMenu["default"], _extends({
                onTaskSelect: _this3.onTaskSelect,
                onMissionSelect: _this3.onMissionSelect,
                mission: _this3.state.mission,
                user: _this3.state.user
              }, props));
            }
          })))));
        }
      });
    }
  }]);

  return Base;
}(_react["default"].Component);

var _default = (0, _reactRouterDom.withRouter)(Base);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvQmFzZS5qc3giXSwibmFtZXMiOlsiUm91dGVDb250YWluZXIiLCJwb3NlZCIsImRpdiIsIkJhc2UiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tpbmdVc2VyIiwiY2hlY2tpbmdQYXJhbXMiLCJ1c2VyIiwibWlzc2lvbiIsInRhc2siLCJib3VudHkiLCJvbkxvZ2luIiwiYmluZCIsIm9uTG9nb3V0Iiwib25NaXNzaW9uU2VsZWN0Iiwib25UYXNrU2VsZWN0Iiwib25Cb3VudHlTZWxlY3QiLCJuYXZpZ2F0ZVRvTWlzc2lvbnMiLCJuYXZpZ2F0ZVRvQm91bnRpZXMiLCJjaGVja1Nlc3Npb25Vc2VyIiwiY2hlY2tVcmxQYXJhbXMiLCJTZXNzaW9uTWFuYWdlciIsImdldFVzZXIiLCJzZXRTdGF0ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyYW1zIiwicXVlcnlTdHJpbmciLCJwYXJzZSIsIlVzZXJSZXBvc2l0b3J5IiwibXR1cmsiLCJ0aGVuIiwic2F2ZVVzZXIiLCJsb2dpbiIsIkNvbmZpZ01hbmFnZXIiLCJzZXR1cCIsInBhdGhuYW1lIiwiaGlzdG9yeSIsInB1c2giLCJsb2dvdXQiLCJpZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsY0FBYyxHQUFHQyxzQkFBTUMsR0FBTixDQUFVLEVBQVYsQ0FBdkI7O0lBSU1DLEk7Ozs7O0FBRUYsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4RUFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxZQUFZLEVBQUUsSUFETDtBQUVUQyxNQUFBQSxjQUFjLEVBQUUsSUFGUDtBQUdUQyxNQUFBQSxJQUFJLEVBQUUsSUFI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IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBwb3NlZCwgeyBQb3NlR3JvdXAgfSBmcm9tICdyZWFjdC1wb3NlJztcbmltcG9ydCBNaXNzaW9uc01lbnUgZnJvbSBcIi4vbW9kdWxlcy9taXNzaW9ucy9NaXNzaW9uc01lbnVcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9tb2R1bGVzL2xvZ2luL0xvZ2luXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL21vZHVsZXMvbmF2YmFyL05hdmJhclwiO1xuaW1wb3J0IFRhc2tzTWVudSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tzL1Rhc2tzTWVudVwiO1xuaW1wb3J0IFNlc3Npb25NYW5hZ2VyIGZyb20gXCIuL2xvZ2ljL1Nlc3Npb25NYW5hZ2VyXCI7XG5pbXBvcnQgSXRlbVBhbmVsIGZyb20gXCIuL21vZHVsZXMvaXRlbXMvSXRlbVBhbmVsXCI7XG5pbXBvcnQgQm91bnR5TWVudSBmcm9tIFwiLi9tb2R1bGVzL2JvdW50eS9Cb3VudHlNZW51XCI7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBVc2VyUmVwb3NpdG9yeSBmcm9tIFwiLi9sb2dpYy9yZXBvc2l0b3JpZXMvVXNlclJlcG9zaXRvcnlcIjtcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuL2xvZ2ljL2NvbmZpZy9Db25maWdNYW5hZ2VyXCI7XG5cblxuY29uc3QgUm91dGVDb250YWluZXIgPSBwb3NlZC5kaXYoe1xufSk7XG5cblxuY2xhc3MgQmFzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja2luZ1VzZXI6IHRydWUsXG4gICAgICAgICAgICBjaGVja2luZ1BhcmFtczogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgICAgICBtaXNzaW9uOiBudWxsLFxuICAgICAgICAgICAgdGFzazogbnVsbCxcbiAgICAgICAgICAgIGJvdW50eTogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub25Mb2dpbiA9IHRoaXMub25Mb2dpbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTG9nb3V0ID0gdGhpcy5vbkxvZ291dC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTWlzc2lvblNlbGVjdCA9IHRoaXMub25NaXNzaW9uU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25UYXNrU2VsZWN0ID0gdGhpcy5vblRhc2tTZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkJvdW50eVNlbGVjdCA9IHRoaXMub25Cb3VudHlTZWxlY3QuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm5hdmlnYXRlVG9NaXNzaW9ucyA9IHRoaXMubmF2aWdhdGVUb01pc3Npb25zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmF2aWdhdGVUb0JvdW50aWVzID0gdGhpcy5uYXZpZ2F0ZVRvQm91bnRpZXMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jaGVja1Nlc3Npb25Vc2VyKCk7XG4gICAgICAgIHRoaXMuY2hlY2tVcmxQYXJhbXMoKTtcbiAgICB9XG5cbiAgICBjaGVja1Nlc3Npb25Vc2VyKCkge1xuICAgICAgICBsZXQgdXNlciA9IFNlc3Npb25NYW5hZ2VyLmdldFVzZXIoKTtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2dpbih1c2VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NoZWNraW5nVXNlcjogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrVXJsUGFyYW1zKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgICBpZiAoXCJ3b3JrZXJJZFwiIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIFVzZXJSZXBvc2l0b3J5Lm10dXJrKHBhcmFtc1snd29ya2VySWQnXSkudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG9naW4odXNlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NoZWNraW5nUGFyYW1zOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tpbmdQYXJhbXM6IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2hhbmRsZXJzXG5cbiAgICBvbkxvZ2luKHVzZXIsIHNhdmVVc2VyKSB7XG4gICAgICAgIFNlc3Npb25NYW5hZ2VyLmxvZ2luKHVzZXIsIHNhdmVVc2VyKTtcbiAgICAgICAgQ29uZmlnTWFuYWdlci5zZXR1cCh1c2VyKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjogdXNlciwgY2hlY2tpbmdVc2VyOiBmYWxzZX0pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIilcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvYm91bnRpZXMnKTtcbiAgICB9XG5cbiAgICBvbkxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjogbnVsbH0pO1xuICAgICAgICBTZXNzaW9uTWFuYWdlci5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICB9XG5cbiAgICBvbk1pc3Npb25TZWxlY3QobWlzc2lvbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttaXNzaW9uOiBtaXNzaW9ufSk7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbWlzc2lvbi8nK21pc3Npb24uaWQrJy90YXNrcycpO1xuICAgIH1cblxuICAgIG9uVGFza1NlbGVjdCh0YXNrKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Rhc2s6IHRhc2t9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy90YXNrLycrdGFzay5pZCk7XG4gICAgfVxuXG4gICAgb25Cb3VudHlTZWxlY3QoYm91bnR5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYm91bnR5OiBib3VudHksXG4gICAgICAgICAgICB0YXNrOiBib3VudHkudGFza1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9ib3VudHkvJytib3VudHkuaWQpO1xuICAgIH1cblxuICAgIC8vbmF2aWdhdGlvblxuXG4gICAgbmF2aWdhdGVUb01pc3Npb25zKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL21pc3Npb25zJyk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0JvdW50aWVzKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2JvdW50aWVzJyk7XG4gICAgfVxuXG4gICAgLy9yZW5kZXJcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSb3V0ZSByZW5kZXI9eyh7bG9jYXRpb259KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaC0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2dvdXQ9e3RoaXMub25Mb2dvdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OYXZpZ2F0ZVRvTWlzc2lvbnM9e3RoaXMubmF2aWdhdGVUb01pc3Npb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmF2aWdhdGVUb0JvdW50aWVzPXt0aGlzLm5hdmlnYXRlVG9Cb3VudGllc30vPlxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoZWNraW5nVXNlciB8fCB0aGlzLnN0YXRlLmNoZWNraW5nUGFyYW1zID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc2VHcm91cCBwcmVFbnRlclBvc2U9XCJwcmVlbnRlclwiIGNsYXNzTmFtZT1cImgtMTAwIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlQ29udGFpbmVyIGtleT17bG9jYXRpb24ucGF0aG5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGxvY2F0aW9uPXtsb2NhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8TG9naW4gb25TdWNjZXNzPXt0aGlzLm9uTG9naW59IHsuLi5wcm9wc30vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbWlzc2lvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8TWlzc2lvbnNNZW51IG9uTWlzc2lvblNlbGVjdD17dGhpcy5vbk1pc3Npb25TZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dGhpcy5zdGF0ZS51c2VyfSB7Li4ucHJvcHN9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2JvdW50eS86aWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8SXRlbVBhbmVsIHRhc2s9e3RoaXMuc3RhdGUudGFza31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bnR5PXt0aGlzLnN0YXRlLmJvdW50eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJvdW50eVNlbGVjdD17dGhpcy5vbkJvdW50eVNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2JvdW50aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPEJvdW50eU1lbnUgb25Cb3VudHlTZWxlY3Q9e3RoaXMub25Cb3VudHlTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3RoaXMuc3RhdGUudXNlcn0gey4uLnByb3BzfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi90YXNrLzppZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxJdGVtUGFuZWwgdGFzaz17dGhpcy5zdGF0ZS50YXNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3RoaXMuc3RhdGUudXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhc2tTZWxlY3Q9e3RoaXMub25UYXNrU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc30vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbWlzc2lvbi86aWQvdGFza3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8VGFza3NNZW51IG9uVGFza1NlbGVjdD17dGhpcy5vblRhc2tTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25NaXNzaW9uU2VsZWN0PXt0aGlzLm9uTWlzc2lvblNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW9uPXt0aGlzLnN0YXRlLm1pc3Npb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dGhpcy5zdGF0ZS51c2VyfSB7Li4ucHJvcHN9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9zZUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfS8+XG4gICAgICAgICk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQmFzZSk7XG4iXX0=