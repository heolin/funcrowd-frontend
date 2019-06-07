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