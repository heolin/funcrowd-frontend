"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BlackBackground = _interopRequireDefault(require("../../components/BlackBackground"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _TasksRepository = _interopRequireDefault(require("../../logic/repositories/TasksRepository"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _ItemRepository = _interopRequireDefault(require("../../logic/repositories/ItemRepository"));

var _SubmitButton = _interopRequireDefault(require("../items/components/SubmitButton"));

var _ItemForm = _interopRequireDefault(require("../items/ItemForm"));

var _SurveyManager = _interopRequireDefault(require("../../logic/SurveyManager"));

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

var Modal = _reactPose["default"].div({
  open: {
    opacity: 1.0,
    x: "-50%",
    y: "-45%"
  },
  closed: {
    opacity: 0,
    x: "-50%",
    y: "-35%"
  }
});

var SurveyPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SurveyPanel, _React$Component);

  function SurveyPanel(props) {
    var _this;

    _classCallCheck(this, SurveyPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SurveyPanel).call(this, props));
    _this.state = {
      item: null,
      taskId: null,
      task: null,
      loading: true,
      feedback: null,
      annotation: null,
      metadata: {},
      instruction: false,
      confirmation: false
    };
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    _this.setupTask = _this.setupTask.bind(_assertThisInitialized(_this));
    _this.onAnnotationPost = _this.onAnnotationPost.bind(_assertThisInitialized(_this));
    _this.onFeedbackAccept = _this.onFeedbackAccept.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SurveyPanel, [{
    key: "setupTask",
    value: function setupTask(taskId) {
      this.setState({
        taskId: taskId
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.setState({
        taskId: null,
        task: null,
        item: null
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkState();

      _SurveyManager["default"].addSurveyChangeHandler(this.setupTask);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _SurveyManager["default"].removeSurveyChangeHandler(this.setupTask);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.taskId !== prevState.taskId || this.state.task !== prevState.task) {
        this.checkState();
      }
    }
  }, {
    key: "checkState",
    value: function checkState() {
      var _this2 = this;

      if (!this.state.taskId) return;

      if (this.state.task === null) {
        _TasksRepository["default"].get(this.state.taskId).then(function (task) {
          _this2.setState({
            task: task
          });
        });
      } else {
        this.getFirstItem();
      }
    }
  }, {
    key: "onNoItems",
    value: function onNoItems() {
      this.onClose();
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem() {
      var _this3 = this;

      var task = this.state.task;

      _ItemRepository["default"].getFirstItem(task.id).then(function (item) {
        if (item == null) _this3.onNoItems();else _this3.setState({
          loading: false,
          item: item
        });
      })["catch"](function (error) {
        _this3.setState({
          loading: false
        });

        console.log(error);
      });
    }
  }, {
    key: "getNextItem",
    value: function getNextItem() {
      var _this4 = this;

      var item = this.state.item;

      _ItemRepository["default"].getNextItem(item.id).then(function (item) {
        if (item == null) _this4.onNoItems();else _this4.setState({
          loading: false,
          item: item
        });
      })["catch"](function (error) {
        _this4.setState({
          loading: false
        });

        console.log(error);
      });
    }
  }, {
    key: "onAnnotationPost",
    value: function onAnnotationPost(annotationResponse) {
      this.onFeedbackAccept();
    }
  }, {
    key: "onFeedbackAccept",
    value: function onFeedbackAccept() {
      var result = {
        confirmation: false
      };
      if (this.state.feedback) result['feedback'] = null;
      this.setState(result);
      this.getNextItem();
    }
  }, {
    key: "render",
    value: function render() {
      var isOpen = this.state.item !== null;
      var itemForm = null;

      if (!this.state.loading && this.state.item) {
        itemForm = _react["default"].createElement(_ItemForm["default"], {
          metadata: this.state.task.metadata,
          item: this.state.item,
          onAnnotationPost: this.onAnnotationPost,
          submitButton: _SubmitButton["default"],
          itemPanelGroupClass: "item-panel-group-override",
          skipButton: null
        });
      }

      return _react["default"].createElement("div", {
        className: "modal-base"
      }, _react["default"].createElement(_BlackBackground["default"], {
        className: "black-background",
        style: {
          pointerEvents: isOpen ? "auto" : "none"
        },
        pose: isOpen ? 'open' : 'closed',
        onClick: this.onClose
      }), _react["default"].createElement(Modal, {
        className: "modal-window card-3-static",
        pose: isOpen ? 'open' : 'closed',
        style: {
          pointerEvents: isOpen ? "auto" : "none",
          padding: "40px 40px 10px 40px",
          minWidth: "300px",
          minHeight: "300px"
        }
      }, itemForm));
    }
  }]);

  return SurveyPanel;
}(_react["default"].Component);

exports["default"] = SurveyPanel;