"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var USER = "funcrowd_user";

var _SessionManager =
/*#__PURE__*/
function () {
  function _SessionManager() {
    _classCallCheck(this, _SessionManager);

    this.token = null;
    this.config = {};
    this.is_logged = false;
  }

  _createClass(_SessionManager, [{
    key: "login",
    value: function login(user, saveUser) {
      this.token = user.token;
      this.is_logged = true;
      this.config = {
        headers: {
          Authorization: "Token " + user.token
        }
      };
      sessionStorage.setItem(USER, JSON.stringify(user));

      if (saveUser) {
        localStorage.setItem(USER, JSON.stringify(user));
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      this.is_logged = false;
      this.token = null;
      this.config = {};
      localStorage.removeItem(USER);
      sessionStorage.removeItem(USER);
    }
  }, {
    key: "getUser",
    value: function getUser() {
      var user = this.getSessionUser();
      if (user === null) user = this.getLocalStorageUser();
      return user;
    }
  }, {
    key: "getSessionUser",
    value: function getSessionUser() {
      var user = null;

      try {
        user = JSON.parse(sessionStorage.getItem(USER));
      } catch (e) {}

      return user;
    }
  }, {
    key: "getLocalStorageUser",
    value: function getLocalStorageUser() {
      var user = null;

      try {
        user = JSON.parse(localStorage.getItem(USER));
      } catch (e) {}

      return user;
    }
  }]);

  return _SessionManager;
}();

var SessionManager = new _SessionManager();
var _default = SessionManager;
exports["default"] = _default;