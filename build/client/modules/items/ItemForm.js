"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ComponentsFactory = _interopRequireDefault(require("./ComponentsFactory"));

var _SkippingPanel = _interopRequireDefault(require("./SkippingPanel"));

var _ItemRepository = _interopRequireDefault(require("../../logic/repositories/ItemRepository"));

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

      _ItemRepository["default"].postAnnotation(item.id, payload).then(function (annotationResponse) {
        _this2.setState({
          blocked: true,
          loading: true
        });

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
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.loading) {
        return _react["default"].createElement("div", null, "Loading");
      }

      var item = this.props.item;
      var fields = item.template.fields.map(function (field) {
        return factory.create(field.widget, field.name, _this3.state[field.name], item.data[field.data_source], field.required, _this3.state.blocked, _this3.handleChange);
      });
      var skipping = null;
      if (this.state.skipping) skipping = _react["default"].createElement(_SkippingPanel["default"], {
        onAccept: this.onSkipAccept,
        onCancel: this.onSkipCancel
      });
      return _react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, skipping, fields, _react["default"].createElement("div", {
        style: {
          textAlign: "right"
        }
      }, _react["default"].createElement("button", {
        onClick: this.skipItem,
        style: {
          marginRight: "10px",
          width: "80px"
        },
        className: "btn btn-default"
      }, "Skip"), _react["default"].createElement("button", {
        type: "submit",
        disabled: !this.validateForm(),
        style: {
          width: "120px"
        },
        className: "btn btn-green"
      }, "Submit")));
    }
  }]);

  return ItemForm;
}(_react["default"].Component);

