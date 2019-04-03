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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9ib3VudHkvQm91bnR5Q2FyZC5qc3giXSwibmFtZXMiOlsiQm91bnR5Q2FyZCIsImJvdW50eSIsInByb3BzIiwidGFzayIsInVzZXJCb3VudHkiLCJwcm9ncmVzcyIsIk1hdGgiLCJtaW4iLCJhbm5vdGF0aW9uc0RvbmUiLCJhbm5vdGF0aW9uc1RhcmdldCIsInN0YXR1cyIsIm1hcmdpbkJvdHRvbSIsIm9uU2VsZWN0IiwiaWQiLCJ1bmxvY2siLCJuYW1lIiwid2lkdGgiLCJib3VudHlTdGF0dXMiLCJ0cm9waHkiLCJsb2NrIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsVTs7Ozs7Ozs7Ozs7Ozs2QkFFUjtBQUNMLFVBQUlDLE1BQU0sR0FBRyxLQUFLQyxLQUFMLENBQVdELE1BQXhCO0FBQ0EsVUFBSUUsSUFBSSxHQUFHRixNQUFNLENBQUNFLElBQWxCO0FBQ0EsVUFBSUMsVUFBVSxHQUFHSCxNQUFNLENBQUNHLFVBQXhCOztBQUVBLFVBQUlBLFVBQUosRUFBZ0I7QUFDWixZQUFJQyxRQUFRLEdBQUlDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxVQUFVLENBQUNDLFFBQVgsR0FBc0IsR0FBL0IsRUFBb0MsR0FBcEMsQ0FBaEI7QUFDQSxZQUFJRyxlQUFlLEdBQUdGLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxVQUFVLENBQUNJLGVBQXBCLEVBQXFDUCxNQUFNLENBQUNRLGlCQUE1QyxDQUF0Qjs7QUFDQSxZQUFJTCxVQUFVLENBQUNNLE1BQVgsS0FBc0IsS0FBdEIsSUFBK0JOLFVBQVUsQ0FBQ00sTUFBWCxLQUFzQixhQUF6RCxFQUF3RTtBQUNwRSxpQkFDSTtBQUFLLFlBQUEsU0FBUyxFQUFDLFVBQWY7QUFBMEIsWUFBQSxLQUFLLEVBQUU7QUFBQ0MsY0FBQUEsWUFBWSxFQUFFO0FBQWY7QUFBakMsYUFDSTtBQUFLLFlBQUEsU0FBUyxFQUFDLG9CQUFmO0FBQW9DLFlBQUEsT0FBTyxFQUFFLEtBQUtULEtBQUwsQ0FBV1U7QUFBeEQsYUFDSTtBQUFLLFlBQUEsU0FBUyxFQUFDO0FBQWYsYUFDSSxpRUFESixFQUVJO0FBQUksWUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFBaUNYLE1BQU0sQ0FBQ1ksRUFBeEMsQ0FGSixDQURKLEVBS0k7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmLGFBQ0k7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmLGFBQ0ksZ0NBQUMsbUJBQUQ7QUFBTSxZQUFBLElBQUksRUFBRUMsY0FBWjtBQUFvQixZQUFBLElBQUksRUFBRTtBQUExQixZQURKLENBREosRUFLSTtBQUFLLFlBQUEsU0FBUyxFQUFDO0FBQWYsYUFDSSw0Q0FBS1gsSUFBSSxDQUFDWSxJQUFWLENBREosQ0FMSixDQUxKLEVBZUk7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmLGFBQ0k7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmLGFBQ0k7QUFBSyxZQUFBLFNBQVMsRUFBQyxrQ0FBZjtBQUFrRCxZQUFBLEtBQUssRUFBRTtBQUFDQyxjQUFBQSxLQUFLLEVBQUVYLFFBQVEsR0FBQztBQUFqQjtBQUF6RCxZQURKLENBREosRUFJSTtBQUFHLFlBQUEsU0FBUyxFQUFDO0FBQWIsYUFBc0NHLGVBQXRDLFNBQTBEUCxNQUFNLENBQUNRLGlCQUFqRSxVQUpKLENBZkosQ0FESixDQURKO0FBMEJILFNBM0JELE1BMkJPO0FBQ0gsY0FBSVEsWUFBWSxHQUFHLGVBQW5CO0FBQ0EsY0FBSWIsVUFBVSxDQUFDQyxRQUFYLEtBQXdCLENBQTVCLEVBQ0lZLFlBQVksR0FBRyxpQkFBZjtBQUNKLGlCQUNJO0FBQUssWUFBQSxTQUFTLEVBQUMsVUFBZjtBQUEwQixZQUFBLEtBQUssRUFBRTtBQUFDTixjQUFBQSxZQUFZLEVBQUU7QUFBZjtBQUFqQyxhQUNJO0FBQUssWUFBQSxTQUFTLEVBQUMsa0NBQWY7QUFBa0QsWUFBQSxPQUFPLEVBQUUsS0FBS1QsS0FBTCxDQUFXVTtBQUF0RSxhQUNJO0FBQUssWUFBQSxTQUFTLEVBQUM7QUFBZixhQUNJLDRDQUFLSyxZQUFMLENBREosRUFFSTtBQUFJLFlBQUEsU0FBUyxFQUFDO0FBQWQsa0JBQWlDaEIsTUFBTSxDQUFDWSxFQUF4QyxDQUZKLENBREosRUFLSTtBQUFLLFlBQUEsU0FBUyxFQUFDO0FBQWYsYUFDSTtBQUFLLFlBQUEsU0FBUyxFQUFDO0FBQWYsYUFDSSxnQ0FBQyxtQkFBRDtBQUFNLFlBQUEsSUFBSSxFQUFFSyxjQUFaO0FBQW9CLFlBQUEsSUFBSSxFQUFFO0FBQTFCLFlBREosQ0FESixFQUtJO0FBQUssWUFBQSxTQUFTLEVBQUM7QUFBZixhQUNJLDRDQUFLZixJQUFJLENBQUNZLElBQVYsQ0FESixDQUxKLENBTEosRUFlSTtBQUFLLFlBQUEsU0FBUyxFQUFDO0FBQWYsYUFDSTtBQUFLLFlBQUEsU0FBUyxFQUFDO0FBQWYsYUFDSTtBQUFLLFlBQUEsU0FBUyxFQUFDLGtDQUFmO0FBQWtELFlBQUEsS0FBSyxFQUFFO0FBQUNDLGNBQUFBLEtBQUssRUFBRVgsUUFBUSxHQUFDO0FBQWpCO0FBQXpELFlBREosQ0FESixFQUlJO0FBQUcsWUFBQSxTQUFTLEVBQUM7QUFBYixhQUNLRyxlQURMLFNBQ3lCUCxNQUFNLENBQUNRLGlCQURoQyxVQUpKLENBZkosQ0FESixDQURKO0FBNEJIO0FBQ0osT0EvREQsTUErRE87QUFDSCxlQUNJO0FBQUssVUFBQSxTQUFTLEVBQUMsVUFBZjtBQUEwQixVQUFBLEtBQUssRUFBRTtBQUFDRSxZQUFBQSxZQUFZLEVBQUU7QUFBZjtBQUFqQyxXQUNJO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNJO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNJLDREQURKLEVBRUk7QUFBSSxVQUFBLFNBQVMsRUFBQztBQUFkLGdCQUFpQ1YsTUFBTSxDQUFDWSxFQUF4QyxDQUZKLENBREosRUFLSTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDSTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDSSxnQ0FBQyxtQkFBRDtBQUFNLFVBQUEsSUFBSSxFQUFFTSxVQUFaO0FBQWtCLFVBQUEsSUFBSSxFQUFFO0FBQXhCLFVBREosQ0FESixFQUtJO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNJLDRDQUFLaEIsSUFBSSxDQUFDWSxJQUFWLENBREosQ0FMSixDQUxKLENBREosQ0FESjtBQW1CSDtBQUNKOzs7O0VBM0ZtQ0ssa0JBQU1DLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0J1xuaW1wb3J0IHtsb2NrfSBmcm9tICdyZWFjdC1pY29ucy1raXQvZmEvbG9jaydcbmltcG9ydCB7dW5sb2NrfSBmcm9tICdyZWFjdC1pY29ucy1raXQvZmEvdW5sb2NrJ1xuaW1wb3J0IHt0cm9waHl9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9mYS90cm9waHknXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bnR5Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBib3VudHkgPSB0aGlzLnByb3BzLmJvdW50eTtcbiAgICAgICAgbGV0IHRhc2sgPSBib3VudHkudGFzaztcbiAgICAgICAgbGV0IHVzZXJCb3VudHkgPSBib3VudHkudXNlckJvdW50eTtcblxuICAgICAgICBpZiAodXNlckJvdW50eSkge1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gIE1hdGgubWluKHVzZXJCb3VudHkucHJvZ3Jlc3MgKiAxMDAsIDEwMCk7XG4gICAgICAgICAgICBsZXQgYW5ub3RhdGlvbnNEb25lID0gTWF0aC5taW4odXNlckJvdW50eS5hbm5vdGF0aW9uc0RvbmUsIGJvdW50eS5hbm5vdGF0aW9uc1RhcmdldCk7XG4gICAgICAgICAgICBpZiAodXNlckJvdW50eS5zdGF0dXMgPT09IFwiTkVXXCIgfHwgdXNlckJvdW50eS5zdGF0dXMgPT09IFwiSU5fUFJPR1JFU1NcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCI0MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bnR5LWNhcmQgY2FyZC0yXCIgb25DbGljaz17dGhpcy5wcm9wcy5vblNlbGVjdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VudHktY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkJvdW50eSBpbiBwcm9ncmVzczwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJib3VudHktY2FyZC1pZFwiPiN7Ym91bnR5LmlkfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VudHktY2FyZC10aXRsZS1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bnR5LWNhcmQtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17dW5sb2NrfSBzaXplPXszMn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW50eS1jYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Rhc2submFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyBtaXNzaW9uLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBib3VudHktcHJvZ3Jlc3MtYmFyXCIgc3R5bGU9e3t3aWR0aDogcHJvZ3Jlc3MrXCIlXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJvdW50eS1wcm9ncmVzcy1zdGF0c1wiPnthbm5vdGF0aW9uc0RvbmV9IC8ge2JvdW50eS5hbm5vdGF0aW9uc1RhcmdldH0gZG9uZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYm91bnR5U3RhdHVzID0gXCJCb3VudHkgY2xvc2VkXCI7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJCb3VudHkucHJvZ3Jlc3MgPT09IDEpXG4gICAgICAgICAgICAgICAgICAgIGJvdW50eVN0YXR1cyA9IFwiQm91bnR5IGZpbmlzaGVkXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjQwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VudHktY2FyZCBmaW5pc2hlZC1jYXJkIGNhcmQtMlwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25TZWxlY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bnR5LWNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57Ym91bnR5U3RhdHVzfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJib3VudHktY2FyZC1pZFwiPiN7Ym91bnR5LmlkfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VudHktY2FyZC10aXRsZS1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bnR5LWNhcmQtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17dHJvcGh5fSBzaXplPXszMn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW50eS1jYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Rhc2submFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyBtaXNzaW9uLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBib3VudHktcHJvZ3Jlc3MtYmFyXCIgc3R5bGU9e3t3aWR0aDogcHJvZ3Jlc3MrXCIlXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJvdW50eS1wcm9ncmVzcy1zdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fubm90YXRpb25zRG9uZX0gLyB7Ym91bnR5LmFubm90YXRpb25zVGFyZ2V0fSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiNDBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bnR5LWNhcmQgY2xvc2VkLWNhcmQgY2FyZC0yLXN0YXRpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VudHktY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Qm91bnR5IGNsb3NlZDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImJvdW50eS1jYXJkLWlkXCI+I3tib3VudHkuaWR9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VudHktY2FyZC10aXRsZS1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VudHktY2FyZC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2xvY2t9IHNpemU9ezMyfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW50eS1jYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57dGFzay5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19