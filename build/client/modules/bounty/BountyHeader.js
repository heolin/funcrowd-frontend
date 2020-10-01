"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Breadcrumbs = require("../../components/Breadcrumbs");

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _Icons = require("../../components/Icons");

var _Image = require("../../components/Image");

var _BountyRepository = _interopRequireDefault(require("../../logic/repositories/BountyRepository"));

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

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

var statusStyle = {
  "NEW": "badge-orange",
  "IN_PROGRESS": "badge-orange",
  "FINISHED": "badge-green",
  "CLOSED": "badge-secondary"
};

var BountyHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BountyHeader, _React$Component);

  function BountyHeader(props) {
    var _this;

    _classCallCheck(this, BountyHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BountyHeader).call(this, props));
    _this.state = {
      loading: true,
      userBounty: _this.props.userBounty,
      previousStatus: null
    };
    return _this;
  }

  _createClass(BountyHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateStatus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateStatus();
      }
    }
  }, {
    key: "updateStatus",
    value: function updateStatus() {
      var _this2 = this;

      _BountyRepository["default"].get(this.props.userBounty.bounty.id).then(function (userBounty) {
        var newStatus = null;

        if (userBounty) {
          newStatus = userBounty.status;
          if (newStatus != _this2.state.previousStatus && newStatus === "FINISHED") _this2.props.onBountyFinished();
        }

        _this2.setState({
          userBounty: userBounty,
          previousStatus: newStatus,
          loading: false
        });

        _this2.props.onUpdateStatus(userBounty);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.userBounty == null) return null;
      var userBounty = this.state.userBounty;
      var bounty = userBounty.bounty;
      var classNameExtend = "";
      var bountyStatus = userBounty.status;
      var annotationsDone = Math.min(userBounty.annotationsDone, userBounty.annotationsTarget);

      var progressBar = _react["default"].createElement(_ProgressBar["default"], {
        progress: userBounty.progress,
        textAlign: "right",
        text: _LocalizationManager["default"].general.finished + " " + annotationsDone + "/" + userBounty.annotationsTarget
      });

      var reward = _react["default"].createElement("span", {
        className: "badge badge-secondary",
        style: {
          fontSize: "14px"
        }
      }, _LocalizationManager["default"].bounty.labels.bountyNotFinished);

      if (userBounty.reward) reward = _react["default"].createElement("span", {
        className: "badge badge-green",
        style: {
          fontSize: "14px"
        }
      }, userBounty.reward);

      var status = _react["default"].createElement("div", {
        className: "badge " + statusStyle[bountyStatus],
        style: {
          fontSize: "14px"
        }
      }, _LocalizationManager["default"].bounty.status[bountyStatus]);

      var elements = _react["default"].createElement("div", {
        className: "bounty-header-info"
      }, _react["default"].createElement("div", {
        className: "color-white"
      }, _react["default"].createElement("h3", {
        style: {
          marginBottom: 0,
          marginTop: "10px"
        }
      }, "#", bounty.id, " ", bounty.name), _react["default"].createElement("div", {
        className: "small",
        style: {
          margin: "15px 0"
        }
      }, _react["default"].createElement("div", null, _LocalizationManager["default"].bounty.labels.status, ":\xA0", status), _react["default"].createElement("div", null, _LocalizationManager["default"].bounty.labels.reward, ":\xA0", reward))), progressBar);

      return _react["default"].createElement("div", {
        className: "tasks-header-bar row card-2-static" + classNameExtend
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row tasks-header" + classNameExtend
      }, _react["default"].createElement("div", {
        className: "col-md-12"
      }, elements))));
    }
  }]);

  return BountyHeader;
}(_react["default"].Component);

exports["default"] = BountyHeader;