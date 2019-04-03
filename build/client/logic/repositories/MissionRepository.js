"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _Mission = _interopRequireDefault(require("../models/missions/Mission"));

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
    key: "all",
    value: function all() {
      return _axios["default"].get(process.env.REACT_APP_BACKEND_URL + '/api/v1/missions', _SessionManager["default"].config).then(function (response) {
        var missions = response.data.map(function (mission_data) {
          return _Mission["default"].fromJson(mission_data);
        });
        return missions;
      });
    }
  }, {
    key: "get",
    value: function get(missionId) {
      return _axios["default"].get(process.env.REACT_APP_BACKEND_URL + '/api/v1/missions/' + missionId, _SessionManager["default"].config).then(function (response) {
        var mission = _Mission["default"].fromJson(response.data);

        return mission;
      });
    }
  }]);

  return MissionRepository;
}();

exports["default"] = MissionRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvcmVwb3NpdG9yaWVzL01pc3Npb25SZXBvc2l0b3J5LmpzIl0sIm5hbWVzIjpbIk1pc3Npb25SZXBvc2l0b3J5IiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMIiwiU2Vzc2lvbk1hbmFnZXIiLCJjb25maWciLCJ0aGVuIiwicmVzcG9uc2UiLCJtaXNzaW9ucyIsImRhdGEiLCJtYXAiLCJtaXNzaW9uX2RhdGEiLCJNaXNzaW9uIiwiZnJvbUpzb24iLCJtaXNzaW9uSWQiLCJtaXNzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLGlCOzs7Ozs7Ozs7MEJBQ0o7QUFDVCxhQUFPQyxrQkFBTUMsR0FBTixDQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMscUJBQVosR0FBa0Msa0JBQTVDLEVBQWdFQywyQkFBZUMsTUFBL0UsRUFDRkMsSUFERSxDQUNHLFVBQUNDLFFBQUQsRUFBYztBQUNoQixZQUFJQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLFlBQUQ7QUFBQSxpQkFBa0JDLG9CQUFRQyxRQUFSLENBQWlCRixZQUFqQixDQUFsQjtBQUFBLFNBQWxCLENBQWY7QUFDQSxlQUFPSCxRQUFQO0FBQ0gsT0FKRSxDQUFQO0FBS0g7Ozt3QkFFVU0sUyxFQUFXO0FBQ2xCLGFBQU9mLGtCQUFNQyxHQUFOLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxxQkFBWixHQUFrQyxtQkFBbEMsR0FBc0RXLFNBQWhFLEVBQTJFViwyQkFBZUMsTUFBMUYsRUFDRkMsSUFERSxDQUNHLFVBQUNDLFFBQUQsRUFBYztBQUNoQixZQUFJUSxPQUFPLEdBQUdILG9CQUFRQyxRQUFSLENBQWlCTixRQUFRLENBQUNFLElBQTFCLENBQWQ7O0FBQ0EsZUFBT00sT0FBUDtBQUNILE9BSkUsQ0FBUDtBQU1IIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBTZXNzaW9uTWFuYWdlciBmcm9tIFwiLi4vU2Vzc2lvbk1hbmFnZXJcIjtcbmltcG9ydCBNaXNzaW9uIGZyb20gXCIuLi9tb2RlbHMvbWlzc2lvbnMvTWlzc2lvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3Npb25SZXBvc2l0b3J5IHtcbiAgICBzdGF0aWMgYWxsKCkge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCsnL2FwaS92MS9taXNzaW9ucycsIFNlc3Npb25NYW5hZ2VyLmNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtaXNzaW9ucyA9IHJlc3BvbnNlLmRhdGEubWFwKChtaXNzaW9uX2RhdGEpID0+IE1pc3Npb24uZnJvbUpzb24obWlzc2lvbl9kYXRhKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pc3Npb25zO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KG1pc3Npb25JZCkge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCsnL2FwaS92MS9taXNzaW9ucy8nK21pc3Npb25JZCwgU2Vzc2lvbk1hbmFnZXIuY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1pc3Npb24gPSBNaXNzaW9uLmZyb21Kc29uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtaXNzaW9uO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cbn1cbiJdfQ==