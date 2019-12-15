"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MissionProgress =
/*#__PURE__*/
function () {
  function MissionProgress(id, mission, tasks_done, tasks_count, progress, status) {
    _classCallCheck(this, MissionProgress);

    this.id = id;
    this.mission = mission;
    this.tasks_done = tasks_done;
    this.tasks_count = tasks_count;
    this.progress = progress;
    this.status = status;
  }

  _createClass(MissionProgress, null, [{
    key: "fromJson",
    value: function fromJson(data) {
      var progress = new MissionProgress(data.id, data.mission, data.tasks_done, data.tasks_count, data.progress, data.status);
      return progress;
    }
  }]);

  return MissionProgress;
}();

exports["default"] = MissionProgress;