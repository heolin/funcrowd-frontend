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
  function Task(id, name, description, instruction, keywords) {
    _classCallCheck(this, Task);

    this.id = id;
    this.name = name;
    this.description = description;
    this.instruction = instruction;
    this.keywords = keywords;
  }

  _createClass(Task, null, [{
    key: "fromJson",
    value: function fromJson(task_data) {
      var task = new Task(task_data.id, task_data.name, task_data.description, task_data.instruction, task_data.keywords);
      return task;
    }
  }]);

  return Task;
}();

exports["default"] = Task;