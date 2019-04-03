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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvbW9kZWxzL3VzZXIvVXNlci5qcyJdLCJuYW1lcyI6WyJVc2VyIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwidG9rZW4iLCJncm91cCIsInVzZXJfZGF0YSIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEk7OztBQUNqQixnQkFBWUMsRUFBWixFQUFnQkMsUUFBaEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3Q0MsS0FBeEMsRUFBK0M7QUFBQTs7QUFDM0MsU0FBS0osRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7Ozs2QkFFZUMsUyxFQUFXO0FBQ3ZCLFVBQUlDLElBQUksR0FBRyxJQUFJUCxJQUFKLENBQVNNLFNBQVMsQ0FBQ0wsRUFBbkIsRUFDUEssU0FBUyxDQUFDSixRQURILEVBRVBJLFNBQVMsQ0FBQ0gsS0FGSCxFQUdQRyxTQUFTLENBQUNGLEtBSEgsRUFJUEUsU0FBUyxDQUFDRCxLQUpILENBQVg7QUFLQSxhQUFPRSxJQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB1c2VybmFtZSwgZW1haWwsIHRva2VuLCBncm91cCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUpzb24odXNlcl9kYXRhKSB7XG4gICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIodXNlcl9kYXRhLmlkLFxuICAgICAgICAgICAgdXNlcl9kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgdXNlcl9kYXRhLmVtYWlsLFxuICAgICAgICAgICAgdXNlcl9kYXRhLnRva2VuLFxuICAgICAgICAgICAgdXNlcl9kYXRhLmdyb3VwKTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxufSJdfQ==