"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FieldFeedbackPanel = _interopRequireDefault(require("./FieldFeedbackPanel"));

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

var FeedbackPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FeedbackPanel, _React$Component);

  function FeedbackPanel(props) {
    var _this;

    _classCallCheck(this, FeedbackPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FeedbackPanel).call(this, props));
    _this.onAccept = _this.onAccept.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FeedbackPanel, [{
    key: "onAccept",
    value: function onAccept() {
      this.props.onAccept();
    }
  }, {
    key: "getFields",
    value: function getFields() {
      var feedback = this.props.feedback;
      var fields_values = {};

      for (var field_name in feedback.scores) {
        if (field_name in fields_values === false) fields_values[field_name] = [];

        for (var key in feedback.scores[field_name]) {
          var value = feedback.scores[field_name][key];
          fields_values[field_name][key] = value;
        }
      }

      for (var _field_name in feedback.values) {
        for (var _key in feedback.values[_field_name]) {
          var _value = feedback.values[_field_name][_key];
          fields_values[_field_name][_key] = _value;
        }
      }

      var fields = [];

      for (var _field_name2 in fields_values) {
        var scores = fields_values[_field_name2];
        fields.push(_react["default"].createElement(_FieldFeedbackPanel["default"], {
          key: _field_name2,
          field_name: _field_name2,
          annotation: this.props.annotation,
          values: scores
        }));
      }

      return fields;
    }
  }, {
    key: "getAverageScore",
    value: function getAverageScore() {
      var scores = {};
      var feedback = this.props.feedback;

      for (var field_name in feedback.scores) {
        scores[field_name] = 0;

        for (var key in feedback.scores[field_name]) {
          var value = feedback.scores[field_name][key];
          scores[field_name] += value;
        }

        scores[field_name] = scores[field_name] / Object.keys(feedback.scores[field_name]).length;
      }

      return scores;
    }
  }, {
    key: "render",
    value: function render() {
      var feedback = this.props.feedback;
      var scores = this.getAverageScore();
      var maxScore = Math.max(Object.values(scores));
      var summary = null;
      if (maxScore === 0) summary = _react["default"].createElement("span", null, "Your answer was not correct");else summary = _react["default"].createElement("span", null, "Your answer was correct");
      var fields = this.getFields();
      return _react["default"].createElement("div", {
        className: "modal-base"
      }, _react["default"].createElement("div", {
        className: "shadow"
      }), _react["default"].createElement("div", {
        className: "feedback-panel card-3-static"
      }, _react["default"].createElement("h4", {
        style: {
          textAlign: "center"
        }
      }, "Feedback"), _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-md-12",
        style: {
          marginTop: "10px",
          marginBottom: "20px",
          textAlign: "center"
        }
      }, summary)), fields, _react["default"].createElement("div", {
        style: {
          textAlign: "center"
        }
      }, _react["default"].createElement("button", {
        className: "btn btn-green",
        style: {
          width: "120px"
        },
        onClick: this.onAccept
      }, "Ok"))));
    }
  }]);

  return FeedbackPanel;
}(_react["default"].Component);

exports["default"] = FeedbackPanel;