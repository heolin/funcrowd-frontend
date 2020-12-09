"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));

var _DetectIE = _interopRequireDefault(require("./utils/DetectIE"));

var _NotSupported = _interopRequireDefault(require("./NotSupported"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var result = _DetectIE["default"].detectIE();

if (result) _reactDom["default"].render(_react["default"].createElement(_NotSupported["default"], null), document.getElementById('root'));else {
  var element = _react["default"].createElement(_ErrorBoundary["default"], null, _react["default"].createElement(_App["default"], null));

  _reactDom["default"].render(element, document.getElementById("root"));
}