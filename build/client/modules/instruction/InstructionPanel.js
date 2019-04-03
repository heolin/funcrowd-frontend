"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIconsKit = require("react-icons-kit");

var _close = require("react-icons-kit/fa/close");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InstructionPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InstructionPanel, _React$Component);

  function InstructionPanel(props) {
    var _this;

    _classCallCheck(this, InstructionPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InstructionPanel).call(this, props));
    _this.state = {};
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InstructionPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "onClose",
    value: function onClose() {
      this.props.onClose();
    }
  }, {
    key: "render",
    value: function render() {
      var task = this.props.task;
      return _react["default"].createElement("div", {
        className: "modal-base"
      }, _react["default"].createElement("div", {
        className: "shadow",
        onClick: this.onClose
      }), _react["default"].createElement("div", {
        className: "instruction-panel col-md-8 col-sm-10 card-3-static"
      }, _react["default"].createElement("button", {
        className: "btn btn-default",
        style: {
          width: "40px",
          "float": "right",
          paddingTop: "4px"
        },
        onClick: this.onClose
      }, _react["default"].createElement(_reactIconsKit.Icon, {
        icon: _close.close,
        size: 24,
        style: {
          marginLeft: "-5px"
        }
      })), _react["default"].createElement("h6", null, "Instruction"), _react["default"].createElement("h4", {
        style: {
          marginBottom: "20px"
        }
      }, task.name), _react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: task.instruction
        }
      })));
    }
  }]);

  return InstructionPanel;
}(_react["default"].Component);

exports["default"] = InstructionPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pbnN0cnVjdGlvbi9JbnN0cnVjdGlvblBhbmVsLmpzeCJdLCJuYW1lcyI6WyJJbnN0cnVjdGlvblBhbmVsIiwicHJvcHMiLCJzdGF0ZSIsIm9uQ2xvc2UiLCJiaW5kIiwidGFzayIsIndpZHRoIiwicGFkZGluZ1RvcCIsImNsb3NlIiwibWFyZ2luTGVmdCIsIm1hcmdpbkJvdHRvbSIsIm5hbWUiLCJfX2h0bWwiLCJpbnN0cnVjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLGdCOzs7OztBQUVqQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDBGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFHQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLCtCQUFmO0FBTGU7QUFNbEI7Ozs7d0NBRW1CLENBQ25COzs7OEJBRVM7QUFDTixXQUFLSCxLQUFMLENBQVdFLE9BQVg7QUFDSDs7OzZCQUVRO0FBQ0wsVUFBSUUsSUFBSSxHQUFHLEtBQUtKLEtBQUwsQ0FBV0ksSUFBdEI7QUFFQSxhQUNJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsUUFBZjtBQUF3QixRQUFBLE9BQU8sRUFBRSxLQUFLRjtBQUF0QyxRQURKLEVBR0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0k7QUFBUSxRQUFBLFNBQVMsRUFBQyxpQkFBbEI7QUFDUSxRQUFBLEtBQUssRUFBRTtBQUFDRyxVQUFBQSxLQUFLLEVBQUUsTUFBUjtBQUFlLG1CQUFPLE9BQXRCO0FBQStCQyxVQUFBQSxVQUFVLEVBQUU7QUFBM0MsU0FEZjtBQUNrRSxRQUFBLE9BQU8sRUFBRSxLQUFLSjtBQURoRixTQUVJLGdDQUFDLG1CQUFEO0FBQU0sUUFBQSxJQUFJLEVBQUVLLFlBQVo7QUFBbUIsUUFBQSxJQUFJLEVBQUUsRUFBekI7QUFBNkIsUUFBQSxLQUFLLEVBQUU7QUFBQ0MsVUFBQUEsVUFBVSxFQUFFO0FBQWI7QUFBcEMsUUFGSixDQURKLEVBS0ksMERBTEosRUFNSTtBQUFJLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLFlBQVksRUFBRTtBQUFmO0FBQVgsU0FDQ0wsSUFBSSxDQUFDTSxJQUROLENBTkosRUFTSTtBQUFLLFFBQUEsdUJBQXVCLEVBQUU7QUFBQ0MsVUFBQUEsTUFBTSxFQUFFUCxJQUFJLENBQUNRO0FBQWQ7QUFBOUIsUUFUSixDQUhKLENBREo7QUFpQkg7Ozs7RUFyQ3lDQyxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ3JlYWN0LWljb25zLWtpdCdcbmltcG9ydCB7Y2xvc2V9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9mYS9jbG9zZSdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvblBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB0YXNrID0gdGhpcy5wcm9wcy50YXNrO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJhc2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvd1wiIG9uQ2xpY2s9e3RoaXMub25DbG9zZX0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0cnVjdGlvbi1wYW5lbCBjb2wtbWQtOCBjb2wtc20tMTAgY2FyZC0zLXN0YXRpY1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCI0MHB4XCIsZmxvYXQ6IFwicmlnaHRcIiwgcGFkZGluZ1RvcDogXCI0cHhcIn19IG9uQ2xpY2s9e3RoaXMub25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtjbG9zZX0gc2l6ZT17MjR9IHN0eWxlPXt7bWFyZ2luTGVmdDogXCItNXB4XCJ9fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8aDY+SW5zdHJ1Y3Rpb248L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIHt0YXNrLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRhc2suaW5zdHJ1Y3Rpb259fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbiJdfQ==