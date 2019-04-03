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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9mZWVkYmFjay9GZWVkYmFja1BhbmVsLmpzeCJdLCJuYW1lcyI6WyJGZWVkYmFja1BhbmVsIiwicHJvcHMiLCJvbkFjY2VwdCIsImJpbmQiLCJmZWVkYmFjayIsImZpZWxkc192YWx1ZXMiLCJmaWVsZF9uYW1lIiwic2NvcmVzIiwia2V5IiwidmFsdWUiLCJ2YWx1ZXMiLCJmaWVsZHMiLCJwdXNoIiwiYW5ub3RhdGlvbiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJnZXRBdmVyYWdlU2NvcmUiLCJtYXhTY29yZSIsIk1hdGgiLCJtYXgiLCJzdW1tYXJ5IiwiZ2V0RmllbGRzIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxhOzs7OztBQUVqQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLHVGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBRmU7QUFHbEI7Ozs7K0JBRVU7QUFDUCxXQUFLRixLQUFMLENBQVdDLFFBQVg7QUFDSDs7O2dDQUdXO0FBQ1IsVUFBSUUsUUFBUSxHQUFHLEtBQUtILEtBQUwsQ0FBV0csUUFBMUI7QUFDQSxVQUFJQyxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsV0FBSyxJQUFJQyxVQUFULElBQXVCRixRQUFRLENBQUNHLE1BQWhDLEVBQXdDO0FBQ3BDLFlBQUlELFVBQVUsSUFBSUQsYUFBZCxLQUFnQyxLQUFwQyxFQUNJQSxhQUFhLENBQUNDLFVBQUQsQ0FBYixHQUE0QixFQUE1Qjs7QUFDSixhQUFLLElBQUlFLEdBQVQsSUFBZ0JKLFFBQVEsQ0FBQ0csTUFBVCxDQUFnQkQsVUFBaEIsQ0FBaEIsRUFBNkM7QUFDekMs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Q0MsVUFBQUEsU0FBUyxFQUFFLE1BQVo7QUFBb0JDLFVBQUFBLFlBQVksRUFBRSxNQUFsQztBQUEwQ0YsVUFBQUEsU0FBUyxFQUFFO0FBQXJEO0FBRFosU0FFS0YsT0FGTCxDQURKLENBRkosRUFRS1YsTUFSTCxFQVVJO0FBQUssUUFBQSxLQUFLLEVBQUU7QUFBQ1ksVUFBQUEsU0FBUyxFQUFFO0FBQVo7QUFBWixTQUNJO0FBQVEsUUFBQSxTQUFTLEVBQUMsZUFBbEI7QUFDSyxRQUFBLEtBQUssRUFBRTtBQUFDRyxVQUFBQSxLQUFLLEVBQUU7QUFBUixTQURaO0FBRUssUUFBQSxPQUFPLEVBQUUsS0FBS3hCO0FBRm5CLGNBREosQ0FWSixDQUZKLENBREo7QUF1Qkg7Ozs7RUEvRnNDeUIsa0JBQU1DLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBGaWVsZEZlZWRiYWNrUGFuZWwgZnJvbSBcIi4vRmllbGRGZWVkYmFja1BhbmVsXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVlZGJhY2tQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25BY2NlcHQgPSB0aGlzLm9uQWNjZXB0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25BY2NlcHQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25BY2NlcHQoKTtcbiAgICB9XG5cblxuICAgIGdldEZpZWxkcygpIHtcbiAgICAgICAgbGV0IGZlZWRiYWNrID0gdGhpcy5wcm9wcy5mZWVkYmFjaztcbiAgICAgICAgbGV0IGZpZWxkc192YWx1ZXMgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBmaWVsZF9uYW1lIGluIGZlZWRiYWNrLnNjb3Jlcykge1xuICAgICAgICAgICAgaWYgKGZpZWxkX25hbWUgaW4gZmllbGRzX3ZhbHVlcyA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgZmllbGRzX3ZhbHVlc1tmaWVsZF9uYW1lXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGZlZWRiYWNrLnNjb3Jlc1tmaWVsZF9uYW1lXSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZlZWRiYWNrLnNjb3Jlc1tmaWVsZF9uYW1lXVtrZXldO1xuICAgICAgICAgICAgICAgIGZpZWxkc192YWx1ZXNbZmllbGRfbmFtZV1ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgZmllbGRfbmFtZSBpbiBmZWVkYmFjay52YWx1ZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBmZWVkYmFjay52YWx1ZXNbZmllbGRfbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBmZWVkYmFjay52YWx1ZXNbZmllbGRfbmFtZV1ba2V5XTtcbiAgICAgICAgICAgICAgICBmaWVsZHNfdmFsdWVzW2ZpZWxkX25hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmaWVsZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZmllbGRfbmFtZSBpbiBmaWVsZHNfdmFsdWVzKSB7XG4gICAgICAgICAgICBsZXQgc2NvcmVzID0gZmllbGRzX3ZhbHVlc1tmaWVsZF9uYW1lXTtcbiAgICAgICAgICAgIGZpZWxkcy5wdXNoKDxGaWVsZEZlZWRiYWNrUGFuZWwga2V5PXtmaWVsZF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZF9uYW1lPXtmaWVsZF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uPXt0aGlzLnByb3BzLmFubm90YXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17c2NvcmVzfS8+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGRzO1xuICAgIH1cblxuICAgIGdldEF2ZXJhZ2VTY29yZSgpIHtcbiAgICAgICAgbGV0IHNjb3JlcyA9IHt9O1xuXG4gICAgICAgIGxldCBmZWVkYmFjayA9IHRoaXMucHJvcHMuZmVlZGJhY2s7XG5cbiAgICAgICAgZm9yIChsZXQgZmllbGRfbmFtZSBpbiBmZWVkYmFjay5zY29yZXMpIHtcbiAgICAgICAgICAgIHNjb3Jlc1tmaWVsZF9uYW1lXSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZmVlZGJhY2suc2NvcmVzW2ZpZWxkX25hbWVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZmVlZGJhY2suc2NvcmVzW2ZpZWxkX25hbWVdW2tleV07XG4gICAgICAgICAgICAgICAgc2NvcmVzW2ZpZWxkX25hbWVdICs9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NvcmVzW2ZpZWxkX25hbWVdID0gc2NvcmVzW2ZpZWxkX25hbWVdIC8gT2JqZWN0LmtleXMoZmVlZGJhY2suc2NvcmVzW2ZpZWxkX25hbWVdKS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjb3JlcztcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGZlZWRiYWNrID0gdGhpcy5wcm9wcy5mZWVkYmFjaztcbiAgICAgICAgbGV0IHNjb3JlcyA9IHRoaXMuZ2V0QXZlcmFnZVNjb3JlKCk7XG4gICAgICAgIGxldCBtYXhTY29yZSA9IE1hdGgubWF4KE9iamVjdC52YWx1ZXMoc2NvcmVzKSk7XG4gICAgICAgIGxldCBzdW1tYXJ5ID0gbnVsbDtcbiAgICAgICAgaWYgKG1heFNjb3JlID09PSAwKVxuICAgICAgICAgICAgc3VtbWFyeSA9IDxzcGFuPllvdXIgYW5zd2VyIHdhcyBub3QgY29ycmVjdDwvc3Bhbj47XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN1bW1hcnkgPSA8c3Bhbj5Zb3VyIGFuc3dlciB3YXMgY29ycmVjdDwvc3Bhbj47XG5cbiAgICAgICAgbGV0IGZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmFzZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkYmFjay1wYW5lbCBjYXJkLTMtc3RhdGljXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PkZlZWRiYWNrPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMjBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VtbWFyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2ZpZWxkc31cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEyMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWNjZXB0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPa1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19