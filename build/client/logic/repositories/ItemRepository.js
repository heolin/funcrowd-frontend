"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _Item = _interopRequireDefault(require("../models/item/Item"));

var _AnnotationResponse = _interopRequireDefault(require("../models/annotation/AnnotationResponse"));

var _ConfigManager = _interopRequireDefault(require("../config/ConfigManager"));

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
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/tasks/' + taskId + '/next_item', _SessionManager["default"].config).then(function (response) {
        var item = _Item["default"].fromJson(response.data);

        return item;
      });
    }
  }, {
    key: "getNextItem",
    value: function getNextItem(itemId) {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/items/' + itemId + '/next_item', _SessionManager["default"].config).then(function (response) {
        var item = _Item["default"].fromJson(response.data);

        return item;
      });
    }
  }, {
    key: "postAnnotation",
    value: function postAnnotation(itemId, payload) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/items/' + itemId + '/annotation', payload, _SessionManager["default"].config).then(function (response) {
        var annotationResponse = _AnnotationResponse["default"].fromJson(response.data);

        return annotationResponse;
      });
    }
  }]);

  return ItemRepository;
}();

exports["default"] = ItemRepository;