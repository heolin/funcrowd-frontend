"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TaskProgress =
/*#__PURE__*/
function () {
  function TaskProgress(id, task, items_done, items_count, progress, status, maxScore, score) {
    _classCallCheck(this, TaskProgress);

    this.id = id;
    this.task = task;
    this.items_done = items_done;
    this.items_count = items_count;
    this.progress = progress;
    this.status = status;
    this.maxScore = maxScore;
    this.score = score;
  }

  _createClass(TaskProgress, null, [{
    key: "fromJson",
    value: function fromJson(data) {
      var progress = new TaskProgress(data.id, data.task, data.items_done, data.items_count, data.progress, data.status, data.max_score, data.score);
      return progress;
    }
  }]);

  return TaskProgress;
}();

exports["default"] = TaskProgress;