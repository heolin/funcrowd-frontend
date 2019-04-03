"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function createConfig() {
  return {
    showFeedback: false
  };
}

var _ConfigManager =
/*#__PURE__*/
function () {
  function _ConfigManager() {
    _classCallCheck(this, _ConfigManager);

    this.config = createConfig();
    this.initilized = false;
  }

  _createClass(_ConfigManager, [{
    key: "setup",
    value: function setup(user) {
      this.config = createConfig();
      this.config.showFeedback = user.group > 5;
      this.initilized = true;
    }
  }]);

  return _ConfigManager;
}();

var ConfigManager = new _ConfigManager();
var _default = ConfigManager;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvY29uZmlnL0NvbmZpZ01hbmFnZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlQ29uZmlnIiwic2hvd0ZlZWRiYWNrIiwiX0NvbmZpZ01hbmFnZXIiLCJjb25maWciLCJpbml0aWxpemVkIiwidXNlciIsImdyb3VwIiwiQ29uZmlnTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVNBLFlBQVQsR0FBd0I7QUFDcEIsU0FBTztBQUNIQyxJQUFBQSxZQUFZLEVBQUU7QUFEWCxHQUFQO0FBR0g7O0lBR0tDLGM7OztBQUNGLDRCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsTUFBTCxHQUFjSCxZQUFZLEVBQTFCO0FBQ0EsU0FBS0ksVUFBTCxHQUFrQixLQUFsQjtBQUNIOzs7OzBCQUVLQyxJLEVBQU07QUFDUixXQUFLRixNQUFMLEdBQWNILFlBQVksRUFBMUI7QUFDQSxXQUFLRyxNQUFMLENBQVlGLFlBQVosR0FBMkJJLElBQUksQ0FBQ0MsS0FBTCxHQUFhLENBQXhDO0FBQ0EsV0FBS0YsVUFBTCxHQUFrQixJQUFsQjtBQUNIOzs7Ozs7QUFHTCxJQUFNRyxhQUFhLEdBQUcsSUFBSUwsY0FBSixFQUF0QjtlQUVlSyxhIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBjcmVhdGVDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd0ZlZWRiYWNrOiBmYWxzZVxuICAgIH07XG59XG5cblxuY2xhc3MgX0NvbmZpZ01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNyZWF0ZUNvbmZpZygpO1xuICAgICAgICB0aGlzLmluaXRpbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXR1cCh1c2VyKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY3JlYXRlQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuY29uZmlnLnNob3dGZWVkYmFjayA9IHVzZXIuZ3JvdXAgPiA1O1xuICAgICAgICB0aGlzLmluaXRpbGl6ZWQgPSB0cnVlO1xuICAgIH1cbn1cblxuY29uc3QgQ29uZmlnTWFuYWdlciA9IG5ldyBfQ29uZmlnTWFuYWdlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWdNYW5hZ2VyO1xuIl19