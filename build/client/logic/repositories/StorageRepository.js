"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SessionManager = _interopRequireDefault(require("../SessionManager"));

var _storage = _interopRequireDefault(require("../models/storage/storage"));

var _ConfigManager = _interopRequireDefault(require("../config/ConfigManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StorageRepository =
/*#__PURE__*/
function () {
  function StorageRepository() {
    _classCallCheck(this, StorageRepository);
  }

  _createClass(StorageRepository, null, [{
    key: "all",
    value: function all() {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/users/storage/', _SessionManager["default"].config).then(function (response) {
        var storages = response.data.map(function (data) {
          return _storage["default"].fromJson(data);
        });
        return storages;
      });
    }
  }, {
    key: "postBatch",
    value: function postBatch(payload) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/storage/', payload, _SessionManager["default"].config).then(function (response) {
        var storages = response.data.map(function (data) {
          return _storage["default"].fromJson(data);
        });
        return storages;
      });
    }
  }, {
    key: "get",
    value: function get(key) {
      return _axios["default"].get(_ConfigManager["default"].baseUrl + '/api/v1/users/storage/' + key + '/', _SessionManager["default"].config).then(function (response) {
        var storage = _storage["default"].fromJson(response.data);

        return storage;
      });
    }
  }, {
    key: "post",
    value: function post(key, payload) {
      return _axios["default"].post(_ConfigManager["default"].baseUrl + '/api/v1/users/storage/' + key + '/', payload, _SessionManager["default"].config).then(function (response) {
        var storage = _storage["default"].fromJson(response.data);

        return storage;
      });
    }
  }]);

  return StorageRepository;
}();

exports["default"] = StorageRepository;