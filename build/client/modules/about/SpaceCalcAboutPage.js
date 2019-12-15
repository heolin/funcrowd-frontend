"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _undraw_new_ideas = _interopRequireDefault(require("../../static/img/pictures/undraw_new_ideas.svg"));

var _TextCollapse = require("../../components/TextCollapse");

var _reactRouterDom = require("react-router-dom");

var _Footer = require("../../Footer");

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

var SpaceCalcAboutPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SpaceCalcAboutPage, _React$Component);

  function SpaceCalcAboutPage(props) {
    var _this;

    _classCallCheck(this, SpaceCalcAboutPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SpaceCalcAboutPage).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(SpaceCalcAboutPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
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
          marginBottom: "20px"
        }
      }, "O projekcie"), _react["default"].createElement("p", null, "Kurs nauki programu Excel zosta\u0142 przygotowany w ramach pracy naukowej. Jego celem jest, po pierwsze - przekazanie wiedzy z trzech dzia\u0142\xF3w dotycz\u0105cych osb\u0142ugi programu, a po drugie - zebranie danych o osobach ucz\u0105cych si\u0119.")), _react["default"].createElement("div", {
        className: "col-md-4 col-12",
        style: {
          textAlign: "center",
          marginBottom: "80px"
        }
      }, _react["default"].createElement("img", {
        style: {
          width: "100%",
          maxWidth: "300px"
        },
        src: _undraw_new_ideas["default"]
      })), _react["default"].createElement("div", {
        className: "col-12 text-center",
        style: {
          marginBottom: "30px"
        }
      }, _react["default"].createElement("h2", null, "Masz pytania? Sprawd\u017A FAQu")), _react["default"].createElement("div", {
        className: "col-md-2"
      }), _react["default"].createElement("div", {
        className: "col-md-8 "
      }, _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Czy kurs jest darmowy?',
        bodyText: "hehe",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Czego się nauczę podczas kursu?',
        bodyText: "hehe",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Dla kogo przeznaczony jest kurs?',
        bodyText: "Kurs jest przeznaczony dla każdego, kto chciałby nauczyć się podstaw programu Excel. Nie jest przeznaczony dla osób, które znają program na poziomie zaawansowanym.",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Czy kurs nauczy mnie wszystkiego?',
        bodyText: "hehe",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Na czym będzie polegało badanie?',
        bodyText: "hehe",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Jakie moje dane są zbierane przez serwis?',
        bodyText: "hehe",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Czy zadania mogę wykonywać w innym programie niż Excel?',
        bodyText: "hehe",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Jakie są wymagania techniczne kursu?',
        bodyText: "hehe",
        style: {
          marginBottom: "30px"
        }
      })), _react["default"].createElement("div", {
        className: "col-12 text-center",
        style: {
          marginTop: "60px"
        }
      }, _react["default"].createElement("h2", null, "Chcesz wzi\u0105\u0107 udzia\u0142?")), _react["default"].createElement("div", {
        className: "col-12 text-center",
        style: {
          marginBottom: "60px"
        }
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/register"
      }, _react["default"].createElement("button", {
        className: "btn btn-orange-primary login-button",
        style: {
          width: "300px"
        }
      }, "Za\u0142\xF3\u017C konto"))))), _react["default"].createElement("div", {
        style: {
          backgroundColor: "#e8f4f9"
        }
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-12",
        style: {
          paddingTop: "30px"
        }
      }, _react["default"].createElement("h2", null, "Wykorzystywane zasoby"), _react["default"].createElement("p", null, "Strona korzysta z zasob\xF3w udost\u0119pnionych na licencji Creative Commons. Poznaj artyst\xF3w, z kt\xF3rych prac korzystamy:"), _react["default"].createElement("p", null, _react["default"].createElement("a", {
        href: "href"
      }, "undraw.co")))))), _react["default"].createElement(_Footer.Footer, null));
    }
  }]);

  return SpaceCalcAboutPage;
}(_react["default"].Component);

exports["default"] = SpaceCalcAboutPage;