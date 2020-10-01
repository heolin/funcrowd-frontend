"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Bounty = _interopRequireDefault(require("./Bounty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserBounty =
/*#__PURE__*/
function () {
  function UserBounty(progress, annotationsDone, annotationsTarget, status, reward, bounty) {
    _classCallCheck(this, UserBounty);

    this.progress = progress;
    this.annotationsDone = annotationsDone;
    this.annotationsTarget = annotationsTarget;
    this.status = status;
    this.bounty = bounty;
    this.reward = reward;
  }

  _createClass(UserBounty, [{
    key: "getStatusOrder",
    value: function getStatusOrder() {
      var status = this.status;

      if (status === "CLOSED") {
        if (this.progress === 1) return 3;else return 4;
      }

      if (status === "FINISHED") return 3;else return 1;
    }
  }, {
    key: "isClosed",
    get: function get() {
      return this.status === "FINISHED" || this.status === "CLOSED";
    }
  }], [{
    key: "fromJson",
    value: function fromJson(bounty_data) {
      if (bounty_data !== null) {
        var userBounty = new UserBounty(bounty_data.progress, bounty_data.items_done, bounty_data.items_count, bounty_data.status, bounty_data.reward, _Bounty["default"].fromJson(bounty_data["package"]));
        return userBounty;
      }
    }
  }]);

  return UserBounty;
}();

exports["default"] = UserBounty;