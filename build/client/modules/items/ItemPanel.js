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
          onAnnotationPost: this.onAnnotationPost
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pdGVtcy9JdGVtUGFuZWwuanN4Il0sIm5hbWVzIjpbIkl0ZW1QYW5lbCIsInByb3BzIiwic3RhdGUiLCJpdGVtIiwidGFzayIsImJvdW50eSIsImxvYWRpbmciLCJmZWVkYmFjayIsImFubm90YXRpb24iLCJpbnN0cnVjdGlvbiIsImNvbmZpcm1hdGlvbiIsIm9uQW5ub3RhdGlvblBvc3QiLCJiaW5kIiwib25GZWVkYmFja0FjY2VwdCIsInNob3dJbnN0cnVjdGlvbiIsIm9uSW5zdHJ1Y3Rpb25DbG9zZSIsIm9uQ29uZmlybWF0aW9uQ2xvc2UiLCJvbkJvdW50eUZpbmlzaGVkIiwiY2hlY2tTdGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2hlY2tJbnN0cnVjdGlvbiIsIm1hdGNoIiwicGF0aCIsInRhc2tJZCIsInBhcmFtcyIsImlkIiwiVGFza3NSZXBvc2l0b3J5IiwiZ2V0IiwidGhlbiIsIm9uVGFza1NlbGVjdCIsImJvdW50eUlkIiwiQm91bnR5UmVwb3NpdG9yeSIsIm9uQm91bnR5U2VsZWN0IiwiZ2V0Rmlyc3RJdGVtIiwiSXRlbVJlcG9zaXRvcnkiLCJzZXRTdGF0ZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldE5leHRJdGVtIiwiYW5ub3RhdGlvblJlc3BvbnNlIiwiQ29uZmlnTWFuYWdlciIsImNvbmZpZyIsInNob3dGZWVkYmFjayIsInNob3dDb25maXJtYXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInVzZXJCb3VudHkiLCJzdGF0dXMiLCJpdGVtRm9ybSIsIml0ZW1JZCIsIm5vaXRlbXMiLCJkaXNwbGF5IiwiaW5mbyIsImlzX2Nsb3NlZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7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QUNHLE1BQTNCLEVBQW1DO0FBQy9CLGVBQU87QUFDSEEsVUFBQUEsTUFBTSxFQUFFSixLQUFLLENBQUNJO0FBRFgsU0FBUDtBQUdIOztBQUNELGFBQU8sSUFBUDtBQUNIOzs7O0VBdkNrQ3FELGtCQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSXRlbUZvcm0gZnJvbSBcIi4vSXRlbUZvcm1cIjtcbmltcG9ydCBGZWVkYmFja1BhbmVsIGZyb20gXCIuLi9mZWVkYmFjay9GZWVkYmFja1BhbmVsXCI7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25QYW5lbCBmcm9tIFwiLi4vaW5zdHJ1Y3Rpb24vSW5zdHJ1Y3Rpb25QYW5lbFwiO1xuaW1wb3J0IFRhc2tzUmVwb3NpdG9yeSBmcm9tIFwiLi4vLi4vbG9naWMvcmVwb3NpdG9yaWVzL1Rhc2tzUmVwb3NpdG9yeVwiO1xuaW1wb3J0IEJvdW50eVJlcG9zaXRvcnkgZnJvbSBcIi4uLy4uL2xvZ2ljL3JlcG9zaXRvcmllcy9Cb3VudHlSZXBvc2l0b3J5XCI7XG5pbXBvcnQgQm91bnR5U3RhdHVzIGZyb20gXCIuLi9ib3VudHkvQm91bnR5U3RhdHVzXCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0J1xuaW1wb3J0IHtpbmZvfSBmcm9tICdyZWFjdC1pY29ucy1raXQvZmEvaW5mbydcbmltcG9ydCBDb25maXJtYXRpb25QYW5lbCBmcm9tIFwiLi9Db25maXJtYXRpb25QYW5lbFwiO1xuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL2xvZ2ljL2NvbmZpZy9Db25maWdNYW5hZ2VyXCI7XG5pbXBvcnQgSXRlbVJlcG9zaXRvcnkgZnJvbSBcIi4uLy4uL2xvZ2ljL3JlcG9zaXRvcmllcy9JdGVtUmVwb3NpdG9yeVwiO1xuaW1wb3J0IE5vSXRlbXNQYW5lbCBmcm9tIFwiLi9Ob0l0ZW1zUGFuZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGl0ZW06IG51bGwsXG4gICAgICAgICAgICB0YXNrOiBudWxsLFxuICAgICAgICAgICAgYm91bnR5OiBudWxsLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGZlZWRiYWNrOiBudWxsLFxuICAgICAgICAgICAgYW5ub3RhdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGluc3RydWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vbkFubm90YXRpb25Qb3N0ID0gdGhpcy5vbkFubm90YXRpb25Qb3N0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GZWVkYmFja0FjY2VwdCA9IHRoaXMub25GZWVkYmFja0FjY2VwdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dJbnN0cnVjdGlvbiA9IHRoaXMuc2hvd0luc3RydWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25JbnN0cnVjdGlvbkNsb3NlID0gdGhpcy5vbkluc3RydWN0aW9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1hdGlvbkNsb3NlID0gdGhpcy5vbkNvbmZpcm1hdGlvbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Cb3VudHlGaW5pc2hlZCA9IHRoaXMub25Cb3VudHlGaW5pc2hlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNoZWNrU3RhdGUoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgICBpZiAocHJvcHMudGFzayAhPT0gc3RhdGUudGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YXNrOiBwcm9wcy50YXNrLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuYm91bnR5ICE9PSBzdGF0ZS5ib3VudHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYm91bnR5OiBwcm9wcy5ib3VudHksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFzayAhPT0gcHJldlN0YXRlLnRhc2spIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0luc3RydWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1N0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50YXNrID09PSBudWxsKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMubWF0Y2gucGF0aCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCIvdGFzay86aWRcIjpcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tJZCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkO1xuICAgICAgICAgICAgICAgICAgICBUYXNrc1JlcG9zaXRvcnkuZ2V0KHRhc2tJZCkudGhlbigodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblRhc2tTZWxlY3QodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiL2JvdW50eS86aWRcIjpcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvdW50eUlkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQ7XG4gICAgICAgICAgICAgICAgICAgIEJvdW50eVJlcG9zaXRvcnkuZ2V0KGJvdW50eUlkKS50aGVuKChib3VudHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Cb3VudHlTZWxlY3QoYm91bnR5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRGaXJzdEl0ZW0oKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnN0cnVjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rmlyc3RJdGVtKCkge1xuICAgICAgICBsZXQgdGFzayA9IHRoaXMucHJvcHMudGFzaztcbiAgICAgICAgSXRlbVJlcG9zaXRvcnkuZ2V0Rmlyc3RJdGVtKHRhc2suaWQpXG4gICAgICAgICAgICAudGhlbigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5leHRJdGVtKCkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuc3RhdGUuaXRlbTtcbiAgICAgICAgSXRlbVJlcG9zaXRvcnkuZ2V0TmV4dEl0ZW0oaXRlbS5pZClcbiAgICAgICAgICAgIC50aGVuKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Bbm5vdGF0aW9uUG9zdChhbm5vdGF0aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGZlZWRiYWNrID0gbnVsbDtcbiAgICAgICAgaWYgKENvbmZpZ01hbmFnZXIuY29uZmlnLnNob3dGZWVkYmFjaykge1xuICAgICAgICAgICAgZmVlZGJhY2sgPSBhbm5vdGF0aW9uUmVzcG9uc2UuYW5ub3RhdGlvbi5mZWVkYmFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmZWVkYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbjogYW5ub3RhdGlvblJlc3BvbnNlLmFubm90YXRpb24sXG4gICAgICAgICAgICAgICAgZmVlZGJhY2s6IGZlZWRiYWNrfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRmVlZGJhY2tBY2NlcHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZlZWRiYWNrKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmVlZGJhY2s6IG51bGx9KTtcbiAgICAgICAgdGhpcy5nZXROZXh0SXRlbSgpO1xuICAgIH1cblxuICAgIHNob3dDb25maXJtYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmZpcm1hdGlvbjogdHJ1ZX0pO1xuICAgIH1cblxuICAgIG9uQ29uZmlybWF0aW9uQ2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmZpcm1hdGlvbjogZmFsc2V9KTtcbiAgICAgICAgdGhpcy5nZXROZXh0SXRlbSgpO1xuICAgIH1cblxuICAgIGNoZWNrSW5zdHJ1Y3Rpb24oKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkZVTkNST1dEX0lOU1RSVUNUSU9OX1RBU0tcIit0aGlzLnN0YXRlLnRhc2suaWQpICE9PSBcInRydWVcIilcbiAgICAgICAgICAgIHRoaXMuc2hvd0luc3RydWN0aW9uKCk7XG4gICAgfVxuXG4gICAgc2hvd0luc3RydWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnN0cnVjdGlvbjogdHJ1ZX0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkZVTkNST1dEX0lOU1RSVUNUSU9OX1RBU0tcIit0aGlzLnN0YXRlLnRhc2suaWQsIFwidHJ1ZVwiKTtcbiAgICB9XG5cbiAgICBvbkluc3RydWN0aW9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2luc3RydWN0aW9uOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIG9uQm91bnR5RmluaXNoZWQoKSB7XG4gICAgICAgIGxldCBib3VudHkgPSB0aGlzLnN0YXRlLmJvdW50eTtcbiAgICAgICAgaWYgKGJvdW50eSkge1xuICAgICAgICAgICAgYm91bnR5LnVzZXJCb3VudHkuc3RhdHVzID0gXCJGSU5JU0hFRFwiO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym91bnR5OiBib3VudHl9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXRlbUZvcm0gPSBudWxsO1xuICAgICAgICBsZXQgZmVlZGJhY2sgPSBudWxsO1xuICAgICAgICBsZXQgY29uZmlybWF0aW9uID0gbnVsbDtcbiAgICAgICAgbGV0IGluc3RydWN0aW9uID0gbnVsbDtcbiAgICAgICAgbGV0IGJvdW50eSA9IG51bGw7XG4gICAgICAgIGxldCBpdGVtSWQgPSBudWxsO1xuICAgICAgICBsZXQgbm9pdGVtcyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXRlbSkge1xuICAgICAgICAgICAgaXRlbUlkID0gdGhpcy5zdGF0ZS5pdGVtLmlkO1xuXG4gICAgICAgICAgICBpdGVtRm9ybSA9IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBpdGVtLXBhbmVsIGNhcmQtMS1zdGF0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19Pkl0ZW0gI3t0aGlzLnN0YXRlLml0ZW0uaWR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgaW5mby1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0luc3RydWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2luZm99IHNpemU9ezI0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtRm9ybSBpdGVtPXt0aGlzLnN0YXRlLml0ZW19IG9uQW5ub3RhdGlvblBvc3Q9e3RoaXMub25Bbm5vdGF0aW9uUG9zdH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmVlZGJhY2spXG4gICAgICAgICAgICAgICAgZmVlZGJhY2sgPSA8RmVlZGJhY2tQYW5lbCBmZWVkYmFjaz17dGhpcy5zdGF0ZS5mZWVkYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjZXB0PXt0aGlzLm9uRmVlZGJhY2tBY2NlcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uPXt0aGlzLnN0YXRlLmFubm90YXRpb259Lz47XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbilcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb24gPSA8Q29uZmlybWF0aW9uUGFuZWwgb25DbG9zZT17dGhpcy5vbkNvbmZpcm1hdGlvbkNsb3NlfS8+O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnN0cnVjdGlvbilcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbiA9IDxJbnN0cnVjdGlvblBhbmVsIHRhc2s9e3RoaXMucHJvcHMudGFza30gb25DbG9zZT17dGhpcy5vbkluc3RydWN0aW9uQ2xvc2V9Lz47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2l0ZW1zID0gPE5vSXRlbXNQYW5lbC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYm91bnR5KSB7XG4gICAgICAgICAgICBib3VudHkgPSA8Qm91bnR5U3RhdHVzIGl0ZW1JZD17aXRlbUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJvdW50eUZpbmlzaGVkPXt0aGlzLm9uQm91bnR5RmluaXNoZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW50eUlkPXt0aGlzLnN0YXRlLmJvdW50eS5pZH0vPjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYm91bnR5LnVzZXJCb3VudHkgPT0gbnVsbClcbiAgICAgICAgICAgICAgICBpdGVtRm9ybSA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5ib3VudHkudXNlckJvdW50eSAmJiB0aGlzLnN0YXRlLmJvdW50eS51c2VyQm91bnR5LmlzX2Nsb3NlZClcbiAgICAgICAgICAgICAgICBpdGVtRm9ybSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYmFzZS1yb3dcIj5cbiAgICAgICAgICAgICAgICB7aW5zdHJ1Y3Rpb259XG4gICAgICAgICAgICAgICAge2NvbmZpcm1hdGlvbn1cbiAgICAgICAgICAgICAgICB7ZmVlZGJhY2t9XG4gICAgICAgICAgICAgICAge2JvdW50eX1cbiAgICAgICAgICAgICAgICB7aXRlbUZvcm19XG4gICAgICAgICAgICAgICAge25vaXRlbXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=