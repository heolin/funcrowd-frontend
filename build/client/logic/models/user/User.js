"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(id, username, email, token, group) {
    _classCallCheck(this, User);

    this.id = id;
    this.username = username;
    this.email = email;
    this.token = token;
    this.group = group;
  }

  _createClass(User, null, [{
    key: "fromJson",
    value: function fromJson(user_data) {
      var user = new User(user_data.id, user_data.username, user_data.email, user_data.token, user_data.group);
      return user;
    }
  }]);

  return User;
}();

exports["default"] = User;