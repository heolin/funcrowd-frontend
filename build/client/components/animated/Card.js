"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactPose = _interopRequireDefault(require("react-pose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = _reactPose["default"].div({
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 50,
    opacity: 0
  }
});

var _default = Card;
exports["default"] = _default;