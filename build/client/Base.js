"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AppBase = exports.RouteContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactPose = _interopRequireWildcard(require("react-pose"));

var _MissionsMenu = _interopRequireDefault(require("./modules/missions/MissionsMenu"));

var _LoginPage = _interopRequireDefault(require("./modules/login/LoginPage"));

var _Navbar = _interopRequireDefault(require("./modules/navbar/Navbar"));

var _TasksMenu = _interopRequireDefault(require("./modules/tasks/TasksMenu"));

var _SessionManager = _interopRequireDefault(require("./logic/SessionManager"));

var _ItemPanel = _interopRequireDefault(require("./modules/items/ItemPanel"));

var _BountyMenu = _interopRequireDefault(require("./modules/bounty/BountyMenu"));

var _queryString = _interopRequireDefault(require("query-string"));

var _UserRepository = _interopRequireDefault(require("./logic/repositories/UserRepository"));

var _ConfigManager = _interopRequireDefault(require("./logic/config/ConfigManager"));

var _AboutPage = _interopRequireDefault(require("./modules/about/AboutPage"));

var _AchievementsMenu = _interopRequireDefault(require("./modules/achievements/AchievementsMenu"));

var _SideProfilePanel = require("./modules/profile/SideProfilePanel");

var _RegisterPage = _interopRequireDefault(require("./modules/login/RegisterPage"));

var _Loading = _interopRequireDefault(require("./components/Loading"));

var _ResetPasswordPage = _interopRequireDefault(require("./modules/login/ResetPasswordPage"));

var _ProfileTypes = _interopRequireDefault(require("./logic/config/ProfileTypes"));

var _UserManager = _interopRequireDefault(require("./logic/UserManager"));

var _ProfilePage = _interopRequireDefault(require("./modules/profile/ProfilePage"));

var _RankingPage = _interopRequireDefault(require("./modules/ranking/RankingPage"));

var _BountyItemPanel = _interopRequireDefault(require("./modules/bounty/BountyItemPanel"));

var _SpaceCalcAboutPage = _interopRequireDefault(require("./modules/about/SpaceCalcAboutPage"));

var _SpaceCalcWelcomePage = _interopRequireDefault(require("./modules/about/SpaceCalcWelcomePage"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _SettingsPage = _interopRequireDefault(require("./modules/profile/SettingsPage"));

var _ResetPasswordTokenPage = _interopRequireDefault(require("./modules/login/ResetPasswordTokenPage"));

var _ActivationPage = _interopRequireDefault(require("./modules/login/ActivationPage"));

var _Urls = _interopRequireDefault(require("./Urls"));

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

var RouteContainer = _reactPose["default"].div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true
  },
  exit: {
    opacity: 0
  }
});

exports.RouteContainer = RouteContainer;

