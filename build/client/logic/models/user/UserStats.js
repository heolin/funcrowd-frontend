"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserStats =
/*#__PURE__*/
function () {
  function UserStats(id, annotated_documents, high_agreement_count, high_agreement_percentage, agreement_ranking_position, agreement_ranking_percentage, annotated_missions) {
    _classCallCheck(this, UserStats);

    this.id = id;
    this.annotated_documents = annotated_documents;
    this.high_agreement_count = high_agreement_count;
    this.high_agreement_percentage = high_agreement_percentage;
    this.agreement_ranking_position = agreement_ranking_position;
    this.agreement_ranking_percentage = agreement_ranking_percentage;
    this.annotated_missions = annotated_missions;
  }

  _createClass(UserStats, null, [{
    key: "fromJson",
    value: function fromJson(user_data) {
      var stats = new UserStats(user_data.user_id, user_data.annotated_documents, user_data.high_agreement_count, user_data.high_agreement_percentage, user_data.agreement_ranking_position, user_data.agreement_ranking_percentage, user_data.annotated_missions);
      return stats;
    }
  }]);

  return UserStats;
}();

exports["default"] = UserStats;