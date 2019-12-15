"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactPose = _interopRequireDefault(require("react-pose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListContainer = _reactPose["default"].div({
  enter: {
    staggerChildren: 50
  },
  exit: {
    staggerChildren: 20,
    staggerDirection: -1
  },
  initialPose: 'exit'
});

var _default = ListContainer;
exports["default"] = _default;