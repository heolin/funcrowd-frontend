"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserDetails =
/*#__PURE__*/
function () {
  function UserDetails(id, username, email, profile, group, exp) {
    _classCallCheck(this, UserDetails);

    this.id = id;
    this.username = username;
    this.email = email;
    this.profile = profile;
    this.group = group;
    this.exp = exp;
  }

  _createClass(UserDetails, null, [{
    key: "fromJson",
    value: function fromJson(user_data) {
      var user = new UserDetails(user_data.id, user_data.username, user_data.email, user_data.profile, user_data.group, user_data.exp);
      return user;
    }
  }]);

  return UserDetails;
}();

exports["default"] = UserDetails;