exports["default"] = ItemForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pdGVtcy9JdGVtRm9ybS5qc3giXSwibmFtZXMiOlsiZmFjdG9yeSIsIkNvbXBvbmVudHNGYWN0b3J5IiwiSXRlbUZvcm0iLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImJsb2NrZWQiLCJza2lwcGluZyIsInNldHVwSXRlbSIsIml0ZW0iLCJ2YWxpZGF0ZUZvcm0iLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0Iiwic2tpcEl0ZW0iLCJvblNraXBBY2NlcHQiLCJvblNraXBDYW5jZWwiLCJzZXRJdGVtU3RhdGUiLCJpIiwidGVtcGxhdGUiLCJmaWVsZHMiLCJsZW5ndGgiLCJmaWVsZCIsIm5hbWUiLCJpdGVtU3RhdGUiLCJ2YWx1ZSIsImRhdGEiLCJzZXRTdGF0ZSIsInJlcXVpcmVkIiwiZWRpdGFibGUiLCJldmVudCIsInRhcmdldCIsImlkIiwicmVzdWx0Iiwic2tpcCIsInByZXZlbnREZWZhdWx0IiwicGF5bG9hZCIsImdldEFubm90YXRpb25EYXRhIiwic2tpcHBlZCIsIkl0ZW1SZXBvc2l0b3J5IiwicG9zdEFubm90YXRpb24iLCJ0aGVuIiwiYW5ub3RhdGlvblJlc3BvbnNlIiwib25Bbm5vdGF0aW9uUG9zdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImNyZWF0ZSIsIndpZGdldCIsImRhdGFfc291cmNlIiwidGV4dEFsaWduIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU8sR0FBRyxJQUFJQyw2QkFBSixFQUFkOztJQUVxQkMsUTs7Ozs7QUFFakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixrRkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxPQUFPLEVBQUUsS0FEQTtBQUVUQyxNQUFBQSxPQUFPLEVBQUUsS0FGQTtBQUdUQyxNQUFBQSxRQUFRLEVBQUU7QUFIRCxLQUFiOztBQU1BLFVBQUtDLFNBQUwsQ0FBZUwsS0FBSyxDQUFDTSxJQUFyQjs7QUFFQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsK0JBQXBCO0FBQ0EsVUFBS0UsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRixJQUFsQiwrQkFBcEI7QUFDQSxVQUFLRyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0gsSUFBZCwrQkFBaEI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtLLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkwsSUFBbEIsK0JBQXBCO0FBZmU7QUFnQmxCOzs7O3dDQUVtQjtBQUNoQixXQUFLTSxZQUFMLENBQWtCLEtBQUtkLEtBQUwsQ0FBV00sSUFBN0I7QUFDSDs7OzhDQUV5Qk4sSyxFQUFPO0FBQzdCLFdBQUtjLFlBQUwsQ0FBa0JkLEtBQUssQ0FBQ00sSUFBeEI7QUFDSDs7OzhCQUVTQSxJLEVBQU07QUFDWixVQUFJQSxJQUFKLEVBQVU7QUFDTixhQUFLLElBQUlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdULElBQUksQ0FBQ1UsUUFBTCxDQUFjQyxNQUFkLENBQXFCQyxNQUF6QyxFQUFpREgsQ0FBQyxFQUFsRCxFQUFzRDtBQUNsRCxjQUFJSSxLQUFLLEdBQUdiLElBQUksQ0FBQ1UsUUFBTCxDQUFjQyxNQUFkLENBQXFCRixDQUFyQixDQUFaO0FBQ0EsZUFBS2QsS0FBTCxDQUFXa0IsS0FBSyxDQUFDQyxJQUFqQixJQUF5QixFQUF6QjtBQUNIO0FBQ0o7QUFDSjs7O2lDQUVZZCxJLEVBQU07QUFDZixVQUFJZSxTQUFTLEdBQUc7QUFBQ2xCLFFBQUFBLE9BQU8sRUFBRSxLQUFWO0FBQWlCRCxRQUFBQSxPQUFPLEVBQUU7QUFBMUIsT0FBaEI7O0FBRUEsV0FBSyxJQUFJYSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxJQUFJLENBQUNVLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQkMsTUFBekMsRUFBaURILENBQUMsRUFBbEQsRUFBc0Q7QUFDbEQsWUFBSUksS0FBSyxHQUFHYixJQUFJLENBQUNVLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQkYsQ0FBckIsQ0FBWjtBQUNBLFlBQUlPLEtBQUssR0FBR2hCLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUosS0FBSyxDQUFDQyxJQUFoQixDQUFaO0FBQ0EsWUFBSUUsS0FBSyxJQUFJLElBQWIsRUFDSUEsS0FBSyxHQUFHLEVBQVI7QUFDSkQsUUFBQUEsU0FBUyxDQUFDRixLQUFLLENBQUNDLElBQVAsQ0FBVCxHQUF3QkUsS0FBeEI7QUFDSDs7QUFDREQsTUFBQUEsU0FBUyxDQUFDLE1BQUQsQ0FBVCxHQUFvQmYsSUFBcEI7QUFDQSxXQUFLa0IsUUFBTCxDQUFjSCxTQUFkO0FBQ0g7OzttQ0FHYztBQUNYLFVBQUlsQixPQUFPLEdBQUcsS0FBS0YsS0FBTCxDQUFXRSxPQUF6QjtBQUNBLFVBQUlHLElBQUksR0FBRyxLQUFLTixLQUFMLENBQVdNLElBQXRCOztBQUNBLFdBQUssSUFBSVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1QsSUFBSSxDQUFDVSxRQUFMLENBQWNDLE1BQWQsQ0FBcUJDLE1BQXpDLEVBQWlESCxDQUFDLEVBQWxELEVBQXNEO0FBQ2xELFlBQUlJLEtBQUssR0FBR2IsSUFBSSxDQUFDVSxRQUFMLENBQWNDLE1BQWQsQ0FBcUJGLENBQXJCLENBQVo7O0FBQ0EsWUFBSUksS0FBSyxDQUFDTSxRQUFOLElBQWtCTixLQUFLLENBQUNPLFFBQTVCLEVBQXNDO0FBQ2xDLGNBQUksQ0FBQyxLQUFLekIsS0FBTCxDQUFXa0IsS0FBSyxDQUFDQyxJQUFqQixDQUFMLEVBQTZCO0FBQ3pCLG1CQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsYUFBTyxDQUFDakIsT0FBUjtBQUNIOzs7aUNBRVl3QixLLEVBQU87QUFDaEIsV0FBS0gsUUFBTCxxQkFDS0csS0FBSyxDQUFDQyxNQUFOLENBQWFDLEVBRGxCLEVBQ3VCRixLQUFLLENBQUNDLE1BQU4sQ0FBYU4sS0FEcEM7QUFHSDs7O3dDQUVtQjtBQUNoQixVQUFJaEIsSUFBSSxHQUFHLEtBQUtOLEtBQUwsQ0FBV00sSUFBdEI7QUFDQSxVQUFJd0IsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsV0FBSyxJQUFJZixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxJQUFJLENBQUNVLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQkMsTUFBekMsRUFBaURILENBQUMsRUFBbEQsRUFBc0Q7QUFDbEQsWUFBSUksS0FBSyxHQUFHYixJQUFJLENBQUNVLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQkYsQ0FBckIsQ0FBWjs7QUFDQSxZQUFJSSxLQUFLLENBQUNPLFFBQVYsRUFBb0I7QUFDaEIsY0FBSSxLQUFLekIsS0FBTCxDQUFXa0IsS0FBSyxDQUFDQyxJQUFqQixDQUFKLEVBQ0lVLE1BQU0sQ0FBQ1gsS0FBSyxDQUFDQyxJQUFQLENBQU4sR0FBcUIsS0FBS25CLEtBQUwsQ0FBV2tCLEtBQUssQ0FBQ0MsSUFBakIsQ0FBckIsQ0FESixLQUdJVSxNQUFNLENBQUNYLEtBQUssQ0FBQ0MsSUFBUCxDQUFOLEdBQXFCLEVBQXJCO0FBQ1A7QUFDSjs7QUFDRCxhQUFPVSxNQUFQO0FBQ0g7OztpQ0FFWUgsSyxFQUFtQjtBQUFBOztBQUFBLFVBQVpJLElBQVksdUVBQVAsS0FBTztBQUM1QixVQUFJSixLQUFKLEVBQ0lBLEtBQUssQ0FBQ0ssY0FBTjtBQUVKLFVBQUkxQixJQUFJLEdBQUcsS0FBS04sS0FBTCxDQUFXTSxJQUF0QjtBQUNBLFVBQUkyQixPQUFPLEdBQUc7QUFBQ1YsUUFBQUEsSUFBSSxFQUFFLEtBQUtXLGlCQUFMLEVBQVA7QUFBaUNDLFFBQUFBLE9BQU8sRUFBRUo7QUFBMUMsT0FBZDs7QUFFQUssaUNBQWVDLGNBQWYsQ0FBOEIvQixJQUFJLENBQUN1QixFQUFuQyxFQUF1Q0ksT0FBdkMsRUFDS0ssSUFETCxDQUNVLFVBQUNDLGtCQUFELEVBQXdCO0FBQzFCLFFBQUEsTUFBSSxDQUFDZixRQUFMLENBQWM7QUFBQ3JCLFVBQUFBLE9BQU8sRUFBRSxJQUFWO0FBQWdCRCxVQUFBQSxPQUFPLEVBQUU7QUFBekIsU0FBZDs7QUFDQSxRQUFBLE1BQUksQ0FBQ0YsS0FBTCxDQUFXd0MsZ0JBQVgsQ0FBNEJELGtCQUE1QjtBQUNILE9BSkwsV0FLVyxVQUFDRSxLQUFELEVBQVc7QUFDZEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxPQVBMO0FBUUg7Ozs2QkFFUWQsSyxFQUFPO0FBQ1pBLE1BQUFBLEtBQUssQ0FBQ0ssY0FBTjtBQUNBLFdBQUtSLFFBQUwsQ0FBYztBQUFDcEIsUUFBQUEsUUFBUSxFQUFFO0FBQVgsT0FBZDtBQUNIOzs7bUNBRWM7QUFDWCxXQUFLb0IsUUFBTCxDQUFjO0FBQUNwQixRQUFBQSxRQUFRLEVBQUU7QUFBWCxPQUFkO0FBQ0EsV0FBS00sWUFBTCxDQUFrQixJQUFsQixFQUF3QixJQUF4QjtBQUNIOzs7bUNBRWM7QUFDWCxXQUFLYyxRQUFMLENBQWM7QUFBQ3BCLFFBQUFBLFFBQVEsRUFBRTtBQUFYLE9BQWQ7QUFDSDs7OzZCQUdRO0FBQUE7O0FBQ0wsVUFBSSxLQUFLSCxLQUFMLENBQVdDLE9BQWYsRUFBd0I7QUFDcEIsZUFDSSx1REFESjtBQUdIOztBQUVELFVBQUlJLElBQUksR0FBRyxLQUFLTixLQUFMLENBQVdNLElBQXRCO0FBQ0EsVUFBSVcsTUFBTSxHQUFHWCxJQUFJLENBQUNVLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQjJCLEdBQXJCLENBQXlCLFVBQUN6QixLQUFEO0FBQUEsZUFDbEN0QixPQUFPLENBQUNnRCxNQUFSLENBQWUxQixLQUFLLENBQUMyQixNQUFyQixFQUNJM0IsS0FBSyxDQUFDQyxJQURWLEVBRUksTUFBSSxDQUFDbkIsS0FBTCxDQUFXa0IsS0FBSyxDQUFDQyxJQUFqQixDQUZKLEVBR0lkLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUosS0FBSyxDQUFDNEIsV0FBaEIsQ0FISixFQUlJNUIsS0FBSyxDQUFDTSxRQUpWLEVBS0ksTUFBSSxDQUFDeEIsS0FBTCxDQUFXRSxPQUxmLEVBTUksTUFBSSxDQUFDTSxZQU5ULENBRGtDO0FBQUEsT0FBekIsQ0FBYjtBQVNBLFVBQUlMLFFBQVEsR0FBRyxJQUFmO0FBQ0EsVUFBSSxLQUFLSCxLQUFMLENBQVdHLFFBQWYsRUFDSUEsUUFBUSxHQUFHLGdDQUFDLHlCQUFEO0FBQWUsUUFBQSxRQUFRLEVBQUUsS0FBS1EsWUFBOUI7QUFDZSxRQUFBLFFBQVEsRUFBRSxLQUFLQztBQUQ5QixRQUFYO0FBR0osYUFDSTtBQUFNLFFBQUEsUUFBUSxFQUFFLEtBQUtIO0FBQXJCLFNBQ0tOLFFBREwsRUFFS2EsTUFGTCxFQUdJO0FBQUssUUFBQSxLQUFLLEVBQUU7QUFBQytCLFVBQUFBLFNBQVMsRUFBRTtBQUFaO0FBQVosU0FDSTtBQUFRLFFBQUEsT0FBTyxFQUFFLEtBQUtyQyxRQUF0QjtBQUNRLFFBQUEsS0FBSyxFQUFFO0FBQUNzQyxVQUFBQSxXQUFXLEVBQUUsTUFBZDtBQUFzQkMsVUFBQUEsS0FBSyxFQUFFO0FBQTdCLFNBRGY7QUFFUSxRQUFBLFNBQVMsRUFBQztBQUZsQixnQkFESixFQUlJO0FBQVEsUUFBQSxJQUFJLEVBQUMsUUFBYjtBQUNRLFFBQUEsUUFBUSxFQUFFLENBQUMsS0FBSzNDLFlBQUwsRUFEbkI7QUFFUSxRQUFBLEtBQUssRUFBRTtBQUFDMkMsVUFBQUEsS0FBSyxFQUFFO0FBQVIsU0FGZjtBQUdRLFFBQUEsU0FBUyxFQUFDO0FBSGxCLGtCQUpKLENBSEosQ0FESjtBQWVIOzs7O0VBNUppQ0Msa0JBQU1DLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBDb21wb25lbnRzRmFjdG9yeSBmcm9tIFwiLi9Db21wb25lbnRzRmFjdG9yeVwiO1xuaW1wb3J0IFNraXBwaW5nUGFuZWwgZnJvbSBcIi4vU2tpcHBpbmdQYW5lbFwiO1xuaW1wb3J0IEl0ZW1SZXBvc2l0b3J5IGZyb20gXCIuLi8uLi9sb2dpYy9yZXBvc2l0b3JpZXMvSXRlbVJlcG9zaXRvcnlcIjtcblxubGV0IGZhY3RvcnkgPSBuZXcgQ29tcG9uZW50c0ZhY3RvcnkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBibG9ja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHNraXBwaW5nOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0dXBJdGVtKHByb3BzLml0ZW0pO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdGVGb3JtID0gdGhpcy52YWxpZGF0ZUZvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2tpcEl0ZW0gPSB0aGlzLnNraXBJdGVtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ta2lwQWNjZXB0ID0gdGhpcy5vblNraXBBY2NlcHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNraXBDYW5jZWwgPSB0aGlzLm9uU2tpcENhbmNlbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldEl0ZW1TdGF0ZSh0aGlzLnByb3BzLml0ZW0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtU3RhdGUocHJvcHMuaXRlbSk7XG4gICAgfVxuXG4gICAgc2V0dXBJdGVtKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS50ZW1wbGF0ZS5maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSBpdGVtLnRlbXBsYXRlLmZpZWxkc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2ZpZWxkLm5hbWVdID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEl0ZW1TdGF0ZShpdGVtKSB7XG4gICAgICAgIGxldCBpdGVtU3RhdGUgPSB7YmxvY2tlZDogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0udGVtcGxhdGUuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZmllbGQgPSBpdGVtLnRlbXBsYXRlLmZpZWxkc1tpXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGl0ZW0uZGF0YVtmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGl0ZW1TdGF0ZVtmaWVsZC5uYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1TdGF0ZVsnaXRlbSddID0gaXRlbTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShpdGVtU3RhdGUpO1xuICAgIH1cblxuXG4gICAgdmFsaWRhdGVGb3JtKCkge1xuICAgICAgICBsZXQgYmxvY2tlZCA9IHRoaXMuc3RhdGUuYmxvY2tlZDtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnByb3BzLml0ZW07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS50ZW1wbGF0ZS5maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaWVsZCA9IGl0ZW0udGVtcGxhdGUuZmllbGRzW2ldO1xuICAgICAgICAgICAgaWYgKGZpZWxkLnJlcXVpcmVkICYmIGZpZWxkLmVkaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlW2ZpZWxkLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWJsb2NrZWQ7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5pZF06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBbm5vdGF0aW9uRGF0YSgpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnByb3BzLml0ZW07XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtLnRlbXBsYXRlLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZpZWxkID0gaXRlbS50ZW1wbGF0ZS5maWVsZHNbaV07XG4gICAgICAgICAgICBpZiAoZmllbGQuZWRpdGFibGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVtmaWVsZC5uYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ZpZWxkLm5hbWVdID0gdGhpcy5zdGF0ZVtmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtmaWVsZC5uYW1lXSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQsIHNraXA9ZmFsc2UpIHtcbiAgICAgICAgaWYgKGV2ZW50KVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMucHJvcHMuaXRlbTtcbiAgICAgICAgbGV0IHBheWxvYWQgPSB7ZGF0YTogdGhpcy5nZXRBbm5vdGF0aW9uRGF0YSgpLCBza2lwcGVkOiBza2lwfTtcblxuICAgICAgICBJdGVtUmVwb3NpdG9yeS5wb3N0QW5ub3RhdGlvbihpdGVtLmlkLCBwYXlsb2FkKVxuICAgICAgICAgICAgLnRoZW4oKGFubm90YXRpb25SZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jsb2NrZWQ6IHRydWUsIGxvYWRpbmc6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQW5ub3RhdGlvblBvc3QoYW5ub3RhdGlvblJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2tpcEl0ZW0oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2tpcHBpbmc6IHRydWV9KTtcbiAgICB9XG5cbiAgICBvblNraXBBY2NlcHQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NraXBwaW5nOiBmYWxzZX0pO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdChudWxsLCB0cnVlKTtcbiAgICB9XG5cbiAgICBvblNraXBDYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NraXBwaW5nOiBmYWxzZX0pO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5wcm9wcy5pdGVtO1xuICAgICAgICBsZXQgZmllbGRzID0gaXRlbS50ZW1wbGF0ZS5maWVsZHMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgIGZhY3RvcnkuY3JlYXRlKGZpZWxkLndpZGdldCxcbiAgICAgICAgICAgICAgICBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVbZmllbGQubmFtZV0sXG4gICAgICAgICAgICAgICAgaXRlbS5kYXRhW2ZpZWxkLmRhdGFfc291cmNlXSxcbiAgICAgICAgICAgICAgICBmaWVsZC5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJsb2NrZWQsXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UpKTtcblxuICAgICAgICBsZXQgc2tpcHBpbmcgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5za2lwcGluZylcbiAgICAgICAgICAgIHNraXBwaW5nID0gPFNraXBwaW5nUGFuZWwgb25BY2NlcHQ9e3RoaXMub25Ta2lwQWNjZXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5vblNraXBDYW5jZWx9Lz47XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAge3NraXBwaW5nfVxuICAgICAgICAgICAgICAgIHtmaWVsZHN9XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5za2lwSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjEwcHhcIiwgd2lkdGg6IFwiODBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5Ta2lwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnZhbGlkYXRlRm9ybSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTIwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ncmVlblwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==