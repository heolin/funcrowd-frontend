"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _ConfigManager = _interopRequireDefault(require("../config/ConfigManager"));

var _Achievements = _interopRequireDefault(require("../models/achievements/Achievements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AchievementsRepository =
/*#__PURE__*/
function () {
  function AchievementsRepository() {
    _classCallCheck(this, AchievementsRepository);
  }

  _createClass(AchievementsRepository, null, [{
    key: "all",
    value: function all() {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/achievements/', _SessionManager["default"].config).then(function (response) {
        var achievements = response.data.map(function (data) {
          return _Achievements["default"].fromJson(data);
        });
        return achievements;
      });
    }
  }, {
    key: "mission",
    value: function mission(missionId) {
      console.log(_ConfigManager["default"].baseUrl + '/api/v1/achievements/mission/' + missionId + '/');
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/achievements/mission/' + missionId + '/', _SessionManager["default"].config).then(function (response) {
        var achievements = response.data.map(function (data) {
          return _Achievements["default"].fromJson(data);
        });
        return achievements;
      });
    }
  }, {
    key: "task",
    value: function task(taskId) {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/achievements/task/' + taskId + '/', _SessionManager["default"].config).then(function (response) {
        var achievements = response.data.map(function (data) {
          return _Achievements["default"].fromJson(data);
        });
        return achievements;
      });
    }
  }, {
    key: "unclosed",
    value: function unclosed() {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/achievements/unclosed/', _SessionManager["default"].config).then(function (response) {
        var achievements = response.data.map(function (data) {
          return _Achievements["default"].fromJson(data);
        });
        return achievements;
      });
    }
  }]);

  return AchievementsRepository;
}();

exports["default"] = AchievementsRepository;