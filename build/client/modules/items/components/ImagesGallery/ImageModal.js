"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _reactIconsKit = require("react-icons-kit");

var _close = require("react-icons-kit/fa/close");

var _BlackBackground = _interopRequireDefault(require("../../../../components/BlackBackground"));

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

var Modal = _reactPose["default"].div({
  open: {
    opacity: 1.0,
    scale: 1.0,
    x: "-50%",
    y: "-50%"
  },
  closed: {
    opacity: 0,
    scale: 0.0,
    x: "-50%",
    y: "-50%"
  }
});

var ImageModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageModal, _React$Component);

  function ImageModal(props) {
    var _this;

    _classCallCheck(this, ImageModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageModal).call(this, props));
    _this.state = {
      image: null
    };
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ImageModal, [{
    key: "onClose",
    value: function onClose() {
      this.props.onClose();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "modal-base"
      }, _react["default"].createElement(_BlackBackground["default"], {
        className: "black-background",
        style: {
          pointerEvents: this.props.image ? "auto" : "none"
        },
        pose: this.props.image ? 'open' : 'closed',
        onClick: this.onClose
      }), _react["default"].createElement(Modal, {
        className: "gallery-image-modal card-3-static",
        style: {
          pointerEvents: this.props.image ? "auto" : "none"
        },
        pose: this.props.image ? 'open' : 'closed'
      }, _react["default"].createElement("img", {
        src: this.state.image,
        style: {
          maxHeight: "75vh",
          maxWidth: "90vw"
        }
      }), _react["default"].createElement("div", {
        style: {
          position: "absolute",
          top: "-40px",
          right: "-50px",
          width: "40px"
        },
        onClick: this.onClose
      }, _react["default"].createElement(_reactIconsKit.Icon, {
        icon: _close.close,
        size: 32,
        style: {
          marginLeft: "-5px",
          color: "white"
        }
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.image !== state.image && props.image) {
        return {
          image: props.image
        };
      }

      return null;
    }
  }]);

  return ImageModal;
}(_react["default"].Component);

exports["default"] = ImageModal;