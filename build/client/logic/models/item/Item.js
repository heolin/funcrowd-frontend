"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Item =
/*#__PURE__*/
function () {
  function Item(id, task, data, template) {
    _classCallCheck(this, Item);

    this.id = id;
    this.task = task;
    this.data = data;
    this.template = template;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbG9naWMvbW9kZWxzL2l0ZW0vSXRlbS5qcyJdLCJuYW1lcyI6WyJJdGVtIiwiaWQiLCJ0YXNrIiwiZGF0YSIsInRlbXBsYXRlIiwiaXRlbV9kYXRhIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7O0FBQ2pCLGdCQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQkMsSUFBdEIsRUFBNEJDLFFBQTVCLEVBQXNDO0FBQUE7O0FBQ2xDLFNBQUtILEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7Ozs7NkJBRWVDLFMsRUFBVztBQUN2QixVQUFJQSxTQUFKLEVBQWU7QUFDWCxZQUFJQyxJQUFJLEdBQUcsSUFBSU4sSUFBSixDQUNQSyxTQUFTLENBQUNKLEVBREgsRUFFUEksU0FBUyxDQUFDSCxJQUZILEVBR1BHLFNBQVMsQ0FBQ0YsSUFISCxFQUlQRSxTQUFTLENBQUNELFFBSkgsQ0FBWDtBQU1BLGVBQU9FLElBQVA7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGFzaywgZGF0YSwgdGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGl0ZW1fZGF0YSkge1xuICAgICAgICBpZiAoaXRlbV9kYXRhKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKFxuICAgICAgICAgICAgICAgIGl0ZW1fZGF0YS5pZCxcbiAgICAgICAgICAgICAgICBpdGVtX2RhdGEudGFzayxcbiAgICAgICAgICAgICAgICBpdGVtX2RhdGEuZGF0YSxcbiAgICAgICAgICAgICAgICBpdGVtX2RhdGEudGVtcGxhdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==