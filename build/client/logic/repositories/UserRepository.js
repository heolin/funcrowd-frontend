"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _User = _interopRequireDefault(require("../../logic/models/user/User"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _ConfigManager = _interopRequireDefault(require("../config/ConfigManager"));

var _UserStatus = _interopRequireDefault(require("../models/user/UserStatus"));

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
    value: function login(email, password) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/login/', {
        email: email,
        password: password
      }).then(function (response) {
        var user = _User["default"].fromJson(response.data);

        return user;
      });
    }
  }, {
    key: "register",
    value: function register(username, email, password1, password2) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/register/', {
        username: username,
        email: email,
        password1: password1,
        password2: password2
      }).then(function (response) {});
    }
  }, {
    key: "resetPassword",
    value: function resetPassword(email) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/reset_password/', {
        email: email
      }).then(function (response) {});
    }
  }, {
    key: "changeSettings",
    value: function changeSettings(username) {
      var payload = {
        username: username
      };
      console.log(payload);
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/change_settings/', payload, _SessionManager["default"].config).then(function (response) {
        var user = _User["default"].fromJson(response.data);

        return user;
      });
    }
  }, {
    key: "changePassword",
    value: function changePassword(oldPassword, newPassword1, newPassword2) {
      var payload = {
        old_password: oldPassword,
        new_password1: newPassword1,
        new_password2: newPassword2
      };
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/change_password/', payload, _SessionManager["default"].config).then(function (response) {
        var user = _User["default"].fromJson(response.data);

        return user;
      });
    }
  }, {
    key: "changePasswordWithToken",
    value: function changePasswordWithToken(token, password1, password2) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/reset_password/token/', {
        token: token,
        password1: password1,
        password2: password2
      }).then(function (response) {});
    }
  }, {
    key: "activate",
    value: function activate(token) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/activate/', {
        token: token
      }).then(function (response) {
        var user = _User["default"].fromJson(response.data);

        return user;
      });
    }
  }, {
    key: "mturk",
    value: function mturk(workerId) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/mturk/', {
        worker_id: workerId
      }).then(function (response) {
        var user = _User["default"].fromJson(response.data);

        return user;
      });
    }
  }, {
    key: "status",
    value: function status() {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/users/status/', _SessionManager["default"].config).then(function (response) {
        var status = _UserStatus["default"].fromJson(response.data);

        return status;
      });
    }
  }, {
    key: "stats",
    value: function stats(workerId) {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/stats/users/' + workerId + "/", _SessionManager["default"].config).then(function (response) {
        var stats = UserStats.fromJson(response.data);
        return stats;
      });
    }
  }]);

  return UserRepository;
}();

exports["default"] = UserRepository;