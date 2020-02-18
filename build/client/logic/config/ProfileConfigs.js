"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProfileTypes = _interopRequireDefault(require("./ProfileTypes"));

var _Urls = _interopRequireDefault(require("../../Urls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProfileConfigs = {};
ProfileConfigs[_ProfileTypes["default"].NOTLOGGED] = {
  missions: false,
  achievements: false,
  about: false,
  exp: false,
  ranking: false,
  bounties: false,
  profile: false,
  availablePages: [_Urls["default"].HOME, _Urls["default"].LOGIN, _Urls["default"].REGISTER, _Urls["default"].ACTIVATION, _Urls["default"].ABOUT, _Urls["default"].RESET_PASSWORD, _Urls["default"].RESET_PASSWORD_TOKEN]
};
ProfileConfigs[_ProfileTypes["default"].NORMAL] = {
  missions: true,
  achievements: false,
  about: true,
  exp: false,
  ranking: false,
  bounties: false,
  profile: false,
  availablePages: null
};
ProfileConfigs[_ProfileTypes["default"].ELEARNING] = {
  missions: true,
  achievements: false,
  about: true,
  exp: false,
  ranking: false,
  bounties: false,
  profile: true,
  availablePages: null
};
ProfileConfigs[_ProfileTypes["default"].GAMIFICATION] = {
  missions: true,
  achievements: true,
  about: true,
  exp: true,
  ranking: true,
  bounties: false,
  profile: true,
  availablePages: null
};
ProfileConfigs[_ProfileTypes["default"].MTURK] = {
  missions: false,
  achievements: false,
  about: false,
  ranking: false,
  bounties: true,
  profile: false,
  availablePages: null
};
var _default = ProfileConfigs;
exports["default"] = _default;