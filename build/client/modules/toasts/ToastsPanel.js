"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Toast = _interopRequireDefault(require("./Toast"));

var _ToastsManager = _interopRequireDefault(require("../../logic/ToastsManager"));

var _reactPose = require("react-pose");

var _ListContainer = _interopRequireDefault(require("../../components/animated/ListContainer"));

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

var ToastsPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToastsPanel, _React$Component);

  function ToastsPanel(props) {
    var _this;

    _classCallCheck(this, ToastsPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToastsPanel).call(this, props));
    _this.state = {
      loading: true,
      toasts: []
    };
    _this.onUpdate = _this.onUpdate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ToastsPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _ToastsManager["default"].addToastsChangeHandler(this.onUpdate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _ToastsManager["default"].removeToastsChangeHandler(this.onUpdate);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.setState({
        toasts: _ToastsManager["default"].toasts
      });
    }
  }, {
    key: "render",
    value: function render() {
      var toasts = this.state.toasts.map(function (toast) {
        return _react["default"].createElement(_Toast["default"], {
          key: toast.index,
          type: toast.type,
          message: toast.message,
          onClose: function onClose() {
            return _ToastsManager["default"].removeToast(toast.index);
          }
        });
      });
      return _react["default"].createElement(_reactPose.PoseGroup, null, _react["default"].createElement(_ListContainer["default"], {
        className: "toasts-panel",
        key: "list"
      }, toasts));
    }
  }]);

  return ToastsPanel;
}(_react["default"].Component);

exports["default"] = ToastsPanel;