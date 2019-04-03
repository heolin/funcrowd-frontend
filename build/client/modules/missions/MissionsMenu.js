"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MissionCard = _interopRequireDefault(require("./MissionCard"));

var _MissionRepository = _interopRequireDefault(require("../../logic/repositories/MissionRepository"));

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

var MissionsMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MissionsMenu, _React$Component);

  function MissionsMenu(props) {
    var _this;

    _classCallCheck(this, MissionsMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MissionsMenu).call(this, props));
    _this.state = {
      missions: null,
      loading: true
    };
    return _this;
  }

  _createClass(MissionsMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _MissionRepository["default"].all().then(function (missions) {
        _this2.setState({
          loading: false,
          missions: missions
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
        var missions = this.state.missions.map(function (mission, i) {
          return _react["default"].createElement(_MissionCard["default"], {
            key: i,
            mission: mission,
            onSelect: function onSelect() {
              return _this3.props.onMissionSelect(mission);
            }
          });
        });
        panel = _react["default"].createElement("div", {
          className: "row"
        }, missions);
      }

      return panel;
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "row base-row"
      }, _react["default"].createElement("div", {
        className: "col-sm-12 missions-header-bar"
      }, _react["default"].createElement("h3", null, "A witojcie w Excelu tutorial"), _react["default"].createElement("p", null, "Najlepszy lorem ipsum tutorial do excela, wszystkiego sie tu nauczycie.")), _react["default"].createElement("div", {
        className: "col-sm-12"
      }, this.getCardsPanel()));
    }
  }]);

  return MissionsMenu;
}(_react["default"].Component);

exports["default"] = MissionsMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9taXNzaW9ucy9NaXNzaW9uc01lbnUuanN4Il0sIm5hbWVzIjpbIk1pc3Npb25zTWVudSIsInByb3BzIiwic3RhdGUiLCJtaXNzaW9ucyIsImxvYWRpbmciLCJNaXNzaW9uUmVwb3NpdG9yeSIsImFsbCIsInRoZW4iLCJzZXRTdGF0ZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInBhbmVsIiwibWFwIiwibWlzc2lvbiIsImkiLCJvbk1pc3Npb25TZWxlY3QiLCJnZXRDYXJkc1BhbmVsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsWTs7Ozs7QUFFakIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixzRkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxRQUFRLEVBQUUsSUFERDtBQUVUQyxNQUFBQSxPQUFPLEVBQUU7QUFGQSxLQUFiO0FBRmU7QUFNbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2hCQyxvQ0FBa0JDLEdBQWxCLEdBQ0tDLElBREwsQ0FDVSxVQUFDSixRQUFELEVBQWM7QUFDaEIsUUFBQSxNQUFJLENBQUNLLFFBQUwsQ0FBYztBQUNWSixVQUFBQSxPQUFPLEVBQUUsS0FEQztBQUVWRCxVQUFBQSxRQUFRLEVBQUVBO0FBRkEsU0FBZDtBQUlILE9BTkwsV0FPVyxVQUFDTSxLQUFELEVBQVc7QUFDZCxRQUFBLE1BQUksQ0FBQ0QsUUFBTCxDQUFjO0FBQUVKLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQWQ7O0FBQ0FNLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsT0FWTDtBQVdIOzs7b0NBRWU7QUFBQTs7QUFDWixVQUFJRyxLQUFLLEdBQUcsSUFBWjs7QUFDQSxVQUFJLEtBQUtWLEtBQUwsQ0FBV0UsT0FBZixFQUF3QjtBQUNwQlEsUUFBQUEsS0FBSyxHQUFHLHVEQUFSO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsWUFBSVQsUUFBUSxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQlUsR0FBcEIsQ0FDWCxVQUFDQyxPQUFELEVBQVVDLENBQVY7QUFBQSxpQkFBZ0IsZ0NBQUMsdUJBQUQ7QUFBYSxZQUFBLEdBQUcsRUFBRUEsQ0FBbEI7QUFBcUIsWUFBQSxPQUFPLEVBQUVELE9BQTlCO0FBQ2EsWUFBQSxRQUFRLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNiLEtBQUwsQ0FBV2UsZUFBWCxDQUEyQkYsT0FBM0IsQ0FBTjtBQUFBO0FBRHZCLFlBQWhCO0FBQUEsU0FEVyxDQUFmO0FBR0FGLFFBQUFBLEtBQUssR0FDRDtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDS1QsUUFETCxDQURKO0FBS0g7O0FBQ0QsYUFBT1MsS0FBUDtBQUNIOzs7NkJBRVE7QUFFTCxhQUNJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNJLDJFQURKLEVBRUkscUhBRkosQ0FESixFQUtJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNLLEtBQUtLLGFBQUwsRUFETCxDQUxKLENBREo7QUFXSDs7OztFQXREcUNDLGtCQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTWlzc2lvbkNhcmQgZnJvbSBcIi4vTWlzc2lvbkNhcmRcIjtcbmltcG9ydCBNaXNzaW9uUmVwb3NpdG9yeSBmcm9tIFwiLi4vLi4vbG9naWMvcmVwb3NpdG9yaWVzL01pc3Npb25SZXBvc2l0b3J5XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2lvbnNNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1pc3Npb25zOiBudWxsLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIE1pc3Npb25SZXBvc2l0b3J5LmFsbCgpXG4gICAgICAgICAgICAudGhlbigobWlzc2lvbnMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1pc3Npb25zOiBtaXNzaW9uc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENhcmRzUGFuZWwoKSB7XG4gICAgICAgIGxldCBwYW5lbCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHBhbmVsID0gPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWlzc2lvbnMgPSB0aGlzLnN0YXRlLm1pc3Npb25zLm1hcChcbiAgICAgICAgICAgICAgICAobWlzc2lvbiwgaSkgPT4gPE1pc3Npb25DYXJkIGtleT17aX0gbWlzc2lvbj17bWlzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiB0aGlzLnByb3BzLm9uTWlzc2lvblNlbGVjdChtaXNzaW9uKX0vPik7XG4gICAgICAgICAgICBwYW5lbCA9IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7bWlzc2lvbnN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYW5lbDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGJhc2Utcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgbWlzc2lvbnMtaGVhZGVyLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+QSB3aXRvamNpZSB3IEV4Y2VsdSB0dXRvcmlhbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5hamxlcHN6eSBsb3JlbSBpcHN1bSB0dXRvcmlhbCBkbyBleGNlbGEsIHdzenlzdGtpZWdvIHNpZSB0dSBuYXVjenljaWUuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldENhcmRzUGFuZWwoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==