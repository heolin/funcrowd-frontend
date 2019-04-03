"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _Task = _interopRequireDefault(require("../models/tasks/Task"));

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
      return _axios["default"].get(process.env.REACT_APP_BACKEND_URL + '/api/v1/missions/' + missionId + "/tasks", _SessionManager["default"].config).then(function (response) {
        var tasks = response.data.map(function (task_data) {
          return _Task["default"].fromJson(task_data);
        });
        return tasks;
      });
    }
  }, {
    key: "get",
    value: function get(taskId) {
      return _axios["default"].get(process.env.REACT_APP_BACKEND_URL + '/api/v1/tasks/' + taskId, _SessionManager["default"].config).then(function (response) {
        var task = _Task["default"].fromJson(response.data);

        return task;
      });
    }
  }]);

  return TasksRepository;
}();

exports["default"] = TasksRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvcmVwb3NpdG9yaWVzL1Rhc2tzUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJUYXNrc1JlcG9zaXRvcnkiLCJtaXNzaW9uSWQiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFDS0VORF9VUkwiLCJTZXNzaW9uTWFuYWdlciIsImNvbmZpZyIsInRoZW4iLCJyZXNwb25zZSIsInRhc2tzIiwiZGF0YSIsIm1hcCIsInRhc2tfZGF0YSIsIlRhc2siLCJmcm9tSnNvbiIsInRhc2tJZCIsInRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsZTs7Ozs7Ozs7O3lCQUNMQyxTLEVBQVc7QUFDbkIsYUFBT0Msa0JBQU1DLEdBQU4sQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUFaLEdBQWtDLG1CQUFsQyxHQUFzREwsU0FBdEQsR0FBZ0UsUUFBMUUsRUFDSE0sMkJBQWVDLE1BRFosRUFFRkMsSUFGRSxDQUVHLFVBQUNDLFFBQUQsRUFBYztBQUNoQixZQUFJQyxLQUFLLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLFNBQUQ7QUFBQSxpQkFBZUMsaUJBQUtDLFFBQUwsQ0FBY0YsU0FBZCxDQUFmO0FBQUEsU0FBbEIsQ0FBWjtBQUNBLGVBQU9ILEtBQVA7QUFDSCxPQUxFLENBQVA7QUFNSDs7O3dCQUVVTSxNLEVBQVE7QUFDZixhQUFPZixrQkFBTUMsR0FBTixDQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMscUJBQVosR0FBa0MsZ0JBQWxDLEdBQW1EVyxNQUE3RCxFQUFxRVYsMkJBQWVDLE1BQXBGLEVBQ0ZDLElBREUsQ0FDRyxVQUFDQyxRQUFELEVBQWM7QUFDaEIsWUFBSVEsSUFBSSxHQUFHSCxpQkFBS0MsUUFBTCxDQUFjTixRQUFRLENBQUNFLElBQXZCLENBQVg7O0FBQ0EsZUFBT00sSUFBUDtBQUNILE9BSkUsQ0FBUDtBQU1IIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBTZXNzaW9uTWFuYWdlciBmcm9tIFwiLi4vU2Vzc2lvbk1hbmFnZXJcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuLi9tb2RlbHMvdGFza3MvVGFza1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tzUmVwb3NpdG9yeSB7XG4gICAgc3RhdGljIGxpc3QobWlzc2lvbklkKSB7XG4gICAgICAgIHJldHVybiBheGlvcy5nZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMKycvYXBpL3YxL21pc3Npb25zLycrbWlzc2lvbklkK1wiL3Rhc2tzXCIsXG4gICAgICAgICAgICBTZXNzaW9uTWFuYWdlci5jb25maWcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza3MgPSByZXNwb25zZS5kYXRhLm1hcCgodGFza19kYXRhKSA9PiBUYXNrLmZyb21Kc29uKHRhc2tfZGF0YSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrcztcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCh0YXNrSWQpIHtcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFDS0VORF9VUkwrJy9hcGkvdjEvdGFza3MvJyt0YXNrSWQsIFNlc3Npb25NYW5hZ2VyLmNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gVGFzay5mcm9tSnNvbihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH0pXG5cbiAgICB9XG59XG4iXX0=