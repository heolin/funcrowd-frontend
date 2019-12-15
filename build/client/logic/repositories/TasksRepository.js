"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _Task = _interopRequireDefault(require("../models/tasks/Task"));

var _ConfigManager = _interopRequireDefault(require("../config/ConfigManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TasksRepository =
/*#__PURE__*/
function () {
  function TasksRepository() {
    _classCallCheck(this, TasksRepository);
  }

  _createClass(TasksRepository, null, [{
    key: "list",
    value: function list(missionId) {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/missions/' + missionId + "/tasks/", _SessionManager["default"].config).then(function (response) {
        var tasks = response.data.map(function (task_data) {
          return _Task["default"].fromJson(task_data);
        });
        return tasks;
      });
    }
  }, {
    key: "get",
    value: function get(taskId) {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/tasks/' + taskId + '/', _SessionManager["default"].config).then(function (response) {
        var task = _Task["default"].fromJson(response.data);

        return task;
      });
    }
  }]);

  return TasksRepository;
}();

exports["default"] = TasksRepository;