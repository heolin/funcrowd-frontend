"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _undraw_data_trends = _interopRequireDefault(require("../../static/img/pictures/undraw_data_trends.svg"));

var _undraw_studying = _interopRequireDefault(require("../../static/img/pictures/undraw_studying.svg"));

var _appScreen = _interopRequireDefault(require("../../static/img/pictures/appScreen.png"));

var _TextCollapse = require("../../components/TextCollapse");

var _reactRouterDom = require("react-router-dom");

var _Blob = require("../../components/Blob");

var _Footer = require("../../Footer");

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

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

var SpaceCalcWelcomePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SpaceCalcWelcomePage, _React$Component);

  function SpaceCalcWelcomePage() {
    _classCallCheck(this, SpaceCalcWelcomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(SpaceCalcWelcomePage).apply(this, arguments));
  }

  _createClass(SpaceCalcWelcomePage, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "container-fluid base-row-padding"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-md-8 col-12",
        style: {
          marginBottom: "40px"
        }
      }, _react["default"].createElement("h2", {
        style: {
          marginBottom: "30px"
        },
        dangerouslySetInnerHTML: {
          __html: _LocalizationManager["default"].spacecalc.welcome.header1
        }
      }), _react["default"].createElement("p", {
        style: {
          marginBottom: "30px"
        }
      }, _LocalizationManager["default"].spacecalc.welcome.text1), _react["default"].createElement("p", null, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/register"
      }, _react["default"].createElement("button", {
        className: "btn btn-orange-primary login-button",
        style: {
          width: "300px"
        }
      }, _LocalizationManager["default"].spacecalc.welcome.button1)))), _react["default"].createElement("div", {
        className: "col-md-4 col-12",
        style: {
          textAlign: "center",
          marginBottom: "140px"
        }
      }, _react["default"].createElement("img", {
        style: {
          width: "100%",
          maxWidth: "400px"
        },
        src: _undraw_data_trends["default"]
      })), _react["default"].createElement("div", {
        className: "col-md-8 col-12 mx-auto",
        style: {
          marginBottom: "60px",
          position: "relative"
        }
      }, _react["default"].createElement("h3", null, _LocalizationManager["default"].spacecalc.welcome.header2), _react["default"].createElement("p", {
        className: "color-bright-orange"
      }, _LocalizationManager["default"].spacecalc.welcome.text2), _react["default"].createElement(_Blob.Blob, {
        name: "blob1",
        top: "-35px",
        left: "-100px"
      })), _react["default"].createElement("div", {
        className: "col-md-8 col-12 text-right mx-auto",
        style: {
          marginBottom: "60px",
          position: "relative"
        }
      }, _react["default"].createElement("h3", null, _LocalizationManager["default"].spacecalc.welcome.header3), _react["default"].createElement("p", {
        className: "color-bright-orange"
      }, _LocalizationManager["default"].spacecalc.welcome.text3), _react["default"].createElement(_Blob.Blob, {
        name: "blob2",
        top: "-50px",
        right: "100px"
      })), _react["default"].createElement("div", {
        className: "col-md-8 col-12 mx-auto",
        style: {
          marginBottom: "60px",
          position: "relative"
        }
      }, _react["default"].createElement("h3", null, _LocalizationManager["default"].spacecalc.welcome.header4), _react["default"].createElement("p", {
        className: "color-bright-orange"
      }, _LocalizationManager["default"].spacecalc.welcome.text4), _react["default"].createElement(_Blob.Blob, {
        name: "blob3",
        top: "-50px",
        left: "-100px"
      })), _react["default"].createElement("div", {
        className: "col-12 text-center mx-auto",
        style: {
          marginBottom: "60px"
        }
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/register"
      }, _react["default"].createElement("button", {
        className: "btn btn-primary login-button",
        style: {
          width: "300px"
        }
      }, _LocalizationManager["default"].spacecalc.welcome.button2))))), _react["default"].createElement("div", {
        style: {
          backgroundColor: "#e8f4f9"
        }
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row",
        style: {
          padding: "70px 0",
          backgroundColor: "#e8f4f9"
        }
      }, _react["default"].createElement("div", {
        className: "col-md-6 col-12"
      }, _react["default"].createElement("h3", null, _LocalizationManager["default"].spacecalc.welcome.header5), _react["default"].createElement("ul", null, _react["default"].createElement("li", {
        dangerouslySetInnerHTML: {
          __html: _LocalizationManager["default"].spacecalc.welcome.text5_1
        }
      }), _react["default"].createElement("li", {
        dangerouslySetInnerHTML: {
          __html: _LocalizationManager["default"].spacecalc.welcome.text5_2
        }
      }), _react["default"].createElement("li", {
        dangerouslySetInnerHTML: {
          __html: _LocalizationManager["default"].spacecalc.welcome.text5_3
        }
      }))), _react["default"].createElement("div", {
        className: "col-md-6 col-12"
      }, _react["default"].createElement("h3", null, _LocalizationManager["default"].spacecalc.welcome.header6), _react["default"].createElement("p", {
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement("div", {
        className: "text-center shadow-light-2",
        style: {
          background: "white",
          padding: "20px"
        }
      }, _react["default"].createElement("div", {
        className: "d-inline-block ",
        style: {
          width: "33.3%",
          verticalAlign: "top"
        }
      }, _react["default"].createElement("div", {
        style: {
          fontSize: "32px",
          marginBottom: "-10px"
        }
      }, _react["default"].createElement("b", null, _LocalizationManager["default"].spacecalc.welcome.label1_Value)), _react["default"].createElement("div", {
        className: "small"
      }, _LocalizationManager["default"].spacecalc.welcome.label1_Text)), _react["default"].createElement("div", {
        className: "d-inline-block ",
        style: {
          width: "33.3%",
          verticalAlign: "top"
        }
      }, _react["default"].createElement("div", {
        style: {
          fontSize: "32px",
          marginBottom: "-10px"
        }
      }, _react["default"].createElement("b", null, _LocalizationManager["default"].spacecalc.welcome.label2_Value)), _react["default"].createElement("div", {
        className: "small"
      }, _LocalizationManager["default"].spacecalc.welcome.label2_Text)), _react["default"].createElement("div", {
        className: "d-inline-block ",
        style: {
          width: "33.3%",
          verticalAlign: "top"
        }
      }, _react["default"].createElement("div", {
        style: {
          fontSize: "32px",
          marginBottom: "-10px"
        }
      }, _react["default"].createElement("b", null, _LocalizationManager["default"].spacecalc.welcome.label3_Value)), _react["default"].createElement("div", {
        className: "small"
      }, _LocalizationManager["default"].spacecalc.welcome.label3_Text))))))), _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-12 text-center",
        style: {
          marginTop: "40px",
          position: "relative",
          padding: "60px 0"
        }
      }, _react["default"].createElement("h2", null, _LocalizationManager["default"].spacecalc.welcome.header7), _react["default"].createElement("div", {
        className: "mx-auto",
        style: {
          maxWidth: "800px",
          width: "90vw",
          marginTop: "30px"
        }
      }, _react["default"].createElement(_Blob.Blob, {
        className: "blob-front blob-relative",
        name: "blob4",
        left: "-30px"
      }, _react["default"].createElement("span", {
        className: "color-bright-orange font-weight-bold small",
        style: {
          width: "150px",
          top: "40px",
          left: "20px"
        }
      }, _LocalizationManager["default"].spacecalc.welcome.label4)), _react["default"].createElement(_Blob.Blob, {
        className: "blob-front blob-relative",
        name: "blob5",
        right: "170px",
        top: "100px",
        align: "right"
      }, _react["default"].createElement("span", {
        className: "color-bright-orange font-weight-bold small",
        style: {
          width: "150px",
          top: "20px",
          left: "50px"
        }
      }, _LocalizationManager["default"].spacecalc.welcome.label5)), _react["default"].createElement(_Blob.Blob, {
        className: "blob-front blob-relative",
        name: "blob4",
        top: "300px",
        left: "-30px"
      }, _react["default"].createElement("span", {
        className: "color-bright-orange font-weight-bold small",
        style: {
          width: "150px",
          top: "30px",
          left: "15px"
        }
      }, _LocalizationManager["default"].spacecalc.welcome.label6)), _react["default"].createElement("img", {
        src: _appScreen["default"],
        style: {
          width: "100%"
        }
      })))), _react["default"].createElement("div", {
        style: {
          backgroundColor: "#e8f4f9"
        }
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row",
        style: {
          padding: "60px 0 40px 0"
        }
      }, _react["default"].createElement("div", {
        className: "col-12 text-center"
      }, _react["default"].createElement("h3", {
        style: {
          marginBottom: "20px"
        },
        dangerouslySetInnerHTML: {
          __html: _LocalizationManager["default"].spacecalc.welcome.header8
        }
      }), _react["default"].createElement(_reactRouterDom.Link, {
        to: "/register"
      }, _react["default"].createElement("button", {
        className: "btn btn-orange-primary login-button",
        style: {
          width: "300px"
        }
      }, _LocalizationManager["default"].spacecalc.welcome.button3)))))), _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row",
        style: {
          padding: "60px 0"
        }
      }, _react["default"].createElement("div", {
        className: "col-md-6 col-12",
        style: {
          textAlign: "center",
          marginBottom: "10px"
        }
      }, _react["default"].createElement("img", {
        style: {
          width: "100%",
          maxWidth: "400px"
        },
        src: _undraw_studying["default"]
      })), _react["default"].createElement("div", {
        className: "col-md-6 col-12",
        style: {
          marginBottom: "40px",
          marginTop: "30px"
        }
      }, _react["default"].createElement("h2", {
        style: {
          marginBottom: "20px"
        }
      }, _LocalizationManager["default"].spacecalc.welcome.header9), _react["default"].createElement("p", {
        dangerouslySetInnerHTML: {
          __html: _LocalizationManager["default"].spacecalc.welcome.text9
        }
      })))), _react["default"].createElement(_Footer.Footer, null));
    }
  }]);

  return SpaceCalcWelcomePage;
}(_react["default"].Component);

exports["default"] = SpaceCalcWelcomePage;