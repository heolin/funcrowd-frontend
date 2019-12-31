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
  function Mission(id, name, description, instruction, tasksCount, achievements) {
    var metadata = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
    var totalExp = arguments.length > 7 ? arguments[7] : undefined;

    _classCallCheck(this, Mission);

    this.id = id;
    this.name = name;
    this.description = description;
    this.instruction = instruction;
    this.tasksCount = tasksCount;
    this.achievements = achievements;
    this.metadata = metadata;
    this.totalExp = totalExp;
  }

  _createClass(Mission, null, [{
    key: "fromJson",
    value: function fromJson(mission_data) {
      var mission = new Mission(mission_data.id, mission_data.name, mission_data.description, mission_data.instruction, mission_data.tasks_count, mission_data.achievements_count, mission_data.metadata, mission_data.total_exp);
      return mission;
    }
  }]);

  return Mission;
}();

exports["default"] = Mission;