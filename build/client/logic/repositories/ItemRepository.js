"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _Item = _interopRequireDefault(require("../models/item/Item"));

var _AnnotationResponse = _interopRequireDefault(require("../models/annotation/AnnotationResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ItemRepository =
/*#__PURE__*/
function () {
  function ItemRepository() {
    _classCallCheck(this, ItemRepository);
  }

  _createClass(ItemRepository, null, [{
    key: "getFirstItem",
    value: function getFirstItem(taskId) {
      return _axios["default"].get(process.env.REACT_APP_BACKEND_URL + '/api/v1/tasks/' + taskId + '/next_item', _SessionManager["default"].config).then(function (response) {
        var item = _Item["default"].fromJson(response.data);

        return item;
      });
    }
  }, {
    key: "getNextItem",
    value: function getNextItem(itemId) {
      return _axios["default"].get(process.env.REACT_APP_BACKEND_URL + '/api/v1/items/' + itemId + '/next_item', _SessionManager["default"].config).then(function (response) {
        var item = _Item["default"].fromJson(response.data);

        return item;
      });
    }
  }, {
    key: "postAnnotation",
    value: function postAnnotation(itemId, payload) {
      return _axios["default"].post(process.env.REACT_APP_BACKEND_URL + '/api/v1/items/' + itemId + '/annotation', payload, _SessionManager["default"].config).then(function (response) {
        var annotationResponse = _AnnotationResponse["default"].fromJson(response.data);

        return annotationResponse;
      });
    }
  }]);

  return ItemRepository;
}();

exports["default"] = ItemRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvcmVwb3NpdG9yaWVzL0l0ZW1SZXBvc2l0b3J5LmpzIl0sIm5hbWVzIjpbIkl0ZW1SZXBvc2l0b3J5IiwidGFza0lkIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMIiwiU2Vzc2lvbk1hbmFnZXIiLCJjb25maWciLCJ0aGVuIiwicmVzcG9uc2UiLCJpdGVtIiwiSXRlbSIsImZyb21Kc29uIiwiZGF0YSIsIml0ZW1JZCIsInBheWxvYWQiLCJwb3N0IiwiYW5ub3RhdGlvblJlc3BvbnNlIiwiQW5ub3RhdGlvblJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLGM7Ozs7Ozs7OztpQ0FDR0MsTSxFQUFRO0FBQ3hCLGFBQU9DLGtCQUFNQyxHQUFOLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxxQkFBWixHQUFrQyxnQkFBbEMsR0FBbURMLE1BQW5ELEdBQTBELFlBQXBFLEVBQWtGTSwyQkFBZUMsTUFBakcsRUFDRkMsSUFERSxDQUNHLFVBQUNDLFFBQUQsRUFBYztBQUNoQixZQUFJQyxJQUFJLEdBQUdDLGlCQUFLQyxRQUFMLENBQWNILFFBQVEsQ0FBQ0ksSUFBdkIsQ0FBWDs7QUFDQSxlQUFPSCxJQUFQO0FBQ0gsT0FKRSxDQUFQO0FBS0g7OztnQ0FFa0JJLE0sRUFBUTtBQUN2QixhQUFPYixrQkFBTUMsR0FBTixDQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMscUJBQVosR0FBa0MsZ0JBQWxDLEdBQW1EUyxNQUFuRCxHQUEwRCxZQUFwRSxFQUFrRlIsMkJBQWVDLE1BQWpHLEVBQ0ZDLElBREUsQ0FDRyxVQUFDQyxRQUFELEVBQWM7QUFDaEIsWUFBSUMsSUFBSSxHQUFHQyxpQkFBS0MsUUFBTCxDQUFjSCxRQUFRLENBQUNJLElBQXZCLENBQVg7O0FBQ0EsZUFBT0gsSUFBUDtBQUNILE9BSkUsQ0FBUDtBQUtIOzs7bUNBRXNCSSxNLEVBQVFDLE8sRUFBUztBQUNwQyxhQUFPZCxrQkFBTWUsSUFBTixDQUFXYixPQUFPLENBQUNDLEdBQVIsQ0FBWUMscUJBQVosR0FBa0MsZ0JBQWxDLEdBQXFEUyxNQUFyRCxHQUE4RCxhQUF6RSxFQUF3RkMsT0FBeEYsRUFBaUdULDJCQUFlQyxNQUFoSCxFQUNGQyxJQURFLENBQ0csVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCLFlBQUlRLGtCQUFrQixHQUFHQywrQkFBbUJOLFFBQW5CLENBQTRCSCxRQUFRLENBQUNJLElBQXJDLENBQXpCOztBQUNBLGVBQU9JLGtCQUFQO0FBQ0gsT0FKRSxDQUFQO0FBS0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFNlc3Npb25NYW5hZ2VyIGZyb20gXCIuLi9TZXNzaW9uTWFuYWdlclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL21vZGVscy9pdGVtL0l0ZW1cIjtcbmltcG9ydCBBbm5vdGF0aW9uUmVzcG9uc2UgZnJvbSBcIi4uL21vZGVscy9hbm5vdGF0aW9uL0Fubm90YXRpb25SZXNwb25zZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1SZXBvc2l0b3J5IHtcbiAgICBzdGF0aWMgZ2V0Rmlyc3RJdGVtKHRhc2tJZCkge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTCsnL2FwaS92MS90YXNrcy8nK3Rhc2tJZCsnL25leHRfaXRlbScsIFNlc3Npb25NYW5hZ2VyLmNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gSXRlbS5mcm9tSnNvbihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXROZXh0SXRlbShpdGVtSWQpIHtcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFDS0VORF9VUkwrJy9hcGkvdjEvaXRlbXMvJytpdGVtSWQrJy9uZXh0X2l0ZW0nLCBTZXNzaW9uTWFuYWdlci5jb25maWcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IEl0ZW0uZnJvbUpzb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9zdEFubm90YXRpb24gKGl0ZW1JZCwgcGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gYXhpb3MucG9zdChwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFDS0VORF9VUkwrJy9hcGkvdjEvaXRlbXMvJyArIGl0ZW1JZCArICcvYW5ub3RhdGlvbicsIHBheWxvYWQsIFNlc3Npb25NYW5hZ2VyLmNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhbm5vdGF0aW9uUmVzcG9uc2UgPSBBbm5vdGF0aW9uUmVzcG9uc2UuZnJvbUpzb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25SZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==