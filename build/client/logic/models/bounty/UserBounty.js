"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserBounty =
/*#__PURE__*/
function () {
  function UserBounty(id, progress, annotationsDone, annotationsTarget, status, reward, rewardsList) {
    _classCallCheck(this, UserBounty);

    this.id = id;
    this.progress = progress;
    this.annotationsDone = annotationsDone;
    this.annotationsTarget = annotationsTarget;
    this.status = status;
    this.reward = reward;
    this.rewardsList = rewardsList || [];
  }

  _createClass(UserBounty, [{
    key: "isClosed",
    get: function get() {
      return this.status === "FINISHED" || this.status === "CLOSED";
    }
  }], [{
    key: "fromJson",
    value: function fromJson(bounty_data) {
      if (bounty_data !== null && bounty_data.id) {
        var userBounty = new UserBounty(bounty_data.id, bounty_data.progress, bounty_data.annotations_done, bounty_data.annotations_target, bounty_data.status, bounty_data.reward, bounty_data.rewards_list);
        return userBounty;
      }
    }
  }]);

  return UserBounty;
}();

exports["default"] = UserBounty;