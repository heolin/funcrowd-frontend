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
  function Annotation(itemId, data, feedback, skipped) {
    _classCallCheck(this, Annotation);

    this.itemId = itemId;
    this.data = data;
    this.feedback = feedback;
    this.skipped = skipped;
  }

  _createClass(Annotation, null, [{
    key: "fromJson",
    value: function fromJson(annotation_data) {
      var annotation = new Annotation(annotation_data.item_id, annotation_data.data, _Feedback["default"].fromJson(annotation_data.feedback), annotation_data.skipped);
      return annotation;
    }
  }]);

  return Annotation;
}();

exports["default"] = Annotation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvbW9kZWxzL2Fubm90YXRpb24vQW5ub3RhdGlvbi5qcyJdLCJuYW1lcyI6WyJBbm5vdGF0aW9uIiwiaXRlbUlkIiwiZGF0YSIsImZlZWRiYWNrIiwic2tpcHBlZCIsImFubm90YXRpb25fZGF0YSIsImFubm90YXRpb24iLCJpdGVtX2lkIiwiRmVlZGJhY2siLCJmcm9tSnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0lBRXFCQSxVOzs7QUFDakIsc0JBQVlDLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCQyxRQUExQixFQUFvQ0MsT0FBcEMsRUFBNkM7QUFBQTs7QUFDekMsU0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDSDs7Ozs2QkFFZUMsZSxFQUFpQjtBQUM3QixVQUFJQyxVQUFVLEdBQUcsSUFBSU4sVUFBSixDQUNiSyxlQUFlLENBQUNFLE9BREgsRUFFYkYsZUFBZSxDQUFDSCxJQUZILEVBR2JNLHFCQUFTQyxRQUFULENBQWtCSixlQUFlLENBQUNGLFFBQWxDLENBSGEsRUFJYkUsZUFBZSxDQUFDRCxPQUpILENBQWpCO0FBTUEsYUFBT0UsVUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZlZWRiYWNrIGZyb20gXCIuL0ZlZWRiYWNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFubm90YXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1JZCwgZGF0YSwgZmVlZGJhY2ssIHNraXBwZWQpIHtcbiAgICAgICAgdGhpcy5pdGVtSWQgPSBpdGVtSWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZmVlZGJhY2sgPSBmZWVkYmFjaztcbiAgICAgICAgdGhpcy5za2lwcGVkID0gc2tpcHBlZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oYW5ub3RhdGlvbl9kYXRhKSB7XG4gICAgICAgIGxldCBhbm5vdGF0aW9uID0gbmV3IEFubm90YXRpb24oXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2RhdGEuaXRlbV9pZCxcbiAgICAgICAgICAgIGFubm90YXRpb25fZGF0YS5kYXRhLFxuICAgICAgICAgICAgRmVlZGJhY2suZnJvbUpzb24oYW5ub3RhdGlvbl9kYXRhLmZlZWRiYWNrKSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZGF0YS5za2lwcGVkLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gYW5ub3RhdGlvbjtcbiAgICB9XG59XG4iXX0=