"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocalizedDictionary =
/*#__PURE__*/
function () {
  function LocalizedDictionary(values) {
    _classCallCheck(this, LocalizedDictionary);

    this.values = values;
    this.language = null;
    return new Proxy(this, this);
  }

  _createClass(LocalizedDictionary, [{
    key: "setup",
    value: function setup(language) {
      this.language = language;
    }
  }, {
    key: "get",
    value: function get(target, prop) {
      return this[prop] || this.values[prop][this.language];
    }
  }]);

  return LocalizedDictionary;
}();

exports["default"] = LocalizedDictionary;