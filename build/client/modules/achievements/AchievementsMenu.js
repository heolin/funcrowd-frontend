"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _AchievementCard = _interopRequireDefault(require("./AchievementCard"));

var _AchievementsRepository = _interopRequireDefault(require("../../logic/repositories/AchievementsRepository"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _AchievementsManager = _interopRequireDefault(require("../../logic/AchievementsManager"));

var _Footer = require("../../Footer");

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

var ListContainer = _reactPose["default"].ul({
  enter: {
    staggerChildren: 50
  },
  exit: {
    staggerChildren: 20,
    staggerDirection: -1
  }
});

var AchievementsMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AchievementsMenu, _React$Component);

  function AchievementsMenu(props) {
    var _this;

    _classCallCheck(this, AchievementsMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AchievementsMenu).call(this, props));
    _this.state = {
      finishedAchievements: null,
      unfinishedAchievements: null,
      loading: true
    };
    _this.onUpdate = _this.onUpdate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AchievementsMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _AchievementsManager["default"].addAchievementsChangeHandler(this.onUpdate);

      _AchievementsManager["default"].update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _AchievementsManager["default"].removeAchievementsChangeHandler(this.onUpdate);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      this.setState({
        loading: false,
        finishedAchievements: _AchievementsManager["default"].finishedAchievements,
        unfinishedAchievements: _AchievementsManager["default"].unfinishedAchievements
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) return _react["default"].createElement(_Loading["default"], null);
      var finishedAchievements = this.state.finishedAchievements.map(function (achievement) {
        return _react["default"].createElement("div", {
          className: "col-md-6 col-lg-4 col-sm-12",
          key: achievement.id
        }, _react["default"].createElement(_AchievementCard["default"], {
          achievement: achievement
        }));
      });
      var unfinishedAchievements = this.state.unfinishedAchievements.map(function (achievement) {
        return _react["default"].createElement("div", {
          className: "col-md-6 col-lg-4 col-sm-12",
          key: achievement.id
        }, _react["default"].createElement(_AchievementCard["default"], {
          achievement: achievement
        }));
      });
      return _react["default"].createElement("div", {
        className: "container-fluid base-row-padding"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-12 achivements-earned"
      }, _react["default"].createElement("h3", null, "Zdobyte"), _react["default"].createElement("p", null, "534543"), _react["default"].createElement("div", {
        className: "row achievements-row"
      }, finishedAchievements))), _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-12 achivements-to-earn"
      }, _react["default"].createElement("h3", null, "Do zdobycia"), _react["default"].createElement("p", null, "test"), _react["default"].createElement("div", {
        className: "row achievements-row"
      }, unfinishedAchievements)))));
    }
  }]);

  return AchievementsMenu;
}(_react["default"].Component);

exports["default"] = AchievementsMenu;