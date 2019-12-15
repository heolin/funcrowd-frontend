"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MissionCard = _interopRequireDefault(require("./MissionCard"));

var _MissionRepository = _interopRequireDefault(require("../../logic/repositories/MissionRepository"));

var _MissionProgressRepository = _interopRequireDefault(require("../../logic/repositories/MissionProgressRepository"));

var _ListContainer = _interopRequireDefault(require("../../components/animated/ListContainer"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _FeedbackPanel = _interopRequireDefault(require("../feedback/FeedbackPanel"));

var _Footer = require("../../Footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MissionsMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MissionsMenu, _React$Component);

  function MissionsMenu(props) {
    var _this;

    _classCallCheck(this, MissionsMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MissionsMenu).call(this, props));
    _this.state = {
      missions: null,
      progress: null,
      loadingMissions: true,
      loadingProgress: true
    };
    return _this;
  }

  _createClass(MissionsMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _MissionRepository["default"].all().then(function (missions) {
        _this2.setState({
          loadingMissions: false,
          missions: missions
        });
      })["catch"](function (error) {
        _this2.setState({
          loadingMissions: false
        });

        console.log(error);
      });

      _MissionProgressRepository["default"].all().then(function (progress) {
        var missionProgress = {};
        progress.forEach(function (progress) {
          missionProgress[progress.mission] = progress;
        });

        _this2.setState({
          loadingProgress: false,
          progress: missionProgress
        });
      })["catch"](function (error) {
        _this2.setState({
          loadingProgress: false
        });

        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.loadingMissions || this.state.loadingProgress) return _react["default"].createElement(_Loading["default"], null);
      var missions = this.state.missions.map(function (mission, i) {
        return _react["default"].createElement(_MissionCard["default"], {
          key: i,
          mission: mission,
          progress: _this3.state.progress[mission.id],
          onSelect: function onSelect() {
            return _this3.props.onMissionSelect(mission);
          }
        });
      });
      return _react["default"].createElement("div", {
        className: "container-fluid base-row-padding"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-sm-12 missions-introduction"
      }, _react["default"].createElement("h3", null, "A witojcie w Excelu tutorial"), _react["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem tellus, malesuada eget egestas nec, laoreet id orci. Morbi tristique dui non accumsan egestas. Fusce convallis est et eleifend pellentesque. Vivamus bibendum mi at purus sagittis, id malesuada nisi ornare. Nullam dictum vestibulum ante."))), _react["default"].createElement(_ListContainer["default"], {
        className: "row missions-row",
        key: "list"
      }, missions)));
    }
  }]);

  return MissionsMenu;
}(_react["default"].Component);

exports["default"] = MissionsMenu;