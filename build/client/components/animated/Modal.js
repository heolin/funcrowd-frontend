"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Modal = _reactPose["default"].div({
  open: {
    opacity: 1.0,
    x: "-50%",
    y: "-50%"
  },
  closed: {
    opacity: 0,
    x: "-50%",
    y: "-40%"
  }
});

var _default = Modal;
exports["default"] = _default;