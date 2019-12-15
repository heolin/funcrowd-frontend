"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _queryString = _interopRequireDefault(require("query-string"));

var _ItemForm = _interopRequireDefault(require("../items/ItemForm"));

var _FeedbackPanel = _interopRequireDefault(require("../feedback/FeedbackPanel"));

var _InstructionPanel = _interopRequireDefault(require("../instruction/InstructionPanel"));

var _BountyRepository = _interopRequireDefault(require("../../logic/repositories/BountyRepository"));

var _BountyStatus = _interopRequireDefault(require("../bounty/BountyStatus"));

var _reactIconsKit = require("react-icons-kit");

var _info = require("react-icons-kit/fa/info");

var _ConfigManager = _interopRequireDefault(require("../../logic/config/ConfigManager"));

var _ItemRepository = _interopRequireDefault(require("../../logic/repositories/ItemRepository"));

var _NoItemsPanel = _interopRequireDefault(require("../items/NoItemsPanel"));

var _SkipButton = _interopRequireDefault(require("../items/components/SkipButton"));

var _SubmitButton = _interopRequireDefault(require("../items/components/SubmitButton"));

var _BountyHeader = _interopRequireDefault(require("../bounty/BountyHeader"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _UserManager = _interopRequireDefault(require("../../logic/UserManager"));

var _StartBountyPanel = _interopRequireDefault(require("./StartBountyPanel"));

var _bounty = _interopRequireDefault(require("../../resources/texts/bounty"));

var _ItemPanel2 = _interopRequireDefault(require("../items/ItemPanel"));

var _RestartBountyPanel = _interopRequireDefault(require("./RestartBountyPanel"));

var _NotFinishedBountyPanel = _interopRequireDefault(require("./NotFinishedBountyPanel"));

var _RewardCodesListPanel = _interopRequireDefault(require("./RewardCodesListPanel"));

var _Footer = require("../../Footer");

var _SessionManager = _interopRequireDefault(require("../../logic/SessionManager"));

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
      bounty: null,
      loading: true,
      loadingStart: false,
      feedback: null,
      annotation: null,
      instruction: false,
      confirmation: false,
      startPanel: false,
      restartPanel: false,
      notFinishedPanel: false,
      previousCodesPanel: false
    };
    _this.onAnnotationPost = _this.onAnnotationPost.bind(_assertThisInitialized(_this));
    _this.onFeedbackAccept = _this.onFeedbackAccept.bind(_assertThisInitialized(_this));
    _this.showInstruction = _this.showInstruction.bind(_assertThisInitialized(_this));
    _this.onInstructionClose = _this.onInstructionClose.bind(_assertThisInitialized(_this));
    _this.onBountyFinished = _this.onBountyFinished.bind(_assertThisInitialized(_this));
    _this.startBounty = _this.startBounty.bind(_assertThisInitialized(_this));
    _this.closeNotFinishedPanel = _this.closeNotFinishedPanel.bind(_assertThisInitialized(_this));
    _this.showPreviousCodes = _this.showPreviousCodes.bind(_assertThisInitialized(_this));
    _this.closePreviousCodes = _this.closePreviousCodes.bind(_assertThisInitialized(_this));
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
      if (this.state.bounty !== prevState.bounty || this.state.startPanel !== prevState.startPanel) {
        this.checkState();
        this.checkInstruction();
      }
    }
  }, {
    key: "checkState",
    value: function checkState() {
      var _this2 = this;

      if (this.props.bounty == null) {
        if (this.props.match.path === "/bounty/:id") {
          var bountyId = this.props.match.params.id;

          _BountyRepository["default"].get(bountyId).then(function (bounty) {
            _this2.props.onBountySelect(bounty);
          });
        }
      } else {
        if (this.state.bounty) {
          if (this.state.bounty.userBounty) {
            this.getFirstItem();
            this.checkInstruction();
            this.checkRestartBounty();
          } else if (!this.state.loadingStart) {
            _SessionManager["default"].cache['action'] = null;
            this.setState({
              loading: false,
              startPanel: true
            });
          }
        } else {
          this.setState({
            bounty: this.props.bounty
          });
        }
      }
    }
  }, {
    key: "startBounty",
    value: function startBounty() {
      var _this3 = this;

      var bountyId = this.props.match.params.id;
      this.setState({
        loading: true,
        startPanel: false,
        loadingStart: true,
        restartPanel: false,
        notFinishedPanel: false
      });

      _BountyRepository["default"].start(bountyId).then(function (bounty) {
        _this3.setState({
          loadingStart: false
        });

        _this3.props.onBountySelect(bounty);
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
    key: "closeNotFinishedPanel",
    value: function closeNotFinishedPanel() {
      this.setState({
        notFinishedPanel: false
      });
    }
  }, {
    key: "checkRestartBounty",
    value: function checkRestartBounty() {
      var action = _SessionManager["default"].cache['action'];

      if (action) {
        if (action === 'startBounty') {
          if (this.state.bounty.userBounty.status === "FINISHED") {
            this.setState({
              restartPanel: true
            });
          } else {
            this.setState({
              notFinishedPanel: true
            });
          }

          _SessionManager["default"].cache['action'] = null;
        }
      }
    }
  }, {
    key: "showPreviousCodes",
    value: function showPreviousCodes() {
      this.setState({
        previousCodesPanel: true
      });
    }
  }, {
    key: "closePreviousCodes",
    value: function closePreviousCodes() {
      this.setState({
        previousCodesPanel: false
      });
    }
  }, {
    key: "onUpdateStatus",
    value: function onUpdateStatus(userBounty) {
      var bounty = this.state.bounty;
      bounty.userBounty = userBounty;
      this.setState({
        bounty: bounty
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) return _react["default"].createElement(_Loading["default"], null);
      var itemForm = null;
      var bounty = null;
      var itemId = null;
      var noitems = null;

      if (!this.state.bounty.closed) {
        if (this.state.bounty.userBounty && !this.state.bounty.userBounty.isClosed) {
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
              task: this.props.task,
              item: this.state.item,
              onAnnotationPost: this.onAnnotationPost,
              submitButton: _SubmitButton["default"],
              skipButton: _SkipButton["default"]
            }));
          } else {
            noitems = _react["default"].createElement(_NoItemsPanel["default"], null);
          }
        }
      }

      var bountyHeader = null;
      if (this.state.bounty.userBounty) bountyHeader = _react["default"].createElement(_BountyHeader["default"], {
        bounty: this.state.bounty,
        itemId: itemId,
        onUpdateStatus: this.onUpdateStatus,
        showPreviousCodes: this.showPreviousCodes,
        onBountyFinished: this.onBountyFinished
      });
      return _react["default"].createElement("div", {
        className: "container-fluid base-row"
      }, bountyHeader, _react["default"].createElement(_InstructionPanel["default"], {
        isOpen: this.state.item && this.state.instruction,
        task: this.props.task,
        onClose: this.onInstructionClose
      }), _react["default"].createElement(_FeedbackPanel["default"], {
        isOpen: this.state.item && this.state.confirmation,
        onAccept: this.onFeedbackAccept,
        annotation: this.state.annotation
      }), _react["default"].createElement(_StartBountyPanel["default"], {
        bounty: this.props.bounty,
        isOpen: this.state.startPanel,
        startBounty: this.startBounty
      }), _react["default"].createElement(_RestartBountyPanel["default"], {
        bounty: this.props.bounty,
        isOpen: this.state.restartPanel,
        startBounty: this.startBounty
      }), _react["default"].createElement(_NotFinishedBountyPanel["default"], {
        bounty: this.props.bounty,
        isOpen: this.state.notFinishedPanel,
        onClose: this.closeNotFinishedPanel
      }), _react["default"].createElement(_RewardCodesListPanel["default"], {
        bounty: this.state.bounty,
        isOpen: this.state.previousCodesPanel,
        onClose: this.closePreviousCodes
      }), _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, bounty, itemForm, noitems)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.task !== state.task || props.task !== state.bounty) {
        return {
          task: props.task,
          bounty: props.bounty
        };
      }

      return null;
    }
  }]);

  return BountyItemPanel;
}(_ItemPanel2["default"]);

exports["default"] = BountyItemPanel;