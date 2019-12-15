"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _Selection = _interopRequireDefault(require("../../../utils/Selection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tag =
/*#__PURE__*/
function () {
  function Tag(start, end, tag, text) {
    _classCallCheck(this, Tag);

    this.start = start;
    this.end = end;
    this.tag = tag;
    this.text = text;

    this._clean();
  }

  _createClass(Tag, [{
    key: "_clean",
    value: function _clean() {
      var leftOffset = this.text.length;
      var rightOffset = 0;

      for (var i = 0; i < this.text.length; i++) {
        if (this.text[i] !== " ") {
          if (i < leftOffset) leftOffset = i;
          if (i > leftOffset && i > rightOffset) rightOffset = i;
        }
      }

      rightOffset = this.text.length - rightOffset - 1;
      this.start = this.start + leftOffset;
      this.end = this.end - rightOffset;
      this.text = this.text.substr(leftOffset, this.text.length - (leftOffset + rightOffset));
    }
  }]);

  return Tag;
}();

function onSelect() {
  alert("SELECT");
}

var TextTagField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextTagField, _React$Component);

  function TextTagField(props) {
    var _this;

    _classCallCheck(this, TextTagField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextTagField).call(this, props));
    _this.state = {
      selectedTag: null,
      tags: []
    };
    _this.onTagClick = _this.onTagClick.bind(_assertThisInitialized(_this));
    _this.onTagButtonClick = _this.onTagButtonClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextTagField, [{
    key: "onTagClick",
    value: function onTagClick(index) {
      var tags = this.state.tags;
      tags.splice(index, 1);
      this.setState({
        tags: tags
      });
    }
  }, {
    key: "getSelectionText",
    value: function getSelectionText(start, end) {
      return this.props.source.text.substring(start, end);
    }
  }, {
    key: "onTagButtonClick",
    value: function onTagButtonClick(tag) {
      var element = document.getElementById(this.props.name + "_text");

      var selection = _Selection["default"].getRange(element);

      if (selection == null) return;
      var selectionText = this.getSelectionText(selection.start, selection.end);
      if (selectionText === "") return;
      if (this.checkTagsCollision(selection.start, selection.end)) return;
      var tagElement = new Tag(selection.start, selection.end, tag, selectionText);
      this.addTag(tagElement);
    }
  }, {
    key: "checkTagsCollision",
    value: function checkTagsCollision(start, end) {
      var collision = false;
      this.state.tags.forEach(function (tag) {
        if (tag.start <= end && tag.end >= start) collision = true;
      });
      return collision;
    }
  }, {
    key: "addTag",
    value: function addTag(tag) {
      var tags = this.state.tags;
      var index = tags.length;

      for (var i = 0; i < tags.length; i++) {
        if (tag.start < tags[i].start) {
          index = i;
          break;
        }
      }

      tags.splice(index, 0, tag);
      this.setState({
        tags: tags
      });
      this.onChange();
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var event = {
        target: {
          id: this.props.name,
          value: JSON.stringify(this.state.tags)
        }
      };
      this.props.onChange(event);
    }
  }, {
    key: "getText",
    value: function getText() {
      var _this2 = this;

      var text = this.props.source.text;
      var elements = [];
      var lastIndex = 0;

      var _loop = function _loop(i) {
        var tag = _this2.state.tags[i];
        var colorIndex = _this2.props.source.tags.indexOf(tag.tag) + 1;
        if (lastIndex < tag.start) elements.push(_react["default"].createElement("span", {
          key: elements.length
        }, text.substr(lastIndex, tag.start - lastIndex)));
        elements.push(_react["default"].createElement("span", {
          key: elements.length,
          className: "tagger-tag tag-color-" + colorIndex,
          "data-tip": "tip",
          id: i,
          onClick: function onClick() {
            return _this2.onTagClick(i);
          }
        }, text.substr(tag.start, tag.end - tag.start)));
        lastIndex = tag.end;
      };

      for (var i = 0; i < this.state.tags.length; i++) {
        _loop(i);
      }

      if (lastIndex < text.length) elements.push(_react["default"].createElement("span", {
        key: elements.length
      }, text.substr(lastIndex, text.length - lastIndex)));
      return elements;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var label;
      if (this.props.label) label = _react["default"].createElement("label", null, _react["default"].createElement("strong", null, this.props.label));
      var tagsButtons = this.props.source.tags.map(function (tag) {
        var colorIndex = _this3.props.source.tags.indexOf(tag) + 1;
        return _react["default"].createElement("div", {
          key: tag,
          className: "btn tagger-button tagger-button-" + colorIndex,
          onClick: function onClick() {
            return _this3.onTagButtonClick(tag);
          }
        }, tag);
      });
      return _react["default"].createElement("div", {
        className: "form-group"
      }, label, _react["default"].createElement("div", {
        id: this.props.name + "_text",
        onSelect: onSelect,
        className: "tagger-text"
      }, this.getText()), _react["default"].createElement("div", {
        className: "tagger-buttons"
      }, tagsButtons));
    }
  }]);

  return TextTagField;
}(_react["default"].Component);

exports["default"] = TextTagField;