"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _close = require("react-icons-kit/fa/close");

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _queryString = _interopRequireDefault(require("query-string"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

var _reactRouterDom = require("react-router-dom");

var _Urls = _interopRequireDefault(require("../../Urls"));

var _UserRepository = _interopRequireDefault(require("../../logic/repositories/UserRepository"));

var _ActivationEmailSentPanel = _interopRequireDefault(require("./ActivationEmailSentPanel"));

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

var ActivationStates = {
  LOADING: 0,
  NO_TOKEN: 1,
  TOKEN_EXPIRED: 2,
  TOKEN_WRONG: 3,
  TOKEN_USED: 4,
  RESEND_TOKEN: 5
};

var ActivationPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActivationPage, _React$Component);

  function ActivationPage(props) {
    var _this;

    _classCallCheck(this, ActivationPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActivationPage).call(this, props));
    _this.state = {
      state: ActivationStates.LOADING,
      token: null
    };
    _this.resendLink = _this.resendLink.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ActivationPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkUrlParams();
      window.scrollTo(0, 0);
    }
  }, {
    key: "resendLink",
    value: function resendLink() {
      var _this2 = this;

      this.setState({
        state: ActivationStates.LOADING
      });

      _UserRepository["default"].renewToken(this.state.token).then(function (user) {
        _this2.setState({
          state: ActivationStates.RESEND_TOKEN
        });
      });
    }
  }, {
    key: "checkUrlParams",
    value: function checkUrlParams() {
      var _this3 = this;

      if (this.props.location.search) {
        var params = _queryString["default"].parse(this.props.location.search);

        if ("activationToken" in params) {
          _UserRepository["default"].activate(params['activationToken']).then(function (user) {
            _this3.props.onSuccess(user, true);
          })["catch"](function (error) {
            var responseError = error.response.data['detail'];
            console.log(responseError);
            if (responseError === 'Activation token is incorrect') _this3.setState({
              state: ActivationStates.TOKEN_WRONG
            });else if (responseError === 'Activation token has expired') _this3.setState({
              state: ActivationStates.TOKEN_EXPIRED,
              token: params['activationToken']
            });else if (responseError === 'Activation token is already used') _this3.setState({
              state: ActivationStates.TOKEN_USED
            });
          });
        } else {
          this.setState({
            state: ActivationStates.NO_TOKEN
          });
        }
      } else {
        this.setState({
          state: ActivationStates.NO_TOKEN
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.state === ActivationStates.LOADING) return _react["default"].createElement(_Loading["default"], null);
      if (this.state.state === ActivationStates.RESEND_TOKEN) return _react["default"].createElement(_ActivationEmailSentPanel["default"], null);
      var header = "";
      var message = "";

      var buttons = _react["default"].createElement("div", {
        className: "text-center"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: _Urls["default"].LOGIN
      }, _react["default"].createElement("button", {
        className: "btn btn-orange-primary",
        style: {
          width: "140px",
          marginTop: "20px"
        }
      }, _LocalizationManager["default"].login.back)));

      if (this.state.state === ActivationStates.NO_TOKEN) {
        header = _LocalizationManager["default"].login.activationTokenMissingHeader;
        message = _LocalizationManager["default"].login.activationTokenMissingMessage;
      } else if (this.state.state === ActivationStates.TOKEN_EXPIRED) {
        header = _LocalizationManager["default"].login.activationTokenExpiredHeader;
        message = _LocalizationManager["default"].login.activationTokenExpiredMessage;
        buttons = _react["default"].createElement("div", {
          className: "text-center"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: _Urls["default"].LOGIN
        }, _react["default"].createElement("button", {
          className: "btn btn-default",
          style: {
            width: "140px",
            marginTop: "20px"
          }
        }, _LocalizationManager["default"].login.back)), _react["default"].createElement("button", {
          className: "btn btn-orange-primary",
          onClick: this.resendLink,
          style: {
            width: "140px",
            marginTop: "20px",
            marginLeft: "50px"
          }
        }, _LocalizationManager["default"].login.send));
      } else if (this.state.state === ActivationStates.TOKEN_WRONG) {
        header = _LocalizationManager["default"].login.activationTokenWrongHeader;
        message = _LocalizationManager["default"].login.activationTokenWrongMessage;
      } else if (this.state.state === ActivationStates.TOKEN_USED) {
        header = _LocalizationManager["default"].login.activationTokenUsedHeader;
        message = _LocalizationManager["default"].login.activationTokenUsedMessage;
      }

      return _react["default"].createElement("div", {
        className: "container-fluid base-row"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "activation-email-panel col-lg-6 col-md-10 col-12 card-3-static"
      }, _react["default"].createElement("h3", {
        className: "text-center",
        style: {
          marginBottom: "30px"
        }
      }, header), _react["default"].createElement("p", {
        className: "small text-center",
        dangerouslySetInnerHTML: {
          __html: message
        }
      }), buttons))));
    }
  }]);

  return ActivationPage;
}(_react["default"].Component);

exports["default"] = ActivationPage;