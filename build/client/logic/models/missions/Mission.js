"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mission =
/*#__PURE__*/
function () {
  function Mission(id, name) {
    _classCallCheck(this, Mission);

    this.id = id;
    this.name = name;
  }

  _createClass(Mission, null, [{
    key: "fromJson",
    value: function fromJson(mission_data) {
      var mission = new Mission(mission_data.id, mission_data.name);
      return mission;
    }
  }]);

  return Mission;
}();

exports["default"] = Mission;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvbW9kZWxzL21pc3Npb25zL01pc3Npb24uanMiXSwibmFtZXMiOlsiTWlzc2lvbiIsImlkIiwibmFtZSIsIm1pc3Npb25fZGF0YSIsIm1pc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE87OztBQUNqQixtQkFBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0I7QUFBQTs7QUFDbEIsU0FBS0QsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7Ozs7NkJBRWVDLFksRUFBYztBQUMxQixVQUFJQyxPQUFPLEdBQUcsSUFBSUosT0FBSixDQUNWRyxZQUFZLENBQUNGLEVBREgsRUFFVkUsWUFBWSxDQUFDRCxJQUZILENBQWQ7QUFJQSxhQUFPRSxPQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3Npb24ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUpzb24obWlzc2lvbl9kYXRhKSB7XG4gICAgICAgIGxldCBtaXNzaW9uID0gbmV3IE1pc3Npb24oXG4gICAgICAgICAgICBtaXNzaW9uX2RhdGEuaWQsXG4gICAgICAgICAgICBtaXNzaW9uX2RhdGEubmFtZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbWlzc2lvbjtcbiAgICB9XG59XG4iXX0=