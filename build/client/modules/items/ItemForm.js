"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ComponentsFactory = _interopRequireDefault(require("./ComponentsFactory"));

var _SkippingPanel = _interopRequireDefault(require("./SkippingPanel"));

var _ItemRepository = _interopRequireDefault(require("../../logic/repositories/ItemRepository"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _LocalizationManager = _interopRequireDefault(require("../../logic/locatization/LocalizationManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var factory = new _ComponentsFactory["default"]();

var ItemForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ItemForm, _React$Component);

  function ItemForm(props) {
    var _this;

    _classCallCheck(this, ItemForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ItemForm).call(this, props));
    _this.state = {
      loading: false,
      blocked: false,
      skipping: false
    };

    _this.setupItem(props.item);

    _this.validateForm = _this.validateForm.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.skipItem = _this.skipItem.bind(_assertThisInitialized(_this));
    _this.onSkipAccept = _this.onSkipAccept.bind(_assertThisInitialized(_this));
    _this.onSkipCancel = _this.onSkipCancel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ItemForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setItemState(this.props.item);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setItemState(props.item);
    }
  }, {
    key: "setupItem",
    value: function setupItem(item) {
      if (item) {
        for (var i = 0; i < item.template.fields.length; i++) {
          var field = item.template.fields[i];
          this.state[field.name] = "";
        }
      }
    }
  }, {
    key: "setItemState",
    value: function setItemState(item) {
      var itemState = {
        blocked: false,
        loading: false
      };

      for (var i = 0; i < item.template.fields.length; i++) {
        var field = item.template.fields[i];
        var value = item.data[field.name];
        if (value == null) value = "";
        itemState[field.name] = value;
      }

      itemState['item'] = item;
      this.setState(itemState);
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var blocked = this.state.blocked;
      var item = this.props.item;

      for (var i = 0; i < item.template.fields.length; i++) {
        var field = item.template.fields[i];

        if (field.required && field.editable) {
          if (!this.state[field.name]) {
            return false;
          }
        }
      }

      return !blocked;
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.id, event.target.value));
    }
  }, {
    key: "getAnnotationData",
    value: function getAnnotationData() {
      var item = this.props.item;
      var result = {};

      for (var i = 0; i < item.template.fields.length; i++) {
        var field = item.template.fields[i];

        if (field.editable) {
          if (this.state[field.name]) result[field.name] = this.state[field.name];else result[field.name] = "";
        }
      }

      return result;
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (event) event.preventDefault();
      var item = this.props.item;
      var payload = {
        data: this.getAnnotationData(),
        skipped: skip
      };
      this.setState({
        blocked: true,
        loading: true
      });

      _ItemRepository["default"].postAnnotation(item.id, payload).then(function (annotationResponse) {
        _this2.props.onAnnotationPost(annotationResponse);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "skipItem",
    value: function skipItem(event) {
      event.preventDefault();
      this.setState({
        skipping: true
      });
    }
  }, {
    key: "onSkipAccept",
    value: function onSkipAccept() {
      this.setState({
        skipping: false
      });
      this.handleSubmit(null, true);
    }
  }, {
    key: "onSkipCancel",
    value: function onSkipCancel() {
      this.setState({
        skipping: false
      });
    }
  }, {
    key: "createGroup",
    value: function createGroup(item, groupFields, index) {
      var _this3 = this;

      var fields = [];
      groupFields.forEach(function (fieldName) {
        if (fieldName in item.templateFields) {
          var field = item.templateFields[fieldName];
          var skip = !field.editable && !_this3.state[field.name];

          if (!skip) {
            var component = factory.create(field.widget, field.name, field.label, _this3.state[field.name], item.data[field.data_source], field.required, _this3.state.blocked, _this3.handleChange);
            fields.push(component);
          }
        }
      });
      if (fields.length > 0) return _react["default"].createElement("div", {
        className: "item-panel-group",
        key: "group-" + index
      }, fields);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.state.loading) return _react["default"].createElement(_Loading["default"], null);
      var SubmitButton = this.props.submitButton;
      var SkipButton = this.props.skipButton;
      var item = this.props.item;
      var metadata = this.props.task.metadata;
      var groups = metadata.groups || [item.template.fields.map(function (field) {
        return field.name;
      })];
      var allowSkip = metadata.allowSkip === true;
      var skipButton = null;
      if (allowSkip) skipButton = _react["default"].createElement(SkipButton, {
        onClick: this.skipItem,
        style: {
          width: "80px"
        }
      }, _LocalizationManager["default"].labels.skip);
      var fieldGroups = groups.map(function (groupFields, index) {
        return _this4.createGroup(item, groupFields, index);
      });
      var skipping = null;
      if (this.state.skipping) skipping = _react["default"].createElement(_SkippingPanel["default"], {
        onAccept: this.onSkipAccept,
        onCancel: this.onSkipCancel
      });
      return _react["default"].createElement("form", {
        className: "item-form",
        onSubmit: this.handleSubmit
      }, skipping, fieldGroups, _react["default"].createElement("div", {
        className: "item-form-buttons"
      }, skipButton, _react["default"].createElement(SubmitButton, {
        type: "submit",
        disabled: !this.validateForm(),
        style: {
          width: "160px"
        }
      }, _LocalizationManager["default"].labels.submit)));
    }
  }]);

  return ItemForm;
}(_react["default"].Component);

exports["default"] = ItemForm;