"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextLabel = _interopRequireDefault(require("./components/TextLabel"));

var _TextField = _interopRequireDefault(require("./components/TextField"));

var _RadioField = _interopRequireDefault(require("./components/RadioField"));

var _MultiChoiceField = _interopRequireDefault(require("./components/MultiChoiceField"));

var _SelectField = _interopRequireDefault(require("./components/SelectField"));

var _LinkButton = _interopRequireDefault(require("./components/LinkButton"));

var _ImagesGallery = _interopRequireDefault(require("./components/ImagesGallery/ImagesGallery"));

var _HtmlLabel = _interopRequireDefault(require("./components/HtmlLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Components = {
  "TextLabel": _TextLabel["default"],
  "ChoiceField": _RadioField["default"],
  "PDF": _TextLabel["default"],
  "TextField": _TextField["default"],
  "RadioField": _RadioField["default"],
  "MultiChoiceField": _MultiChoiceField["default"],
  "SelectField": _SelectField["default"],
  "LinkButton": _LinkButton["default"],
  "ImagesGallery": _ImagesGallery["default"],
  "HtmlLabel": _HtmlLabel["default"]
};

var ComponentsFactory =
/*#__PURE__*/
function () {
  function ComponentsFactory() {
    _classCallCheck(this, ComponentsFactory);
  }

  _createClass(ComponentsFactory, [{
    key: "create",
    value: function create(widget, name, label, value, source, required, blocked, handleChange) {
      if (widget === "Hidden") return null;
      var component = Components[widget];
      return _react["default"].createElement(component, {
        name: name,
        label: label,
        value: value,
        source: source,
        key: name,
        required: required,
        disabled: blocked,
        onChange: handleChange
      });
    }
  }]);

  return ComponentsFactory;
}();

exports["default"] = ComponentsFactory;