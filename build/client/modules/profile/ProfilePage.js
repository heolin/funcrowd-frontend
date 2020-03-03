"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProfilePageHeader = _interopRequireDefault(require("./ProfilePageHeader"));

var _levels = _interopRequireDefault(require("../../resources/levels"));

var _LevelCard = _interopRequireDefault(require("./components/LevelCard"));

var _UserManager = _interopRequireDefault(require("../../logic/UserManager"));

var _reactRouterDom = require("react-router-dom");

var _RankingRepository = _interopRequireDefault(require("../../logic/repositories/RankingRepository"));

var _Footer = require("../../Footer");

var _TaskProgressRepository = _interopRequireDefault(require("../../logic/repositories/TaskProgressRepository"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _TestCard = _interopRequireDefault(require("./components/TestCard"));

var _ConfigManager = _interopRequireDefault(require("../../logic/config/ConfigManager"));

var _UserRepository = _interopRequireDefault(require("../../logic/repositories/UserRepository"));

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

var ProfilePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfilePage, _React$Component);

  function ProfilePage(props) {
    var _this;

    _classCallCheck(this, ProfilePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProfilePage).call(this, props));
    _this.state = {
      exp: null,
      loadingUserRanking: true,
      ranking: null,
      tasksDone: null
    };
    _this.testsIds = [52, 53, 54];

    _this.testsIds.forEach(function (testId) {
      _this.state["test" + testId] = null;
      _this.state["loadingTest" + testId] = true;
    });

    _this.onUpdate = _this.onUpdate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProfilePage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      _UserManager["default"].addExperienceChangeHandler(this.onUpdate);

      var state = {};
      this.testsIds.forEach(function (testId) {
        state["loadingTest" + testId] = true;

        _TaskProgressRepository["default"].get(testId).then(function (progress) {
          var state = {};
          state["test" + testId] = progress;
          state["loadingTest" + testId] = false;

          _this2.setState(state);
        })["catch"](function (error) {
          var state = {};
          state["loadingTest" + testId] = false;

          _this2.setState(state);

          console.log(error);
        });
      });

      _RankingRepository["default"].user(_UserManager["default"].user.id).then(function (row) {
        _this2.setState({
          ranking: row,
          loadingUserRanking: false
        });
      })["catch"](function (error) {
        _this2.setState({
          loadingUserRanking: false
        });

        console.log(error);
      });

      _UserRepository["default"].stats(_UserManager["default"].user.id).then(function (stats) {
        _this2.setState({
          tasksDone: stats.annotatedTasks
        });
      })["catch"](function (error) {
        console.log(error);
      });

      this.setState(state);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _UserManager["default"].removeExperienceChangeHandler(this.onUpdate);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      if (_UserManager["default"].user) {
        this.setState({
          exp: _UserManager["default"].user.exp
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (_UserManager["default"].user === null) return _react["default"].createElement(_Loading["default"], null);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.testsIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var testId = _step.value;
          if (this.state["loadingTest" + testId]) return _react["default"].createElement(_Loading["default"], null);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (this.state.loadingUserRanking) return _react["default"].createElement(_Loading["default"], null);
      var levelCards = [];
      Object.keys(_levels["default"]).forEach(function (level) {
        if (level > 1) levelCards.push(_react["default"].createElement(_LevelCard["default"], {
          key: level,
          level: level
        }));
      });
      var testCards = [];
      this.testsIds.forEach(function (testId) {
        testCards.push(_react["default"].createElement(_TestCard["default"], {
          name: "Test " + (testCards.length + 1),
          progress: _this3.state['test' + testId]
        }));
      });
      var levelsHeader = null;
      var levelsPanel = null;

      if (_ConfigManager["default"].profile.exp) {
        levelsHeader = _react["default"].createElement("div", {
          className: "col-sm-12",
          style: {
            marginBottom: "50px"
          }
        }, _react["default"].createElement("h3", null, "Tw\xF3j poziom"), _react["default"].createElement("p", null, "Za rozwi\u0105zywanie zada\u0144 otrzymujesz gwiazdki. Im wi\u0119cej gwiazdek, tym wy\u017Cszy poziom do\u015Bwiadczenia!"), _react["default"].createElement("div", {
          className: "text-center"
        }, _react["default"].createElement("h5", null, "Rozwi\u0105za\u0142e\u015B/\u0142a\u015B"), _react["default"].createElement("h3", null, this.state.tasksDone, " zada\u0144")));
        levelsPanel = _react["default"].createElement("div", {
          className: "col-sm-12",
          style: {
            marginBottom: "60px"
          }
        }, _react["default"].createElement("div", {
          className: "row"
        }, levelCards));
      }

      var rankingHeader = null;
      var rankingPanel = null;

      if (_ConfigManager["default"].profile.ranking) {
        rankingHeader = _react["default"].createElement("div", {
          className: "col-12"
        }, _react["default"].createElement("h3", null, "Twoje miejsce w rankingu"), _react["default"].createElement("p", null, "Sprawd\u017A swoje miejsce"));
        rankingPanel = _react["default"].createElement("div", {
          className: "col-md-8 offset-md-2 col-12 small",
          style: {
            marginBottom: "60px"
          }
        }, _react["default"].createElement("div", {
          className: "ranking-panel card-2-static"
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
        }, _react["default"].createElement("b", null, "Do\u015Bwiadczenie")))), _react["default"].createElement("tbody", null, _react["default"].createElement("tr", {
          className: "ranking-table-row-current"
        }, _react["default"].createElement("td", null, this.state.ranking.position), _react["default"].createElement("td", null, this.state.ranking.username), _react["default"].createElement("td", null, _react["default"].createElement("b", null, this.state.ranking.value), " pkt"))))), _react["default"].createElement("div", {
          className: "text-right",
          style: {
            paddingTop: "20px"
          }
        }, _react["default"].createElement(_reactRouterDom.Link, {
          className: "blue-link",
          to: "/ranking"
        }, _react["default"].createElement("div", {
          className: "normal"
        }, "Zobacz ca\u0142y ranking"))));
      }

      return _react["default"].createElement("div", {
        className: "container-fluid base-row"
      }, _react["default"].createElement(_ProfilePageHeader["default"], null), _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row tasks-row",
        style: {
          paddingTop: "80px",
          minHeight: "650px"
        }
      }, _react["default"].createElement("div", {
        className: "col-sm-12",
        style: {
          marginBottom: "50px"
        }
      }, _react["default"].createElement("h3", null, "Wyniki test\xF3w"), _react["default"].createElement("p", null, "Zobacz jakie wyniki uzyska\u0142e\u015B/\u0142a\u015B w kolejnych testach wiedzy i umiej\u0119tno\u015Bci obs\u0142ugi arkuszy kalkulacyjnych."), _react["default"].createElement("div", {
        className: "test-cards text-center",
        style: {
          paddingTop: "20px"
        }
      }, testCards)), levelsHeader, levelsPanel, rankingHeader, rankingPanel)), _react["default"].createElement(_Footer.Footer, null));
    }
  }]);

  return ProfilePage;
}(_react["default"].Component);

exports["default"] = ProfilePage;