"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  HOME: "/",
  LOGIN: "/",
  ACTIVATION: "/activation",
  REGISTER: "/register",
  MISSIONS: "/missions",
  RESET_PASSWORD: "/reset_password",
  RESET_PASSWORD_TOKEN: "/reset_password_token",
  ABOUT: "/about",
  WELCOME: "/welcome",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  RANKING: "/ranking",
  ACHIEVEMENTS: "/achievements",
  BOUNTY: "/bounty/:id",
  BOUNTIES: "/bounties",
  TASK: "/task/:id",
  TASKS: "/mission/:id/tasks",
  checkUrl: function checkUrl(url1, url2) {
    return url1.replace("#", "") === url2.replace("#", "");
  }
};
exports["default"] = _default;