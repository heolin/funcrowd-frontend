"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _Mission = _interopRequireDefault(require("../models/missions/Mission"));

var _ConfigManager = _interopRequireDefault(require("../config/ConfigManager"));

var _ranking = _interopRequireDefault(require("../models/ranking/ranking"));

var _ranking_row = _interopRequireDefault(require("../models/ranking/ranking_row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MissionRepository =
/*#__PURE__*/
function () {
  function MissionRepository() {
    _classCallCheck(this, MissionRepository);
  }

  _createClass(MissionRepository, null, [{
    key: "global",
    value: function global(page) {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/ranking/exp/top?size=10&page=' + page, _SessionManager["default"].config).then(function (response) {
        var ranking = new _ranking["default"]();
        ranking.rows = response.data.map(function (data) {
          return _ranking_row["default"].fromJson(data);
        });
        return ranking;
      });
    }
  }, {
    key: "user",
    value: function user(userId) {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/ranking/exp/around/' + userId + '/?size=0', _SessionManager["default"].config).then(function (response) {
        var row = _ranking_row["default"].fromJson(response.data[0]);

        return row;
      });
    }
  }]);

  return MissionRepository;
}();

exports["default"] = MissionRepository;