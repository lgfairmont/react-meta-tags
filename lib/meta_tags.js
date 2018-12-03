"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** An wrapper component to wrap element which need to shifted to head **/
var MetaTags =
/*#__PURE__*/
function (_Component) {
  _inherits(MetaTags, _Component);

  function MetaTags() {
    _classCallCheck(this, MetaTags);

    return _possibleConstructorReturn(this, _getPrototypeOf(MetaTags).apply(this, arguments));
  }

  _createClass(MetaTags, [{
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
      var _handleChildrens = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var children, headComponent;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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

_defineProperty(MetaTags, "contextTypes", {
  extract: _propTypes.default.func
});

var _default = MetaTags;
exports.default = _default;
module.exports = exports.default;