"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProfileConfigs = _interopRequireDefault(require("./ProfileConfigs"));

var _ProfileTypes = _interopRequireDefault(require("./ProfileTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function createConfig() {
  return {
    showFeedback: true
  };
}

var _ConfigManager =
/*#__PURE__*/
function () {
  function _ConfigManager() {
    _classCallCheck(this, _ConfigManager);

    this.config = createConfig();
    this.initilized = false;
    this.baseUrl = process.env.BACKEND_URL;
    this.profile = _ProfileConfigs["default"][_ProfileTypes["default"].NOTLOGGED];
  }

  _createClass(_ConfigManager, [{
    key: "setup",
    value: function setup(user) {
      this.config = createConfig();
      if (user.profile === _ProfileTypes["default"].MTURK) this.config.showFeedback = user.group > 5;
      this.config.showFeedback = true;
      this.initilized = true;
      this.profile = _ProfileConfigs["default"][user.profile];
    }
  }, {
    key: "changeProfile",
    value: function changeProfile(profile) {
      this.profile = _ProfileConfigs["default"][profile];
    }
  }, {
    key: "logout",
    value: function logout() {
      this.profile = _ProfileConfigs["default"][_ProfileTypes["default"].NOTLOGGED];
    }
  }]);

  return _ConfigManager;
}();

var ConfigManager = new _ConfigManager();
var _default = ConfigManager;
exports["default"] = _default;