"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TasksRepository = _interopRequireDefault(require("../../logic/repositories/TasksRepository"));

var _TaskCard = _interopRequireDefault(require("./TaskCard"));

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

var TasksMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TasksMenu, _React$Component);

  function TasksMenu(props) {
    var _this;

    _classCallCheck(this, TasksMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TasksMenu).call(this, props));
    _this.state = {
      loading: true,
      tasks: null
    };
    return _this;
  }

  _createClass(TasksMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mission !== prevProps.mission) this.checkState();
    }
  }, {
    key: "checkState",
    value: function checkState() {
      var _this2 = this;

      if (this.props.mission === null) {
        var missionId = this.props.match.params.id;

        _MissionRepository["default"].get(missionId).then(function (mission) {
          _this2.props.onMissionSelect(mission);
        });
      } else this.getTasksList();
    }
  }, {
    key: "getTasksList",
    value: function getTasksList() {
      var _this3 = this;

      console.log("getting tasks list");
      var mission = this.props.mission;

      _TasksRepository["default"].list(mission.id).then(function (tasks) {
        _this3.setState({
          loading: false,
          tasks: tasks
        });
      })["catch"](function (error) {
        _this3.setState({
          loading: false
        });

        console.log(error);
      });
    }
  }, {
    key: "getCardsPanel",
    value: function getCardsPanel() {
      var _this4 = this;

      if (this.state.loading) {
        return _react["default"].createElement("div", null, "Loading");
      }

      var tasks = null;
      if (this.state.tasks !== null) tasks = this.state.tasks.map(function (task, i) {
        return _react["default"].createElement(_TaskCard["default"], {
          key: i,
          task: task,
          onSelect: function onSelect() {
            return _this4.props.onTaskSelect(task);
          }
        });
      });
      return _react["default"].createElement("div", {
        className: "row"
      }, tasks);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "row base-row"
      }, _react["default"].createElement("div", {
        className: "col-sm-12"
      }, _react["default"].createElement("h3", null, "Taski")), _react["default"].createElement("div", {
        className: "col-sm-12"
      }, this.getCardsPanel()));
    }
  }]);

  return TasksMenu;
}(_react["default"].Component);

