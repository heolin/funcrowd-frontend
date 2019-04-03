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
  function UserBounty(id, progress, annotationsDone, annotationsTarget, status, reward) {
    _classCallCheck(this, UserBounty);

    this.id = id;
    this.progress = progress;
    this.annotationsDone = annotationsDone;
    this.annotationsTarget = annotationsTarget;
    this.status = status;
    this.reward = reward;
  }

  _createClass(UserBounty, [{
    key: "is_closed",
    get: function get() {
      return this.status === "FINISHED" || this.status === "CLOSED";
    }
  }], [{
    key: "fromJson",
    value: function fromJson(bounty_data) {
      if (bounty_data !== null && bounty_data.id) {
        var userBounty = new UserBounty(bounty_data.id, bounty_data.progress, bounty_data.annotations_done, bounty_data.annotations_target, bounty_data.status, bounty_data.reward);
        return userBounty;
      }
    }
  }]);

  return UserBounty;
}();

exports["default"] = UserBounty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvbW9kZWxzL2JvdW50eS9Vc2VyQm91bnR5LmpzIl0sIm5hbWVzIjpbIlVzZXJCb3VudHkiLCJpZCIsInByb2dyZXNzIiwiYW5ub3RhdGlvbnNEb25lIiwiYW5ub3RhdGlvbnNUYXJnZXQiLCJzdGF0dXMiLCJyZXdhcmQiLCJib3VudHlfZGF0YSIsInVzZXJCb3VudHkiLCJhbm5vdGF0aW9uc19kb25lIiwiYW5ub3RhdGlvbnNfdGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7QUFDakIsc0JBQVlDLEVBQVosRUFBZ0JDLFFBQWhCLEVBQTBCQyxlQUExQixFQUEyQ0MsaUJBQTNDLEVBQThEQyxNQUE5RCxFQUFzRUMsTUFBdEUsRUFBOEU7QUFBQTs7QUFDMUUsU0FBS0wsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7Ozt3QkFnQmU7QUFDWixhQUFPLEtBQUtELE1BQUwsS0FBZ0IsVUFBaEIsSUFBOEIsS0FBS0EsTUFBTCxLQUFnQixRQUFyRDtBQUNIOzs7NkJBaEJlRSxXLEVBQWE7QUFDekIsVUFBSUEsV0FBVyxLQUFLLElBQWhCLElBQXdCQSxXQUFXLENBQUNOLEVBQXhDLEVBQTRDO0FBQ3hDLFlBQUlPLFVBQVUsR0FBRyxJQUFJUixVQUFKLENBQ2JPLFdBQVcsQ0FBQ04sRUFEQyxFQUViTSxXQUFXLENBQUNMLFFBRkMsRUFHYkssV0FBVyxDQUFDRSxnQkFIQyxFQUliRixXQUFXLENBQUNHLGtCQUpDLEVBS2JILFdBQVcsQ0FBQ0YsTUFMQyxFQU1iRSxXQUFXLENBQUNELE1BTkMsQ0FBakI7QUFRQSxlQUFPRSxVQUFQO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckJvdW50eSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHByb2dyZXNzLCBhbm5vdGF0aW9uc0RvbmUsIGFubm90YXRpb25zVGFyZ2V0LCBzdGF0dXMsIHJld2FyZCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uc0RvbmUgPSBhbm5vdGF0aW9uc0RvbmU7XG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnNUYXJnZXQgPSBhbm5vdGF0aW9uc1RhcmdldDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMucmV3YXJkID0gcmV3YXJkO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tSnNvbihib3VudHlfZGF0YSkge1xuICAgICAgICBpZiAoYm91bnR5X2RhdGEgIT09IG51bGwgJiYgYm91bnR5X2RhdGEuaWQpIHtcbiAgICAgICAgICAgIGxldCB1c2VyQm91bnR5ID0gbmV3IFVzZXJCb3VudHkoXG4gICAgICAgICAgICAgICAgYm91bnR5X2RhdGEuaWQsXG4gICAgICAgICAgICAgICAgYm91bnR5X2RhdGEucHJvZ3Jlc3MsXG4gICAgICAgICAgICAgICAgYm91bnR5X2RhdGEuYW5ub3RhdGlvbnNfZG9uZSxcbiAgICAgICAgICAgICAgICBib3VudHlfZGF0YS5hbm5vdGF0aW9uc190YXJnZXQsXG4gICAgICAgICAgICAgICAgYm91bnR5X2RhdGEuc3RhdHVzLFxuICAgICAgICAgICAgICAgIGJvdW50eV9kYXRhLnJld2FyZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyQm91bnR5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGlzX2Nsb3NlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSBcIkZJTklTSEVEXCIgfHwgdGhpcy5zdGF0dXMgPT09IFwiQ0xPU0VEXCI7XG4gICAgfVxuXG59XG4iXX0=