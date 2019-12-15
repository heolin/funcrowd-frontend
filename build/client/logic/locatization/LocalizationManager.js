"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _LocalizedDictionary = _interopRequireDefault(require("./LocalizedDictionary"));

var _labels = _interopRequireDefault(require("../../resources/texts/labels"));

var _general = _interopRequireDefault(require("../../resources/texts/general"));

var _bounty = _interopRequireDefault(require("../../resources/texts/bounty"));

var _feedback = _interopRequireDefault(require("../../resources/texts/feedback"));

var _login = _interopRequireDefault(require("../../resources/texts/login"));

var _levels = _interopRequireDefault(require("../../resources/texts/levels"));

var _spacecalc = _interopRequireDefault(require("../../resources/texts/spacecalc"));

var _quiz = _interopRequireDefault(require("../../resources/texts/quiz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _LocalizationManager =
/*#__PURE__*/
function () {
  function _LocalizationManager() {
    _classCallCheck(this, _LocalizationManager);

    this.labels = new _LocalizedDictionary["default"](_labels["default"]);
    this.general = new _LocalizedDictionary["default"](_general["default"]);
    this.bounty = _bounty["default"];
    this.bounty.status = new _LocalizedDictionary["default"](_bounty["default"].status);
    this.bounty.labels = new _LocalizedDictionary["default"](_bounty["default"].labels);
    this.spacecalc = _spacecalc["default"];
    this.spacecalc.welcome = new _LocalizedDictionary["default"](_spacecalc["default"].welcome);
    this.levels = new _LocalizedDictionary["default"](_levels["default"]);
    this.feedback = new _LocalizedDictionary["default"](_feedback["default"]);
    this.login = new _LocalizedDictionary["default"](_login["default"]);
    this.quiz = new _LocalizedDictionary["default"](_quiz["default"]);
    this.language = null;
  }

  _createClass(_LocalizationManager, [{
    key: "setup",
    value: function setup(language) {
      this.language = language;
      this.labels.setup(language);
      this.general.setup(language);
      this.bounty.status.setup(language);
      this.bounty.labels.setup(language);
      this.spacecalc.welcome.setup(language);
      this.feedback.setup(language);
      this.levels.setup(language);
      this.login.setup(language);
      this.quiz.setup(language);
    }
  }]);

  return _LocalizationManager;
}();

var LocalizationManager = new _LocalizationManager();
var _default = LocalizationManager;
exports["default"] = _default;