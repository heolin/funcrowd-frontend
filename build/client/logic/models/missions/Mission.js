"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mission =
/*#__PURE__*/
function () {
  function Mission(id, name) {
    _classCallCheck(this, Mission);

    this.id = id;
    this.name = name;
  }

  _createClass(Mission, null, [{
    key: "fromJson",
    value: function fromJson(mission_data) {
      var mission = new Mission(mission_data.id, mission_data.name);
      return mission;
    }
  }]);

  return Mission;
}();

exports["default"] = Mission;