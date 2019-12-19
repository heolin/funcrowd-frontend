"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventEmitterEs = _interopRequireDefault(require("event-emitter-es6"));

var _UserRepository = _interopRequireDefault(require("./repositories/UserRepository"));

var _levels = _interopRequireDefault(require("../resources/levels"));

var _LocalizationManager = _interopRequireDefault(require("./locatization/LocalizationManager"));

var _ToastsManager = _interopRequireDefault(require("./ToastsManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EXPERIENCE_CHANGED = "experience-changed";
var USERNAME_CHANGED = "username-changed";

var _UserManager =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(_UserManager, _EventEmitter);

  function _UserManager() {
    var _this;

    _classCallCheck(this, _UserManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_UserManager).call(this));
    _this.user = null;
    _this.loading = false;
    _this.level = 0;
    _this.levelProgress = 0;
    return _this;
  }

  _createClass(_UserManager, [{
    key: "setup",
    value: function setup(user) {
      this.user = user;
      this.emit(EXPERIENCE_CHANGED);
      this.update();
    }
  }, {
    key: "logout",
    value: function logout() {
      this.user = null;
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      if (this.loading) return;
      this.loading = true;
      return _UserRepository["default"].status().then(function (userStatus) {
        if (userStatus.id !== _this2.user.id) {
          console.log("Error. User id mismatch");
        }

        _this2.user.exp = userStatus.exp;

        _this2._updateLevel();

        _this2.emit(EXPERIENCE_CHANGED);

        _this2.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "addExperienceChangeHandler",
    value: function addExperienceChangeHandler(handler) {
      this.on(EXPERIENCE_CHANGED, handler);
    }
  }, {
    key: "removeExperienceChangeHandler",
    value: function removeExperienceChangeHandler(handler) {
      this.off(EXPERIENCE_CHANGED, handler);
    }
  }, {
    key: "addUsernameChangeHandler",
    value: function addUsernameChangeHandler(handler) {
      this.on(USERNAME_CHANGED, handler);
    }
  }, {
    key: "removeUsernameChangeHandler",
    value: function removeUsernameChangeHandler(handler) {
      this.off(USERNAME_CHANGED, handler);
    }
  }, {
    key: "changeUsername",
    value: function changeUsername(username) {
      this.user.username = username;
      this.emit(USERNAME_CHANGED);
    }
  }, {
    key: "getExpLevel",
    value: function getExpLevel(exp) {
      var initialLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var level = initialLevel;

      while (level < Object.keys(_levels["default"]).length && exp >= _levels["default"][level + 1].threshold) {
        level += 1;
      }

      return level;
    }
  }, {
    key: "getExpProgress",
    value: function getExpProgress(level, exp) {
      var levelProgress = 1.0;

      if (level < Object.keys(_levels["default"]).length) {
        var current = _levels["default"][level].threshold;
        var next = _levels["default"][level + 1].threshold;
        levelProgress = (exp - current) / next;
      }

      return levelProgress;
    }
  }, {
    key: "_addLevelUpToast",
    value: function _addLevelUpToast() {
      var message = _LocalizationManager["default"].general.level + " " + this.level + " " + _LocalizationManager["default"].levels['level' + this.level];

      _ToastsManager["default"].addToast("level", message);
    }
  }, {
    key: "_updateLevel",
    value: function _updateLevel() {
      var currentLevel = this.level;
      this.level = this.getExpLevel(this.user.exp, this.level);
      if (currentLevel < this.level && currentLevel > 0) this._addLevelUpToast();
      this.levelProgress = this.getExpProgress(this.level, this.user.exp);
    }
  }]);

  return _UserManager;
}(_eventEmitterEs["default"]);

var UserManager = new _UserManager();
var _default = UserManager;
exports["default"] = _default;