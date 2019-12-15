"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventEmitterEs = _interopRequireDefault(require("event-emitter-es6"));

var _AchievementsRepository = _interopRequireDefault(require("./repositories/AchievementsRepository"));

var _UserManager = _interopRequireDefault(require("./UserManager"));

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

var ACHIEVEMENTS_CHANGED = "achievements-changed";

var _AchievementsManager =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(_AchievementsManager, _EventEmitter);

  function _AchievementsManager() {
    var _this;

    _classCallCheck(this, _AchievementsManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_AchievementsManager).call(this));
    _this.loading = false;
    _this.unfinishedAchievements = [];
    _this.finishedAchievements = [];
    return _this;
  }

  _createClass(_AchievementsManager, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      if (!_UserManager["default"].user) return;
      if (this.loading) return;
      this.loading = true;

      _AchievementsRepository["default"].all().then(function (achievements) {
        _this2.loading = false;
        _this2.finishedAchievements = [];
        _this2.unfinishedAchievements = [];
        achievements.forEach(function (achievement) {
          if (achievement.status == "FINISHED" || achievement.status == "DONE") _this2.finishedAchievements.push(achievement);else _this2.unfinishedAchievements.push(achievement);
        });

        _this2.finishedAchievements.sort(function (a1, a2) {
          if (a1.updated > a2.updated) {
            return -1;
          }

          if (a1.updated > a2.updated) {
            return 1;
          }

          return 0;
        });

        _this2.emit(ACHIEVEMENTS_CHANGED);
      })["catch"](function (error) {
        _this2.loading = false;
        console.log(error);
      });
    }
  }, {
    key: "getLastFinished",
    value: function getLastFinished() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
      return this.finishedAchievements.slice(0, top);
    }
  }, {
    key: "addAchievementsChangeHandler",
    value: function addAchievementsChangeHandler(handler) {
      this.on(ACHIEVEMENTS_CHANGED, handler);
    }
  }, {
    key: "removeAchievementsChangeHandler",
    value: function removeAchievementsChangeHandler(handler) {
      this.off(ACHIEVEMENTS_CHANGED, handler);
    }
  }]);

  return _AchievementsManager;
}(_eventEmitterEs["default"]);

var AchievementsManager = new _AchievementsManager();
var _default = AchievementsManager;
exports["default"] = _default;