exports["default"] = TasksMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy90YXNrcy9UYXNrc01lbnUuanN4Il0sIm5hbWVzIjpbIlRhc2tzTWVudSIsInByb3BzIiwic3RhdGUiLCJsb2FkaW5nIiwidGFza3MiLCJjaGVja1N0YXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJtaXNzaW9uIiwibWlzc2lvbklkIiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsIk1pc3Npb25SZXBvc2l0b3J5IiwiZ2V0IiwidGhlbiIsIm9uTWlzc2lvblNlbGVjdCIsImdldFRhc2tzTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJUYXNrc1JlcG9zaXRvcnkiLCJsaXN0Iiwic2V0U3RhdGUiLCJlcnJvciIsIm1hcCIsInRhc2siLCJpIiwib25UYXNrU2VsZWN0IiwiZ2V0Q2FyZHNQYW5lbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLFM7Ozs7O0FBRWpCLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsbUZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsT0FBTyxFQUFFLElBREE7QUFFVEMsTUFBQUEsS0FBSyxFQUFFO0FBRkUsS0FBYjtBQUZlO0FBTWxCOzs7O3dDQUVtQjtBQUNoQixXQUFLQyxVQUFMO0FBQ0g7Ozt1Q0FFa0JDLFMsRUFBV0MsUyxFQUFXQyxRLEVBQVU7QUFDL0MsVUFBSSxLQUFLUCxLQUFMLENBQVdRLE9BQVgsS0FBdUJILFNBQVMsQ0FBQ0csT0FBckMsRUFDSSxLQUFLSixVQUFMO0FBQ1A7OztpQ0FFWTtBQUFBOztBQUNULFVBQUksS0FBS0osS0FBTCxDQUFXUSxPQUFYLEtBQXVCLElBQTNCLEVBQWlDO0FBQzdCLFlBQUlDLFNBQVMsR0FBRyxLQUFLVCxLQUFMLENBQVdVLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCQyxFQUF4Qzs7QUFDQUMsc0NBQWtCQyxHQUFsQixDQUFzQkwsU0FBdEIsRUFDS00sSUFETCxDQUNVLFVBQUNQLE9BQUQsRUFBYTtBQUNmLFVBQUEsTUFBSSxDQUFDUixLQUFMLENBQVdnQixlQUFYLENBQTJCUixPQUEzQjtBQUNILFNBSEw7QUFJSCxPQU5ELE1BT0ksS0FBS1MsWUFBTDtBQUNQOzs7bUNBRWM7QUFBQTs7QUFDWEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQSxVQUFJWCxPQUFPLEdBQUcsS0FBS1IsS0FBTCxDQUFXUSxPQUF6Qjs7QUFDQVksa0NBQWdCQyxJQUFoQixDQUFxQmIsT0FBTyxDQUFDSSxFQUE3QixFQUNLRyxJQURMLENBQ1UsVUFBQ1osS0FBRCxFQUFXO0FBQ2IsUUFBQSxNQUFJLENBQUNtQixRQUFMLENBQWM7QUFDVnBCLFVBQUFBLE9BQU8sRUFBRSxLQURDO0FBRVZDLFVBQUFBLEtBQUssRUFBRUE7QUFGRyxTQUFkO0FBSUgsT0FOTCxXQU9XLFVBQUNvQixLQUFELEVBQVc7QUFDZCxRQUFBLE1BQUksQ0FBQ0QsUUFBTCxDQUFjO0FBQUVwQixVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUFkOztBQUNBZ0IsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLEtBQVo7QUFDSCxPQVZMO0FBWUg7OztvQ0FFZTtBQUFBOztBQUNaLFVBQUksS0FBS3RCLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUNwQixlQUNJLHVEQURKO0FBR0g7O0FBRUQsVUFBSUMsS0FBSyxHQUFHLElBQVo7QUFDQSxVQUFJLEtBQUtGLEtBQUwsQ0FBV0UsS0FBWCxLQUFxQixJQUF6QixFQUNJQSxLQUFLLEdBQUcsS0FBS0YsS0FBTCxDQUFXRSxLQUFYLENBQWlCcUIsR0FBakIsQ0FDSixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxlQUFhLGdDQUFDLG9CQUFEO0FBQVUsVUFBQSxHQUFHLEVBQUVBLENBQWY7QUFBa0IsVUFBQSxJQUFJLEVBQUVELElBQXhCO0FBQ00sVUFBQSxRQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUN6QixLQUFMLENBQVcyQixZQUFYLENBQXdCRixJQUF4QixDQUFOO0FBQUE7QUFEaEIsVUFBYjtBQUFBLE9BREksQ0FBUjtBQUlKLGFBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0t0QixLQURMLENBREo7QUFLSDs7OzZCQUVRO0FBQ0wsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSSxvREFESixDQURKLEVBSUk7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0ssS0FBS3lCLGFBQUwsRUFETCxDQUpKLENBREo7QUFVSDs7OztFQTlFa0NDLGtCQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVGFza3NSZXBvc2l0b3J5IGZyb20gXCIuLi8uLi9sb2dpYy9yZXBvc2l0b3JpZXMvVGFza3NSZXBvc2l0b3J5XCI7XG5pbXBvcnQgVGFza0NhcmQgZnJvbSBcIi4vVGFza0NhcmRcIjtcbmltcG9ydCBNaXNzaW9uUmVwb3NpdG9yeSBmcm9tIFwiLi4vLi4vbG9naWMvcmVwb3NpdG9yaWVzL01pc3Npb25SZXBvc2l0b3J5XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3NNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICB0YXNrczogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWlzc2lvbiAhPT0gcHJldlByb3BzLm1pc3Npb24pXG4gICAgICAgICAgICB0aGlzLmNoZWNrU3RhdGUoKTtcbiAgICB9XG5cbiAgICBjaGVja1N0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5taXNzaW9uID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgbWlzc2lvbklkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQ7XG4gICAgICAgICAgICBNaXNzaW9uUmVwb3NpdG9yeS5nZXQobWlzc2lvbklkKVxuICAgICAgICAgICAgICAgIC50aGVuKChtaXNzaW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25NaXNzaW9uU2VsZWN0KG1pc3Npb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHRoaXMuZ2V0VGFza3NMaXN0KCk7XG4gICAgfVxuXG4gICAgZ2V0VGFza3NMaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgdGFza3MgbGlzdFwiKTtcbiAgICAgICAgbGV0IG1pc3Npb24gPSB0aGlzLnByb3BzLm1pc3Npb247XG4gICAgICAgIFRhc2tzUmVwb3NpdG9yeS5saXN0KG1pc3Npb24uaWQpXG4gICAgICAgICAgICAudGhlbigodGFza3MpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRhc2tzOiB0YXNrc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZ2V0Q2FyZHNQYW5lbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0YXNrcyA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRhc2tzICE9PSBudWxsKVxuICAgICAgICAgICAgdGFza3MgPSB0aGlzLnN0YXRlLnRhc2tzLm1hcChcbiAgICAgICAgICAgICAgICAodGFzaywgaSkgPT4gPFRhc2tDYXJkIGtleT17aX0gdGFzaz17dGFza31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IHRoaXMucHJvcHMub25UYXNrU2VsZWN0KHRhc2spfS8+KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICB7dGFza3N9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBiYXNlLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5UYXNraTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0Q2FyZHNQYW5lbCgpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19