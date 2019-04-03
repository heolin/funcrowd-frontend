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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9ib3VudHkvQm91bnR5U3RhdHVzLmpzeCJdLCJuYW1lcyI6WyJTdGF0dXNNYXAiLCJmb250U2l6ZSIsIkJvdW50eVN0YXR1cyIsInByb3BzIiwic3RhdGUiLCJsb2FkaW5nIiwidXNlckJvdW50eSIsInByZXZpb3VzU3RhdHVzIiwidXBkYXRlU3RhdHVzIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJpdGVtSWQiLCJib3VudHkiLCJCb3VudHlSZXBvc2l0b3J5IiwiZ2V0U3RhdHVzIiwiYm91bnR5SWQiLCJ0aGVuIiwibmV3U3RhdHVzIiwic3RhdHVzIiwib25Cb3VudHlGaW5pc2hlZCIsInNldFN0YXRlIiwiYm91bnR5U3RhdHVzIiwicHJvZ3Jlc3MiLCJyZXdhcmQiLCJ3aWR0aCIsImFubm90YXRpb25zRG9uZSIsImFubm90YXRpb25zVGFyZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQUlBLFNBQVMsR0FBRztBQUNaLFNBQU87QUFBTSxJQUFBLFNBQVMsRUFBQyxxQkFBaEI7QUFBc0MsSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsUUFBUSxFQUFFO0FBQVg7QUFBN0MsZUFESztBQUVaLGlCQUFlO0FBQU0sSUFBQSxTQUFTLEVBQUMscUJBQWhCO0FBQXNDLElBQUEsS0FBSyxFQUFFO0FBQUNBLE1BQUFBLFFBQVEsRUFBRTtBQUFYO0FBQTdDLG1CQUZIO0FBR1osY0FBWTtBQUFNLElBQUEsU0FBUyxFQUFDLHFCQUFoQjtBQUFzQyxJQUFBLEtBQUssRUFBRTtBQUFDQSxNQUFBQSxRQUFRLEVBQUU7QUFBWDtBQUE3QyxnQkFIQTtBQUlaLFlBQVU7QUFBTSxJQUFBLFNBQVMsRUFBQyx1QkFBaEI7QUFBd0MsSUFBQSxLQUFLLEVBQUU7QUFBQ0EsTUFBQUEsUUFBUSxFQUFFO0FB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Y2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBCb3VudHlSZXBvc2l0b3J5IGZyb20gXCIuLi8uLi9sb2dpYy9yZXBvc2l0b3JpZXMvQm91bnR5UmVwb3NpdG9yeVwiO1xuXG5cbmxldCBTdGF0dXNNYXAgPSB7XG4gICAgXCJORVdcIjogPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utd2FybmluZ1wiIHN0eWxlPXt7Zm9udFNpemU6IFwiMTRweFwifX0+U3RhcnRlZDwvc3Bhbj4sXG4gICAgXCJJTl9QUk9HUkVTU1wiOiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS13YXJuaW5nXCIgc3R5bGU9e3tmb250U2l6ZTogXCIxNHB4XCJ9fT5JbiBwcm9ncmVzczwvc3Bhbj4sXG4gICAgXCJGSU5JU0hFRFwiOiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCIgc3R5bGU9e3tmb250U2l6ZTogXCIxNHB4XCJ9fT5GaW5pc2hlZDwvc3Bhbj4sXG4gICAgXCJDTE9TRURcIjogPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5XCIgc3R5bGU9e3tmb250U2l6ZTogXCIxNHB4XCJ9fT5DbG9zZWQ8L3NwYW4+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VudHlTdGF0dXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXJCb3VudHk6IG51bGwsXG4gICAgICAgICAgICBwcmV2aW91c1N0YXR1czogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXRlbUlkICE9PSBwcmV2UHJvcHMuaXRlbUlkKSB7XG4gICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHVwZGF0ZVN0YXR1cygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYm91bnR5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBCb3VudHlSZXBvc2l0b3J5LmdldFN0YXR1cyh0aGlzLnByb3BzLmJvdW50eUlkKS50aGVuKCh1c2VyQm91bnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1N0YXR1cyA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJCb3VudHkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhdHVzID0gdXNlckJvdW50eS5zdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0dXMgIT0gdGhpcy5zdGF0ZS5wcmV2aW91c1N0YXR1cyAmJiBuZXdTdGF0dXMgPT09IFwiRklOSVNIRURcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Cb3VudHlGaW5pc2hlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckJvdW50eTogdXNlckJvdW50eSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNTdGF0dXM6IG5ld1N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc3RhdHVzID0gbnVsbDtcbiAgICAgICAgbGV0IGJvdW50eVN0YXR1cyA9IFwiQ0xPU0VEXCI7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZXJCb3VudHkpIHtcbiAgICAgICAgICAgIGxldCB1c2VyQm91bnR5ID0gdGhpcy5zdGF0ZS51c2VyQm91bnR5O1xuICAgICAgICAgICAgYm91bnR5U3RhdHVzID0gdXNlckJvdW50eS5zdGF0dXM7XG5cbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHVzZXJCb3VudHkucHJvZ3Jlc3MgKiAxMDA7XG4gICAgICAgICAgICBsZXQgcmV3YXJkID0gPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5XCIgc3R5bGU9e3tmb250U2l6ZTogXCIxNHB4XCJ9fT5Cb3VudHkgbm90IGZpbmlzaGVkPC9zcGFuPjtcbiAgICAgICAgICAgIGlmICh1c2VyQm91bnR5LnJld2FyZClcbiAgICAgICAgICAgICAgICByZXdhcmQgPSA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCIgc3R5bGU9e3tmb250U2l6ZTogXCIxNHB4XCJ9fT57dXNlckJvdW50eS5yZXdhcmR9PC9zcGFuPjtcblxuICAgICAgICAgICAgc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgbWlzc2lvbi1wcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgYm91bnR5LXByb2dyZXNzLWJhclwiIHN0eWxlPXt7d2lkdGg6IHByb2dyZXNzK1wiJVwifX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib3VudHktcHJvZ3Jlc3Mtc3RhdHNcIj57dXNlckJvdW50eS5hbm5vdGF0aW9uc0RvbmV9IC8ge3VzZXJCb3VudHkuYW5ub3RhdGlvbnNUYXJnZXR9IGRvbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPjxiPlJld2FyZCBjb2RlOjwvYj4ge3Jld2FyZH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjYXJkLTEtc3RhdGljIGJvdW50eS1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICA8aDQ+Qm91bnR5IHN0YXR1czwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+PGI+U3RhdGU6PC9iPiB7U3RhdHVzTWFwW2JvdW50eVN0YXR1c119PC9wPlxuICAgICAgICAgICAgICAgIHtzdGF0dXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=