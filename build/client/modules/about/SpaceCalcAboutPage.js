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
      var registerPanel = null;

      if (_UserManager["default"].user === null) {
        registerPanel = _react["default"].createElement("div", {
          className: "col-12 text-center",
          style: {
            marginTop: "20px",
            marginBottom: "60px"
          }
        }, _react["default"].createElement("h2", null, "Chcesz wzi\u0105\u0107 udzia\u0142?"), _react["default"].createElement(_reactRouterDom.Link, {
          to: "/register"
        }, _react["default"].createElement("button", {
          className: "btn btn-orange-primary login-button",
          style: {
            width: "300px"
          }
        }, "Za\u0142\xF3\u017C konto")));
      }

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
      }, "O projekcie"), _react["default"].createElement("p", null, "Kurs nauki programu Excel zosta\u0142 przygotowany w ramach pracy naukowej wykonywanej przez mgr Dagmar\u0119 Dziedzic, doktorantk\u0119 Wydzia\u0142u Psychologii i Kognitywistyki (UAM Pozna\u0144). Zadania w kursie zosta\u0142y przygotowane w oparciu o ", _react["default"].createElement("a", {
        className: "blue-link",
        href: "https://ecdl.pl/wp-content/uploads/2016/01/b41.pdf",
        target: "_blank"
      }, "sylabus Europejskiego Certyfikatu Umiej\u0119tno\u015Bci Komputerowych"), " i by\u0142y konsultowane ze specjalistami, kt\xF3rzy na co dzie\u0144 korzystaj\u0105 z programu Excel.   Celem tego kursu jest, po pierwsze - przekazanie wiedzy z trzech dzia\u0142\xF3w dotycz\u0105cych obs\u0142ugi programu, a po drugie - zebranie informacji dotycz\u0105cych uczenia si\u0119. Bardziej szczeg\xF3\u0142owe informacje znajdziesz w FAQu poni\u017Cej.")), _react["default"].createElement("div", {
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
        className: "col-md-8",
        style: {
          marginBottom: "40px"
        }
      }, _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Czy kurs jest darmowy?',
        bodyText: "Tak. Udział w kursie jest darmowy.",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Czego się nauczę podczas kursu?',
        bodyText: "Zadania dostępne w kursie zostały przygotowane w oparciu o <a class=\"blue-link\" href=\"https://ecdl.pl/wp-content/uploads/2016/01/b41.pdf\" target=\"_blank\">sylabus Europejskiego Certyfikatu Umiejętności Komputerowych</a> i dotyczą trzech działów nauki programu Excel: reguł arytmetycznych, funkcji , liczb i dat. Po ukończeniu tego kursu będziesz wiedzieć jak prawidłowo odwoływać się do komórek i stosować operatory arytmetyczne. Nauczysz się korzystania z adresowania bezwzględnego, poznasz działanie wielu funkcji oraz nauczysz się formatowania komórek wyświetlając liczby, daty, procenty i waluty.",
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
        bodyText: "Nie. Kurs uczy i porządkuje tylko podstawową wiedzę z zakresu obsługi programu. Po ukończeniu powinieneś/powinnaś swobodnie poruszać się po programie, co będzie stanowić dobry punkt wyjścia do dalszej nauki.",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Na czym będzie polegało badanie?',
        bodyText: "Podczas kursu zostaniesz poproszony/na o wypełnienie kilku ankiet dotyczących Twoich postępów i zaangażowania.",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Jakie dane na mój temat są zbierane przez serwis?',
        bodyText: "W związku z tym, że kurs jest równocześnie badaniem naukowym, konieczna jest możliwość wyciągnięcia wniosków dotyczących nie osób, ale sposobu uczenia się. Dlatego serwis przechowuje podstawowe dane o użytkownikach, takie jak liczba wykonanych zadań, czy szybkość ich rozwiązywania. Wspomniane dane zostaną zakodowane i będą przetwarzane z poszanowaniem Twojej prywatności i anonimowości. Na potrzeby badania i sprawozdania wyników posłużę się jedynie danymi zagregowanymi.",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Czy zadania mogę wykonywać w innym programie niż Excel?',
        bodyText: "Kurs został opracowany w oparciu o program Excel. Używane w zadaniach formuły, czy screeny będą dotyczyły tego programu. Możesz spróbować rozwiązywać zadania w innym programie, ale jego opcje mogą znacząco się różnić. Jeśli nie posiadasz programu, zalecam skorzystanie skorzystać z wersji Excel Online, który przez 30 dni jest za darmo.",
        style: {
          marginBottom: "30px"
        }
      }), _react["default"].createElement(_TextCollapse.TextCollapse, {
        headText: 'Jakie są wymagania techniczne kursu?',
        bodyText: "Kurs został przygotowany z myślą o korzystaniu z niego na komputerach. Serwis może nieprawidłowo wyświetlać się na urządzeniach mobilnych. Do korzystania z kursu zalecana jest przeglądarka Chrome, Chromium albo Mozilla Firefox.  Na przeglądarce Edge,  Internet Explorer oraz Safari serwis może wyświetlać się nieprawidłowo.",
        style: {
          marginBottom: "30px"
        }
      })), registerPanel)), _react["default"].createElement("div", {
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
          paddingTop: "30px",
          paddingBottom: "80px"
        }
      }, _react["default"].createElement("h2", null, "Wykorzystywane zasoby"), _react["default"].createElement("p", null, "Strona korzysta z zasob\xF3w udost\u0119pnionych na licencji Creative Commons. Poznaj artyst\xF3w, z kt\xF3rych prac korzystamy:"), _react["default"].createElement("p", {
        style: {
          margin: "0 -20px"
        }
      }, _react["default"].createElement("a", {
        className: "blue-link",
        style: {
          padding: "0 20px"
        },
        href: "https://pl.freepik.com/freepik"
      }, "freepik"), _react["default"].createElement("a", {
        className: "blue-link",
        style: {
          padding: "0 20px"
        },
        href: "https://undraw.co/"
      }, "undraw.co"), _react["default"].createElement("a", {
        className: "blue-link",
        style: {
          padding: "0 20px"
        },
        href: "https://unsplash.com/"
      }, "unsplash"), _react["default"].createElement("a", {
        className: "blue-link",
        style: {
          padding: "0 20px"
        },
        href: ">https://pl.freepik.com/ijeab"
      }, "ijeab")))))), _react["default"].createElement(_Footer.Footer, null));
    }
  }]);

  return SpaceCalcAboutPage;
}(_react["default"].Component);

exports["default"] = SpaceCalcAboutPage;