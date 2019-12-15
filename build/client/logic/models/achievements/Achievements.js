"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Achievement =
/*#__PURE__*/
function () {
  function Achievement(id, order, status, value, target, progress, updated, metadata) {
    _classCallCheck(this, Achievement);

    this.id = id;
    this.order = order;
    this.status = status;
    this.value = value;
    this.target = target;
    this.progress = progress;
    this.updated = Date.parse(updated);
    this.metadata = metadata;
  }

  _createClass(Achievement, null, [{
    key: "fromJson",
    value: function fromJson(data) {
      var achievement = new Achievement(data.id, data.order, data.status, data.value, data.target, data.progress, data.updated, data.metadata);
      return achievement;
    }
  }]);

  return Achievement;
}();

exports["default"] = Achievement;