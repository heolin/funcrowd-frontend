"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var USER = "funcrowd_user";

var _SessionManager =
/*#__PURE__*/
function () {
  function _SessionManager() {
    _classCallCheck(this, _SessionManager);

    this.token = null;
    this.config = {};
    this.is_logged = false;
  }

  _createClass(_SessionManager, [{
    key: "login",
    value: function login(user, saveUser) {
      this.token = user.token;
      this.is_logged = true;
      this.config = {
        headers: {
          Authorization: "Token " + user.token
        }
      };
      sessionStorage.setItem(USER, JSON.stringify(user));

      if (saveUser) {
        localStorage.setItem(USER, JSON.stringify(user));
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      this.is_logged = false;
      this.token = null;
      this.config = {};
      localStorage.removeItem(USER);
      sessionStorage.removeItem(USER);
    }
  }, {
    key: "getUser",
    value: function getUser() {
      var user = this.getSessionUser();
      if (user === null) user = this.getLocalStorageUser();
      return user;
    }
  }, {
    key: "getSessionUser",
    value: function getSessionUser() {
      var user = null;

      try {
        user = JSON.parse(sessionStorage.getItem(USER));
      } catch (e) {}

      return user;
    }
  }, {
    key: "getLocalStorageUser",
    value: function getLocalStorageUser() {
      var user = null;

      try {
        user = JSON.parse(localStorage.getItem(USER));
      } catch (e) {}

      return user;
    }
  }]);

  return _SessionManager;
}();

var SessionManager = new _SessionManager();
var _default = SessionManager;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvU2Vzc2lvbk1hbmFnZXIuanMiXSwibmFtZXMiOlsiVVNFUiIsIl9TZXNzaW9uTWFuYWdlciIsInRva2VuIiwiY29uZmlnIiwiaXNfbG9nZ2VkIiwidXNlciIsInNhdmVVc2VyIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImdldFNlc3Npb25Vc2VyIiwiZ2V0TG9jYWxTdG9yYWdlVXNlciIsInBhcnNlIiwiZ2V0SXRlbSIsImUiLCJTZXNzaW9uTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUksR0FBRyxlQUFYOztJQUdNQyxlOzs7QUFDRiw2QkFBYztBQUFBOztBQUNWLFNBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0g7Ozs7MEJBRUtDLEksRUFBTUMsUSxFQUFVO0FBQ2xCLFdBQUtKLEtBQUwsR0FBYUcsSUFBSSxDQUFDSCxLQUFsQjtBQUNBLFdBQUtFLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxXQUFLRCxNQUFMLEdBQWM7QUFDVkksUUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFVBQUFBLGFBQWEsRUFBRSxXQUFXSCxJQUFJLENBQUNIO0FBRDFCO0FBREMsT0FBZDtBQUtBTyxNQUFBQSxjQUFjLENBQUNDLE9BQWYsQ0FBdUJWLElBQXZCLEVBQTZCVyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZixDQUE3Qjs7QUFDQSxVQUFJQyxRQUFKLEVBQWM7QUFDVk8sUUFBQUEsWUFBWSxDQUFDSCxPQUFiLENBQXFCVixJQUFyQixFQUEyQlcsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWYsQ0FBM0I7QUFDSDtBQUNKOzs7NkJBRVE7QUFDTCxXQUFLRCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsV0FBS0YsS0FBTCxHQUFhLElBQWI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBVSxNQUFBQSxZQUFZLENBQUNDLFVBQWIsQ0FBd0JkLElBQXhCO0FBQ0FTLE1BQUFBLGNBQWMsQ0FBQ0ssVUFBZixDQUEwQmQsSUFBMUI7QUFDSDs7OzhCQUVTO0FBQ04sVUFBSUssSUFBSSxHQUFHLEtBQUtVLGNBQUwsRUFBWDtBQUNBLFVBQUlWLElBQUksS0FBSyxJQUFiLEVBQ0lBLElBQUksR0FBRyxLQUFLVyxtQkFBTCxFQUFQO0FBQ0osYUFBT1gsSUFBUDtBQUNIOzs7cUNBRWdCO0FBQ2IsVUFBSUEsSUFBSSxHQUFHLElBQVg7O0FBQ0EsVUFBSTtBQUNBQSxRQUFBQSxJQUFJLEdBQUdNLElBQUksQ0FBQ00sS0FBTCxDQUFXUixjQUFjLENBQUNTLE9BQWYsQ0FBdUJsQixJQUF2QixDQUFYLENBQVA7QUFDSCxPQUZELENBRUUsT0FBT21CLENBQVAsRUFBVSxDQUNYOztBQUNELGFBQU9kLElBQVA7QUFDSDs7OzBDQUVxQjtBQUNsQixVQUFJQSxJQUFJLEdBQUcsSUFBWDs7QUFDQSxVQUFJO0FBQ0FBLFFBQUFBLElBQUksR0FBR00sSUFBSSxDQUFDTSxLQUFMLENBQVdKLFlBQVksQ0FBQ0ssT0FBYixDQUFxQmxCLElBQXJCLENBQVgsQ0FBUDtBQUNILE9BRkQsQ0FFRSxPQUFPbUIsQ0FBUCxFQUFVLENBQ1g7O0FBQ0QsYUFBT2QsSUFBUDtBQUNIOzs7Ozs7QUFHTCxJQUFNZSxjQUFjLEdBQUcsSUFBSW5CLGVBQUosRUFBdkI7ZUFFZW1CLGMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgVVNFUiA9IFwiZnVuY3Jvd2RfdXNlclwiO1xuXG5cbmNsYXNzIF9TZXNzaW9uTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgICAgICB0aGlzLmlzX2xvZ2dlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXIsIHNhdmVVc2VyKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB1c2VyLnRva2VuO1xuICAgICAgICB0aGlzLmlzX2xvZ2dlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiVG9rZW4gXCIgKyB1c2VyLnRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oVVNFUiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICBpZiAoc2F2ZVVzZXIpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFVTRVIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5pc19sb2dnZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFVTRVIpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFVTRVIpO1xuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIGxldCB1c2VyID0gdGhpcy5nZXRTZXNzaW9uVXNlcigpO1xuICAgICAgICBpZiAodXNlciA9PT0gbnVsbClcbiAgICAgICAgICAgIHVzZXIgPSB0aGlzLmdldExvY2FsU3RvcmFnZVVzZXIoKTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuXG4gICAgZ2V0U2Vzc2lvblVzZXIoKSB7XG4gICAgICAgIGxldCB1c2VyID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVzZXIgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oVVNFUikpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuXG4gICAgZ2V0TG9jYWxTdG9yYWdlVXNlcigpIHtcbiAgICAgICAgbGV0IHVzZXIgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oVVNFUikpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxufVxuXG5jb25zdCBTZXNzaW9uTWFuYWdlciA9IG5ldyBfU2Vzc2lvbk1hbmFnZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2Vzc2lvbk1hbmFnZXI7XG4iXX0=