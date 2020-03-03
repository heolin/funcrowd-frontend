"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserManager = _interopRequireDefault(require("./UserManager"));

var _AchievementsManager = _interopRequireDefault(require("./AchievementsManager"));

var _ToastsManager = _interopRequireDefault(require("./ToastsManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    this.saveUser = false;
    this.cache = {
      action: null,
      resetPasswordToken: null
    };
  }

  _createClass(_SessionManager, [{
    key: "login",
    value: function login(user, saveUser) {
      if (user.login === "") return;
      this.token = user.token;
      this.saveUser = saveUser;
      this.isLogged = true;
      this.config = {
        headers: {
          Authorization: "Token " + user.token
        }
      };

      _UserManager["default"].setup(user);

      this.setUser(user);

      _AchievementsManager["default"].update();

      _AchievementsManager["default"].checkToasts();
    }
  }, {
    key: "setUser",
    value: function setUser(user) {
      sessionStorage.setItem(USER, JSON.stringify(user));

      if (this.saveUser) {
        localStorage.setItem(USER, JSON.stringify(user));
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      this.isLogged = false;
      this.token = null;
      this.config = {};
      localStorage.removeItem(USER);
      sessionStorage.removeItem(USER);

      _UserManager["default"].logout();

      _ToastsManager["default"].hideAll();
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