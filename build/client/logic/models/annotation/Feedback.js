"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Feedback =
/*#__PURE__*/
function () {
  function Feedback(scores, values) {
    _classCallCheck(this, Feedback);

    this.scores = scores;
    this.values = values;
  }

  _createClass(Feedback, null, [{
    key: "fromJson",
    value: function fromJson(feedback_data) {
      if (feedback_data) {
        var feedback = new Feedback(feedback_data.scores, feedback_data.values);
        return feedback;
      }
    }
  }]);

  return Feedback;
}();

exports["default"] = Feedback;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvbW9kZWxzL2Fubm90YXRpb24vRmVlZGJhY2suanMiXSwibmFtZXMiOlsiRmVlZGJhY2siLCJzY29yZXMiLCJ2YWx1ZXMiLCJmZWVkYmFja19kYXRhIiwiZmVlZGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7OztBQUNqQixvQkFBWUMsTUFBWixFQUFvQkMsTUFBcEIsRUFBNEI7QUFBQTs7QUFDeEIsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozs7NkJBRWVDLGEsRUFBZTtBQUMzQixVQUFJQSxhQUFKLEVBQW1CO0FBQ2YsWUFBSUMsUUFBUSxHQUFHLElBQUlKLFFBQUosQ0FDWEcsYUFBYSxDQUFDRixNQURILEVBRVhFLGFBQWEsQ0FBQ0QsTUFGSCxDQUFmO0FBSUEsZUFBT0UsUUFBUDtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRiYWNrIHtcbiAgICBjb25zdHJ1Y3RvcihzY29yZXMsIHZhbHVlcykge1xuICAgICAgICB0aGlzLnNjb3JlcyA9IHNjb3JlcztcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGZlZWRiYWNrX2RhdGEpIHtcbiAgICAgICAgaWYgKGZlZWRiYWNrX2RhdGEpIHtcbiAgICAgICAgICAgIGxldCBmZWVkYmFjayA9IG5ldyBGZWVkYmFjayhcbiAgICAgICAgICAgICAgICBmZWVkYmFja19kYXRhLnNjb3JlcyxcbiAgICAgICAgICAgICAgICBmZWVkYmFja19kYXRhLnZhbHVlc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBmZWVkYmFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==