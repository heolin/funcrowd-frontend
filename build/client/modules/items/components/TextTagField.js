"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tag = function Tag(start, end, tag, text, tokens) {
  _classCallCheck(this, Tag);

  this.start = start;
  this.end = end;
  this.tag = tag;
  this.text = text;
  this.tokens = tokens;
};

var TextTagField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextTagField, _React$Component);

  function TextTagField(props) {
    var _this;

    _classCallCheck(this, TextTagField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextTagField).call(this, props));
    _this.state = {
      tags: [],
      selectedTokens: []
    };
    _this.onTagButtonClick = _this.onTagButtonClick.bind(_assertThisInitialized(_this));
    _this.onTagSelect = _this.onTagSelect.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextTagField, [{
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
    key: "getTagFromToken",
    value: function getTagFromToken(tokenId) {
      for (var i = 0; i < this.state.tags.length; i++) {
        var tag = this.state.tags[i];

        if (tag.tokens.indexOf(tokenId) >= 0) {
          return tag;
        }
      }

      return null;
    }
  }, {
    key: "getText",
    value: function getText() {
      var _this2 = this;

      var tokens = this.props.source.text.split(" ");
      var elements = [];

      var _loop = function _loop(_index) {
        var className = "";
        var text = "";

        var tag = _this2.getTagFromToken(_index);

        if (tag) {
          var colorIndex = _this2.props.source.tags.indexOf(tag.tag) + 1;
          className = " tag-color-" + colorIndex;
          text = tag.text;
          _index += tag.tokens.length - 1;
        } else {
          if (_this2.state.selectedTokens.indexOf(_index) > -1) className = " tag-selected";
          text = tokens[_index];
        }

        elements.push(_react["default"].createElement("span", {
          key: elements.length,
          className: "tagger-tag" + className,
          id: _index,
          onClick: function onClick() {
            return _this2.onTagSelect(_index);
          }
        }, text));
        elements.push(" ");
        index = _index;
      };

      for (var index = 0; index < tokens.length; index++) {
        _loop(index);
      }

      return elements;
    }
  }, {
    key: "onTagSelect",
    value: function onTagSelect(tagIndex) {
      var tag = this.getTagFromToken(tagIndex);

      if (tag) {
        var tags = this.state.tags;

        var _index2 = tags.indexOf(tag);

        if (_index2 > -1) tags.splice(_index2, 1);
        this.setState({
          tags: tags
        }, this.onChange);
      } else {
        var _tags = this.state.selectedTokens;

        var _index3 = _tags.indexOf(tagIndex);

        if (_index3 > -1) {
          if (_tags.indexOf(tagIndex - 1) < 0 || _tags.indexOf(tagIndex + 1) < 0) {
            _tags.splice(_index3, 1);
          }
        } else {
          if (_tags.length > 0) {
            if (_tags.indexOf(tagIndex - 1) > -1 || _tags.indexOf(tagIndex + 1) > -1) {
              _tags.push(tagIndex);
            }
          } else {
            _tags.push(tagIndex);
          }
        }

        this.setState({
          selectedTokens: _tags
        }, this.onChange);
      }
    }
  }, {
    key: "onTagButtonClick",
    value: function onTagButtonClick(tag) {
      var sourceText = this.props.source.text;
      var tokens = sourceText.split(" ");
      if (this.state.selectedTokens.length === 0) return;
      var tags = this.state.tags;
      var selectedTokens = this.state.selectedTokens.sort();
      var start = 0;

      for (var i = 0; i < selectedTokens[0]; i++) {
        start += tokens[i].length;
      }

      start += selectedTokens[0];
      var end = start;

      for (var _i = 0; _i < selectedTokens.length; _i++) {
        end += tokens[selectedTokens[_i]].length;
      }

      end += selectedTokens.length - 1;
      var text = sourceText.substr(start, end - start);
      tags.push(new Tag(start, end, tag, text, selectedTokens));
      this.setState({
        tags: tags,
        selectedTokens: []
      }, this.onChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var label;
      if (this.props.label) label = _react["default"].createElement("label", null, _react["default"].createElement("strong", null, this.props.label));
      var tagsButtons = this.props.source.tags.map(function (tag) {
        var colorIndex = _this3.props.source.tags.indexOf(tag) + 1;
        var example = null;
        if ('examples' in _this3.props.source) example = "e.g. " + _this3.props.source.examples[tag];
        return _react["default"].createElement("div", {
          key: tag,
          className: "btn tagger-button tagger-button-" + colorIndex,
          "data-tip": example,
          onClick: function onClick() {
            return _this3.onTagButtonClick(tag);
          }
        }, tag);
      });
      return _react["default"].createElement("div", {
        className: "form-group"
      }, label, _react["default"].createElement("div", {
        id: this.props.name + "_text",
        className: "tagger-text noselect"
      }, this.getText()), _react["default"].createElement("div", {
        className: "tagger-buttons"
      }, tagsButtons), _react["default"].createElement(_reactTooltip["default"], null));
    }
  }]);

  return TextTagField;
}(_react["default"].Component);

exports["default"] = TextTagField;