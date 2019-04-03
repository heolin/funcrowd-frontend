"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _User = _interopRequireDefault(require("../../logic/models/user/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserRepository =
/*#__PURE__*/
function () {
  function UserRepository() {
    _classCallCheck(this, UserRepository);
  }

  _createClass(UserRepository, null, [{
    key: "login",
    value: function login(username, password) {
      return _axios["default"].post(process.env.REACT_APP_BACKEND_URL + '/api/v1/users/login', {
        username: username,
        password: password
      }).then(function (response) {
        var user = _User["default"].fromJson(response.data);

        return user;
      });
    }
  }, {
    key: "mturk",
    value: function mturk(workerId) {
      return _axios["default"].post(process.env.REACT_APP_BACKEND_URL + '/api/v1/users/mturk', {
        worker_id: workerId
      }).then(function (response) {
        var user = _User["default"].fromJson(response.data);

        return user;
      });
    }
  }]);

  return UserRepository;
}();

exports["default"] = UserRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvcmVwb3NpdG9yaWVzL1VzZXJSZXBvc2l0b3J5LmpzIl0sIm5hbWVzIjpbIlVzZXJSZXBvc2l0b3J5IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFDS0VORF9VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJ1c2VyIiwiVXNlciIsImZyb21Kc29uIiwiZGF0YSIsIndvcmtlcklkIiwid29ya2VyX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLGM7Ozs7Ozs7OzswQkFDSkMsUSxFQUFVQyxRLEVBQVU7QUFDN0IsYUFBT0Msa0JBQU1DLElBQU4sQ0FBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUFaLEdBQWtDLHFCQUE3QyxFQUFvRTtBQUN2RU4sUUFBQUEsUUFBUSxFQUFFQSxRQUQ2RDtBQUV2RUMsUUFBQUEsUUFBUSxFQUFFQTtBQUY2RCxPQUFwRSxFQUdKTSxJQUhJLENBR0MsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFlBQUlDLElBQUksR0FBR0MsaUJBQUtDLFFBQUwsQ0FBY0gsUUFBUSxDQUFDSSxJQUF2QixDQUFYOztBQUNBLGVBQU9ILElBQVA7QUFDSCxPQU5NLENBQVA7QUFPSDs7OzBCQUVZSSxRLEVBQVU7QUFDbkIsYUFBT1gsa0JBQU1DLElBQU4sQ0FBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUFaLEdBQWtDLHFCQUE3QyxFQUFvRTtBQUN2RVEsUUFBQUEsU0FBUyxFQUFFRDtBQUQ0RCxPQUFwRSxFQUVKTixJQUZJLENBRUMsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFlBQUlDLElBQUksR0FBR0MsaUJBQUtDLFFBQUwsQ0FBY0gsUUFBUSxDQUFDSSxJQUF2QixDQUFYOztBQUNBLGVBQU9ILElBQVA7QUFDSCxPQUxNLENBQVA7QUFNSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vbG9naWMvbW9kZWxzL3VzZXIvVXNlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJSZXBvc2l0b3J5IHtcbiAgICBzdGF0aWMgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCsnL2FwaS92MS91c2Vycy9sb2dpbicsIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVzZXIgPSBVc2VyLmZyb21Kc29uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBtdHVyayh3b3JrZXJJZCkge1xuICAgICAgICByZXR1cm4gYXhpb3MucG9zdChwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFDS0VORF9VUkwrJy9hcGkvdjEvdXNlcnMvbXR1cmsnLCB7XG4gICAgICAgICAgICB3b3JrZXJfaWQ6IHdvcmtlcklkLFxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVzZXIgPSBVc2VyLmZyb21Kc29uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==