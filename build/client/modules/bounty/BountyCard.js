"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("../../components/animated/Card"));

var _lock = require("react-icons-kit/fa/lock");

var _unlock = require("react-icons-kit/fa/unlock");

var _trophy = require("react-icons-kit/fa/trophy");

var _Icons = require("../../components/Icons");

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

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

var BountyCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BountyCard, _React$Component);

  function BountyCard() {
    _classCallCheck(this, BountyCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(BountyCard).apply(this, arguments));
  }

  _createClass(BountyCard, [{
    key: "render",
    value: function render() {
      var bounty = this.props.bounty;
      var task = bounty.task;
      var userBounty = bounty.userBounty;
      var progressBar = null;
      var icon = "locked";
      var bountyStatus = _LocalizationManager["default"].bounty.status.CLOSED;
      var className = "mission-closed-card card-2-static";

      var onClick = function onClick() {};

      if (userBounty) {
        if (userBounty.status === "NEW") {
          icon = "missions";
          bountyStatus = _LocalizationManager["default"].bounty.status.NEW;
          className = "card-2";
          onClick = this.props.onSelect;
        } else if (userBounty.status === "IN_PROGRESS") {
          icon = "missions";
          bountyStatus = _LocalizationManager["default"].bounty.status.IN_PROGRESS;
          className = "card-2";
          onClick = this.props.onSelect;
        } else if (userBounty.progress === 1) {
          bountyStatus = _LocalizationManager["default"].bounty.status.FINISHED;
          icon = "tick-sign-green";
          className = "card-2";
          onClick = this.props.onSelect;
        }

        var annotationsDone = Math.min(userBounty.annotationsDone, bounty.annotationsTarget);
        progressBar = _react["default"].createElement(_ProgressBar["default"], {
          progress: userBounty.progress,
          textAlign: "right",
          text: "Ukończono " + annotationsDone + "/" + bounty.annotationsTarget
        });
      } else if (bounty.closed === false) {
        icon = "missions";
        bountyStatus = _LocalizationManager["default"].bounty.status.NEW;
        className = "card-2";
        onClick = this.props.onSelect;
      }

      return _react["default"].createElement(_Card["default"], {
        className: "col-md-4"
      }, _react["default"].createElement("div", {
        className: "mission-card font-light " + className,
        onClick: onClick
      }, _react["default"].createElement("div", {
        className: "mission-card-content"
      }, _react["default"].createElement("h4", null, "#", bounty.id, " ", task.name), _react["default"].createElement("p", {
        className: "small",
        style: {
          minHeight: "48px"
        }
      }, task.description), _react["default"].createElement("div", {
        className: "small",
        style: {
          margin: "30px 0"
        }
      }, _react["default"].createElement(_Icons.SmallIcon, {
        name: icon
      }), _react["default"].createElement("span", {
        style: {
          marginLeft: "10px"
        }
      }, bountyStatus)), progressBar)));
    }
  }]);

  return BountyCard;
}(_react["default"].Component);

exports["default"] = BountyCard;