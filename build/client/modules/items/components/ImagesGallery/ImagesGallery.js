"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _Image = _interopRequireDefault(require("./Image"));

var _ImageModal = _interopRequireDefault(require("./ImageModal"));

var _ScreenBreakpoints = _interopRequireDefault(require("../../../../utils/ScreenBreakpoints"));

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

var dragging = false;

var ImagesGallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImagesGallery, _React$Component);

  function ImagesGallery(props) {
    var _this;

    _classCallCheck(this, ImagesGallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImagesGallery).call(this, props));
    _this.state = {
      selectedImage: null
    };
    _this.settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      beforeChange: function beforeChange() {
        return dragging = true;
      },
      afterChange: function afterChange() {
        return dragging = false;
      },
      responsive: [{
        breakpoint: _ScreenBreakpoints["default"].xl,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      }, {
        breakpoint: _ScreenBreakpoints["default"].lg,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }]
    };
    _this.onImageClick = _this.onImageClick.bind(_assertThisInitialized(_this));
    _this.onImageModalClose = _this.onImageModalClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ImagesGallery, [{
    key: "onImageClick",
    value: function onImageClick(url) {
      if (dragging) return;
      this.setState({
        selectedImage: url
      });
    }
  }, {
    key: "onImageModalClose",
    value: function onImageModalClose() {
      this.setState({
        selectedImage: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.value) return null;
      var items = [];
      if (this.props.value) items = this.props.value.map(function (url) {
        return _react["default"].createElement(_Image["default"], {
          key: url,
          url: url,
          onClick: function onClick() {
            return _this2.onImageClick(url);
          }
        });
      });
      this.settings['slidesToShow'] = Math.min(items.length, 3);
      var label;
      if (this.props.label) label = _react["default"].createElement("label", null, _react["default"].createElement("strong", null, this.props.label));
      return _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(_ImageModal["default"], {
        image: this.state.selectedImage,
        onClose: this.onImageModalClose
      }), label, _react["default"].createElement("div", null, _react["default"].createElement(_reactSlick["default"], this.settings, items)));
    }
  }]);

  return ImagesGallery;
}(_react["default"].Component);

exports["default"] = ImagesGallery;