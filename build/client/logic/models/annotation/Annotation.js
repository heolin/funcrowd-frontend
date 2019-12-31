"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Feedback = _interopRequireDefault(require("./Feedback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Annotation =
/*#__PURE__*/
function () {
  function Annotation(itemId, data, feedback, skipped, attempt) {
    _classCallCheck(this, Annotation);

    this.itemId = itemId;
    this.data = data;
    this.feedback = feedback;
    this.skipped = skipped;
    this.attempt = attempt;
  }

  _createClass(Annotation, null, [{
    key: "fromJson",
    value: function fromJson(annotation_data) {
      var annotation = new Annotation(annotation_data.item_id, annotation_data.data, _Feedback["default"].fromJson(annotation_data.feedback), annotation_data.skipped, annotation_data.attempt);
      return annotation;
    }
  }]);

  return Annotation;
}();

exports["default"] = Annotation;