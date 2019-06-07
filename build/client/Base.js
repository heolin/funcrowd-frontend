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
      }); //if (this.props.location.pathname === "/")
      //    this.props.history.push('/missions');
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