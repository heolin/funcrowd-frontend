"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  detectIE: function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');

    if (msie > 0) {
      // IE 10
      return true;
    }

    var trident = ua.indexOf('Trident/');

    if (trident > 0) {
      // IE 11
      return true;
    }

    var edge = ua.indexOf('Edge/');

    if (edge > 0) {
      // Edge
      return true;
    } // other browser


    return false;
  }
};
exports["default"] = _default;