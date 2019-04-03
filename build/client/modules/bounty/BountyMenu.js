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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9ib3VudHkvQm91bnR5TWVudS5qc3giXSwibmFtZXMiOlsiQm91bnR5TWVudSIsInByb3BzIiwic3RhdGUiLCJib3VudGllcyIsImxvYWRpbmciLCJCb3VudHlSZXBvc2l0b3J5IiwiYWxsIiwidGhlbiIsInNldFN0YXRlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicGFuZWwiLCJtYXAiLCJib3VudHkiLCJpIiwib25Cb3VudHlTZWxlY3QiLCJnZXRDYXJkc1BhbmVsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsVTs7Ozs7QUFFakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixvRkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxRQUFRLEVBQUUsSUFERDtBQUVUQyxNQUFBQSxPQUFPLEVBQUU7QUFGQSxLQUFiO0FBRmU7QUFNbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2hCQyxtQ0FBaUJDLEdBQWpCLEdBQ0tDLElBREwsQ0FDVSxVQUFDSixRQUFELEVBQWM7QUFDaEIsUUFBQSxNQUFJLENBQUNLLFFBQUwsQ0FBYztBQUNWSixVQUFBQSxPQUFPLEVBQUUsS0FEQztBQUVWRCxVQUFBQSxRQUFRLEVBQUVBO0FBRkEsU0FBZDtBQUlILE9BTkwsV0FNYSxVQUFDTSxLQUFELEVBQVc7QUFDaEIsUUFBQSxNQUFJLENBQUNELFFBQUwsQ0FBYztBQUFFSixVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUFkOztBQUNBTSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILE9BVEw7QUFVSDs7O29DQUVlO0FBQUE7O0FBQ1osVUFBSUcsS0FBSyxHQUFHLElBQVo7O0FBQ0EsVUFBSSxLQUFLVixLQUFMLENBQVdFLE9BQWYsRUFBd0I7QUFDcEJRLFFBQUFBLEtBQUssR0FBRyx1REFBUjtBQUNILE9BRkQsTUFFTztBQUNILFlBQUlULFFBQVEsR0FBRyxLQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JVLEdBQXBCLENBQ1gsVUFBQ0MsTUFBRCxFQUFTQyxDQUFUO0FBQUEsaUJBQWUsZ0NBQUMsc0JBQUQ7QUFBWSxZQUFBLEdBQUcsRUFBRUEsQ0FBakI7QUFBb0IsWUFBQSxNQUFNLEVBQUVELE1BQTVCO0FBQ2MsWUFBQSxRQUFRLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNiLEtBQUwsQ0FBV2UsY0FBWCxDQUEwQkYsTUFBMUIsQ0FBTjtBQUFBO0FBRHhCLFlBQWY7QUFBQSxTQURXLENBQWY7QUFHQUYsUUFBQUEsS0FBSyxHQUNEO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNLVCxRQURMLENBREo7QUFLSDs7QUFDRCxhQUFPUyxLQUFQO0FBQ0g7Ozs2QkFFUTtBQUNMLGFBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0ksdURBREosRUFFSSxnUkFGSixFQUtJLDRHQUxKLENBREosRUFRSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSyxLQUFLSyxhQUFMLEVBREwsQ0FSSixDQURKO0FBY0g7Ozs7RUF2RG1DQyxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEJvdW50eUNhcmQgZnJvbSBcIi4vQm91bnR5Q2FyZFwiO1xuaW1wb3J0IEJvdW50eVJlcG9zaXRvcnkgZnJvbSBcIi4uLy4uL2xvZ2ljL3JlcG9zaXRvcmllcy9Cb3VudHlSZXBvc2l0b3J5XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bnR5TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBib3VudGllczogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgQm91bnR5UmVwb3NpdG9yeS5hbGwoKVxuICAgICAgICAgICAgLnRoZW4oKGJvdW50aWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBib3VudGllczogYm91bnRpZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q2FyZHNQYW5lbCgpIHtcbiAgICAgICAgbGV0IHBhbmVsID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgcGFuZWwgPSA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBib3VudGllcyA9IHRoaXMuc3RhdGUuYm91bnRpZXMubWFwKFxuICAgICAgICAgICAgICAgIChib3VudHksIGkpID0+IDxCb3VudHlDYXJkIGtleT17aX0gYm91bnR5PXtib3VudHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gdGhpcy5wcm9wcy5vbkJvdW50eVNlbGVjdChib3VudHkpfS8+KTtcbiAgICAgICAgICAgIHBhbmVsID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHtib3VudGllc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhbmVsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGJhc2Utcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgYm91bnRpZXMtaGVhZGVyLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+Qm91bnRpZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5UYXNrcyBwZXJmb3JtZWQgaW4gdGhlIGZvcm0gb2YgYm91bnR5IGhhdmUgdGhlIHJlcXVpcmVkIG51bWJlciBvZiBpdGVtcyB0byBwZXJmb3JtLlxuICAgICAgICAgICAgICAgICAgICAgICAgQWZ0ZXIgY29tcGxldGluZyB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIGl0ZW1zLCB0aGUgcmV3YXJkIGNvZGUgd2lsbCBiZSB1bmxvY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWNoIHlvdSBjYW4gdXNlIHRvIGNsb3NlIHRoZSB0YXNrIGFuZCByZWRlZW0gdGhlIHJld2FyZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNsaWNrIG9uIHRoZSBjYXJkIGJlbG93IHRvIGJlZ2luIHlvdXIgd29yayBvbiBzZWxlY3RlZCBib3VudHkuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldENhcmRzUGFuZWwoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==