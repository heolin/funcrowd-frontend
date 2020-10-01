"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ItemForm = _interopRequireDefault(require("../items/ItemForm"));

var _FeedbackPanel = _interopRequireDefault(require("../feedback/FeedbackPanel"));

var _InstructionPanel = _interopRequireDefault(require("../instruction/InstructionPanel"));

var _BountyRepository = _interopRequireDefault(require("../../logic/repositories/BountyRepository"));

var _reactIconsKit = require("react-icons-kit");

var _info = require("react-icons-kit/fa/info");

var _NoItemsPanel = _interopRequireDefault(require("../items/NoItemsPanel"));

var _SkipButton = _interopRequireDefault(require("../items/components/SkipButton"));

var _SubmitButton = _interopRequireDefault(require("../items/components/SubmitButton"));

var _BountyHeader = _interopRequireDefault(require("../bounty/BountyHeader"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _ItemPanel2 = _interopRequireDefault(require("../items/ItemPanel"));

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

var BountyItemPanel =
/*#__PURE__*/
function (_ItemPanel) {
  _inherits(BountyItemPanel, _ItemPanel);

  function BountyItemPanel(props) {
    var _this;

    _classCallCheck(this, BountyItemPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BountyItemPanel).call(this, props));
    _this.state = {
      item: null,
      task: null,
      userBounty: null,
      loading: true,
      loadingStart: false,
      feedback: null,
      annotation: null,
      instruction: false,
      confirmation: false,
      notFinishedPanel: false,
      previousCodesPanel: false,
      metadata: {}
    };
    _this.onAnnotationPost = _this.onAnnotationPost.bind(_assertThisInitialized(_this));
    _this.onFeedbackAccept = _this.onFeedbackAccept.bind(_assertThisInitialized(_this));
    _this.showInstruction = _this.showInstruction.bind(_assertThisInitialized(_this));
    _this.onInstructionClose = _this.onInstructionClose.bind(_assertThisInitialized(_this));
    _this.onBountyFinished = _this.onBountyFinished.bind(_assertThisInitialized(_this));
    _this.onUpdateStatus = _this.onUpdateStatus.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BountyItemPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.userBounty !== prevState.userBounty) {
        this.checkState();
        this.checkInstruction();
      }
    }
  }, {
    key: "checkInstruction",
    value: function checkInstruction() {
      if (localStorage.getItem("FUNCROWD_INSTRUCTION_BOUNTY" + this.state.userBounty.bounty.id) !== "true") this.showInstruction();
    }
  }, {
    key: "showInstruction",
    value: function showInstruction() {
      if (this.state.userBounty.bounty.instruction) {
        this.setState({
          instruction: true
        });
        localStorage.setItem("FUNCROWD_INSTRUCTION_BOUNTY" + this.state.userBounty.bounty.id, "true");
      }
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem() {
      return this.getNextItem();
    }
  }, {
    key: "getNextItem",
    value: function getNextItem() {
      var _this2 = this;

      _BountyRepository["default"].getNextItem(this.state.userBounty.bounty.id).then(function (item) {
        if (item == null) _this2.onNoItems();

        _this2.setState({
          loading: false,
          item: item
        });
      })["catch"](function (error) {
        _this2.setState({
          loading: false
        });

        console.log(error);
      });
    }
  }, {
    key: "checkState",
    value: function checkState() {
      var _this3 = this;

      if (this.props.userBounty == null) {
        if (this.props.match.path === "/bounty/:id") {
          var bountyId = this.props.match.params.id;

          _BountyRepository["default"].get(bountyId).then(function (bounty) {
            _this3.props.onBountySelect(bounty);
          });
        }
      } else {
        if (this.state.userBounty) {
          this.getFirstItem();
          this.checkInstruction();
        } else {
          this.setState({
            userBounty: this.props.userBounty
          });
        }
      }
    }
  }, {
    key: "onBountyFinished",
    value: function onBountyFinished() {
      var userBounty = this.state.userBounty;

      if (userBounty) {
        userBounty.status = "FINISHED";
        this.setState({
          userBounty: userBounty
        });
      }
    }
  }, {
    key: "onUpdateStatus",
    value: function onUpdateStatus(userBounty) {
      this.setState({
        userBounty: userBounty
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) return _react["default"].createElement(_Loading["default"], null);
      var itemForm = null;
      var bounty = null;
      var itemId = null;

      if (this.state.userBounty && !this.state.userBounty.isClosed) {
        if (this.state.item) {
          itemId = this.state.item.id;
          itemForm = _react["default"].createElement("div", {
            className: "col-sm-12 item-panel"
          }, _react["default"].createElement("div", {
            style: {
              marginBottom: "30px"
            }
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
          }))), _react["default"].createElement(_ItemForm["default"], {
            metadata: this.state.metadata,
            item: this.state.item,
            onAnnotationPost: this.onAnnotationPost,
            submitButton: _SubmitButton["default"],
            skipButton: _SkipButton["default"]
          }));
        }
      }

      var bountyHeader = null;
      if (this.state.userBounty) bountyHeader = _react["default"].createElement(_BountyHeader["default"], {
        userBounty: this.state.userBounty,
        itemId: itemId,
        onUpdateStatus: this.onUpdateStatus,
        showPreviousCodes: this.showPreviousCodes,
        onBountyFinished: this.onBountyFinished
      });
      return _react["default"].createElement("div", {
        className: "container-fluid base-row"
      }, bountyHeader, _react["default"].createElement(_InstructionPanel["default"], {
        isOpen: this.state.item && this.state.instruction,
        task: this.state.userBounty.bounty,
        onClose: this.onInstructionClose
      }), _react["default"].createElement(_FeedbackPanel["default"], {
        isOpen: this.state.item && this.state.confirmation,
        onAccept: this.onFeedbackAccept,
        annotation: this.state.annotation
      }), _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, bounty, itemForm)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.userBounty !== state.userBounty) {
        return {
          userBounty: props.userBounty,
          metadata: props.userBounty.bounty.metadata
        };
      }

      return null;
    }
  }]);

  return BountyItemPanel;
}(_ItemPanel2["default"]);

exports["default"] = BountyItemPanel;