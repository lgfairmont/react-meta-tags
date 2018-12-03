"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _utils = require("./utils");

/** An wrapper component to wrap element which need to shifted to head **/
var MetaTags =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MetaTags, _Component);

  function MetaTags() {
    (0, _classCallCheck2.default)(this, MetaTags);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MetaTags).apply(this, arguments));
  }

  (0, _createClass2.default)(MetaTags, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.temporaryElement = document.createElement('div');
      this.handleChildrens();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.children !== this.props.children) {
        this.handleChildrens();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.temporaryElement) {
        _reactDom.default.unmountComponentAtNode(this.temporaryElement);
      }
    }
  }, {
    key: "extractChildren",
    value: function extractChildren() {
      var extract = this.context.extract;

      if (extract) {
        extract(this.props.children);
      }
    }
  }, {
    key: "handleChildrens",
    value: function () {
      var _handleChildrens = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this = this;

        var children, headComponent;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                children = this.props.children;

                if (!this.context.extract) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                headComponent = _react.default.createElement("div", {
                  className: "react-head-temp"
                }, children);
                _context.t0 = _reactDom.default;
                _context.next = 7;
                return headComponent;

              case 7:
                _context.t1 = _context.sent;
                _context.t2 = this.temporaryElement;

                _context.t3 = function () {
                  var childStr = _this.temporaryElement.innerHTML; //if html is not changed return

                  if (_this.lastChildStr === childStr) {
                    return;
                  }

                  _this.lastChildStr = childStr;
                  var childNodes = Array.prototype.slice.call(_this.temporaryElement.querySelector('.react-head-temp').children);
                  var head = document.head;
                  var headHtml = head.innerHTML; //filter children remove if children has not been changed

                  childNodes = childNodes.filter(function (child) {
                    return headHtml.indexOf((0, _utils.getDomAsString)(child)) === -1;
                  }); //remove duplicate title and meta from head

                  childNodes.forEach(function (child) {
                    var tag = child.tagName.toLowerCase();

                    if (tag === 'title') {
                      var title = (0, _utils.getDuplicateTitle)();
                      if (title) (0, _utils.removeChild)(head, title);
                    } else if (tag === 'meta') {
                      var meta = (0, _utils.getDuplicateMeta)(child);
                      if (meta) (0, _utils.removeChild)(head, meta);
                    } else if (tag === 'link' && child.rel === 'canonical') {
                      var link = (0, _utils.getDuplicateCanonical)(child);
                      if (link) (0, _utils.removeChild)(head, link);
                    }
                  });
                  (0, _utils.appendChild)(document.head, childNodes);
                };

                _context.t0.render.call(_context.t0, _context.t1, _context.t2, _context.t3);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleChildrens() {
        return _handleChildrens.apply(this, arguments);
      }

      return handleChildrens;
    }()
  }, {
    key: "render",
    value: function render() {
      this.extractChildren();
      return null;
    }
  }]);
  return MetaTags;
}(_react.Component);

(0, _defineProperty2.default)(MetaTags, "contextTypes", {
  extract: _propTypes.default.func
});
var _default = MetaTags;
exports.default = _default;
module.exports = exports.default;