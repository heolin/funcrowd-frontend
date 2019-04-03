"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Annotation = _interopRequireDefault(require("./Annotation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnnotationResponse =
/*#__PURE__*/
function () {
  function AnnotationResponse(annotation, isVerified, errors) {
    _classCallCheck(this, AnnotationResponse);

    this.annotation = annotation;
    this.isVerified = isVerified;
    this.errors = errors;
  }

  _createClass(AnnotationResponse, null, [{
    key: "fromJson",
    value: function fromJson(response_data) {
      var annotationResponse = new AnnotationResponse(_Annotation["default"].fromJson(response_data.annotation), response_data.is_verified, response_data.errors);
      return annotationResponse;
    }
  }]);

  return AnnotationResponse;
}();

exports["default"] = AnnotationResponse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvbW9kZWxzL2Fubm90YXRpb24vQW5ub3RhdGlvblJlc3BvbnNlLmpzIl0sIm5hbWVzIjpbIkFubm90YXRpb25SZXNwb25zZSIsImFubm90YXRpb24iLCJpc1ZlcmlmaWVkIiwiZXJyb3JzIiwicmVzcG9uc2VfZGF0YSIsImFubm90YXRpb25SZXNwb25zZSIsIkFubm90YXRpb24iLCJmcm9tSnNvbiIsImlzX3ZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7QUFDakIsOEJBQVlDLFVBQVosRUFBd0JDLFVBQXhCLEVBQW9DQyxNQUFwQyxFQUE0QztBQUFBOztBQUN4QyxTQUFLRixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozs7NkJBRWVDLGEsRUFBZTtBQUMzQixVQUFJQyxrQkFBa0IsR0FBRyxJQUFJTCxrQkFBSixDQUNyQk0sdUJBQVdDLFFBQVgsQ0FBb0JILGFBQWEsQ0FBQ0gsVUFBbEMsQ0FEcUIsRUFFckJHLGFBQWEsQ0FBQ0ksV0FGTyxFQUdyQkosYUFBYSxDQUFDRCxNQUhPLENBQXpCO0FBS0EsYUFBT0Usa0JBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbm5vdGF0aW9uIGZyb20gXCIuL0Fubm90YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ub3RhdGlvblJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3Rvcihhbm5vdGF0aW9uLCBpc1ZlcmlmaWVkLCBlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uID0gYW5ub3RhdGlvbjtcbiAgICAgICAgdGhpcy5pc1ZlcmlmaWVkID0gaXNWZXJpZmllZDtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21Kc29uKHJlc3BvbnNlX2RhdGEpIHtcbiAgICAgICAgbGV0IGFubm90YXRpb25SZXNwb25zZSA9IG5ldyBBbm5vdGF0aW9uUmVzcG9uc2UoXG4gICAgICAgICAgICBBbm5vdGF0aW9uLmZyb21Kc29uKHJlc3BvbnNlX2RhdGEuYW5ub3RhdGlvbiksXG4gICAgICAgICAgICByZXNwb25zZV9kYXRhLmlzX3ZlcmlmaWVkLFxuICAgICAgICAgICAgcmVzcG9uc2VfZGF0YS5lcnJvcnNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGFubm90YXRpb25SZXNwb25zZTtcbiAgICB9XG59XG4iXX0=