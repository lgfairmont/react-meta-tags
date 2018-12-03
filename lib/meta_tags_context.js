"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

/** context class which passes extract fuunction to MetaTags Component **/
var MetaTagsContext =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MetaTagsContext, _Component);

  function MetaTagsContext() {
    (0, _classCallCheck2.default)(this, MetaTagsContext);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MetaTagsContext).apply(this, arguments));
  }

  (0, _createClass2.default)(MetaTagsContext, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        extract: this.props.extract
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);
  return MetaTagsContext;
}(_react.Component);

(0, _defineProperty2.default)(MetaTagsContext, "childContextTypes", {
  extract: _propTypes.default.func
});
var _default = MetaTagsContext;
exports.default = _default;
module.exports = exports.default;