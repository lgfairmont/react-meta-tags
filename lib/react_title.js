"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _meta_tags = _interopRequireDefault(require("./meta_tags"));

var ReactTitle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ReactTitle, _Component);

  function ReactTitle() {
    (0, _classCallCheck2.default)(this, ReactTitle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ReactTitle).apply(this, arguments));
  }

  (0, _createClass2.default)(ReactTitle, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_meta_tags.default, null, _react.default.createElement("title", null, this.props.title));
    }
  }]);
  return ReactTitle;
}(_react.Component);

(0, _defineProperty2.default)(ReactTitle, "propTypes", {
  title: _propTypes.default.string
});
var _default = ReactTitle;
exports.default = _default;
module.exports = exports.default;