var AppBase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppBase, _React$Component);

  function AppBase(props) {
    var _this;

    _classCallCheck(this, AppBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppBase).call(this, props));
    _this.state = {
      checkingUser: true,
      checkingParams: true,
      user: null,
      mission: null,
      task: null,
      bounty: null,
      sideProfileShown: false
    };
    _this.onLogin = _this.onLogin.bind(_assertThisInitialized(_this));
    _this.onLogout = _this.onLogout.bind(_assertThisInitialized(_this));
    _this.onMissionSelect = _this.onMissionSelect.bind(_assertThisInitialized(_this));
    _this.onTaskSelect = _this.onTaskSelect.bind(_assertThisInitialized(_this));
    _this.onBountySelect = _this.onBountySelect.bind(_assertThisInitialized(_this));
    _this.showSideProfile = _this.showSideProfile.bind(_assertThisInitialized(_this));
    _this.hideSideProfile = _this.hideSideProfile.bind(_assertThisInitialized(_this));
    _this.redirectToHome = _this.redirectToHome.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AppBase, [{
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

        if ("action" in params) {
          _SessionManager["default"].cache['action'] = params['action'];
        }

        if ("workerId" in params) {
          _UserRepository["default"].mturk(params['workerId']).then(function (user) {
            _this2.onLogin(user, true);

            _this2.setState({
              checkingParams: false
            });
          });
        } else {
          this.setState({
            checkingParams: false
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
      this.redirectToHome();
    }
  }, {
    key: "redirectToHome",
    value: function redirectToHome() {
      if (_Urls["default"].checkUrl(this.props.location.pathname, _Urls["default"].HOME) || _Urls["default"].checkUrl(this.props.location.pathname, _Urls["default"].ACTIVATION) || _Urls["default"].checkUrl(this.props.location.pathname, _Urls["default"].LOGIN)) {
        if (_UserManager["default"].user.profile == _ProfileTypes["default"].NORMAL) {
          this.props.history.push(_Urls["default"].MISSIONS);
        } else {
          this.props.history.push(_Urls["default"].BOUNTIES);
        }
      }
    }
  }, {
    key: "onLogout",
    value: function onLogout() {
      this.hideSideProfile();
      this.setState({
        user: null
      });

      _SessionManager["default"].logout();

      _ConfigManager["default"].logout();

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
    }
  }, {
    key: "showSideProfile",
    value: function showSideProfile() {
      this.setState({
        sideProfileShown: true
      });
    }
  }, {
    key: "hideSideProfile",
    value: function hideSideProfile() {
      this.setState({
        sideProfileShown: false
      });
    } //render

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.checkingParams || this.state.checkingUser) return _react["default"].createElement(_Loading["default"], null);
      console.log(this.props.location);

      if (_UserManager["default"].user === null) {
        if (_ConfigManager["default"].profile.availablePages.indexOf(this.props.location.pathname) < 0) {
          this.props.history.push(_Urls["default"].LOGIN);
          return _react["default"].createElement(_Loading["default"], null);
        }
      } else {
        this.redirectToHome();
      }

      return _react["default"].createElement(_reactRouterDom.Route, {
        render: function render(_ref) {
          var location = _ref.location;
          return _react["default"].createElement("div", null, _react["default"].createElement(_Navbar["default"], {
            user: _this3.state.user,
            location: _this3.props.location,
            onLogout: _this3.onLogout,
            onNavigateToMissions: _this3.navigateToMissions,
            onNavigateToBounties: _this3.navigateToBounties,
            onNavigateToAbout: _this3.navigateToAbout,
            showSideProfile: _this3.showSideProfile
          }), _react["default"].createElement(_SideProfilePanel.SideProfilePanel, {
            isOpen: _this3.state.sideProfileShown,
            hideSideProfile: _this3.hideSideProfile
          }), _react["default"].createElement("div", {
            className: "h-100"
          }, _react["default"].createElement(_reactPose.PoseGroup, null, _react["default"].createElement(RouteContainer, {
            key: location.pathname
          }, _react["default"].createElement(_reactRouterDom.Switch, {
            location: location
          }, _react["default"].createElement(_reactRouterDom.Route, {
            exact: true,
            path: _Urls["default"].HOME,
            render: function render(props) {
              return _react["default"].createElement(_LoginPage["default"], _extends({
                onSuccess: _this3.onLogin
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].ACTIVATION,
            render: function render(props) {
              return _react["default"].createElement(_ActivationPage["default"], _extends({
                onSuccess: _this3.onLogin
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].REGISTER,
            render: function render(props) {
              return _react["default"].createElement(_RegisterPage["default"], _extends({
                onSuccess: _this3.onLogin
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].MISSIONS,
            render: function render(props) {
              return _react["default"].createElement(_MissionsMenu["default"], _extends({
                onMissionSelect: _this3.onMissionSelect,
                user: _this3.state.user
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].RESET_PASSWORD,
            render: function render(props) {
              return _react["default"].createElement(_ResetPasswordPage["default"], props);
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].RESET_PASSWORD_TOKEN,
            render: function render(props) {
              return _react["default"].createElement(_ResetPasswordTokenPage["default"], _extends({
                onSuccess: _this3.onLogin
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].ABOUT,
            render: function render(props) {
              return _react["default"].createElement(_SpaceCalcAboutPage["default"], _extends({
                user: _this3.state.user
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].WELCOME,
            render: function render(props) {
              return _react["default"].createElement(_SpaceCalcWelcomePage["default"], _extends({
                user: _this3.state.user
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].PROFILE,
            render: function render(props) {
              return _react["default"].createElement(_ProfilePage["default"], _extends({
                usr: _this3.state.user
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].SETTINGS,
            render: function render(props) {
              return _react["default"].createElement(_SettingsPage["default"], _extends({
                usr: _this3.state.user
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].RANKING,
            render: function render(props) {
              return _react["default"].createElement(_RankingPage["default"], _extends({
                usr: _this3.state.user
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].ACHIEVEMENTS,
            render: function render(props) {
              return _react["default"].createElement(_AchievementsMenu["default"], _extends({
                user: _this3.state.user
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].BOUNTY,
            render: function render(props) {
              return _react["default"].createElement(_BountyItemPanel["default"], _extends({
                task: _this3.state.task,
                user: _this3.state.user,
                bounty: _this3.state.bounty,
                onBountySelect: _this3.onBountySelect
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].BOUNTIES,
            render: function render(props) {
              return _react["default"].createElement(_BountyMenu["default"], _extends({
                onBountySelect: _this3.onBountySelect,
                user: _this3.state.user
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].TASK,
            render: function render(props) {
              return _react["default"].createElement(_ItemPanel["default"], _extends({
                task: _this3.state.task,
                user: _this3.state.user,
                onTaskSelect: _this3.onTaskSelect
              }, props));
            }
          }), _react["default"].createElement(_reactRouterDom.Route, {
            path: _Urls["default"].TASKS,
            render: function render(props) {
              return _react["default"].createElement(_TasksMenu["default"], _extends({
                onTaskSelect: _this3.onTaskSelect,
                onMissionSelect: _this3.onMissionSelect,
                mission: _this3.state.mission,
                user: _this3.state.user
              }, props));
            }
          }))))));
        }
      });
    }
  }]);

  return AppBase;
}(_react["default"].Component);

exports.AppBase = AppBase;

var _default = (0, _reactRouterDom.withRouter)(AppBase);

exports["default"] = _default;