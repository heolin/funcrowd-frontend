"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BountyCard = _interopRequireDefault(require("./BountyCard"));

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

var BountyMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BountyMenu, _React$Component);

  function BountyMenu(props) {
    var _this;

    _classCallCheck(this, BountyMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BountyMenu).call(this, props));
    _this.state = {
      bounties: null,
      loading: true
    };
    return _this;
  }

  _createClass(BountyMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _BountyRepository["default"].all().then(function (bounties) {
        _this2.setState({
          loading: false,
          bounties: bounties
        });
      })["catch"](function (error) {
        _this2.setState({
          loading: false
        });

        console.log(error);
      });
    }
  }, {
    key: "getCardsPanel",
    value: function getCardsPanel() {
      var _this3 = this;

      var panel = null;

      if (this.state.loading) {
        panel = _react["default"].createElement("div", null, "Loading");
      } else {
        var bounties = this.state.bounties.map(function (bounty, i) {
          return _react["default"].createElement(_BountyCard["default"], {
            key: i,
            bounty: bounty,
            onSelect: function onSelect() {
              return _this3.props.onBountySelect(bounty);
            }
          });
        });
        panel = _react["default"].createElement("div", {
          className: "row"
        }, bounties);
      }

      return panel;
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "row base-row"
      }, _react["default"].createElement("div", {
        className: "col-sm-12 bounties-header-bar"
      }, _react["default"].createElement("h3", null, "Bounties"), _react["default"].createElement("p", null, "Tasks performed in the form of bounty have the required number of items to perform. After completing the appropriate number of items, the reward code will be unlocked, which you can use to close the task and redeem the reward."), _react["default"].createElement("p", null, "Click on the card below to begin your work on selected bounty.")), _react["default"].createElement("div", {
        className: "col-sm-12"
      }, this.getCardsPanel()));
    }
  }]);

  return BountyMenu;
}(_react["default"].Component);

exports["default"] = BountyMenu;