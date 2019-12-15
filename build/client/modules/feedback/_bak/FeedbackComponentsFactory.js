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