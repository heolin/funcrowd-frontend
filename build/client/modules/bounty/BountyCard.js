"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIconsKit = require("react-icons-kit");

var _lock = require("react-icons-kit/fa/lock");

var _unlock = require("react-icons-kit/fa/unlock");

var _trophy = require("react-icons-kit/fa/trophy");

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

      if (userBounty) {
        var progress = Math.min(userBounty.progress * 100, 100);
        var annotationsDone = Math.min(userBounty.annotationsDone, bounty.annotationsTarget);

        if (userBounty.status === "NEW" || userBounty.status === "IN_PROGRESS") {
          return _react["default"].createElement("div", {
            className: "col-md-4",
            style: {
              marginBottom: "40px"
            }
          }, _react["default"].createElement("div", {
            className: "bounty-card card-2",
            onClick: this.props.onSelect
          }, _react["default"].createElement("div", {
            className: "bounty-card-header"
          }, _react["default"].createElement("h6", null, "Bounty in progress"), _react["default"].createElement("h6", {
            className: "bounty-card-id"
          }, "#", bounty.id)), _react["default"].createElement("div", {
            className: "bounty-card-title-base"
          }, _react["default"].createElement("div", {
            className: "bounty-card-icon"
          }, _react["default"].createElement(_reactIconsKit.Icon, {
            icon: _unlock.unlock,
            size: 32
          })), _react["default"].createElement("div", {
            className: "bounty-card-title"
          }, _react["default"].createElement("h4", null, task.name))), _react["default"].createElement("div", {
            className: "card-progress-bar"
          }, _react["default"].createElement("div", {
            className: "progress mission-progress"
          }, _react["default"].createElement("div", {
            className: "progress-bar bounty-progress-bar",
            style: {
              width: progress + "%"
            }
          })), _react["default"].createElement("p", {
            className: "bounty-progress-stats"
          }, annotationsDone, " / ", bounty.annotationsTarget, " done"))));
        } else {
          var bountyStatus = "Bounty closed";
          if (userBounty.progress === 1) bountyStatus = "Bounty finished";
          return _react["default"].createElement("div", {
            className: "col-md-4",
            style: {
              marginBottom: "40px"
            }
          }, _react["default"].createElement("div", {
            className: "bounty-card finished-card card-2",
            onClick: this.props.onSelect
          }, _react["default"].createElement("div", {
            className: "bounty-card-header"
          }, _react["default"].createElement("h6", null, bountyStatus), _react["default"].createElement("h6", {
            className: "bounty-card-id"
          }, "#", bounty.id)), _react["default"].createElement("div", {
            className: "bounty-card-title-base"
          }, _react["default"].createElement("div", {
            className: "bounty-card-icon"
          }, _react["default"].createElement(_reactIconsKit.Icon, {
            icon: _trophy.trophy,
            size: 32
          })), _react["default"].createElement("div", {
            className: "bounty-card-title"
          }, _react["default"].createElement("h4", null, task.name))), _react["default"].createElement("div", {
            className: "card-progress-bar"
          }, _react["default"].createElement("div", {
            className: "progress mission-progress"
          }, _react["default"].createElement("div", {
            className: "progress-bar bounty-progress-bar",
            style: {
              width: progress + "%"
            }
          })), _react["default"].createElement("p", {
            className: "bounty-progress-stats"
          }, annotationsDone, " / ", bounty.annotationsTarget, " done"))));
        }
      } else {
        return _react["default"].createElement("div", {
          className: "col-md-4",
          style: {
            marginBottom: "40px"
          }
        }, _react["default"].createElement("div", {
          className: "bounty-card closed-card card-2-static"
        }, _react["default"].createElement("div", {
          className: "bounty-card-header"
        }, _react["default"].createElement("h6", null, "Bounty closed"), _react["default"].createElement("h6", {
          className: "bounty-card-id"
        }, "#", bounty.id)), _react["default"].createElement("div", {
          className: "bounty-card-title-base"
        }, _react["default"].createElement("div", {
          className: "bounty-card-icon"
        }, _react["default"].createElement(_reactIconsKit.Icon, {
          icon: _lock.lock,
          size: 32
        })), _react["default"].createElement("div", {
          className: "bounty-card-title"
        }, _react["default"].createElement("h4", null, task.name)))));
      }
    }
  }]);

  return BountyCard;
}(_react["default"].Component);

exports["default"] = BountyCard;