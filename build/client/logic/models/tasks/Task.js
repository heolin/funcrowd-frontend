"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Task =
/*#__PURE__*/
function () {
  function Task(id, name, description, instruction) {
    _classCallCheck(this, Task);

    this.id = id;
    this.name = name;
    this.description = description;
    this.instruction = instruction;
  }

  _createClass(Task, null, [{
    key: "fromJson",
    value: function fromJson(task_data) {
      var task = new Task(task_data.id, task_data.name, task_data.description, task_data.instruction);
      return task;
    }
  }]);

  return Task;
}();

exports["default"] = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvbW9kZWxzL3Rhc2tzL1Rhc2suanMiXSwibmFtZXMiOlsiVGFzayIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW5zdHJ1Y3Rpb24iLCJ0YXNrX2RhdGEiLCJ0YXNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7QUFDakIsZ0JBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxXQUF0QixFQUFtQ0MsV0FBbkMsRUFBZ0Q7QUFBQTs7QUFDNUMsU0FBS0gsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNIOzs7OzZCQUVlQyxTLEVBQVc7QUFDdkIsVUFBSUMsSUFBSSxHQUFHLElBQUlOLElBQUosQ0FDUEssU0FBUyxDQUFDSixFQURILEVBRVBJLFNBQVMsQ0FBQ0gsSUFGSCxFQUdQRyxTQUFTLENBQUNGLFdBSEgsRUFJUEUsU0FBUyxDQUFDRCxXQUpILENBQVg7QUFNQSxhQUFPRSxJQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgaW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUpzb24odGFza19kYXRhKSB7XG4gICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICB0YXNrX2RhdGEuaWQsXG4gICAgICAgICAgICB0YXNrX2RhdGEubmFtZSxcbiAgICAgICAgICAgIHRhc2tfZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRhc2tfZGF0YS5pbnN0cnVjdGlvblxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG59XG4iXX0=