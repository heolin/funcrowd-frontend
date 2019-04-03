"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReferenceScoreField = _interopRequireDefault(require("./components/ReferenceScoreField"));

var _ReferenceValueField = _interopRequireDefault(require("./components/ReferenceValueField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Components = {
  "ReferenceScore": _ReferenceScoreField["default"],
  "ReferenceValue": _ReferenceValueField["default"]
};
var NamesMap = {
  "ReferenceScore": "Score",
  "ReferenceValue": "Correct answer"
};

var FeedbackComponentsFactory =
/*#__PURE__*/
function () {
  function FeedbackComponentsFactory() {
    _classCallCheck(this, FeedbackComponentsFactory);
  }

  _createClass(FeedbackComponentsFactory, [{
    key: "create",
    value: function create(field_name, name, value, annotation) {
      if (value != null) {
        var component = Components[name];
        return _react["default"].createElement(component, {
          key: name,
          name: NamesMap[name],
          field_name: field_name,
          value: value,
          annotation: annotation
        });
      } else {
        return null;
      }
    }
  }]);

  return FeedbackComponentsFactory;
}();

exports["default"] = FeedbackComponentsFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9mZWVkYmFjay9GZWVkYmFja0NvbXBvbmVudHNGYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudHMiLCJSZWZlcmVuY2VTY29yZUZpZWxkIiwiUmVmZXJlbmNlVmFsdWVGaWVsZCIsIk5hbWVzTWFwIiwiRmVlZGJhY2tDb21wb25lbnRzRmFjdG9yeSIsImZpZWxkX25hbWUiLCJuYW1lIiwidmFsdWUiLCJhbm5vdGF0aW9uIiwiY29tcG9uZW50IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQSxJQUFJQSxVQUFVLEdBQUc7QUFDYixvQkFBa0JDLCtCQURMO0FBRWIsb0JBQWtCQztBQUZMLENBQWpCO0FBS0EsSUFBSUMsUUFBUSxHQUFHO0FBQ1gsb0JBQWtCLE9BRFA7QUFFWCxvQkFBa0I7QUFGUCxDQUFmOztJQU1xQkMseUI7Ozs7Ozs7OzsyQkFFVkMsVSxFQUFZQyxJLEVBQU1DLEssRUFBT0MsVSxFQUFZO0FBQ3hDLFVBQUlELEtBQUssSUFBSSxJQUFiLEVBQW1CO0FBQ2YsWUFBSUUsU0FBUyxHQUFHVCxVQUFVLENBQUNNLElBQUQsQ0FBMUI7QUFDQSxlQUFPSSxrQkFBTUMsYUFBTixDQUFvQkYsU0FBcEIsRUFBK0I7QUFDbENHLFVBQUFBLEdBQUcsRUFBRU4sSUFENkI7QUFFbENBLFVBQUFBLElBQUksRUFBRUgsUUFBUSxDQUFDRyxJQUFELENBRm9CO0FBR2xDRCxVQUFBQSxVQUFVLEVBQUVBLFVBSHNCO0FBSWxDRSxVQUFBQSxLQUFLLEVBQUVBLEtBSjJCO0FBS2xDQyxVQUFBQSxVQUFVLEVBQUVBO0FBTHNCLFNBQS9CLENBQVA7QUFPSCxPQVRELE1BU087QUFDSCxlQUFPLElBQVA7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmVmZXJlbmNlU2NvcmVGaWVsZCBmcm9tIFwiLi9jb21wb25lbnRzL1JlZmVyZW5jZVNjb3JlRmllbGRcIjtcbmltcG9ydCBSZWZlcmVuY2VWYWx1ZUZpZWxkIGZyb20gXCIuL2NvbXBvbmVudHMvUmVmZXJlbmNlVmFsdWVGaWVsZFwiO1xuXG5cbmxldCBDb21wb25lbnRzID0ge1xuICAgIFwiUmVmZXJlbmNlU2NvcmVcIjogUmVmZXJlbmNlU2NvcmVGaWVsZCxcbiAgICBcIlJlZmVyZW5jZVZhbHVlXCI6IFJlZmVyZW5jZVZhbHVlRmllbGRcbn07XG5cbmxldCBOYW1lc01hcCA9IHtcbiAgICBcIlJlZmVyZW5jZVNjb3JlXCI6IFwiU2NvcmVcIixcbiAgICBcIlJlZmVyZW5jZVZhbHVlXCI6IFwiQ29ycmVjdCBhbnN3ZXJcIlxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWVkYmFja0NvbXBvbmVudHNGYWN0b3J5IHtcblxuICAgIGNyZWF0ZShmaWVsZF9uYW1lLCBuYW1lLCB2YWx1ZSwgYW5ub3RhdGlvbikge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IENvbXBvbmVudHNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICBrZXk6IG5hbWUsXG4gICAgICAgICAgICAgICAgbmFtZTogTmFtZXNNYXBbbmFtZV0sXG4gICAgICAgICAgICAgICAgZmllbGRfbmFtZTogZmllbGRfbmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbjogYW5ub3RhdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==