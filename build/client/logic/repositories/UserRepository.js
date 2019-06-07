"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _User = _interopRequireDefault(require("../../logic/models/user/User"));

var _ConfigManager = _interopRequireDefault(require("../config/ConfigManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserRepository =
/*#__PURE__*/
function () {
  function UserRepository() {
    _classCallCheck(this, UserRepository);
  }

  _createClass(UserRepository, null, [{
    key: "login",
    value: function login(username, password) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/login', {
        username: username,
        password: password
      }).then(function (response) {
        var user = _User["default"].fromJson(response.data);

        return user;
      });
    }
  }, {
    key: "mturk",
    value: function mturk(workerId) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/mturk', {
        worker_id: workerId
      }).then(function (response) {
        var user = _User["default"].fromJson(response.data);

        return user;
      });
    }
  }]);

  return UserRepository;
}();

exports["default"] = UserRepository;