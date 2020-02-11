"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Annotation = _interopRequireDefault(require("./Annotation"));

var _Exp = _interopRequireDefault(require("./Exp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnnotationResponse =
/*#__PURE__*/
function () {
  function AnnotationResponse(annotation, isVerified, errors, expBase, expBonus, nextItemId) {
    _classCallCheck(this, AnnotationResponse);

    this.annotation = annotation;
    this.isVerified = isVerified;
    this.nextItemId = nextItemId;
    this.errors = errors;
    this.exp = new _Exp["default"](expBase, expBonus);
  }

  _createClass(AnnotationResponse, [{
    key: "isLastItem",
    get: function get() {
      return this.nextItemId === null;
    }
  }], [{
    key: "fromJson",
    value: function fromJson(responseData) {
      var annotationResponse = new AnnotationResponse(_Annotation["default"].fromJson(responseData.annotation), responseData.is_verified, responseData.errors, responseData.exp_base, responseData.exp_bonus, responseData.next_item_id);
      return annotationResponse;
    }
  }]);

  return AnnotationResponse;
}();

exports["default"] = AnnotationResponse;