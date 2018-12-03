/**
 * react-meta-tags - 0.7.2
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2018 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-meta-tags
 */

import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { Component, Children } from 'react';
import '@babel/runtime/helpers/toConsumableArray';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import ReactDOM from 'react-dom';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

/** context class which passes extract fuunction to MetaTags Component **/

var MetaTagsContext =
/*#__PURE__*/
function (_Component) {
  _inherits(MetaTagsContext, _Component);

  function MetaTagsContext() {
    _classCallCheck(this, MetaTagsContext);

    return _possibleConstructorReturn(this, _getPrototypeOf(MetaTagsContext).apply(this, arguments));
  }

  _createClass(MetaTagsContext, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        extract: this.props.extract
      };
    }
  }, {
    key: "render",
    value: function render() {
      return Children.only(this.props.children);
    }
  }]);

  return MetaTagsContext;
}(Component);

_defineProperty(MetaTagsContext, "childContextTypes", {
  extract: propTypes.func
});

var uniqueIdentifiersI = ['property', 'name', 'itemprop'];
/**
  Note:
  1. In server side we will add meta tags and title at last after fitering
  2. In client we will match and replace meta tagString
  3. For now we will not support link and other tags properly, they can be added but we will not check for uniqueness and will not decide placement
**/

function filterOutMetaWithId(metas) {
  metas = Array.prototype.slice.call(metas || []);
  return metas.filter(function (meta) {
    return !meta.id;
  });
}

function getDuplicateTitle() {
  return document.head.querySelectorAll('title');
}
function getDuplicateCanonical() {
  return document.head.querySelectorAll('link[rel="canonical"]');
}
function getDuplicateMeta(meta) {
  var head = document.head;
  var id = meta.id; //if has id and element with id is not present than return the element

  if (id) {
    return id && head.querySelector("#".concat(id));
  } //for any other unique identifier check if metas already available with same identifier which doesn't have id


  return uniqueIdentifiersI.reduce(function (duplicates, identifier) {
    var identifierValue = meta.getAttribute(identifier);
    return identifierValue ? duplicates.concat(filterOutMetaWithId(head.querySelectorAll("[".concat(identifier, " = \"").concat(identifierValue, "\"]")))) : duplicates;
  }, []);
} //function to append childrens on a parent

function appendChild(parent, childrens) {
  if (childrens.length === undefined) childrens = [childrens];
  var docFrag = document.createDocumentFragment(); //we used for loop instead of forEach because childrens can be array like object

  for (var i = 0, ln = childrens.length; i < ln; i++) {
    docFrag.appendChild(childrens[i]);
  }

  parent.appendChild(docFrag);
}
function removeChild(parent, childrens) {
  if (childrens.length === undefined) childrens = [childrens];

  for (var i = 0, ln = childrens.length; i < ln; i++) {
    parent.removeChild(childrens[i]);
  }
} //get dom as string format

function getDomAsString(dom) {
  var temp = document.createElement('div');
  temp.appendChild(dom);
  return temp.innerHTML;
}

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
        ReactDOM.unmountComponentAtNode(this.temporaryElement);
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
      _regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var children, headComponent;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
                headComponent = React.createElement("div", {
                  className: "react-head-temp"
                }, children);
                _context.t0 = ReactDOM;
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
                    return headHtml.indexOf(getDomAsString(child)) === -1;
                  }); //remove duplicate title and meta from head

                  childNodes.forEach(function (child) {
                    var tag = child.tagName.toLowerCase();

                    if (tag === 'title') {
                      var title = getDuplicateTitle();
                      if (title) removeChild(head, title);
                    } else if (tag === 'meta') {
                      var meta = getDuplicateMeta(child);
                      if (meta) removeChild(head, meta);
                    } else if (tag === 'link' && child.rel === 'canonical') {
                      var link = getDuplicateCanonical(child);
                      if (link) removeChild(head, link);
                    }
                  });
                  appendChild(document.head, childNodes);
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
}(Component);

_defineProperty(MetaTags, "contextTypes", {
  extract: propTypes.func
});

var ReactTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactTitle, _Component);

  function ReactTitle() {
    _classCallCheck(this, ReactTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactTitle).apply(this, arguments));
  }

  _createClass(ReactTitle, [{
    key: "render",
    value: function render() {
      return React.createElement(MetaTags, null, React.createElement("title", null, this.props.title));
    }
  }]);

  return ReactTitle;
}(Component);

_defineProperty(ReactTitle, "propTypes", {
  title: propTypes.string
});

export default MetaTags;
export { MetaTags, MetaTagsContext, ReactTitle };
