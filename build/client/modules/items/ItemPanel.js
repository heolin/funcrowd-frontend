"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ItemForm = _interopRequireDefault(require("./ItemForm"));

var _FeedbackPanel = _interopRequireDefault(require("../feedback/FeedbackPanel"));

var _InstructionPanel = _interopRequireDefault(require("../instruction/InstructionPanel"));

var _TasksRepository = _interopRequireDefault(require("../../logic/repositories/TasksRepository"));

var _BountyRepository = _interopRequireDefault(require("../../logic/repositories/BountyRepository"));

var _BountyStatus = _interopRequireDefault(require("../bounty/BountyStatus"));

var _reactIconsKit = require("react-icons-kit");

var _info = require("react-icons-kit/fa/info");

var _ConfirmationPanel = _interopRequireDefault(require("./ConfirmationPanel"));

var _ConfigManager = _interopRequireDefault(require("../../logic/config/ConfigManager"));

var _ItemRepository = _interopRequireDefault(require("../../logic/repositories/ItemRepository"));

var _NoItemsPanel = _interopRequireDefault(require("./NoItemsPanel"));

var _SkipButton = _interopRequireDefault(require("./components/SkipButton"));

var _SubmitButton = _interopRequireDefault(require("./components/SubmitButton"));

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

var ItemPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ItemPanel, _React$Component);

  function ItemPanel(props) {
    var _this;

    _classCallCheck(this, ItemPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ItemPanel).call(this, props));
    _this.state = {
      item: null,
      task: null,
      bounty: null,
      loading: true,
      feedback: null,
      annotation: null,
      instruction: false,
      confirmation: false
    };
    _this.onAnnotationPost = _this.onAnnotationPost.bind(_assertThisInitialized(_this));
    _this.onFeedbackAccept = _this.onFeedbackAccept.bind(_assertThisInitialized(_this));
    _this.showInstruction = _this.showInstruction.bind(_assertThisInitialized(_this));
    _this.onInstructionClose = _this.onInstructionClose.bind(_assertThisInitialized(_this));
    _this.onConfirmationClose = _this.onConfirmationClose.bind(_assertThisInitialized(_this));
    _this.onBountyFinished = _this.onBountyFinished.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ItemPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.task !== prevState.task) {
        this.checkState();
        this.checkInstruction();
      }
    }
  }, {
    key: "checkState",
    value: function checkState() {
      var _this2 = this;

      if (this.props.task === null) {
        switch (this.props.match.path) {
          case "/task/:id":
            var taskId = this.props.match.params.id;

            _TasksRepository["default"].get(taskId).then(function (task) {
              _this2.props.onTaskSelect(task);
            });

            break;

          case "/bounty/:id":
            var bountyId = this.props.match.params.id;

            _BountyRepository["default"].get(bountyId).then(function (bounty) {
              _this2.props.onBountySelect(bounty);
            });

            break;

          default:
            break;
        }
      } else {
        this.getFirstItem();
        this.checkInstruction();
      }
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem() {
      var _this3 = this;

      var task = this.props.task;

      _ItemRepository["default"].getFirstItem(task.id).then(function (item) {
        _this3.setState({
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
        _this4.setState({
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
      var feedback = null;

      if (_ConfigManager["default"].config.showFeedback) {
        feedback = annotationResponse.annotation.feedback;
      }

      if (feedback) {
        this.setState({
          annotation: annotationResponse.annotation,
          feedback: feedback
        });
      } else {
        this.showConfirmation();
      }
    }
  }, {
    key: "onFeedbackAccept",
    value: function onFeedbackAccept() {
      if (this.state.feedback) this.setState({
        feedback: null
      });
      this.getNextItem();
    }
  }, {
    key: "showConfirmation",
    value: function showConfirmation() {
      this.setState({
        confirmation: true
      });
    }
  }, {
    key: "onConfirmationClose",
    value: function onConfirmationClose() {
      if (this.state.confirmation) this.setState({
        confirmation: false
      });
      this.getNextItem();
    }
  }, {
    key: "checkInstruction",
    value: function checkInstruction() {
      if (localStorage.getItem("FUNCROWD_INSTRUCTION_TASK" + this.state.task.id) !== "true") this.showInstruction();
    }
  }, {
    key: "showInstruction",
    value: function showInstruction() {
      this.setState({
        instruction: true
      });
      localStorage.setItem("FUNCROWD_INSTRUCTION_TASK" + this.state.task.id, "true");
    }
  }, {
    key: "onInstructionClose",
    value: function onInstructionClose() {
      this.setState({
        instruction: false
      });
    }
  }, {
    key: "onBountyFinished",
    value: function onBountyFinished() {
      var bounty = this.state.bounty;

      if (bounty) {
        bounty.userBounty.status = "FINISHED";
        this.setState({
          bounty: bounty
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) {
        return _react["default"].createElement("div", null, "Loading");
      }

      var itemForm = null;
      var feedback = null;
      var confirmation = null;
      var instruction = null;
      var bounty = null;
      var itemId = null;
      var noitems = null;

      if (this.state.item) {
        itemId = this.state.item.id;
        itemForm = _react["default"].createElement("div", {
          className: "col-sm-12 item-panel card-1-static"
        }, _react["default"].createElement("h3", {
          style: {
            display: "inline-block"
          }
        }, "Item #", this.state.item.id), _react["default"].createElement("button", {
          className: "btn btn-default info-button",
          onClick: this.showInstruction
        }, _react["default"].createElement(_reactIconsKit.Icon, {
          icon: _info.info,
          size: 24
        })), _react["default"].createElement(_ItemForm["default"], {
          item: this.state.item,
          onAnnotationPost: this.onAnnotationPost,
          submitButton: _SubmitButton["default"],
          skipButton: _SkipButton["default"]
        }));
        if (this.state.feedback) feedback = _react["default"].createElement(_FeedbackPanel["default"], {
          feedback: this.state.feedback,
          onAccept: this.onFeedbackAccept,
          annotation: this.state.annotation
        });
        if (this.state.confirmation) confirmation = _react["default"].createElement(_ConfirmationPanel["default"], {
          onClose: this.onConfirmationClose
        });
        if (this.state.instruction) instruction = _react["default"].createElement(_InstructionPanel["default"], {
          task: this.props.task,
          onClose: this.onInstructionClose
        });
      } else {
        noitems = _react["default"].createElement(_NoItemsPanel["default"], null);
      }

      if (this.state.bounty) {
        bounty = _react["default"].createElement(_BountyStatus["default"], {
          itemId: itemId,
          onBountyFinished: this.onBountyFinished,
          bountyId: this.state.bounty.id
        });
        if (this.state.bounty.userBounty == null) itemForm = null;
        if (this.state.bounty.userBounty && this.state.bounty.userBounty.is_closed) itemForm = null;
      }

      return _react["default"].createElement("div", {
        className: "row base-row"
      }, instruction, confirmation, feedback, bounty, itemForm, noitems);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.task !== state.task) {
        return {
          task: props.task
        };
      }

      if (props.bounty !== state.bounty) {
        return {
          bounty: props.bounty
        };
      }

      return null;
    }
  }]);

  return ItemPanel;
}(_react["default"].Component);

exports["default"] = ItemPanel;