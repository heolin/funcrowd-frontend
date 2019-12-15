"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _reactIconsKit = require("react-icons-kit");

var _close = require("react-icons-kit/fa/close");

var _BlackBackground = _interopRequireDefault(require("../../components/BlackBackground"));

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

var RewardCodesListPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RewardCodesListPanel, _React$Component);

  function RewardCodesListPanel(props) {
    var _this;

    _classCallCheck(this, RewardCodesListPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RewardCodesListPanel).call(this, props));
    _this.state = {
      bounty: null
    };
    return _this;
  }

  _createClass(RewardCodesListPanel, [{
    key: "render",
    value: function render() {
      var codes = null;

      if (this.state.bounty && this.state.bounty.userBounty && this.state.bounty.userBounty.rewardsList.length > 0) {
        codes = this.state.bounty.userBounty.rewardsList.map(function (code) {
          return _react["default"].createElement("li", {
            key: code
          }, _react["default"].createElement("span", {
            className: "badge badge-green",
            style: {
              fontSize: "14px"
            }
          }, code));
        });
      }

      return _react["default"].createElement("div", {
        className: "modal-base"
      }, _react["default"].createElement(_BlackBackground["default"], {
        className: "black-background",
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        },
        pose: this.props.isOpen ? 'open' : 'closed',
        onClick: this.props.onClose
      }), _react["default"].createElement(Modal, {
        className: "modal-window bounty-rewards-codes-panel card-3-static",
        pose: this.props.isOpen ? 'open' : 'closed',
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        }
      }, _react["default"].createElement("button", {
        className: "btn btn-default",
        style: {
          width: "40px",
          "float": "right",
          padding: "0px 8px 5px 10px"
        },
        onClick: this.props.onClose
      }, _react["default"].createElement(_reactIconsKit.Icon, {
        icon: _close.close,
        size: 24,
        style: {
          marginLeft: "-5px"
        }
      })), _react["default"].createElement("h3", {
        style: {
          marginBottom: "40px"
        }
      }, "Rewards codes"), _react["default"].createElement("ol", null, codes)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.bounty !== state.bounty || props.bounty && state.bounty && props.bounty.userBounty && state.bounty.userBounty && props.bounty.userBounty.rewardsList.length !== state.bounty.userBounty.rewardsList.length) {
        return {
          bounty: props.bounty
        };
      }

      return null;
    }
  }]);

  return RewardCodesListPanel;
}(_react["default"].Component);

exports["default"] = RewardCodesListPanel;