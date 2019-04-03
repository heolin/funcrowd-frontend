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
  "SelectField": _SelectField["default"]
};

var ComponentsFactory =
/*#__PURE__*/
function () {
  function ComponentsFactory() {
    _classCallCheck(this, ComponentsFactory);
  }

  _createClass(ComponentsFactory, [{
    key: "create",
    value: function create(widget, name, value, source, required, blocked, handleChange) {
      if (widget === "Hidden") return null;
      var component = Components[widget];
      return _react["default"].createElement(component, {
        name: name,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbW9kdWxlcy9pdGVtcy9Db21wb25lbnRzRmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnRzIiwiVGV4dExhYmVsIiwiUmFkaW9GaWVsZCIsIlRleHRGaWVsZCIsIk11bHRpQ2hvaWNlRmllbGQiLCJTZWxlY3RGaWVsZCIsIkNvbXBvbmVudHNGYWN0b3J5Iiwid2lkZ2V0IiwibmFtZSIsInZhbHVlIiwic291cmNlIiwicmVxdWlyZWQiLCJibG9ja2VkIiwiaGFuZGxlQ2hhbmdlIiwiY29tcG9uZW50IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBR0EsSUFBSUEsVUFBVSxHQUFHO0FBQ2IsZUFBYUMscUJBREE7QUFFYixpQkFBZUMsc0JBRkY7QUFHYixTQUFPRCxxQkFITTtBQUliLGVBQWFFLHFCQUpBO0FBS2IsZ0JBQWNELHNCQUxEO0FBTWIsc0JBQW9CRSw0QkFOUDtBQU9iLGlCQUFlQztBQVBGLENBQWpCOztJQVVxQkMsaUI7Ozs7Ozs7OzsyQkFFVkMsTSxFQUFRQyxJLEVBQU1DLEssRUFBT0MsTSxFQUFRQyxRLEVBQVVDLE8sRUFBU0MsWSxFQUFjO0FBQ2pFLFVBQUlOLE1BQU0sS0FBSyxRQUFmLEVBQ0ksT0FBTyxJQUFQO0FBQ0osVUFBSU8sU0FBUyxHQUFHZCxVQUFVLENBQUNPLE1BQUQsQ0FBMUI7QUFDQSxhQUFPUSxrQkFBTUMsYUFBTixDQUFvQkYsU0FBcEIsRUFBK0I7QUFDbENOLFFBQUFBLElBQUksRUFBRUEsSUFENEI7QUFFbENDLFFBQUFBLEtBQUssRUFBRUEsS0FGMkI7QUFHbENDLFFBQUFBLE1BQU0sRUFBRUEsTUFIMEI7QUFJbENPLFFBQUFBLEdBQUcsRUFBRVQsSUFKNkI7QUFLbENHLFFBQUFBLFFBQVEsRUFBRUEsUUFMd0I7QUFNbENPLFFBQUFBLFFBQVEsRUFBRU4sT0FOd0I7QUFPbENPLFFBQUFBLFFBQVEsRUFBRU47QUFQd0IsT0FBL0IsQ0FBUDtBQVNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVGV4dExhYmVsIGZyb20gXCIuL2NvbXBvbmVudHMvVGV4dExhYmVsXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCIuL2NvbXBvbmVudHMvVGV4dEZpZWxkXCI7XG5pbXBvcnQgUmFkaW9GaWVsZCBmcm9tIFwiLi9jb21wb25lbnRzL1JhZGlvRmllbGRcIjtcbmltcG9ydCBNdWx0aUNob2ljZUZpZWxkIGZyb20gXCIuL2NvbXBvbmVudHMvTXVsdGlDaG9pY2VGaWVsZFwiO1xuaW1wb3J0IFNlbGVjdEZpZWxkIGZyb20gXCIuL2NvbXBvbmVudHMvU2VsZWN0RmllbGRcIjtcblxuXG5sZXQgQ29tcG9uZW50cyA9IHtcbiAgICBcIlRleHRMYWJlbFwiOiBUZXh0TGFiZWwsXG4gICAgXCJDaG9pY2VGaWVsZFwiOiBSYWRpb0ZpZWxkICxcbiAgICBcIlBERlwiOiBUZXh0TGFiZWwsXG4gICAgXCJUZXh0RmllbGRcIjogVGV4dEZpZWxkLFxuICAgIFwiUmFkaW9GaWVsZFwiOiBSYWRpb0ZpZWxkLFxuICAgIFwiTXVsdGlDaG9pY2VGaWVsZFwiOiBNdWx0aUNob2ljZUZpZWxkLFxuICAgIFwiU2VsZWN0RmllbGRcIjogU2VsZWN0RmllbGQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRzRmFjdG9yeSB7XG5cbiAgICBjcmVhdGUod2lkZ2V0LCBuYW1lLCB2YWx1ZSwgc291cmNlLCByZXF1aXJlZCwgYmxvY2tlZCwgaGFuZGxlQ2hhbmdlKSB7XG4gICAgICAgIGlmICh3aWRnZXQgPT09IFwiSGlkZGVuXCIpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IENvbXBvbmVudHNbd2lkZ2V0XTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICBrZXk6IG5hbWUsXG4gICAgICAgICAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgICAgICAgICBkaXNhYmxlZDogYmxvY2tlZCxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19