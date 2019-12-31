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
  function UserStats(id, annotatedDocuments, highAgreementCount, highAgreementPercentage, agreementRankingPosition, agreementRankingPercentage, annotatedMissions, annotatedTasks) {
    _classCallCheck(this, UserStats);

    this.id = id;
    this.annotatedDocuments = annotatedDocuments;
    this.highAgreementCount = highAgreementCount;
    this.highAgreementPercentage = highAgreementPercentage;
    this.agreementRankingPosition = agreementRankingPosition;
    this.agreementRankingPercentage = agreementRankingPercentage;
    this.annotatedMissions = annotatedMissions;
    this.annotatedTasks = annotatedTasks;
  }

  _createClass(UserStats, null, [{
    key: "fromJson",
    value: function fromJson(user_data) {
      var stats = new UserStats(user_data.user_id, user_data.annotated_documents, user_data.high_agreement_count, user_data.high_agreement_percentage, user_data.agreement_ranking_position, user_data.agreement_ranking_percentage, user_data.annotated_missions, user_data.annotated_tasks);
      return stats;
    }
  }]);

  return UserStats;
}();

exports["default"] = UserStats;