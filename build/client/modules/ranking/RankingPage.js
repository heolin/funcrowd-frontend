"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _RankingRepository = _interopRequireDefault(require("../../logic/repositories/RankingRepository"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _UserManager = _interopRequireDefault(require("../../logic/UserManager"));

var _Icons = require("../../components/Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RankingPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RankingPage, _React$Component);

  function RankingPage(props) {
    var _this;

    _classCallCheck(this, RankingPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RankingPage).call(this, props));
    _this.state = {
      page: 0,
      ranking: null,
      hasNextPage: false,
      userRanking: null,
      loadingRanking: true,
      loadingRankingNext: true,
      loadingUserRanking: true
    };
    _this.onNextPage = _this.onNextPage.bind(_assertThisInitialized(_this));
    _this.onPrevPage = _this.onPrevPage.bind(_assertThisInitialized(_this));
    _this.updateRanking = _this.updateRanking.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RankingPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateRanking();
    }
  }, {
    key: "updateRanking",
    value: function updateRanking() {
      var _this2 = this;

      _RankingRepository["default"].global(this.state.page).then(function (ranking) {
        _this2.setState({
          ranking: ranking,
          loadingRanking: false
        });
      })["catch"](function (error) {
        _this2.setState({
          loadingRanking: false
        });

        console.log(error);
      }); // check if next page is available


      _RankingRepository["default"].global(this.state.page + 1).then(function (ranking) {
        _this2.setState({
          hasNextPage: ranking.rows.length > 0,
          loadingRankingNext: false
        });
      })["catch"](function (error) {
        _this2.setState({
          loadingRankingNext: false
        });

        console.log(error);
      });

      _RankingRepository["default"].user(_UserManager["default"].user.id).then(function (row) {
        _this2.setState({
          userRanking: row,
          loadingUserRanking: false
        });
      })["catch"](function (error) {
        _this2.setState({
          loadingUserRanking: false
        });

        console.log(error);
      });
    }
  }, {
    key: "onPrevPage",
    value: function onPrevPage() {
      if (this.state.page > 0) {
        var newPage = this.state.page - 1;
        this.setState({
          page: newPage,
          loadingRanking: true,
          loadingUserRanking: true,
          loadingRankingNext: true
        }, this.updateRanking);
      }
    }
  }, {
    key: "onNextPage",
    value: function onNextPage() {
      if (this.state.hasNextPage) {
        var newPage = this.state.page + 1;
        this.setState({
          page: newPage,
          loadingRanking: true,
          loadingUserRanking: true,
          loadingRankingNext: true
        }, this.updateRanking);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loadingRanking || this.state.loadingUserRanking || this.state.loadingRankingNext || _UserManager["default"].user === null) return _react["default"].createElement(_Loading["default"], null);
      var rows = [];
      var addUserRow = true;
      var prevButton = null;
      var nextButton = null;
      var lastPosition = null;
      var prevArrowClass = "";
      var nextArrowClass = "";
      this.state.ranking.rows.forEach(function (row) {
        var className = "";

        if (row.userId === _UserManager["default"].user.id) {
          className = "ranking-table-row-current";
          addUserRow = false;
        }

        var icon = null;
        if (row.position === 1) icon = _react["default"].createElement(_Icons.SmallIcon, {
          className: "ranking-table-icon",
          name: "medal-gold"
        });else if (row.position === 2) icon = _react["default"].createElement(_Icons.SmallIcon, {
          className: "ranking-table-icon",
          name: "medal-silver"
        });else if (row.position === 3) icon = _react["default"].createElement(_Icons.SmallIcon, {
          className: "ranking-table-icon",
          name: "medal-bronze"
        });

        var elem = _react["default"].createElement("tr", {
          className: className
        }, _react["default"].createElement("td", null, row.position, icon), _react["default"].createElement("td", null, row.username), _react["default"].createElement("td", null, _react["default"].createElement("b", null, row.value), " pkt"));

        lastPosition = row.position;
        rows.push(elem);
      });

      if (addUserRow) {
        var row = this.state.userRanking;

        if (lastPosition < row.position) {
          if (lastPosition + 1 < row.position) rows.push(_react["default"].createElement("tr", null, _react["default"].createElement("td", null, "..."), _react["default"].createElement("td", null, "..."), _react["default"].createElement("td", null, "...")));
          rows.push(_react["default"].createElement("tr", {
            className: "ranking-table-row-current"
          }, _react["default"].createElement("td", null, row.position), _react["default"].createElement("td", null, row.username), _react["default"].createElement("td", null, _react["default"].createElement("b", null, row.value), " pkt")));
        }
      }

      if (this.state.page > 0) prevButton = _react["default"].createElement("div", {
        className: "btn btn-default ranking-table-page-button d-inline-block",
        onClick: this.onPrevPage,
        style: {
          marginLeft: "-80px"
        }
      }, this.state.page);else prevArrowClass = "inactive";

      var currentButton = _react["default"].createElement("div", {
        className: "btn btn-primary ranking-table-page-button d-inline-block",
        style: {
          marginLeft: "-20px"
        }
      }, this.state.page + 1);

      if (this.state.hasNextPage) nextButton = _react["default"].createElement("div", {
        className: "btn btn-default ranking-table-page-button d-inline-block",
        onClick: this.onNextPage,
        style: {
          marginLeft: "40px"
        }
      }, this.state.page + 2);else nextArrowClass = "inactive";
      return _react["default"].createElement("div", {
        className: "container base-row-padding"
      }, _react["default"].createElement("div", {
        className: "col-sm-12"
      }, _react["default"].createElement("h3", null, "Ranking"), _react["default"].createElement("p", null, "Sprawd\u017A swoje miejsce i zobacz post\u0119p innych!")), _react["default"].createElement("div", {
        className: "ranking-panel col-md-8 offset-md-2 col-12 card-2-static small"
      }, _react["default"].createElement("table", {
        "class": "ranking-table table table-borderless text-center"
      }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", {
        className: "color-blue"
      }, _react["default"].createElement("th", {
        scope: "col"
      }, _react["default"].createElement("b", null, "Miejsce")), _react["default"].createElement("th", {
        scope: "col"
      }, _react["default"].createElement("b", null, "Gracz")), _react["default"].createElement("th", {
        scope: "col"
      }, _react["default"].createElement("b", null, "Do\u015Bwiadczenie")))), _react["default"].createElement("tbody", null, rows))), _react["default"].createElement("div", {
        className: "ranking-table-page-buttons text-center"
      }, _react["default"].createElement("div", {
        className: "d-inline-block flip-horizontal ranking-table-page-arrow " + prevArrowClass,
        onClick: this.onPrevPage,
        style: {
          marginLeft: "-120px"
        }
      }, _react["default"].createElement(_Icons.Icon, {
        className: "very-small-icon",
        name: "arrow-right_blue"
      })), prevButton, currentButton, nextButton, _react["default"].createElement("div", {
        className: "d-inline-block ranking-table-page-arrow" + nextArrowClass,
        onClick: this.onNextPage,
        style: {
          marginLeft: "100px"
        }
      }, _react["default"].createElement(_Icons.Icon, {
        className: "very-small-icon",
        name: "arrow-right_blue"
      }))));
    }
  }]);

  return RankingPage;
}(_react["default"].Component);

exports["default"] = RankingPage;