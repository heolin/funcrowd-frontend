"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var uniqueItemIndex = 0;

var Item =
/*#__PURE__*/
function () {
  function Item(id, task, data, template) {
    var _this = this;

    _classCallCheck(this, Item);

    this.id = id;
    this.index = uniqueItemIndex;
    this.task = task;
    this.data = data;
    this.template = template;
    this.templateFields = {};
    template.fields.forEach(function (field) {
      _this.templateFields[field.name] = field;
    });
    uniqueItemIndex += 1;
  }

  _createClass(Item, null, [{
    key: "fromJson",
    value: function fromJson(item_data) {
      if (item_data) {
        var item = new Item(item_data.id, item_data.task, item_data.data, item_data.template);
        return item;
      }
    }
  }]);

  return Item;
}();

exports["default"] = Item;