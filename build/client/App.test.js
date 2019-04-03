"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it('renders without crashing', function () {
  var div = document.createElement('div');

  _reactDom["default"].render(_react["default"].createElement(_App["default"], null), div);

  _reactDom["default"].unmountComponentAtNode(div);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvQXBwLnRlc3QuanMiXSwibmFtZXMiOlsiaXQiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsInVubW91bnRDb21wb25lbnRBdE5vZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsRUFBRSxDQUFDLDBCQUFELEVBQTZCLFlBQU07QUFDbkMsTUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFDQUMsdUJBQVNDLE1BQVQsQ0FBZ0IsZ0NBQUMsZUFBRCxPQUFoQixFQUF5QkosR0FBekI7O0FBQ0FHLHVCQUFTRSxzQkFBVCxDQUFnQ0wsR0FBaEM7QUFDRCxDQUpDLENBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuaXQoJ3JlbmRlcnMgd2l0aG91dCBjcmFzaGluZycsICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkaXYpO1xuICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRpdik7XG59KTtcbiJdfQ==