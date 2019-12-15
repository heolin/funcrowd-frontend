"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BlackBackground = _reactPose["default"].div({
  open: {
    opacity: 0.6
  },
  closed: {
    opacity: 0
  }
});

var _default = BlackBackground;
exports["default"] = _default;