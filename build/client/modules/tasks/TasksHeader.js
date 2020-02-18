"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

var _Breadcrumbs = require("../../components/Breadcrumbs");

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _Icons = require("../../components/Icons");

var _ConfigManager = _interopRequireDefault(require("../../logic/config/ConfigManager"));

var _Image = require("../../components/Image");

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

var TasksHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TasksHeader, _React$Component);

  function TasksHeader() {
    _classCallCheck(this, TasksHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(TasksHeader).apply(this, arguments));
  }

  _createClass(TasksHeader, [{
    key: "render",
    value: function render() {
      var mission = this.props.mission;
      var progress = this.props.progress;

      var image = require("../../static/" + mission.metadata.image);

      var tasks = null;
      if (mission.tasksCount > 0) tasks = _react["default"].createElement("div", {
        className: "d-inline-block"
      }, _react["default"].createElement(_Icons.SmallIcon, {
        name: "missions"
      }), _react["default"].createElement("small", null, " ", mission.tasksCount, " ", _LocalizationManager["default"].general.missions));
      var experience = null;
      var achievements = null;
      if (_ConfigManager["default"].profile.achievements && mission.achievements > 0) achievements = _react["default"].createElement("div", {
        className: "d-inline-block"
      }, _react["default"].createElement(_Icons.SmallIcon, {
        name: "achievements"
      }), _react["default"].createElement("small", null, " ", mission.achievements, " ", _LocalizationManager["default"].general.achievements));
      if (_ConfigManager["default"].profile.exp && mission.totalExp > 0) experience = _react["default"].createElement("div", {
        className: "d-inline-block"
      }, _react["default"].createElement(_Icons.SmallIcon, {
        name: "experience"
      }), _react["default"].createElement("small", null, " ", mission.totalExp, " ", _LocalizationManager["default"].general.experience));
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: "tasks-header-bar row"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row tasks-header"
      }, _react["default"].createElement("div", {
        className: "col-md-12"
      }, _react["default"].createElement("div", null, _react["default"].createElement(_Breadcrumbs.Breadcrumbs, null, _react["default"].createElement(_Breadcrumbs.BreadcrumbItem, {
        label: _LocalizationManager["default"].labels.missions,
        link: "/missions"
      }), _react["default"].createElement(_Breadcrumbs.BreadcrumbItem, {
        label: mission.name
      }))), _react["default"].createElement("div", {
        className: "tasks-header-info"
      }, _react["default"].createElement(_Icons.Icon, {
        className: "tasks-header-icon",
        name: mission.metadata.icon
      }), _react["default"].createElement("div", {
        className: "tasks-header-info-text"
      }, _react["default"].createElement("h3", {
        style: {
          marginBottom: 0
        }
      }, mission.name), _react["default"].createElement("span", {
        className: "small"
      }, mission.description))), _react["default"].createElement("div", null, _react["default"].createElement(_ProgressBar["default"], {
        className: "tasks-header-progress",
        textAlign: "right",
        progress: progress.progress,
        text: "Ukończono " + progress.tasks_done + "/" + progress.tasks_count
      })), _react["default"].createElement(_Image.CircleImage, {
        className: "tasks-header-image d-none d-sm-none d-md-block",
        image: image
      }))))), _react["default"].createElement("div", {
        className: "tasks-summary-bar card-1-static row"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row tasks-summary"
      }, _react["default"].createElement("div", {
        className: "col-sm-12 col-md-8 justify-items"
      }, tasks, achievements, experience)))));
    }
  }]);

  return TasksHeader;
}(_react["default"].Component);

exports["default"] = TasksHeader;