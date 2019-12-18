"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProgressBar = _interopRequireDefault(require("../../components/ProgressBar"));

var _Breadcrumbs = require("../../components/Breadcrumbs");

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _Icons = require("../../components/Icons");

var _Image = require("../../components/Image");

var _UserManager = _interopRequireDefault(require("../../logic/UserManager"));

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

var ProfilePageHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfilePageHeader, _React$Component);

  function ProfilePageHeader() {
    _classCallCheck(this, ProfilePageHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProfilePageHeader).apply(this, arguments));
  }

  _createClass(ProfilePageHeader, [{
    key: "render",
    value: function render() {
      var image = require("../../static/img/missions/office.png");

      return _react["default"].createElement("div", {
        className: "tasks-header-bar card-2-static row"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row tasks-header"
      }, _react["default"].createElement("div", {
        className: "col-md-12"
      }, _react["default"].createElement("div", {
        className: "tasks-header-info"
      }, _react["default"].createElement("div", {
        className: "tasks-header-info-text color-white small",
        style: {
          marginTop: "10px"
        }
      }, _react["default"].createElement("h3", null, "Cze\u015B\u0107 ", _UserManager["default"].user.username), _react["default"].createElement("p", null, "\u015Aled\u017A postepy swojej nauki!", _react["default"].createElement("br", null), "W Twoim profilu zawarli\u015Bmy najwa\u017Cniejsze informacje dotycz\u0105ce Twojej aktywno\u015Bci."))), _react["default"].createElement(_Image.CircleImage, {
        className: "tasks-header-image d-none d-sm-none d-md-block",
        image: image
      })))));
    }
  }]);

  return ProfilePageHeader;
}(_react["default"].Component);

exports["default"] = ProfilePageHeader;