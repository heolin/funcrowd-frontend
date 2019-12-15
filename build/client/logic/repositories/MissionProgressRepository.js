"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _ConfigManager = _interopRequireDefault(require("../config/ConfigManager"));

var _MissionProgress = _interopRequireDefault(require("../models/missions/MissionProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MissionProgressRepository =
/*#__PURE__*/
function () {
  function MissionProgressRepository() {
    _classCallCheck(this, MissionProgressRepository);
  }

  _createClass(MissionProgressRepository, null, [{
    key: "all",
    value: function all() {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/missions/progress/', _SessionManager["default"].config).then(function (response) {
        var progress = response.data.map(function (mission_data) {
          return _MissionProgress["default"].fromJson(mission_data);
        });
        return progress;
      });
    }
  }, {
    key: "get",
    value: function get(missionId) {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/missions/' + missionId + "/progress/", _SessionManager["default"].config).then(function (response) {
        var progress = _MissionProgress["default"].fromJson(response.data);

        return progress;
      });
    }
  }]);

  return MissionProgressRepository;
}();

exports["default"] = MissionProgressRepository;