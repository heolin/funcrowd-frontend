"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("../../components/animated/Modal"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var QuizFeedbackModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QuizFeedbackModal, _React$Component);

  function QuizFeedbackModal() {
    _classCallCheck(this, QuizFeedbackModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(QuizFeedbackModal).apply(this, arguments));
  }

  _createClass(QuizFeedbackModal, [{
    key: "render",

    /*
    Requires ReferenceScore and ReferenceValue feedbacks
     */
    value: function render() {
      var feedback = this.props.feedback;
      var rows = [];
      var correctAnswers = 0;

      for (var _i = 0, _Object$entries = Object.entries(this.props.annotation.data); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        var score = parseFloat(feedback.scores[key]['ReferenceScore']);
        var reference = feedback.values[key]['ReferenceValue'];
        var feedbackAnswer = null;
        var order = rows.length + 1;

        if (score > 0) {
          feedbackAnswer = _react["default"].createElement("div", {
            className: "color-green"
          }, _LocalizationManager["default"].quiz.correct);
          correctAnswers += 1;
        } else {
          feedbackAnswer = reference.map(function (ref) {
            return _react["default"].createElement("div", {
              className: "color-red"
            }, ref);
          });
        }

        rows.push(_react["default"].createElement("tr", {
          className: "feedback-table-row",
          key: order
        }, _react["default"].createElement("th", {
          className: "color-blue small"
        }, _react["default"].createElement("b", null, _LocalizationManager["default"].quiz.question, " ", order)), _react["default"].createElement("td", null, value), _react["default"].createElement("td", null, feedbackAnswer)));
      }

      return _react["default"].createElement(_Modal["default"], {
        className: "modal-window feedback-panel card-3-static text-center",
        pose: this.props.isOpen ? 'open' : 'closed',
        style: {
          pointerEvents: this.props.isOpen ? "auto" : "none"
        }
      }, _react["default"].createElement("h2", {
        className: "feedback-header"
      }, _LocalizationManager["default"].quiz.answersHeader), _react["default"].createElement("p", null, _LocalizationManager["default"].quiz.answersMessage), _react["default"].createElement("div", null, _react["default"].createElement("table", {
        className: "table little"
      }, _react["default"].createElement("thead", {
        className: "small color-blue"
      }, _react["default"].createElement("tr", null, _react["default"].createElement("th", {
        scope: "col"
      }), _react["default"].createElement("th", {
        scope: "col"
      }, _LocalizationManager["default"].quiz.answer), _react["default"].createElement("th", {
        scope: "col"
      }, _LocalizationManager["default"].quiz.scores))), _react["default"].createElement("tbody", null, rows))), _react["default"].createElement("div", {
        style: {
          marginBottom: "30px"
        }
      }, _react["default"].createElement("div", null, _LocalizationManager["default"].quiz.feedbackMessage), _react["default"].createElement("div", null, _react["default"].createElement("b", null, correctAnswers, " ", _LocalizationManager["default"].quiz.from, " ", rows.length, " ", _LocalizationManager["default"].quiz.questions))), _react["default"].createElement("div", {
        className: "btn btn-primary feedback-button",
        onClick: this.props.onAccept
      }, this.props.buttonText));
    }
  }]);

  return QuizFeedbackModal;
}(_react["default"].Component);

exports["default"] = QuizFeedbackModal;