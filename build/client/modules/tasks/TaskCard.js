"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _Icons = require("../../components/Icons");

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

var Card = _reactPose["default"].div({
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 50,
    opacity: 0
  }
});

var TaskCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TaskCard, _React$Component);

  function TaskCard(props) {
    var _this;

    _classCallCheck(this, TaskCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TaskCard).call(this, props));
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TaskCard, [{
    key: "onSelect",
    value: function onSelect() {
      var progress = this.props.progress;
      if (progress.status !== "FINISHED" && progress.status !== "LOCKED") this.props.onSelect();
    }
  }, {
    key: "render",
    value: function render() {
      var progress = this.props.progress;
      var metadata = this.props.task.metadata;
      var taskIconBase = "task/task";
      var taskIcon = taskIconBase + "_grey";
      var startIcon = null;
      var statusClassName = "locked";

      if (progress.status === "FINISHED") {
        startIcon = _react["default"].createElement(_Icons.Icon, {
          className: "very-small-icon",
          name: "tick-sign-green"
        });
        statusClassName = "finished";
        taskIcon = taskIconBase + "_green";
      } else if (progress.status !== "LOCKED") {
        startIcon = _react["default"].createElement(_Icons.Icon, {
          className: "very-small-icon task-card-start-icon",
          name: "arrow-right_blue"
        });
        statusClassName = "unlocked";
        taskIcon = taskIconBase + "_blue";
      }

      return _react["default"].createElement(Card, {
        className: "col-12 task-card " + statusClassName,
        onClick: this.onSelect
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-1"
      }, _react["default"].createElement(_Icons.SmallIcon, {
        className: "task-card-icon",
        name: taskIcon
      })), _react["default"].createElement("div", {
        className: "col-6"
      }, this.props.task.name), _react["default"].createElement("div", {
        className: "col-2"
      }, this.props.task.totalExp, " exp"), _react["default"].createElement("div", {
        className: "col-1"
      }, startIcon)));
    }
  }]);

  return TaskCard;
}(_react["default"].Component);

exports["default"] = TaskCard;