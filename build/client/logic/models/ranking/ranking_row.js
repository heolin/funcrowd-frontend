"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RankingRow =
/*#__PURE__*/
function () {
  function RankingRow(position, userId, username, value) {
    _classCallCheck(this, RankingRow);

    this.position = position;
    this.userId = userId;
    this.username = username;
    this.value = value;
  }

  _createClass(RankingRow, null, [{
    key: "fromJson",
    value: function fromJson(data) {
      var row = new RankingRow(data.row_number, data.user_id, data.username, data.value);
      return row;
    }
  }]);

  return RankingRow;
}();

exports["default"] = RankingRow;