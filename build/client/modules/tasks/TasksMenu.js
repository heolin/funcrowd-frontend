"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TasksRepository = _interopRequireDefault(require("../../logic/repositories/TasksRepository"));

var _TaskCard = _interopRequireDefault(require("./TaskCard"));

var _MissionRepository = _interopRequireDefault(require("../../logic/repositories/MissionRepository"));

var _TasksHeader = _interopRequireDefault(require("./TasksHeader"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _reactRouterDom = require("react-router-dom");

var _reactPose = _interopRequireDefault(require("react-pose"));

var _AchievementCard = _interopRequireDefault(require("../achievements/AchievementCard"));

var _TaskProgressRepository = _interopRequireDefault(require("../../logic/repositories/TaskProgressRepository"));

var _MissionProgressRepository = _interopRequireDefault(require("../../logic/repositories/MissionProgressRepository"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _AchievementsRepository = _interopRequireDefault(require("../../logic/repositories/AchievementsRepository"));

var _Footer = require("../../Footer");

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

var ListContainer = _reactPose["default"].div({
  enter: {
    staggerChildren: 50
  },
  exit: {
    staggerChildren: 20,
    staggerDirection: -1
  }
});

var TasksMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TasksMenu, _React$Component);

  function TasksMenu(props) {
    var _this;

    _classCallCheck(this, TasksMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TasksMenu).call(this, props));
    _this.state = {
      loadingTasks: true,
      loadingProgress: true,
      loadingTaskProgress: true,
      loadingAchievements: true,
      tasks: null,
      progress: null,
      taskProgress: null
    };
    return _this;
  }

  _createClass(TasksMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mission !== prevProps.mission) this.checkState();
    }
  }, {
    key: "checkState",
    value: function checkState() {
      var _this2 = this;

      if (this.props.mission === null) {
        var missionId = this.props.match.params.id;

        _MissionRepository["default"].get(missionId).then(function (mission) {
          _this2.props.onMissionSelect(mission);
        });
      } else this.getTasksList();
    }
  }, {
    key: "getTasksList",
    value: function getTasksList() {
      var _this3 = this;

      var mission = this.props.mission;

      _MissionProgressRepository["default"].get(this.props.mission.id).then(function (progress) {
        _this3.setState({
          loadingProgress: false,
          progress: progress
        });
      })["catch"](function (error) {
        _this3.setState({
          loadingProgress: false
        });

        console.log(error);
      });

      _TasksRepository["default"].list(mission.id).then(function (tasks) {
        _this3.setState({
          loadingTasks: false,
          tasks: tasks
        });
      })["catch"](function (error) {
        _this3.setState({
          loadingTasks: false
        });

        console.log(error);
      });

      _TaskProgressRepository["default"].list(mission.id).then(function (tasks) {
        var taskProgress = {};
        tasks.forEach(function (progress) {
          taskProgress[progress.task] = progress;
        });

        _this3.setState({
          loadingTaskProgress: false,
          taskProgress: taskProgress
        });
      })["catch"](function (error) {
        _this3.setState({
          loadingTaskProgress: false
        });

        console.log(error);
      });

      _AchievementsRepository["default"].mission(mission.id).then(function (achievements) {
        _this3.setState({
          loadingAchievements: false,
          achievements: achievements
        });
      })["catch"](function (error) {
        _this3.setState({
          loadingAchievements: false
        });

        console.log(error);
      });
    }
  }, {
    key: "getCardsPanel",
    value: function getCardsPanel() {
      var _this4 = this;

      var tasks = null;
      if (this.state.tasks !== null) tasks = this.state.tasks.map(function (task, i) {
        return _react["default"].createElement(_TaskCard["default"], {
          key: i,
          task: task,
          progress: _this4.state.taskProgress[task.id],
          onSelect: function onSelect() {
            return _this4.props.onTaskSelect(task);
          }
        });
      });
      return _react["default"].createElement(ListContainer, {
        className: "task-cards"
      }, tasks);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loadingTasks || this.state.loadingProgress || this.state.loadingTaskProgress || this.state.loadingAchievements) return _react["default"].createElement(_Loading["default"], null);
      var achievements = this.state.achievements.map(function (achievement) {
        return _react["default"].createElement("div", {
          className: "col-lg-12 col-md-6 col-sm-12",
          key: achievement.id
        }, _react["default"].createElement(_AchievementCard["default"], {
          achievement: achievement
        }));
      });
      return _react["default"].createElement("div", {
        className: "container-fluid base-row"
      }, _react["default"].createElement(_TasksHeader["default"], {
        mission: this.props.mission,
        progress: this.state.progress
      }), _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row tasks-row"
      }, _react["default"].createElement("div", {
        className: "col-md-12 col-lg-8"
      }, _react["default"].createElement("div", {
        className: "tasks-introduction"
      }, _react["default"].createElement("h3", null, _LocalizationManager["default"].labels.missions), this.props.mission.instruction), this.getCardsPanel()), _react["default"].createElement("div", {
        className: "col-lg-4 col-md-12"
      }, _react["default"].createElement("div", {
        className: "tasks-achievements-introduction"
      }, _react["default"].createElement("h3", null, _LocalizationManager["default"].labels.achievements), "W tym dzile IPSUM"), _react["default"].createElement("div", {
        className: "row achievements-row"
      }, achievements, _react["default"].createElement("div", {
        className: "col-sm-12 text-right color-blue small",
        style: {
          paddingRight: "30px"
        }
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/achievements"
      }, "Zobacz wszystkie czalendze")))))));
    }
  }]);

  return TasksMenu;
}(_react["default"].Component);

exports["default"] = TasksMenu;