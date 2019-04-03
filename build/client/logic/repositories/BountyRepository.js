"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _Bounty = _interopRequireDefault(require("../models/bounty/Bounty"));

var _UserBounty = _interopRequireDefault(require("../models/bounty/UserBounty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BountyRepository =
/*#__PURE__*/
function () {
  function BountyRepository() {
    _classCallCheck(this, BountyRepository);
  }

  _createClass(BountyRepository, null, [{
    key: "all",
    value: function all() {
      return _axios["default"].get(process.env.REACT_APP_BACKEND_URL + '/api/v1/bounty', _SessionManager["default"].config).then(function (response) {
        var bounties = response.data.map(function (bounty_data) {
          return _Bounty["default"].fromJson(bounty_data);
        });
        return bounties;
      });
    }
  }, {
    key: "get",
    value: function get(bountyId) {
      return _axios["default"].get(process.env.REACT_APP_BACKEND_URL + '/api/v1/bounty/' + bountyId, _SessionManager["default"].config).then(function (response) {
        var bounty = _Bounty["default"].fromJson(response.data);

        return bounty;
      });
    }
  }, {
    key: "getStatus",
    value: function getStatus(bountyId) {
      return _axios["default"].get(process.env.REACT_APP_BACKEND_URL + '/api/v1/bounty/' + bountyId + '/status', _SessionManager["default"].config).then(function (response) {
        var userBounty = _UserBounty["default"].fromJson(response.data);

        return userBounty;
      });
    }
  }]);

  return BountyRepository;
}();

exports["default"] = BountyRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvcmVwb3NpdG9yaWVzL0JvdW50eVJlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiQm91bnR5UmVwb3NpdG9yeSIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9CQUNLRU5EX1VSTCIsIlNlc3Npb25NYW5hZ2VyIiwiY29uZmlnIiwidGhlbiIsInJlc3BvbnNlIiwiYm91bnRpZXMiLCJkYXRhIiwibWFwIiwiYm91bnR5X2RhdGEiLCJCb3VudHkiLCJmcm9tSnNvbiIsImJvdW50eUlkIiwiYm91bnR5IiwidXNlckJvdW50eSIsIlVzZXJCb3VudHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsZ0I7Ozs7Ozs7OzswQkFDSjtBQUNULGFBQU9DLGtCQUFNQyxHQUFOLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxxQkFBWixHQUFrQyxnQkFBNUMsRUFBOERDLDJCQUFlQyxNQUE3RSxFQUNGQyxJQURFLENBQ0csVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCLFlBQUlDLFFBQVEsR0FBR0QsUUFBUSxDQUFDRSxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsV0FBRDtBQUFBLGlCQUFpQkMsbUJBQU9DLFFBQVAsQ0FBZ0JGLFdBQWhCLENBQWpCO0FBQUEsU0FBbEIsQ0FBZjtBQUNBLGVBQU9ILFFBQVA7QUFDSCxPQUpFLENBQVA7QUFLSDs7O3dCQUVVTSxRLEVBQVU7QUFDakIsYUFBT2Ysa0JBQU1DLEdBQU4sQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUFaLEdBQWtDLGlCQUFsQyxHQUFvRFcsUUFBOUQsRUFBd0VWLDJCQUFlQyxNQUF2RixFQUNGQyxJQURFLENBQ0csVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCLFlBQUlRLE1BQU0sR0FBR0gsbUJBQU9DLFFBQVAsQ0FBZ0JOLFFBQVEsQ0FBQ0UsSUFBekIsQ0FBYjs7QUFDQSxlQUFPTSxNQUFQO0FBQ0gsT0FKRSxDQUFQO0FBS0g7Ozs4QkFFZ0JELFEsRUFBVTtBQUN2QixhQUFPZixrQkFBTUMsR0FBTixDQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMscUJBQVosR0FBa0MsaUJBQWxDLEdBQW9EVyxRQUFwRCxHQUE2RCxTQUF2RSxFQUFrRlYsMkJBQWVDLE1BQWpHLEVBQ0ZDLElBREUsQ0FDRyxVQUFDQyxRQUFELEVBQWM7QUFDaEIsWUFBSVMsVUFBVSxHQUFHQyx1QkFBV0osUUFBWCxDQUFvQk4sUUFBUSxDQUFDRSxJQUE3QixDQUFqQjs7QUFDQSxlQUFPTyxVQUFQO0FBQ0gsT0FKRSxDQUFQO0FBS0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFNlc3Npb25NYW5hZ2VyIGZyb20gXCIuLi9TZXNzaW9uTWFuYWdlclwiO1xuaW1wb3J0IEJvdW50eSBmcm9tIFwiLi4vbW9kZWxzL2JvdW50eS9Cb3VudHlcIjtcbmltcG9ydCBVc2VyQm91bnR5IGZyb20gXCIuLi9tb2RlbHMvYm91bnR5L1VzZXJCb3VudHlcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VudHlSZXBvc2l0b3J5IHtcbiAgICBzdGF0aWMgYWxsKCkge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCsnL2FwaS92MS9ib3VudHknLCBTZXNzaW9uTWFuYWdlci5jb25maWcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYm91bnRpZXMgPSByZXNwb25zZS5kYXRhLm1hcCgoYm91bnR5X2RhdGEpID0+IEJvdW50eS5mcm9tSnNvbihib3VudHlfZGF0YSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBib3VudGllcztcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGdldChib3VudHlJZCkge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCsnL2FwaS92MS9ib3VudHkvJytib3VudHlJZCwgU2Vzc2lvbk1hbmFnZXIuY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJvdW50eSA9IEJvdW50eS5mcm9tSnNvbihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm91bnR5O1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3RhdHVzKGJvdW50eUlkKSB7XG4gICAgICAgIHJldHVybiBheGlvcy5nZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMKycvYXBpL3YxL2JvdW50eS8nK2JvdW50eUlkKycvc3RhdHVzJywgU2Vzc2lvbk1hbmFnZXIuY29uZmlnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJCb3VudHkgPSBVc2VyQm91bnR5LmZyb21Kc29uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyQm91bnR5O1xuICAgICAgICAgICAgfSlcbiAgICB9XG59Il19