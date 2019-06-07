"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BountyRepository = _interopRequireDefault(require("../../logic/repositories/BountyRepository"));

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

var StatusMap = {
  "NEW": _react["default"].createElement("span", {
    className: "badge badge-warning",
    style: {
      fontSize: "14px"
    }
  }, "Started"),
  "IN_PROGRESS": _react["default"].createElement("span", {
    className: "badge badge-warning",
    style: {
      fontSize: "14px"
    }
  }, "In progress"),
  "FINISHED": _react["default"].createElement("span", {
    className: "badge badge-success",
    style: {
      fontSize: "14px"
    }
  }, "Finished"),
  "CLOSED": _react["default"].createElement("span", {
    className: "badge badge-secondary",
    style: {
      fontSize: "14px"
    }
  }, "Closed")
};

var BountyStatus =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BountyStatus, _React$Component);

  function BountyStatus(props) {
    var _this;

    _classCallCheck(this, BountyStatus);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BountyStatus).call(this, props));
    _this.state = {
      loading: true,
      userBounty: null,
      previousStatus: null
    };
    return _this;
  }

  _createClass(BountyStatus, [{
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

      if (this.props.bounty !== null) {
        _BountyRepository["default"].getStatus(this.props.bountyId).then(function (userBounty) {
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
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var status = null;
      var bountyStatus = "CLOSED";

      if (this.state.userBounty) {
        var userBounty = this.state.userBounty;
        bountyStatus = userBounty.status;
        var progress = userBounty.progress * 100;

        var reward = _react["default"].createElement("span", {
          className: "badge badge-secondary",
          style: {
            fontSize: "14px"
          }
        }, "Bounty not finished");

        if (userBounty.reward) reward = _react["default"].createElement("span", {
          className: "badge badge-success",
          style: {
            fontSize: "14px"
          }
        }, userBounty.reward);
        status = _react["default"].createElement("div", null, _react["default"].createElement("div", {
          className: "progress mission-progress"
        }, _react["default"].createElement("div", {
          className: "progress-bar bounty-progress-bar",
          style: {
            width: progress + "%"
          }
        })), _react["default"].createElement("p", {
          className: "bounty-progress-stats"
        }, userBounty.annotationsDone, " / ", userBounty.annotationsTarget, " done"), _react["default"].createElement("p", null, _react["default"].createElement("b", null, "Reward code:"), " ", reward));
      }

      return _react["default"].createElement("div", {
        className: "col-sm-12 card-1-static bounty-status"
      }, _react["default"].createElement("h4", null, "Bounty status"), _react["default"].createElement("p", null, _react["default"].createElement("b", null, "State:"), " ", StatusMap[bountyStatus]), status);
    }
  }]);

  return BountyStatus;
}(_react["default"].Component);

exports["default"] = BountyStatus;