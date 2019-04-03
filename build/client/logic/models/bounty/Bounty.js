"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserBounty = _interopRequireDefault(require("./UserBounty"));

var _Task = _interopRequireDefault(require("../tasks/Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bounty =
/*#__PURE__*/
function () {
  function Bounty(id, task, annotationsTarget, closed, userBounty) {
    _classCallCheck(this, Bounty);

    this.id = id;
    this.task = task;
    this.annotationsTarget = annotationsTarget;
    this.closed = closed;
    this.userBounty = userBounty;
  }

  _createClass(Bounty, null, [{
    key: "fromJson",
    value: function fromJson(bounty_data) {
      var bounty = new Bounty(bounty_data.id, _Task["default"].fromJson(bounty_data.task), bounty_data.annotations_target, bounty_data.closed, _UserBounty["default"].fromJson(bounty_data.user_bounty));
      return bounty;
    }
  }]);

  return Bounty;
}();

exports["default"] = Bounty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvbW9kZWxzL2JvdW50eS9Cb3VudHkuanMiXSwibmFtZXMiOlsiQm91bnR5IiwiaWQiLCJ0YXNrIiwiYW5ub3RhdGlvbnNUYXJnZXQiLCJjbG9zZWQiLCJ1c2VyQm91bnR5IiwiYm91bnR5X2RhdGEiLCJib3VudHkiLCJUYXNrIiwiZnJvbUpzb24iLCJhbm5vdGF0aW9uc190YXJnZXQiLCJVc2VyQm91bnR5IiwidXNlcl9ib3VudHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsTTs7O0FBQ2pCLGtCQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQkMsaUJBQXRCLEVBQXlDQyxNQUF6QyxFQUFpREMsVUFBakQsRUFBNkQ7QUFBQTs7QUFDekQsU0FBS0osRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7Ozs7NkJBRWVDLFcsRUFBYTtBQUN6QixVQUFJQyxNQUFNLEdBQUcsSUFBSVAsTUFBSixDQUNUTSxXQUFXLENBQUNMLEVBREgsRUFFVE8saUJBQUtDLFFBQUwsQ0FBY0gsV0FBVyxDQUFDSixJQUExQixDQUZTLEVBR1RJLFdBQVcsQ0FBQ0ksa0JBSEgsRUFJVEosV0FBVyxDQUFDRixNQUpILEVBS1RPLHVCQUFXRixRQUFYLENBQW9CSCxXQUFXLENBQUNNLFdBQWhDLENBTFMsQ0FBYjtBQU9KLGFBQU9MLE1BQVA7QUFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyQm91bnR5IGZyb20gXCIuL1VzZXJCb3VudHlcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuLi90YXNrcy9UYXNrXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bnR5IHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGFzaywgYW5ub3RhdGlvbnNUYXJnZXQsIGNsb3NlZCwgdXNlckJvdW50eSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnNUYXJnZXQgPSBhbm5vdGF0aW9uc1RhcmdldDtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBjbG9zZWQ7XG4gICAgICAgIHRoaXMudXNlckJvdW50eSA9IHVzZXJCb3VudHk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGJvdW50eV9kYXRhKSB7XG4gICAgICAgIGxldCBib3VudHkgPSBuZXcgQm91bnR5KFxuICAgICAgICAgICAgYm91bnR5X2RhdGEuaWQsXG4gICAgICAgICAgICBUYXNrLmZyb21Kc29uKGJvdW50eV9kYXRhLnRhc2spLFxuICAgICAgICAgICAgYm91bnR5X2RhdGEuYW5ub3RhdGlvbnNfdGFyZ2V0LFxuICAgICAgICAgICAgYm91bnR5X2RhdGEuY2xvc2VkLFxuICAgICAgICAgICAgVXNlckJvdW50eS5mcm9tSnNvbihib3VudHlfZGF0YS51c2VyX2JvdW50eSlcbiAgICAgICAgKTtcbiAgICByZXR1cm4gYm91bnR5O1xuICAgIH1cbn1cbiJdfQ==