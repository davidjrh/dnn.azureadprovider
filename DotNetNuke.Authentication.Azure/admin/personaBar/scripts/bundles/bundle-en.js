/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/dist/scripts/bundles";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.dnn.nodeModules.React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = window.dnn.nodeModules.CommonComponents;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(10);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(20)(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var utils = {
  init: function init(utilities) {
    if (!utilities) {
      throw new Error("Utilities is undefined.");
    }

    this.utilities = utilities;
  },
  utilities: null
};
/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/constants/actionTypes/settings.js
var settingsActionTypes = {
  SWITCH_TAB: "SWITCH_TAB",
  RETRIEVED_SETTINGS: "RETRIEVED_SETTINGS",
  UPDATED_SETTINGS: "UPDATED_SETTINGS",
  UPDATED_PROFILEMAPPING: "UPDATED_PROFILEMAPPING",
  SETTINGS_CLIENT_MODIFIED: "SETTINGS_CLIENT_MODIFIED",
  RETRIEVED_PROFILESETTINGS: "RETRIEVED_PROFILESETTINGS",
  RETRIEVED_PROFILEPROPERTIES: "RETRIEVED_PROFILEPROPERTIES",
  CANCELLED_PROFILEMAPPING_CLIENT_MODIFIED: "CANCELLED_PROFILEMAPPING_CLIENT_MODIFIED",
  PROFILEMAPPINGS_CLIENT_MODIFIED: "PROFILEMAPPINGS_CLIENT_MODIFIED",
  SWITCH_MAPPING_SUBTAB: "SWITCH_MAPPING_SUBTAB",
  RETRIEVED_ROLEMAPPINGSETTINGS: "RETRIEVED_ROLEMAPPINGSETTINGS",
  RETRIEVED_AVAILABLEROLES: "RETRIEVED_AVAILABLEROLES",
  ROLEMAPPINGS_CLIENT_MODIFIED: "ROLEMAPPINGS_CLIENT_MODIFIED",
  RETRIEVED_USERMAPPINGSETTINGS: "RETRIEVED_USERMAPPINGSETTINGS",
  USERMAPPINGS_CLIENT_MODIFIED: "USERMAPPINGS_CLIENT_MODIFIED"
};
/* harmony default export */ var settings = (settingsActionTypes);
// CONCATENATED MODULE: ./src/constants/actionTypes/index.js
/* concated harmony reexport settings */__webpack_require__.d(__webpack_exports__, "a", function() { return settings; });



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = window.dnn.nodeModules.ReactRedux;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(27);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = window.dnn.nodeModules.Redux;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var redux_devtools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_log_monitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var redux_devtools_log_monitor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_log_monitor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_dock_monitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var redux_devtools_dock_monitor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_dock_monitor__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["a"] = (Object(redux_devtools__WEBPACK_IMPORTED_MODULE_1__["createDevTools"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_devtools_dock_monitor__WEBPACK_IMPORTED_MODULE_3___default.a, {
  toggleVisibilityKey: "ctrl-h",
  changePositionKey: "ctrl-q",
  defaultIsVisible: false
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_devtools_log_monitor__WEBPACK_IMPORTED_MODULE_2___default.a, null))));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(19);
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = window.dnn.nodeModules.ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = window.dnn.nodeModules.ReduxThunk;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = window.dnn.nodeModules.ReduxImmutableStateInvariant;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = window.dnn.nodeModules.ReduxDevTools;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = window.dnn.nodeModules.ReduxDevToolsLogMonitor;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = window.dnn.nodeModules.ReduxDevToolsDockMonitor;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-undef */
if (false) {} else {
  module.exports = __webpack_require__(51);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(10);
var assign = __webpack_require__(21);

var ReactPropTypesSecret = __webpack_require__(11);
var checkPropTypes = __webpack_require__(22);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
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


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(11);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(24);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Imports
var urlEscape = __webpack_require__(25);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(26));

// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.dnn-azuread-generalSettings {\n  box-sizing: border-box;\n  padding: 35px 25px;\n}\n.dnn-azuread-generalSettings * {\n  box-sizing: border-box;\n}\n.dnn-azuread-generalSettings h1 {\n  margin-top: 30px;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n.dnn-azuread-generalSettings .panel-description {\n  margin-bottom: 30px;\n}\n.dnn-azuread-generalSettings .logo {\n  float: right;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-size: 70px;\n  width: 80px;\n  height: 80px;\n}\n.dnn-azuread-generalSettings p {\n  margin-bottom: 20px;\n}\n.dnn-azuread-generalSettings .dnn-switch-container {\n  width: 90%;\n}\n.dnn-azuread-generalSettings .directory-section {\n  margin-top: 10px;\n}\n.dnn-azuread-generalSettings .editor-row {\n  display: inline-block;\n  width: 90%;\n}\n.dnn-azuread-generalSettings .input-full-row {\n  width: 95%;\n}\n.dnn-azuread-generalSettings .dnn-single-line-input-with-error {\n  width: 100%;\n  padding-bottom: 15px;\n}\n.dnn-azuread-generalSettings .dnn-ui-common-single-line-input.small {\n  margin-bottom: 0px!important;\n}\n.dnn-azuread-generalSettings .buttons-box {\n  margin-top: 50px;\n  margin-bottom: 30px;\n}\n.dnn-azuread-generalSettings .buttons-box button.dnn-ui-common-button[role=primary] {\n  margin-left: 10px;\n}\n", ""]);



/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAAE7CAYAAACi3CbHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZiwgMjAyMS8xMS8xNC0xMjozMDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMi0wM1QxOTowMzo0M1oiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAzVDE5OjA5OjAxWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wM1QxOTowOTowMVoiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE5OWQyMGY5LTkxZGEtNDc0Ny05MTNjLWRhZjIyMDI5ZjRmYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhv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"

/***/ }),
/* 27 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(29);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.dnn-azuread-aad-syncSettings {\n  box-sizing: border-box;\n  padding: 35px 25px;\n}\n.dnn-azuread-aad-syncSettings * {\n  box-sizing: border-box;\n}\n.dnn-azuread-aad-syncSettings h1 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.dnn-azuread-aad-syncSettings p {\n  margin-bottom: 20px;\n}\n.dnn-azuread-aad-syncSettings .dnn-switch-container {\n  width: 90%;\n}\n.dnn-azuread-aad-syncSettings .editor-row {\n  display: inline-block;\n  width: 90%;\n}\n.dnn-azuread-aad-syncSettings .dnn-single-line-input-with-error {\n  width: 100%;\n  padding-bottom: 15px;\n}\n.dnn-azuread-aad-syncSettings .dnn-ui-common-single-line-input.small {\n  margin-bottom: 0px!important;\n}\n.dnn-azuread-aad-syncSettings .buttons-box {\n  margin-top: 50px;\n  margin-bottom: 30px;\n}\n.dnn-azuread-aad-syncSettings .buttons-box button.dnn-ui-common-button[role=primary] {\n  margin-left: 10px;\n}\n.dnn-azuread-aad-syncSettings .warning-container {\n  width: 100%;\n  float: left;\n  margin: 10px 0 15px 0;\n  font-weight: bolder;\n  color: #EA2134;\n}\n.dnn-azuread-aad-syncSettings .warning-container .collapsible-content {\n  margin-top: 5px;\n}\n.dnn-azuread-aad-syncSettings .warning-container .collapsible-content > div {\n  border: solid 1px;\n}\n.dnn-azuread-aad-syncSettings .warning-container .warning-icon > svg {\n  width: 17px;\n  float: left;\n  height: 17px;\n  margin: 0 10px 0 0;\n}\n.dnn-azuread-aad-syncSettings .warning-container .warning-msg {\n  margin-left: 30px;\n}\n.dnn-azuread-aad-syncSettings h1.spacer {\n  margin-top: 25px;\n}\n", ""]);



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n\t.st0{fill:#E72635;}\r\n</style>\r\n<path class=\"st0\" d=\"M1564.2,483.7c-298.4-298.2-782.1-298.2-1080.5,0c-298.4,298.2-298.4,782.1,0,1080.5\r\n\tc298.4,298.4,782.3,298.2,1080.5,0C1862.6,1266,1862.6,781.9,1564.2,483.7z M1160.2,507.3l-33.6,703.7H929.4l-33.6-703.7H1160.2z\r\n\t M1028,1638.6c-82.9,0-150.1-67.2-150.1-150.1c0-82.9,67.2-150.1,150.1-150.1s150.1,67.2,150.1,150.1\r\n\tC1178,1571.4,1110.9,1638.6,1028,1638.6z\"/>\r\n</svg>\r\n");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(32);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.collapsible-component-profile {\n  display: block;\n  float: left;\n  width: 100%;\n  cursor: auto;\n}\n.collapsible-component-profile:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n.collapsible-component-profile div.collapsible-profile {\n  width: 100%;\n  float: left;\n  position: relative;\n  padding: 15px 0 10px 0;\n  box-sizing: border-box;\n  cursor: auto;\n}\n.collapsible-component-profile div.collapsible-profile .row {\n  float: left;\n  width: 100%;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-dnnprofile {\n  width: 35%;\n  float: left;\n  padding-left: 15px;\n  word-break: break-all;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-aadprofile {\n  width: 20%;\n  float: left;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-aadextension {\n  width: 30%;\n  float: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-primary {\n  width: 10%;\n  float: left;\n  text-align: center;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-primary .checkMarkIcon {\n  width: 16px;\n  height: 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-primary .checkMarkIcon > svg {\n  fill: #4B4E4F;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-actionButtons {\n  width: 8%;\n  margin-right: 15px;\n  float: right;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-actionButtons:not(:last-child) {\n  float: left;\n  margin-right: 0px;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-actionButtons .delete-icon,\n.collapsible-component-profile div.collapsible-profile .row .item-row-actionButtons .edit-icon {\n  margin-left: 5px;\n  float: right;\n  display: block;\n  cursor: pointer;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-actionButtons .delete-icon > svg,\n.collapsible-component-profile div.collapsible-profile .row .item-row-actionButtons .edit-icon > svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #C8C8C8;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-actionButtons .delete-icon > svg:hover,\n.collapsible-component-profile div.collapsible-profile .row .item-row-actionButtons .edit-icon > svg:hover {\n  fill: #4B4E4F;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-actionButtons .delete-icon-hidden {\n  display: none;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-actionButtons .edit-icon-active > svg {\n  width: 16px;\n  float: right;\n  height: 16px;\n  fill: #1E88C3;\n}\n.collapsible-component-profile div.collapsible-profile .row .item-row-wrapper {\n  padding: 0 5px 0 5px;\n}\n", ""]);



/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(34);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.profilemapping-editor {\n  float: left;\n  margin: 20px 30px;\n}\n.profilemapping-editor .topMessage {\n  border: 1px solid #C8C8C8;\n  padding: 10px 20px;\n  background-color: #E5E7E6;\n  margin: 0 0 20px 0;\n}\n.profilemapping-editor .dnn-ui-common-input-group {\n  padding: 0 0 15px 0;\n}\n.profilemapping-editor .dnn-ui-common-input-group label {\n  font-weight: bolder;\n  float: left;\n}\n.profilemapping-editor .dnn-ui-common-input-group .dnn-label {\n  margin: 8px 0;\n}\n.profilemapping-editor .dnn-ui-common-input-group .dnn-dropdown,\n.profilemapping-editor .dnn-ui-common-input-group .dnn-dropdown-with-error {\n  width: 100% !important;\n  box-sizing: border-box;\n}\n.profilemapping-editor .dnn-ui-common-input-group .dnn-single-line-input-with-error {\n  width: 100% !important;\n}\n.profilemapping-editor .dnn-grid-system .left-column {\n  padding-right: 30px;\n  border-right: 1px solid #C8C8C8;\n}\n.profilemapping-editor .dnn-grid-system .right-column {\n  padding-left: 30px;\n  border-left: 0 !important;\n}\n.profilemapping-editor .editor-buttons-box {\n  width: 100%;\n  text-align: center;\n  float: left;\n  margin: 30px 0 0 0;\n}\n.profilemapping-editor .editor-buttons-box .dnn-ui-common-button {\n  margin: 5px;\n}\n.profilemapping-editor .editor-buttons-box .edit-icon {\n  margin: 0px 10px 20px 10px;\n  float: right;\n}\n.profilemapping-editor .editor-buttons-box .edit-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n}\n", ""]);



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(36);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.dnn-azuread-aad-profileMappingSettings .profile-items {\n  margin: 30px 30px;\n  width: 738px;\n  float: left;\n  box-sizing: border-box;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .profile-items-grid {\n  border: solid 1px #C8C8C8;\n  float: left;\n  width: 100%;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .header-row {\n  border-bottom: 1px solid #C8C8C8;\n  padding: 10px 0 10px 0;\n  width: 100%;\n  float: left;\n  overflow: hidden;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .header-DnnProfileProperty {\n  width: 35%;\n  float: left;\n  font-weight: bolder;\n  padding-left: 15px;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .header-AadClaim {\n  width: 40%;\n  float: left;\n  font-weight: bolder;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .collapsible-component .collapsible-header {\n  text-align: right;\n  text-transform: none;\n  padding-right: 40px;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .collapsible-component .collapsible-header .collapse-icon {\n  display: none;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .collapsible-component .collapsible-header .collapse-icon.collapsed {\n  display: none;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .AddItemRow {\n  text-align: right;\n  width: 100%;\n  float: right;\n  margin: 0 0 15px 0;\n  font-weight: bolder;\n  border-bottom: 1px solid #C8C8C8;\n  overflow: hidden;\n  height: 25px;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .AddItemRow .sectionTitle {\n  font-weight: bolder;\n  float: left;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .AddItemRow .AddItemBox {\n  width: auto;\n  float: right;\n  color: #4B4E4F;\n  cursor: pointer;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .AddItemRow .AddItemBox .add-icon {\n  margin-left: 20px;\n  margin-right: 5px;\n  float: left;\n  cursor: pointer;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .AddItemRow .AddItemBox .add-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #4B4E4F;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .AddItemRow .AddItemBox-active {\n  width: auto;\n  float: right;\n  color: #1E88C3;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .AddItemRow .AddItemBox-active .add-icon {\n  margin-left: 20px;\n  margin-right: 5px;\n  float: left;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .AddItemRow .AddItemBox-active .add-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #1E88C3;\n}\n.dnn-azuread-aad-profileMappingSettings .profile-items .profile-item {\n  color: #4B4E4F;\n}\n", ""]);



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(38);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.collapsible-component-item {\n  display: block;\n  float: left;\n  width: 100%;\n  cursor: auto;\n}\n.collapsible-component-item:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n.collapsible-component-item div.collapsible-item {\n  width: 100%;\n  float: left;\n  position: relative;\n  padding: 15px 0 10px 0;\n  box-sizing: border-box;\n  cursor: auto;\n}\n.collapsible-component-item div.collapsible-item .row {\n  float: left;\n  width: 100%;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-dnnproperty {\n  width: 50%;\n  float: left;\n  padding-left: 15px;\n  word-break: break-all;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-aadproperty {\n  width: 37%;\n  float: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-primary {\n  width: 10%;\n  float: left;\n  text-align: center;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-primary .checkMarkIcon {\n  width: 16px;\n  height: 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-primary .checkMarkIcon > svg {\n  fill: #4B4E4F;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons {\n  width: 8%;\n  margin-right: 15px;\n  float: right;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons:not(:last-child) {\n  float: left;\n  margin-right: 0px;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .delete-icon,\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .edit-icon {\n  margin-left: 5px;\n  float: right;\n  display: block;\n  cursor: pointer;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .delete-icon > svg,\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .edit-icon > svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #C8C8C8;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .delete-icon > svg:hover,\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .edit-icon > svg:hover {\n  fill: #4B4E4F;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .delete-icon-hidden {\n  display: none;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .edit-icon-active > svg {\n  width: 16px;\n  float: right;\n  height: 16px;\n  fill: #1E88C3;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-wrapper {\n  padding: 0 5px 0 5px;\n}\n", ""]);



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(40);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.usermapping-editor {\n  float: left;\n  margin: 20px 30px;\n}\n.usermapping-editor .topMessage {\n  border: 1px solid #C8C8C8;\n  padding: 10px 20px;\n  background-color: #E5E7E6;\n  margin: 0 0 20px 0;\n}\n.usermapping-editor .dnn-ui-common-input-group {\n  padding: 0 0 15px 0;\n}\n.usermapping-editor .dnn-ui-common-input-group label {\n  font-weight: bolder;\n  float: left;\n}\n.usermapping-editor .dnn-ui-common-input-group .dnn-label {\n  margin: 8px 0;\n}\n.usermapping-editor .dnn-ui-common-input-group .dnn-dropdown,\n.usermapping-editor .dnn-ui-common-input-group .dnn-dropdown-with-error {\n  width: 100% !important;\n  box-sizing: border-box;\n}\n.usermapping-editor .dnn-ui-common-input-group .dnn-single-line-input-with-error {\n  width: 100% !important;\n}\n.usermapping-editor .dnn-grid-system .left-column {\n  padding-right: 30px;\n  border-right: 1px solid #C8C8C8;\n}\n.usermapping-editor .dnn-grid-system .right-column {\n  padding-left: 30px;\n  border-left: 0 !important;\n}\n.usermapping-editor .editor-buttons-box {\n  width: 100%;\n  text-align: center;\n  float: left;\n  margin: 30px 0 0 0;\n}\n.usermapping-editor .editor-buttons-box .dnn-ui-common-button {\n  margin: 5px;\n}\n.usermapping-editor .editor-buttons-box .edit-icon {\n  margin: 0px 10px 20px 10px;\n  float: right;\n}\n.usermapping-editor .editor-buttons-box .edit-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n}\n", ""]);



/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(42);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.dnn-azuread-aad-userMappingSettings .items {\n  margin: 30px 30px;\n  width: 738px;\n  float: left;\n  box-sizing: border-box;\n}\n.dnn-azuread-aad-userMappingSettings .items .items-grid {\n  border: solid 1px #C8C8C8;\n  float: left;\n  width: 100%;\n}\n.dnn-azuread-aad-userMappingSettings .items .header-row {\n  border-bottom: 1px solid #C8C8C8;\n  padding: 10px 0 10px 0;\n  width: 100%;\n  float: left;\n  overflow: hidden;\n}\n.dnn-azuread-aad-userMappingSettings .items .header-DnnProperty {\n  width: 50%;\n  float: left;\n  font-weight: bolder;\n  padding-left: 15px;\n}\n.dnn-azuread-aad-userMappingSettings .items .header-AadProperty {\n  width: 20%;\n  float: left;\n  font-weight: bolder;\n}\n.dnn-azuread-aad-userMappingSettings .items .collapsible-component .collapsible-header {\n  text-align: right;\n  text-transform: none;\n  padding-right: 40px;\n}\n.dnn-azuread-aad-userMappingSettings .items .collapsible-component .collapsible-header .collapse-icon {\n  display: none;\n}\n.dnn-azuread-aad-userMappingSettings .items .collapsible-component .collapsible-header .collapse-icon.collapsed {\n  display: none;\n}\n.dnn-azuread-aad-userMappingSettings .items .AddItemRow {\n  text-align: right;\n  width: 100%;\n  float: right;\n  margin: 0 0 15px 0;\n  font-weight: bolder;\n  border-bottom: 1px solid #C8C8C8;\n  overflow: hidden;\n  height: 25px;\n}\n.dnn-azuread-aad-userMappingSettings .items .AddItemRow .sectionTitle {\n  font-weight: bolder;\n  float: left;\n}\n.dnn-azuread-aad-userMappingSettings .items .AddItemRow .AddItemBox {\n  width: auto;\n  float: right;\n  color: #4B4E4F;\n  cursor: pointer;\n}\n.dnn-azuread-aad-userMappingSettings .items .AddItemRow .AddItemBox .add-icon {\n  margin-left: 20px;\n  margin-right: 5px;\n  float: left;\n  cursor: pointer;\n}\n.dnn-azuread-aad-userMappingSettings .items .AddItemRow .AddItemBox .add-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #4B4E4F;\n}\n.dnn-azuread-aad-userMappingSettings .items .AddItemRow .AddItemBox-active {\n  width: auto;\n  float: right;\n  color: #1E88C3;\n}\n.dnn-azuread-aad-userMappingSettings .items .AddItemRow .AddItemBox-active .add-icon {\n  margin-left: 20px;\n  margin-right: 5px;\n  float: left;\n}\n.dnn-azuread-aad-userMappingSettings .items .AddItemRow .AddItemBox-active .add-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #1E88C3;\n}\n.dnn-azuread-aad-userMappingSettings .items .role-item {\n  color: #4B4E4F;\n}\n", ""]);



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(44);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.collapsible-component-item {\n  display: block;\n  float: left;\n  width: 100%;\n  cursor: auto;\n}\n.collapsible-component-item:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n.collapsible-component-item div.collapsible-item {\n  width: 100%;\n  float: left;\n  position: relative;\n  padding: 15px 0 10px 0;\n  box-sizing: border-box;\n  cursor: auto;\n}\n.collapsible-component-item div.collapsible-item .row {\n  float: left;\n  width: 100%;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-dnnrole {\n  width: 50%;\n  float: left;\n  padding-left: 15px;\n  word-break: break-all;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-aadrole {\n  width: 35%;\n  float: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-primary {\n  width: 10%;\n  float: left;\n  text-align: center;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-primary .checkMarkIcon {\n  width: 16px;\n  height: 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-primary .checkMarkIcon > svg {\n  fill: #4B4E4F;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons {\n  width: 8%;\n  margin-right: 15px;\n  float: right;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons:not(:last-child) {\n  float: left;\n  margin-right: 0px;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .delete-icon,\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .edit-icon {\n  margin-left: 5px;\n  float: right;\n  display: block;\n  cursor: pointer;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .delete-icon > svg,\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .edit-icon > svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #C8C8C8;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .delete-icon > svg:hover,\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .edit-icon > svg:hover {\n  fill: #4B4E4F;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .delete-icon-hidden {\n  display: none;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-actionButtons .edit-icon-active > svg {\n  width: 16px;\n  float: right;\n  height: 16px;\n  fill: #1E88C3;\n}\n.collapsible-component-item div.collapsible-item .row .item-row-wrapper {\n  padding: 0 5px 0 5px;\n}\n", ""]);



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(46);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.rolemapping-editor {\n  float: left;\n  margin: 20px 30px;\n}\n.rolemapping-editor .topMessage {\n  border: 1px solid #C8C8C8;\n  padding: 10px 20px;\n  background-color: #E5E7E6;\n  margin: 0 0 20px 0;\n}\n.rolemapping-editor .dnn-ui-common-input-group {\n  padding: 0 0 15px 0;\n}\n.rolemapping-editor .dnn-ui-common-input-group label {\n  font-weight: bolder;\n  float: left;\n}\n.rolemapping-editor .dnn-ui-common-input-group .dnn-label {\n  margin: 8px 0;\n}\n.rolemapping-editor .dnn-ui-common-input-group .dnn-dropdown,\n.rolemapping-editor .dnn-ui-common-input-group .dnn-dropdown-with-error {\n  width: 100% !important;\n  box-sizing: border-box;\n}\n.rolemapping-editor .dnn-ui-common-input-group .dnn-single-line-input-with-error {\n  width: 100% !important;\n}\n.rolemapping-editor .dnn-grid-system .left-column {\n  padding-right: 30px;\n  border-right: 1px solid #C8C8C8;\n}\n.rolemapping-editor .dnn-grid-system .right-column {\n  padding-left: 30px;\n  border-left: 0 !important;\n}\n.rolemapping-editor .editor-buttons-box {\n  width: 100%;\n  text-align: center;\n  float: left;\n  margin: 30px 0 0 0;\n}\n.rolemapping-editor .editor-buttons-box .dnn-ui-common-button {\n  margin: 5px;\n}\n.rolemapping-editor .editor-buttons-box .edit-icon {\n  margin: 0px 10px 20px 10px;\n  float: right;\n}\n.rolemapping-editor .editor-buttons-box .edit-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n}\n", ""]);



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(48);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.dnn-azuread-aad-roleMappingSettings .items {\n  margin: 30px 30px;\n  width: 738px;\n  float: left;\n  box-sizing: border-box;\n}\n.dnn-azuread-aad-roleMappingSettings .items .items-grid {\n  border: solid 1px #C8C8C8;\n  float: left;\n  width: 100%;\n}\n.dnn-azuread-aad-roleMappingSettings .items .header-row {\n  border-bottom: 1px solid #C8C8C8;\n  padding: 10px 0 10px 0;\n  width: 100%;\n  float: left;\n  overflow: hidden;\n}\n.dnn-azuread-aad-roleMappingSettings .items .header-DnnRole {\n  width: 50%;\n  float: left;\n  font-weight: bolder;\n  padding-left: 15px;\n}\n.dnn-azuread-aad-roleMappingSettings .items .header-AadRole {\n  width: 20%;\n  float: left;\n  font-weight: bolder;\n}\n.dnn-azuread-aad-roleMappingSettings .items .collapsible-component .collapsible-header {\n  text-align: right;\n  text-transform: none;\n  padding-right: 40px;\n}\n.dnn-azuread-aad-roleMappingSettings .items .collapsible-component .collapsible-header .collapse-icon {\n  display: none;\n}\n.dnn-azuread-aad-roleMappingSettings .items .collapsible-component .collapsible-header .collapse-icon.collapsed {\n  display: none;\n}\n.dnn-azuread-aad-roleMappingSettings .items .AddItemRow {\n  text-align: right;\n  width: 100%;\n  float: right;\n  margin: 0 0 15px 0;\n  font-weight: bolder;\n  border-bottom: 1px solid #C8C8C8;\n  overflow: hidden;\n  height: 25px;\n}\n.dnn-azuread-aad-roleMappingSettings .items .AddItemRow .sectionTitle {\n  font-weight: bolder;\n  float: left;\n}\n.dnn-azuread-aad-roleMappingSettings .items .AddItemRow .AddItemBox {\n  width: auto;\n  float: right;\n  color: #4B4E4F;\n  cursor: pointer;\n}\n.dnn-azuread-aad-roleMappingSettings .items .AddItemRow .AddItemBox .add-icon {\n  margin-left: 20px;\n  margin-right: 5px;\n  float: left;\n  cursor: pointer;\n}\n.dnn-azuread-aad-roleMappingSettings .items .AddItemRow .AddItemBox .add-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #4B4E4F;\n}\n.dnn-azuread-aad-roleMappingSettings .items .AddItemRow .AddItemBox-active {\n  width: auto;\n  float: right;\n  color: #1E88C3;\n}\n.dnn-azuread-aad-roleMappingSettings .items .AddItemRow .AddItemBox-active .add-icon {\n  margin-left: 20px;\n  margin-right: 5px;\n  float: left;\n}\n.dnn-azuread-aad-roleMappingSettings .items .AddItemRow .AddItemBox-active .add-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #1E88C3;\n}\n.dnn-azuread-aad-roleMappingSettings .items .role-item {\n  color: #4B4E4F;\n}\n", ""]);



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(50);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "#azureAD-container .dnn-persona-bar-page-body .persona-bar-page-body .dnn-switch-container .dnn-switch.place-left {\n  margin-left: 0px;\n}\n#azureAD-container .dnn-persona-bar-page-body .persona-bar-page-body button.dnn-ui-common-button[role=primary] {\n  margin-left: 10px;\n}\n", ""]);



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "window.dnn.nodeModules.React"
var external_window_dnn_nodeModules_React_ = __webpack_require__(0);
var external_window_dnn_nodeModules_React_default = /*#__PURE__*/__webpack_require__.n(external_window_dnn_nodeModules_React_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "window.dnn.nodeModules.ReactRedux"
var external_window_dnn_nodeModules_ReactRedux_ = __webpack_require__(5);

// EXTERNAL MODULE: external "window.dnn.nodeModules.CommonComponents"
var external_window_dnn_nodeModules_CommonComponents_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/constants/actionTypes/index.js + 1 modules
var actionTypes = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/index.jsx
var utils = __webpack_require__(3);

// CONCATENATED MODULE: ./src/services/applicationService.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var applicationService_ApplicationService =
/*#__PURE__*/
function () {
  function ApplicationService() {
    _classCallCheck(this, ApplicationService);
  }

  _createClass(ApplicationService, [{
    key: "getServiceFramework",
    value: function getServiceFramework(controller) {
      var sf = utils["a" /* default */].utilities.sf;
      sf.controller = controller;
      return sf;
    }
  }, {
    key: "getSettings",
    value: function getSettings(callback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.get("GetSettings", {}, callback);
    }
  }, {
    key: "updateGeneralSettings",
    value: function updateGeneralSettings(payload, callback, failureCallback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.post("UpdateGeneralSettings", payload, callback, failureCallback);
    }
  }, {
    key: "updateAdvancedSettings",
    value: function updateAdvancedSettings(payload, callback, failureCallback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.post("UpdateAdvancedSettings", payload, callback, failureCallback);
    }
  }, {
    key: "updateProfileMapping",
    value: function updateProfileMapping(payload, callback, failureCallback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.post("UpdateProfileMapping", payload, callback, failureCallback);
    }
  }, {
    key: "deleteProfileMapping",
    value: function deleteProfileMapping(payload, callback, failureCallback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.post("DeleteProfileMapping", payload, callback, failureCallback);
    }
  }, {
    key: "getProfileSettings",
    value: function getProfileSettings(callback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.get("GetProfileSettings", {}, callback);
    }
  }, {
    key: "getProfileProperties",
    value: function getProfileProperties(callback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.get("GetProfileProperties", {}, callback);
    }
  }, {
    key: "getRoleMappingSettings",
    value: function getRoleMappingSettings(callback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.get("GetRoleMappingSettings", {}, callback);
    }
  }, {
    key: "getAvailableRoles",
    value: function getAvailableRoles(callback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.get("GetAvailableRoles", {}, callback);
    }
  }, {
    key: "updateRoleMapping",
    value: function updateRoleMapping(payload, callback, failureCallback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.post("UpdateRoleMapping", payload, callback, failureCallback);
    }
  }, {
    key: "deleteRoleMapping",
    value: function deleteRoleMapping(payload, callback, failureCallback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.post("DeleteRoleMapping", payload, callback, failureCallback);
    }
  }, {
    key: "getUserMappingSettings",
    value: function getUserMappingSettings(callback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.get("GetUserMappingSettings", {}, callback);
    }
  }, {
    key: "updateUserMapping",
    value: function updateUserMapping(payload, callback, failureCallback) {
      var sf = this.getServiceFramework("AzureAD");
      sf.post("UpdateUserMapping", payload, callback, failureCallback);
    }
  }]);

  return ApplicationService;
}();

var applicationService = new applicationService_ApplicationService();
/* harmony default export */ var services_applicationService = (applicationService);
// CONCATENATED MODULE: ./src/actions/settings.js


var settingsActions = {
  switchTab: function switchTab(index, callback) {
    return function (dispatch) {
      dispatch({
        type: actionTypes["a" /* settings */].SWITCH_TAB,
        payload: index
      });

      if (callback) {
        callback();
      }
    };
  },
  switchMappingSubTab: function switchMappingSubTab(index, callback) {
    return function (dispatch) {
      dispatch({
        type: actionTypes["a" /* settings */].SWITCH_MAPPING_SUBTAB,
        payload: index
      });

      if (callback) {
        callback();
      }
    };
  },
  getSettings: function getSettings(callback) {
    return function (dispatch) {
      services_applicationService.getSettings(function (data) {
        dispatch({
          type: actionTypes["a" /* settings */].RETRIEVED_SETTINGS,
          data: {
            enabled: data.enabled,
            useGlobalSettings: data.useGlobalSettings,
            autoRedirect: data.autoRedirect,
            autoAuthorize: data.autoAuthorize,
            apiKey: data.apiKey,
            apiSecret: data.apiSecret,
            redirectUri: data.redirectUri,
            onErrorUri: data.onErrorUri,
            tenantId: data.tenantId,
            aadAppClientId: data.aadAppClientId,
            aadAppSecret: data.aadAppSecret,
            jwtAudiences: data.jwtAudiences,
            roleSyncEnabled: data.roleSyncEnabled,
            profileSyncEnabled: data.profileSyncEnabled,
            jwtAuthEnabled: data.jwtAuthEnabled,
            apiResource: data.apiResource,
            scopes: data.scopes,
            usernamePrefixEnabled: data.usernamePrefixEnabled,
            groupNamePrefixEnabled: data.groupNamePrefixEnabled,
            clientModified: false
          }
        });

        if (callback) {
          callback(data);
        }
      });
    };
  },
  updateGeneralSettings: function updateGeneralSettings(payload, callback, failureCallback) {
    return function (dispatch) {
      services_applicationService.updateGeneralSettings(payload, function (data) {
        dispatch({
          type: actionTypes["a" /* settings */].UPDATED_SETTINGS,
          data: {
            clientModified: false
          }
        });

        if (callback) {
          callback(data);
        }
      }, function (data) {
        if (failureCallback) {
          failureCallback(data);
        }
      });
    };
  },
  updateAdvancedSettings: function updateAdvancedSettings(payload, callback, failureCallback) {
    return function (dispatch) {
      services_applicationService.updateAdvancedSettings(payload, function (data) {
        dispatch({
          type: actionTypes["a" /* settings */].UPDATED_SETTINGS,
          data: {
            clientModified: false
          }
        });

        if (callback) {
          callback(data);
        }
      }, function (data) {
        if (failureCallback) {
          failureCallback(data);
        }
      });
    };
  },
  settingsClientModified: function settingsClientModified(settings) {
    return function (dispatch) {
      dispatch({
        type: actionTypes["a" /* settings */].SETTINGS_CLIENT_MODIFIED,
        data: {
          enabled: settings.enabled,
          useGlobalSettings: settings.useGlobalSettings,
          autoRedirect: settings.autoRedirect,
          autoAuthorize: settings.autoAuthorize,
          apiKey: settings.apiKey,
          apiSecret: settings.apiSecret,
          redirectUri: settings.redirectUri,
          onErrorUri: settings.onErrorUri,
          tenantId: settings.tenantId,
          aadAppClientId: settings.aadAppClientId,
          aadAppSecret: settings.aadAppSecret,
          jwtAudiences: settings.jwtAudiences,
          roleSyncEnabled: settings.roleSyncEnabled,
          profileSyncEnabled: settings.profileSyncEnabled,
          jwtAuthEnabled: settings.jwtAuthEnabled,
          apiResource: settings.apiResource,
          scopes: settings.scopes,
          usernamePrefixEnabled: settings.usernamePrefixEnabled,
          groupNamePrefixEnabled: settings.groupNamePrefixEnabled,
          clientModified: true
        }
      });
    };
  },
  getProfileSettings: function getProfileSettings(callback) {
    return function (dispatch) {
      services_applicationService.getProfileSettings(function (data) {
        dispatch({
          type: actionTypes["a" /* settings */].RETRIEVED_PROFILESETTINGS,
          data: {
            profileMapping: data
          }
        });

        if (callback) {
          callback(data);
        }
      });
    };
  },
  getProfileProperties: function getProfileProperties(callback) {
    return function (dispatch) {
      services_applicationService.getProfileProperties(function (data) {
        dispatch({
          type: actionTypes["a" /* settings */].RETRIEVED_PROFILEPROPERTIES,
          data: {
            profileProperties: data
          }
        });

        if (callback) {
          callback(data);
        }
      });
    };
  },
  cancelProfileMappingClientModified: function cancelProfileMappingClientModified() {
    return function (dispatch) {
      dispatch({
        type: actionTypes["a" /* settings */].CANCELLED_PROFILEMAPPING_CLIENT_MODIFIED,
        data: {
          profileMappingClientModified: false
        }
      });
    };
  },
  profileMappingClientModified: function profileMappingClientModified(parameter) {
    return function (dispatch) {
      dispatch({
        type: actionTypes["a" /* settings */].PROFILEMAPPINGS_CLIENT_MODIFIED,
        data: {
          profileMappingDetail: parameter,
          profileMappingClientModified: true
        }
      });
    };
  },
  updateProfileMapping: function updateProfileMapping(payload, callback, failureCallback) {
    return function () {
      services_applicationService.updateProfileMapping(payload, function (data) {
        if (callback) {
          callback(data);
        }
      }, function (data) {
        if (failureCallback) {
          failureCallback(data);
        }
      });
    };
  },
  deleteProfileMapping: function deleteProfileMapping(payload, callback, failureCallback) {
    return function () {
      services_applicationService.deleteProfileMapping(payload, function (data) {
        if (callback) {
          callback(data);
        }
      }, function (data) {
        if (failureCallback) {
          failureCallback(data);
        }
      });
    };
  },
  getRoleSettings: function getRoleSettings(callback) {
    return function (dispatch) {
      services_applicationService.getRoleMappingSettings(function (data) {
        dispatch({
          type: actionTypes["a" /* settings */].RETRIEVED_ROLEMAPPINGSETTINGS,
          data: {
            roleMapping: data
          }
        });

        if (callback) {
          callback(data);
        }
      });
    };
  },
  getAvailableRoles: function getAvailableRoles(callback) {
    return function (dispatch) {
      services_applicationService.getAvailableRoles(function (data) {
        dispatch({
          type: actionTypes["a" /* settings */].RETRIEVED_AVAILABLEROLES,
          data: {
            roles: data
          }
        });

        if (callback) {
          callback(data);
        }
      });
    };
  },
  roleMappingClientModified: function roleMappingClientModified(parameter) {
    return function (dispatch) {
      dispatch({
        type: actionTypes["a" /* settings */].ROLEMAPPINGS_CLIENT_MODIFIED,
        data: {
          roleMappingDetail: parameter,
          roleMappingClientModified: true
        }
      });
    };
  },
  updateRoleMapping: function updateRoleMapping(payload, callback, failureCallback) {
    return function () {
      services_applicationService.updateRoleMapping(payload, function (data) {
        if (callback) {
          callback(data);
        }
      }, function (data) {
        if (failureCallback) {
          failureCallback(data);
        }
      });
    };
  },
  deleteRoleMapping: function deleteRoleMapping(payload, callback, failureCallback) {
    return function () {
      services_applicationService.deleteRoleMapping(payload, function (data) {
        if (callback) {
          callback(data);
        }
      }, function (data) {
        if (failureCallback) {
          failureCallback(data);
        }
      });
    };
  },
  getUserMappingSettings: function getUserMappingSettings(callback) {
    return function (dispatch) {
      services_applicationService.getUserMappingSettings(function (data) {
        dispatch({
          type: actionTypes["a" /* settings */].RETRIEVED_USERMAPPINGSETTINGS,
          data: {
            userMapping: data
          }
        });

        if (callback) {
          callback(data);
        }
      });
    };
  },
  updateUserMapping: function updateUserMapping(payload, callback, failureCallback) {
    return function () {
      services_applicationService.updateUserMapping(payload, function (data) {
        if (callback) {
          callback(data);
        }
      }, function (data) {
        if (failureCallback) {
          failureCallback(data);
        }
      });
    };
  },
  userMappingClientModified: function userMappingClientModified(parameter) {
    return function (dispatch) {
      dispatch({
        type: actionTypes["a" /* settings */].USERMAPPINGS_CLIENT_MODIFIED,
        data: {
          userMappingDetail: parameter,
          userMappingClientModified: true
        }
      });
    };
  }
};
/* harmony default export */ var actions_settings = (settingsActions);
// CONCATENATED MODULE: ./src/resources/index.jsx

var resx = {
  get: function get(key) {
    var moduleName = utils["a" /* default */].moduleName;
    return utils["a" /* default */].utilities.getResx(moduleName, key);
  }
};
/* harmony default export */ var resources = (resx);
// EXTERNAL MODULE: ./src/components/general/generalSettings.less
var generalSettings = __webpack_require__(23);

// CONCATENATED MODULE: ./src/components/general/generalSettings.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function generalSettings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function generalSettings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function generalSettings_createClass(Constructor, protoProps, staticProps) { if (protoProps) generalSettings_defineProperties(Constructor.prototype, protoProps); if (staticProps) generalSettings_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var generalSettings_GeneralSettings =
/*#__PURE__*/
function (_Component) {
  _inherits(GeneralSettings, _Component);

  function GeneralSettings() {
    var _this;

    generalSettings_classCallCheck(this, GeneralSettings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GeneralSettings).call(this));
    _this.state = {
      error: {
        appId: false,
        appSecret: false,
        tenantId: false,
        redirectUri: false
      }
    };
    return _this;
  }

  generalSettings_createClass(GeneralSettings, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var props = this.props;
      props.dispatch(actions_settings.getSettings());
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var state = this.state;
      state.error["appId"] = nextProps.apiKey === "";
      state.error["appSecret"] = nextProps.apiSecret === "";
      state.error["tenantId"] = nextProps.tenantId === "";
      state.error["redirectUri"] = nextProps.redirectUri !== "" && !this.isValidAzureAdUrl(nextProps.redirectUri);
    }
  }, {
    key: "isValidAzureAdUrl",
    value: function isValidAzureAdUrl(string) {
      var url;

      try {
        url = new URL(string);
      } catch (err) {
        return false;
      }

      return url.protocol === "https:" || url.host === "localhost";
    }
  }, {
    key: "onSettingChange",
    value: function onSettingChange(key, event) {
      var props = this.props;
      props.dispatch(actions_settings.settingsClientModified({
        enabled: key === "AADProviderEnabled" ? !props.enabled : props.enabled,
        useGlobalSettings: key === "UseGlobalSettings" ? !props.useGlobalSettings : props.useGlobalSettings,
        autoRedirect: key === "AutoRedirect" ? !props.autoRedirect : props.autoRedirect,
        autoAuthorize: key === "AutoAuthorize" ? !props.autoAuthorize : props.autoAuthorize,
        apiKey: key === "AppId" ? event.target.value : props.apiKey,
        apiSecret: key === "AppSecret" ? event.target.value : props.apiSecret,
        redirectUri: key === "RedirectUri" ? event.target.value : props.redirectUri,
        onErrorUri: key === "OnErrorUri" ? event.target.value : props.onErrorUri,
        tenantId: key === "TenantId" ? event.target.value : props.tenantId
      }));
    }
  }, {
    key: "onClickCancel",
    value: function onClickCancel() {
      utils["a" /* default */].utilities.closePersonaBar();
    }
  }, {
    key: "onClickSave",
    value: function onClickSave() {
      var _this2 = this;

      event.preventDefault();
      var props = this.props;
      props.dispatch(actions_settings.updateGeneralSettings({
        enabled: props.enabled,
        useGlobalSettings: props.useGlobalSettings,
        autoRedirect: props.autoRedirect,
        autoAuthorize: props.autoAuthorize,
        apiKey: props.apiKey,
        apiSecret: props.apiSecret,
        redirectUri: props.redirectUri,
        onErrorUri: props.onErrorUri,
        tenantId: props.tenantId
      }, function () {
        utils["a" /* default */].utilities.notify(resources.get("SettingsUpdateSuccess"));

        _this2.setState({
          clientModified: false
        });
      }, function () {
        utils["a" /* default */].utilities.notifyError(resources.get("SettingsError"));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "dnn-azuread-generalSettings"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 50
      }, external_window_dnn_nodeModules_React_default.a.createElement("p", {
        className: "panel-description"
      }, resources.get("lblTabDescription")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Switch"], {
        label: resources.get("lblEnabled"),
        onText: "",
        offText: "",
        value: this.props.enabled,
        tooltipMessage: resources.get("lblEnabled.Help"),
        onChange: this.onSettingChange.bind(this, "AADProviderEnabled")
      }), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Switch"], {
        label: resources.get("lblAutoRedirect"),
        onText: "",
        offText: "",
        tooltipMessage: resources.get("lblAutoRedirect.Help"),
        value: this.props.autoRedirect,
        onChange: this.onSettingChange.bind(this, "AutoRedirect")
      })), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 50
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "logo"
      }), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Switch"], {
        label: resources.get("lblUseGlobalSettings"),
        onText: "",
        offText: "",
        value: this.props.useGlobalSettings,
        tooltipMessage: resources.get("lblUseGlobalSettings.Help"),
        onChange: this.onSettingChange.bind(this, "UseGlobalSettings")
      }), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Switch"], {
        label: resources.get("lblAutoAuthorize"),
        onText: "",
        offText: "",
        tooltipMessage: resources.get("lblAutoAuthorize.Help"),
        value: this.props.autoAuthorize,
        onChange: this.onSettingChange.bind(this, "AutoAuthorize")
      })), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 100,
        className: "directory-section"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 50
      }, external_window_dnn_nodeModules_React_default.a.createElement("h1", null, resources.get("lblDirectory")), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "editor-row"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
        withLabel: true,
        label: resources.get("lblTenantId"),
        enabled: true,
        error: this.state.error.tenantId,
        errorMessage: resources.get("lblTenantId.Error"),
        tooltipMessage: resources.get("lblTenantId.Help"),
        value: this.props.tenantId,
        onChange: this.onSettingChange.bind(this, "TenantId")
      })))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 100
      }, external_window_dnn_nodeModules_React_default.a.createElement("h1", null, resources.get("lblProviderCredentials")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 50
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "editor-row"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
        withLabel: true,
        label: resources.get("lblAppId"),
        enabled: true,
        error: this.state.error.appId,
        errorMessage: resources.get("lblAppId.Error"),
        tooltipMessage: resources.get("lblAppId.Help"),
        value: this.props.apiKey,
        onChange: this.onSettingChange.bind(this, "AppId")
      }))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 50
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "editor-row"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
        withLabel: true,
        label: resources.get("lblAppSecret"),
        type: "password",
        enabled: true,
        error: this.state.error.appSecret,
        errorMessage: resources.get("lblAppSecret.Error"),
        tooltipMessage: resources.get("lblAppSecret.Help"),
        value: this.props.apiSecret,
        autocomplete: "off",
        onChange: this.onSettingChange.bind(this, "AppSecret")
      }))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 50
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "editor-row"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
        withLabel: true,
        label: resources.get("lblRedirectUri"),
        enabled: true,
        tooltipMessage: resources.get("lblRedirectUri.Help"),
        error: this.state.error.redirectUri,
        errorMessage: resources.get("lblRedirectUri.Error"),
        value: this.props.redirectUri,
        autocomplete: "off",
        onChange: this.onSettingChange.bind(this, "RedirectUri")
      }))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 50
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "editor-row"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
        withLabel: true,
        label: resources.get("lblOnErrorUri"),
        enabled: true,
        tooltipMessage: resources.get("lblOnErrorUri.Help"),
        errorMessage: "",
        value: this.props.onErrorUri,
        onChange: this.onSettingChange.bind(this, "OnErrorUri")
      })))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 100
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "buttons-box"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Button"], {
        disabled: false,
        type: "secondary",
        onClick: this.onClickCancel.bind(this)
      }, resources.get("Cancel")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Button"], {
        disabled: this.state.error.appId || this.state.error.appSecret || this.state.error.tenantId || this.state.error.redirectUri,
        type: "primary",
        onClick: this.onClickSave.bind(this)
      }, resources.get("SaveSettings")))));
    }
  }]);

  return GeneralSettings;
}(external_window_dnn_nodeModules_React_["Component"]);

generalSettings_GeneralSettings.propTypes = {
  dispatch: prop_types_default.a.func.isRequired,
  enabled: prop_types_default.a.bool,
  useGlobalSettings: prop_types_default.a.bool,
  autoRedirect: prop_types_default.a.bool,
  autoAuthorize: prop_types_default.a.bool,
  apiKey: prop_types_default.a.string,
  apiSecret: prop_types_default.a.string,
  redirectUri: prop_types_default.a.string,
  onErrorUri: prop_types_default.a.string,
  tenantId: prop_types_default.a.string
};

function mapStateToProps(state) {
  return {
    enabled: state.settings.enabled,
    useGlobalSettings: state.settings.useGlobalSettings,
    autoRedirect: state.settings.autoRedirect,
    autoAuthorize: state.settings.autoAuthorize,
    apiKey: state.settings.apiKey,
    apiSecret: state.settings.apiSecret,
    redirectUri: state.settings.redirectUri,
    onErrorUri: state.settings.onErrorUri,
    tenantId: state.settings.tenantId
  };
}

/* harmony default export */ var general_generalSettings = (Object(external_window_dnn_nodeModules_ReactRedux_["connect"])(mapStateToProps)(generalSettings_GeneralSettings));
// CONCATENATED MODULE: ./src/components/general/index.jsx

/* harmony default export */ var general = (general_generalSettings);
// EXTERNAL MODULE: ./src/components/sync/syncSettings.less
var syncSettings = __webpack_require__(28);

// CONCATENATED MODULE: ./src/components/sync/syncSettings.jsx
function syncSettings_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { syncSettings_typeof = function _typeof(obj) { return typeof obj; }; } else { syncSettings_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return syncSettings_typeof(obj); }

function syncSettings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function syncSettings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function syncSettings_createClass(Constructor, protoProps, staticProps) { if (protoProps) syncSettings_defineProperties(Constructor.prototype, protoProps); if (staticProps) syncSettings_defineProperties(Constructor, staticProps); return Constructor; }

function syncSettings_possibleConstructorReturn(self, call) { if (call && (syncSettings_typeof(call) === "object" || typeof call === "function")) { return call; } return syncSettings_assertThisInitialized(self); }

function syncSettings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function syncSettings_getPrototypeOf(o) { syncSettings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return syncSettings_getPrototypeOf(o); }

function syncSettings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) syncSettings_setPrototypeOf(subClass, superClass); }

function syncSettings_setPrototypeOf(o, p) { syncSettings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return syncSettings_setPrototypeOf(o, p); }









/*eslint-disable quotes*/

var warningIcon = __webpack_require__(30)["default"];

var syncSettings_SyncSettings =
/*#__PURE__*/
function (_Component) {
  syncSettings_inherits(SyncSettings, _Component);

  function SyncSettings() {
    var _this;

    syncSettings_classCallCheck(this, SyncSettings);

    _this = syncSettings_possibleConstructorReturn(this, syncSettings_getPrototypeOf(SyncSettings).call(this));
    _this.state = {
      error: {
        aadAppClientId: false,
        aadAppSecret: false
      }
    };
    return _this;
  }

  syncSettings_createClass(SyncSettings, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var props = this.props;
      props.dispatch(actions_settings.getSettings());
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var state = this.state;
      state.error["aadAppClientId"] = (nextProps.roleSyncEnabled || nextProps.profileSyncEnabled) && nextProps.aadAppClientId === "";
      state.error["aadAppSecret"] = (nextProps.roleSyncEnabled || nextProps.profileSyncEnabled) && nextProps.aadAppSecret === "";
    }
  }, {
    key: "onSettingChange",
    value: function onSettingChange(key, event) {
      var props = this.props;
      props.dispatch(actions_settings.settingsClientModified({
        aadAppClientId: key === "AadAppClientId" ? event.target.value : props.aadAppClientId,
        aadAppSecret: key === "AadAppSecret" ? event.target.value : props.aadAppSecret,
        jwtAudiences: key === "jwtAudiences" ? event.target.value : props.jwtAudiences,
        roleSyncEnabled: key === "roleSyncEnabled" ? !props.roleSyncEnabled : props.roleSyncEnabled,
        profileSyncEnabled: key === "profileSyncEnabled" ? !props.profileSyncEnabled : props.profileSyncEnabled,
        jwtAuthEnabled: key === "jwtAuthEnabled" ? !props.jwtAuthEnabled : props.jwtAuthEnabled,
        apiResource: key === "apiResource" ? event.target.value : props.apiResource,
        scopes: key === "scopes" ? event.target.value : props.scopes,
        usernamePrefixEnabled: key === "usernamePrefixEnabled" ? !props.usernamePrefixEnabled : props.usernamePrefixEnabled,
        groupNamePrefixEnabled: key === "groupNamePrefixEnabled" ? !props.groupNamePrefixEnabled : props.groupNamePrefixEnabled
      }));
    }
  }, {
    key: "onClickCancel",
    value: function onClickCancel() {
      utils["a" /* default */].utilities.closePersonaBar();
    }
  }, {
    key: "onClickSave",
    value: function onClickSave() {
      var _this2 = this;

      event.preventDefault();
      var props = this.props;
      props.dispatch(actions_settings.updateAdvancedSettings({
        aadAppClientId: props.aadAppClientId,
        aadAppSecret: props.aadAppSecret,
        jwtAudiences: props.jwtAudiences,
        roleSyncEnabled: props.roleSyncEnabled,
        profileSyncEnabled: props.profileSyncEnabled,
        jwtAuthEnabled: props.jwtAuthEnabled,
        apiResource: props.apiResource,
        scopes: props.scopes,
        usernamePrefixEnabled: props.usernamePrefixEnabled,
        groupNamePrefixEnabled: props.groupNamePrefixEnabled
      }, function () {
        utils["a" /* default */].utilities.notify(resources.get("SettingsUpdateSuccess"));

        _this2.setState({
          clientModified: false
        });
      }, function () {
        utils["a" /* default */].utilities.notifyError(resources.get("SettingsError"));
      }));
    }
    /* eslint-disable react/no-danger */

  }, {
    key: "render",
    value: function render() {
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "dnn-azuread-aad-syncSettings"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridSystem"], {
        numberOfColumns: 2
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 90
      }, external_window_dnn_nodeModules_React_default.a.createElement("h1", null, resources.get("lblSynchronization")), external_window_dnn_nodeModules_React_default.a.createElement("p", null, resources.get("lblSynchronizationDesc")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Switch"], {
        label: resources.get("lblRoleSyncEnabled"),
        onText: "",
        offText: "",
        tooltipMessage: resources.get("lblRoleSyncEnabled.Help"),
        value: this.props.roleSyncEnabled,
        onChange: this.onSettingChange.bind(this, "roleSyncEnabled")
      }), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Switch"], {
        label: resources.get("lblProfileSyncEnabled"),
        onText: "",
        offText: "",
        tooltipMessage: resources.get("lblProfileSyncEnabled.Help"),
        value: this.props.profileSyncEnabled,
        onChange: this.onSettingChange.bind(this, "profileSyncEnabled")
      })), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 100
      }, external_window_dnn_nodeModules_React_default.a.createElement("h1", {
        className: "sectionLabel"
      }, resources.get("lblAADSettings")), external_window_dnn_nodeModules_React_default.a.createElement("p", null, resources.get("lblGraphClient.Help")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
        withLabel: true,
        label: resources.get("lblAADAppClientId"),
        enabled: true,
        error: this.state.error.aadAppClientId,
        errorMessage: resources.get("lblAADAppClientId.Error"),
        tooltipMessage: resources.get("lblAADAppClientId.Help"),
        value: this.props.aadAppClientId,
        onChange: this.onSettingChange.bind(this, "AadAppClientId")
      }), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
        withLabel: true,
        label: resources.get("lblAADAppSecret"),
        type: "password",
        enabled: true,
        error: this.state.error.AadAppSecret,
        errorMessage: resources.get("lblAADAppSecret.Error"),
        tooltipMessage: resources.get("lblAADAppSecret.Help"),
        value: this.props.aadAppSecret,
        onChange: this.onSettingChange.bind(this, "AadAppSecret")
      })))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement("h1", {
        className: "sectionLabel"
      }, resources.get("lblNamePrefixes")), external_window_dnn_nodeModules_React_default.a.createElement("p", null, resources.get("lblNamePrefixes.Help")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridSystem"], {
        numberOfColumns: 2
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 90
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Switch"], {
        label: resources.get("lblUsernamePrefixEnabled"),
        onText: "",
        offText: "",
        tooltipMessage: resources.get("lblUsernamePrefixEnabled.Help"),
        value: this.props.usernamePrefixEnabled,
        onChange: this.onSettingChange.bind(this, "usernamePrefixEnabled")
      }), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Switch"], {
        label: resources.get("lblGroupNamePrefixEnabled"),
        onText: "",
        offText: "",
        tooltipMessage: resources.get("lblGroupNamePrefixEnabled.Help"),
        value: this.props.groupNamePrefixEnabled,
        onChange: this.onSettingChange.bind(this, "groupNamePrefixEnabled")
      })), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 100
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "warning-container"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "warning-icon",
        dangerouslySetInnerHTML: {
          __html: warningIcon
        }
      }), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "warning-msg"
      }, resources.get("NamePrefixesWarningMessage")))))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Dropdown"], {
        options: [{
          label: "login",
          value: "login",
          tooltipMessage: "Forces the user to enter their credentials on that request, negating single-sign on."
        }, {
          label: "none",
          value: "none",
          tooltipMessage: "Forces the user to enter their credentials on that request, negating single-sign on."
        }, {
          label: "consent",
          value: "consent",
          tooltipMessage: "Forces the user to enter their credentials on that request, negating single-sign on."
        }, {
          label: "select_account",
          value: "select_account",
          tooltipMessage: "Forces the user to enter their credentials on that request, negating single-sign on."
        }]
      })), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement("h1", {
        className: "sectionLabel spacer"
      }, resources.get("lblTokenValidation")), external_window_dnn_nodeModules_React_default.a.createElement("p", null, resources.get("lblTokenValidation.Help")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridSystem"], {
        numberOfColumns: 2
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 90
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Switch"], {
        label: resources.get("lblJwtAuthEnabled"),
        onText: "",
        offText: "",
        tooltipMessage: resources.get("lblJwtAuthEnabled.Help"),
        value: this.props.jwtAuthEnabled,
        onChange: this.onSettingChange.bind(this, "jwtAuthEnabled")
      })), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 100
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
        withLabel: true,
        label: resources.get("lblAudiences"),
        enabled: true,
        error: this.state.error.jwtAudiences,
        errorMessage: resources.get("lblAudiences.Error"),
        tooltipMessage: resources.get("lblAudiences.Help"),
        value: this.props.jwtAudiences,
        onChange: this.onSettingChange.bind(this, "jwtAudiences")
      })))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement("h1", {
        className: "sectionLabel"
      }, resources.get("lblAPIResource")), external_window_dnn_nodeModules_React_default.a.createElement("p", null, resources.get("lblAPIResourceDesc")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridSystem"], {
        numberOfColumns: 2
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 90
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
        withLabel: true,
        label: resources.get("lblAppIdUri"),
        enabled: true,
        error: this.state.error.apiResource,
        errorMessage: "",
        tooltipMessage: resources.get("lblAppIdUri.Help"),
        value: this.props.apiResource,
        onChange: this.onSettingChange.bind(this, "apiResource")
      })), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 100
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
        withLabel: true,
        label: resources.get("lblScopes"),
        enabled: true,
        error: this.state.error.scopes,
        errorMessage: "",
        tooltipMessage: resources.get("lblScopes.Help"),
        value: this.props.scopes,
        onChange: this.onSettingChange.bind(this, "scopes")
      })))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridCell"], {
        columnSize: 100
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "buttons-box"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Button"], {
        disabled: false,
        type: "secondary",
        onClick: this.onClickCancel.bind(this)
      }, resources.get("Cancel")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Button"], {
        disabled: this.state.error.aadAppClientId || this.state.error.aadAppSecret,
        type: "primary",
        onClick: this.onClickSave.bind(this)
      }, resources.get("SaveSettings"))))));
    }
  }]);

  return SyncSettings;
}(external_window_dnn_nodeModules_React_["Component"]);

syncSettings_SyncSettings.propTypes = {
  dispatch: prop_types_default.a.func.isRequired,
  aadAppClientId: prop_types_default.a.string,
  aadAppSecret: prop_types_default.a.string,
  jwtAudiences: prop_types_default.a.string,
  roleSyncEnabled: prop_types_default.a.bool,
  profileSyncEnabled: prop_types_default.a.bool,
  jwtAuthEnabled: prop_types_default.a.bool,
  apiResource: prop_types_default.a.string,
  scopes: prop_types_default.a.string,
  usernamePrefixEnabled: prop_types_default.a.bool,
  groupNamePrefixEnabled: prop_types_default.a.bool
};

function syncSettings_mapStateToProps(state) {
  return {
    aadAppClientId: state.settings.aadAppClientId,
    aadAppSecret: state.settings.aadAppSecret,
    jwtAudiences: state.settings.jwtAudiences,
    roleSyncEnabled: state.settings.roleSyncEnabled,
    profileSyncEnabled: state.settings.profileSyncEnabled,
    jwtAuthEnabled: state.settings.jwtAuthEnabled,
    apiResource: state.settings.apiResource,
    scopes: state.settings.scopes,
    usernamePrefixEnabled: state.settings.usernamePrefixEnabled,
    groupNamePrefixEnabled: state.settings.groupNamePrefixEnabled
  };
}

/* harmony default export */ var sync_syncSettings = (Object(external_window_dnn_nodeModules_ReactRedux_["connect"])(syncSettings_mapStateToProps)(syncSettings_SyncSettings));
// CONCATENATED MODULE: ./src/components/sync/index.jsx

/* harmony default export */ var sync = (sync_syncSettings);
// EXTERNAL MODULE: ./src/components/profileMappings/profileMappingRow/style.less
var style = __webpack_require__(31);

// CONCATENATED MODULE: ./src/components/profileMappings/profileMappingRow/index.jsx
function profileMappingRow_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { profileMappingRow_typeof = function _typeof(obj) { return typeof obj; }; } else { profileMappingRow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return profileMappingRow_typeof(obj); }

function profileMappingRow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function profileMappingRow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function profileMappingRow_createClass(Constructor, protoProps, staticProps) { if (protoProps) profileMappingRow_defineProperties(Constructor.prototype, protoProps); if (staticProps) profileMappingRow_defineProperties(Constructor, staticProps); return Constructor; }

function profileMappingRow_possibleConstructorReturn(self, call) { if (call && (profileMappingRow_typeof(call) === "object" || typeof call === "function")) { return call; } return profileMappingRow_assertThisInitialized(self); }

function profileMappingRow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function profileMappingRow_getPrototypeOf(o) { profileMappingRow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return profileMappingRow_getPrototypeOf(o); }

function profileMappingRow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) profileMappingRow_setPrototypeOf(subClass, superClass); }

function profileMappingRow_setPrototypeOf(o, p) { profileMappingRow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return profileMappingRow_setPrototypeOf(o, p); }






var profileMappingRow_ProfileMappingRow =
/*#__PURE__*/
function (_Component) {
  profileMappingRow_inherits(ProfileMappingRow, _Component);

  function ProfileMappingRow() {
    profileMappingRow_classCallCheck(this, ProfileMappingRow);

    return profileMappingRow_possibleConstructorReturn(this, profileMappingRow_getPrototypeOf(ProfileMappingRow).apply(this, arguments));
  }

  profileMappingRow_createClass(ProfileMappingRow, [{
    key: "componentDidMount",

    /* eslint-disable react/no-did-mount-set-state */
    value: function componentDidMount() {
      var opened = this.props.openId !== "" && this.props.id === this.props.openId;
      this.setState({
        opened: opened
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.props.openId !== "" && this.props.id === this.props.openId) {
        this.props.Collapse();
      } else {
        this.props.OpenCollapse(this.props.id);
      }
    }
    /* eslint-disable react/no-danger */

  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var opened = this.props.openId !== "" && this.props.id === this.props.openId;
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "collapsible-component-profile" + (opened ? " row-opened" : "")
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "collapsible-profile " + !opened
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "row"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        title: props.name,
        className: "profile-item item-row-dnnprofile"
      }, props.dnnProfilePropertyName), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "profile-item item-row-aadprofile"
      }, props.aadClaimName), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "profile-item item-row-actionButtons"
      }, props.deletable && external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: opened ? "delete-icon-hidden" : "delete-icon",
        dangerouslySetInnerHTML: {
          __html: external_window_dnn_nodeModules_CommonComponents_["SvgIcons"].TrashIcon
        },
        onClick: props.onDelete.bind(this)
      }), props.editable && external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: opened ? "edit-icon-active" : "edit-icon",
        dangerouslySetInnerHTML: {
          __html: external_window_dnn_nodeModules_CommonComponents_["SvgIcons"].EditIcon
        },
        onClick: this.toggle.bind(this)
      })))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Collapsible"], {
        fixedHeight: 205,
        keepContent: true,
        isOpened: opened,
        style: {
          "float": "left",
          width: "100%",
          overflow: "inherit"
        }
      }, opened && props.children));
    }
  }]);

  return ProfileMappingRow;
}(external_window_dnn_nodeModules_React_["Component"]);

profileMappingRow_ProfileMappingRow.propTypes = {
  profileMappingId: prop_types_default.a.string,
  dnnProfilePropertyName: prop_types_default.a.string,
  aadClaimName: prop_types_default.a.string,
  deletable: prop_types_default.a.bool,
  editable: prop_types_default.a.bool,
  OpenCollapse: prop_types_default.a.func,
  Collapse: prop_types_default.a.func,
  onDelete: prop_types_default.a.func,
  id: prop_types_default.a.string,
  openId: prop_types_default.a.string
};
profileMappingRow_ProfileMappingRow.defaultProps = {
  collapsed: true,
  deletable: true,
  editable: true
};
/* harmony default export */ var profileMappingRow = (profileMappingRow_ProfileMappingRow);
// EXTERNAL MODULE: ./src/components/profileMappings/profileMappingEditor/style.less
var profileMappingEditor_style = __webpack_require__(33);

// CONCATENATED MODULE: ./src/components/profileMappings/profileMappingEditor/index.jsx
function profileMappingEditor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { profileMappingEditor_typeof = function _typeof(obj) { return typeof obj; }; } else { profileMappingEditor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return profileMappingEditor_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function profileMappingEditor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function profileMappingEditor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function profileMappingEditor_createClass(Constructor, protoProps, staticProps) { if (protoProps) profileMappingEditor_defineProperties(Constructor.prototype, protoProps); if (staticProps) profileMappingEditor_defineProperties(Constructor, staticProps); return Constructor; }

function profileMappingEditor_possibleConstructorReturn(self, call) { if (call && (profileMappingEditor_typeof(call) === "object" || typeof call === "function")) { return call; } return profileMappingEditor_assertThisInitialized(self); }

function profileMappingEditor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function profileMappingEditor_getPrototypeOf(o) { profileMappingEditor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return profileMappingEditor_getPrototypeOf(o); }

function profileMappingEditor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) profileMappingEditor_setPrototypeOf(subClass, superClass); }

function profileMappingEditor_setPrototypeOf(o, p) { profileMappingEditor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return profileMappingEditor_setPrototypeOf(o, p); }










var profileMappingEditor_ProfileMappingEditor =
/*#__PURE__*/
function (_Component) {
  profileMappingEditor_inherits(ProfileMappingEditor, _Component);

  function ProfileMappingEditor() {
    var _this;

    profileMappingEditor_classCallCheck(this, ProfileMappingEditor);

    _this = profileMappingEditor_possibleConstructorReturn(this, profileMappingEditor_getPrototypeOf(ProfileMappingEditor).call(this));
    _this.state = {
      profileMappingDetail: {
        DnnProfilePropertyName: "",
        AadClaimName: ""
      },
      error: {
        dnnProfilePropertyName: false,
        aadClaimName: false
      },
      triedToSubmit: false
    };
    return _this;
  }

  profileMappingEditor_createClass(ProfileMappingEditor, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var props = this.props;
      var state = this.state;
      state.profileMappingDetail["ProfileMappingId"] = props.profileMappingId;
      state.profileMappingDetail["DnnProfilePropertyName"] = props.dnnProfilePropertyName;
      state.profileMappingDetail["AadClaimName"] = props.aadClaimName;
      state.error["dnnProfilePropertyName"] = props.dnnProfilePropertyName === null;
      state.error["aadClaimName"] = props.aadClaimName === null;
    }
    /* eslint-disable react/no-did-update-set-state */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props,
          state = this.state;

      if (props !== prevProps && props.profileMappingDetail) {
        if (props.profileMappingDetail["DnnProfilePropertyName"] === undefined || props.profileMappingDetail["DnnProfilePropertyName"] === "") {
          state.error["dnnProfilePropertyName"] = true;
        } else if (props.profileMappingDetail["DnnProfilePropertyName"] !== "" && props.profileMappingDetail["DnnProfilePropertyName"] !== undefined) {
          state.error["dnnProfilePropertyName"] = false;
        }

        this.setState({
          profileMappingDetail: _extends({}, props.profileMappingDetail),
          triedToSubmit: false,
          error: state.error
        });
      }
    }
  }, {
    key: "onSettingChange",
    value: function onSettingChange(key, event) {
      var state = this.state,
          props = this.props;

      var profileMappingDetail = _extends({}, state.profileMappingDetail);

      if (key === "DnnProfilePropertyName") {
        state.error["dnnProfilePropertyName"] = !props.onValidate(profileMappingDetail, event.value);
      }

      if (profileMappingDetail[key] === "" && key === "AadClaimName") {
        state.error["aadClaimName"] = true;
      } else if (profileMappingDetail[key] !== "" && key === "AadClaimName") {
        state.error["aadClaimName"] = false;
      }

      if (key === "DnnProfilePropertyName") {
        profileMappingDetail[key] = event.value;
      } else {
        profileMappingDetail[key] = profileMappingEditor_typeof(event) === "object" ? event.target.value : event;
      }

      this.setState({
        profileMappingDetail: profileMappingDetail,
        triedToSubmit: false,
        error: state.error
      });
      props.dispatch(actions_settings.profileMappingClientModified(profileMappingDetail));
    }
  }, {
    key: "getProfilePropertyOptions",
    value: function getProfilePropertyOptions() {
      var options = [];

      if (this.props.availableProperties !== undefined) {
        options = this.props.availableProperties.map(function (item) {
          return {
            label: item,
            value: item
          };
        });
      }

      return options;
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var props = this.props,
          state = this.state;
      this.setState({
        triedToSubmit: true
      });

      if (state.error.dnnProfilePropertyName || state.error.aadClaimName) {
        return;
      }

      props.onUpdate(state.profileMappingDetail);
      props.Collapse();
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      var props = this.props;

      if (props.profileMappingClientModified) {
        utils["a" /* default */].utilities.confirm(resources.get("SettingsRestoreWarning"), resources.get("Yes"), resources.get("No"), function () {
          props.dispatch(actions_settings.cancelProfileMappingClientModified());
          props.Collapse();
        });
      } else {
        props.Collapse();
      }
    }
    /* eslint-disable react/no-danger */

  }, {
    key: "render",
    value: function render() {
      if (this.state.profileMappingDetail !== undefined || this.props.id === "add") {
        var columnOne = external_window_dnn_nodeModules_React_default.a.createElement("div", {
          key: "column-one",
          className: "left-column"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["DropdownWithError"], {
          withLabel: true,
          label: resources.get("lblDnnProfilePropertyName"),
          tooltipMessage: resources.get("lblDnnProfilePropertyName.Help"),
          error: this.state.error.dnnProfilePropertyName,
          errorMessage: resources.get("ErrorProfileMappingDuplicated"),
          options: this.getProfilePropertyOptions(),
          value: this.state.profileMappingDetail.DnnProfilePropertyName,
          onSelect: this.onSettingChange.bind(this, "DnnProfilePropertyName")
        })));
        var columnTwo = external_window_dnn_nodeModules_React_default.a.createElement("div", {
          key: "column-two",
          className: "right-column"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
          withLabel: true,
          label: resources.get("lblAadClaimName"),
          tooltipMessage: resources.get("lblAadClaimName.Help"),
          inputStyle: {
            margin: "0"
          },
          error: this.state.error.aadClaimName,
          errorMessage: resources.get("InvalidAadClaimName"),
          value: this.state.profileMappingDetail.AadClaimName,
          onChange: this.onSettingChange.bind(this, "AadClaimName")
        })));
        return external_window_dnn_nodeModules_React_default.a.createElement("div", {
          className: "profilemapping-editor"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridSystem"], {
          numberOfColumns: 2
        }, [columnOne, columnTwo]), external_window_dnn_nodeModules_React_default.a.createElement("div", {
          className: "editor-buttons-box"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Button"], {
          type: "secondary",
          onClick: this.onCancel.bind(this)
        }, resources.get("Cancel")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Button"], {
          type: "primary",
          onClick: this.onSave.bind(this)
        }, resources.get("SaveSettings"))));
      } else return external_window_dnn_nodeModules_React_default.a.createElement("div", null);
    }
  }]);

  return ProfileMappingEditor;
}(external_window_dnn_nodeModules_React_["Component"]);

profileMappingEditor_ProfileMappingEditor.propTypes = {
  dispatch: prop_types_default.a.func.isRequired,
  profileMappingDetail: prop_types_default.a.object,
  profileMappingId: prop_types_default.a.string,
  dnnProfilePropertyName: prop_types_default.a.string,
  aadClaimName: prop_types_default.a.string,
  Collapse: prop_types_default.a.func,
  onUpdate: prop_types_default.a.func,
  id: prop_types_default.a.string,
  profileMappingClientModified: prop_types_default.a.bool,
  availableProperties: prop_types_default.a.array,
  onValidate: prop_types_default.a.func
};

function profileMappingEditor_mapStateToProps() {
  return {// profileMappingDetail: state.siteBehavior.aliasDetail,
    // profileMappingClientModified: state.siteBehavior.siteAliasClientModified
  };
}

/* harmony default export */ var profileMappingEditor = (Object(external_window_dnn_nodeModules_ReactRedux_["connect"])(profileMappingEditor_mapStateToProps)(profileMappingEditor_ProfileMappingEditor));
// EXTERNAL MODULE: ./src/components/profileMappings/style.less
var profileMappings_style = __webpack_require__(35);

// CONCATENATED MODULE: ./src/components/profileMappings/index.jsx
function profileMappings_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { profileMappings_typeof = function _typeof(obj) { return typeof obj; }; } else { profileMappings_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return profileMappings_typeof(obj); }

function profileMappings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function profileMappings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function profileMappings_createClass(Constructor, protoProps, staticProps) { if (protoProps) profileMappings_defineProperties(Constructor.prototype, protoProps); if (staticProps) profileMappings_defineProperties(Constructor, staticProps); return Constructor; }

function profileMappings_possibleConstructorReturn(self, call) { if (call && (profileMappings_typeof(call) === "object" || typeof call === "function")) { return call; } return profileMappings_assertThisInitialized(self); }

function profileMappings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function profileMappings_getPrototypeOf(o) { profileMappings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return profileMappings_getPrototypeOf(o); }

function profileMappings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) profileMappings_setPrototypeOf(subClass, superClass); }

function profileMappings_setPrototypeOf(o, p) { profileMappings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return profileMappings_setPrototypeOf(o, p); }













var profileMappings_ProfileMappings =
/*#__PURE__*/
function (_Component) {
  profileMappings_inherits(ProfileMappings, _Component);

  function ProfileMappings() {
    var _this;

    profileMappings_classCallCheck(this, ProfileMappings);

    _this = profileMappings_possibleConstructorReturn(this, profileMappings_getPrototypeOf(ProfileMappings).call(this));
    _this.state = {
      openId: "",
      tableFields: [],
      error: {
        profileMapping: false
      }
    };
    return _this;
  }

  profileMappings_createClass(ProfileMappings, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var props = this.props;
      props.dispatch(actions_settings.getProfileSettings());
      props.dispatch(actions_settings.getProfileProperties());
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var state = this.state;
      state.error["profileMapping"] = nextProps.profileMapping === null;
    }
  }, {
    key: "onValidateProfileMapping",
    value: function onValidateProfileMapping(profileMappingDetail, newDnnProfilePropertyName) {
      var originalPropertyName = null;

      if (profileMappingDetail.ProfileMappingId) {
        originalPropertyName = profileMappingDetail.ProfileMappingId.split("-")[0];
      }

      if (originalPropertyName !== newDnnProfilePropertyName) {
        // The PropertyName of this row has changed. Let's see if that property has already been mapped
        if (this.props.profileMapping.find(function (p) {
          return p.DnnProfilePropertyName === newDnnProfilePropertyName;
        }) !== undefined) {
          return false; // Not valid; it's already in the list
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  }, {
    key: "onUpdateProfileMapping",
    value: function onUpdateProfileMapping(profileMappingDetail) {
      var _this2 = this;

      var props = this.props;
      var originalPropertyName = profileMappingDetail.ProfileMappingId ? profileMappingDetail.ProfileMappingId.split("-")[0] : null;

      if (originalPropertyName !== profileMappingDetail.DnnProfilePropertyName) {
        // The PropertyName of this row has changed. Let's see if that property has already been mapped
        if (this.props.profileMapping.find(function (p) {
          return p.DnnProfilePropertyName === profileMappingDetail.DnnProfilePropertyName;
        }) !== undefined) {
          utils["a" /* default */].utilities.notifyError(resources.get("ErrorProfileMappingDuplicated"));
          return;
        }
      }

      var payload = {
        originalDnnPropertyName: originalPropertyName,
        profileMappingDetail: profileMappingDetail
      };
      props.dispatch(actions_settings.updateProfileMapping(payload, function () {
        utils["a" /* default */].utilities.notify(resources.get("MappingUpdateSuccess"));

        _this2.collapse();

        props.dispatch(actions_settings.getProfileSettings());
      }, function (error) {
        var errorMessage = JSON.parse(error.responseText);
        utils["a" /* default */].utilities.notifyError(errorMessage.Message);
      }));
    }
  }, {
    key: "onDeleteProfileMapping",
    value: function onDeleteProfileMapping(profileMappingId) {
      var _this3 = this;

      var props = this.props;
      utils["a" /* default */].utilities.confirm(resources.get("ProfileMappingDeletedWarning"), resources.get("Yes"), resources.get("No"), function () {
        var originalPropertyName = profileMappingId.split("-")[0];
        var payload = {
          dnnProfilePropertyName: originalPropertyName
        };
        props.dispatch(actions_settings.deleteProfileMapping(payload, function () {
          utils["a" /* default */].utilities.notify(resources.get("MappingDeleteSuccess"));

          _this3.collapse();

          props.dispatch(actions_settings.getProfileSettings());
        }, function (error) {
          var errorMessage = JSON.parse(error.responseText);
          utils["a" /* default */].utilities.notifyError(errorMessage.Message);
        }));
      });
    }
  }, {
    key: "onClickCancel",
    value: function onClickCancel() {
      utils["a" /* default */].utilities.closePersonaBar();
    }
    /* eslint-disable react/no-did-update-set-state */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;

      if (props !== prevProps) {
        var tableFields = [];

        if (tableFields.length === 0) {
          tableFields.push({
            "name": resources.get("DnnProfileProperty.Header"),
            "id": "DnnProfileProperty"
          });
          tableFields.push({
            "name": resources.get("AadClaim.Header"),
            "id": "AadClaim"
          });
        }

        this.setState({
          tableFields: tableFields
        });
      }
    }
  }, {
    key: "uncollapse",
    value: function uncollapse(id) {
      this.setState({
        openId: id
      });
    }
  }, {
    key: "collapse",
    value: function collapse() {
      if (this.state.openId !== "") {
        this.setState({
          openId: ""
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle(openId) {
      if (openId !== "") {
        this.uncollapse(openId);
      }
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var tableHeaders = this.state.tableFields.map(function (field) {
        var className = "header-" + field.id;
        return external_window_dnn_nodeModules_React_default.a.createElement("div", {
          className: className,
          key: "header-" + field.id
        }, external_window_dnn_nodeModules_React_default.a.createElement("span", null, field.name, "\xA0 "));
      });
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "header-row"
      }, tableHeaders);
    }
  }, {
    key: "renderedProfileMappings",
    value: function renderedProfileMappings() {
      var _this4 = this;

      var i = 0;

      if (this.props.profileMapping) {
        return this.props.profileMapping.map(function (item, index) {
          var id = "row-" + i++;
          var profileMappingId = item.DnnProfilePropertyName + "-" + item.AadClaimName;
          return external_window_dnn_nodeModules_React_default.a.createElement(profileMappingRow, {
            profileMappingId: profileMappingId,
            dnnProfilePropertyName: item.DnnProfilePropertyName,
            aadClaimName: item.AadClaimName,
            index: index,
            key: "profile-" + index,
            closeOnClick: true,
            openId: _this4.state.openId,
            OpenCollapse: _this4.toggle.bind(_this4),
            Collapse: _this4.collapse.bind(_this4),
            onDelete: _this4.onDeleteProfileMapping.bind(_this4, profileMappingId),
            id: id
          }, external_window_dnn_nodeModules_React_default.a.createElement(profileMappingEditor, {
            availableProperties: _this4.props.profileProperties,
            profileMappingId: profileMappingId,
            dnnProfilePropertyName: item.DnnProfilePropertyName,
            aadClaimName: item.AadClaimName,
            Collapse: _this4.collapse.bind(_this4),
            onUpdate: _this4.onUpdateProfileMapping.bind(_this4),
            onValidate: _this4.onValidateProfileMapping.bind(_this4),
            id: id,
            openId: _this4.state.openId
          }));
        });
      }
    }
    /* eslint-disable react/no-danger */

  }, {
    key: "render",
    value: function render() {
      var opened = this.state.openId === "add";
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "dnn-azuread-aad-profileMappingSettings"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "profile-items"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "AddItemRow"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "sectionTitle"
      }, resources.get("lblProfilePropertiesMapping")), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: opened ? "AddItemBox-active" : "AddItemBox",
        onClick: this.toggle.bind(this, opened ? "" : "add")
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "add-icon",
        dangerouslySetInnerHTML: {
          __html: external_window_dnn_nodeModules_CommonComponents_["SvgIcons"].AddIcon
        }
      }), " ", resources.get("cmdAddProfileMapping"))), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "profile-items-grid"
      }, this.renderHeader(), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Collapsible"], {
        isOpened: opened,
        style: {
          width: "100%",
          overflow: opened ? "visible" : "hidden"
        }
      }, external_window_dnn_nodeModules_React_default.a.createElement(profileMappingRow, {
        dnnProfilePropertyName: "-",
        aadClaimName: "-",
        deletable: false,
        editable: false,
        index: "add",
        key: "profileItem-add",
        closeOnClick: true,
        openId: this.state.openId,
        OpenCollapse: this.toggle.bind(this),
        Collapse: this.collapse.bind(this),
        onDelete: this.onDeleteProfileMapping.bind(this),
        id: "add"
      }, external_window_dnn_nodeModules_React_default.a.createElement(profileMappingEditor, {
        availableProperties: this.props.profileProperties,
        Collapse: this.collapse.bind(this),
        onUpdate: this.onUpdateProfileMapping.bind(this),
        onValidate: this.onValidateProfileMapping.bind(this),
        id: "add",
        openId: this.state.openId
      }))), this.renderedProfileMappings())));
    }
  }]);

  return ProfileMappings;
}(external_window_dnn_nodeModules_React_["Component"]);

profileMappings_ProfileMappings.propTypes = {
  profileMapping: prop_types_default.a.array,
  profileProperties: prop_types_default.a.array
};

function profileMappings_mapStateToProps(state) {
  return {
    profileMapping: state.settings.profileMapping,
    profileProperties: state.settings.profileProperties
  };
}

/* harmony default export */ var profileMappings = (Object(external_window_dnn_nodeModules_ReactRedux_["connect"])(profileMappings_mapStateToProps)(profileMappings_ProfileMappings));
// EXTERNAL MODULE: ./src/components/userMappings/userMappingRow/style.less
var userMappingRow_style = __webpack_require__(37);

// CONCATENATED MODULE: ./src/components/userMappings/userMappingRow/index.jsx
function userMappingRow_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { userMappingRow_typeof = function _typeof(obj) { return typeof obj; }; } else { userMappingRow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return userMappingRow_typeof(obj); }

function userMappingRow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function userMappingRow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function userMappingRow_createClass(Constructor, protoProps, staticProps) { if (protoProps) userMappingRow_defineProperties(Constructor.prototype, protoProps); if (staticProps) userMappingRow_defineProperties(Constructor, staticProps); return Constructor; }

function userMappingRow_possibleConstructorReturn(self, call) { if (call && (userMappingRow_typeof(call) === "object" || typeof call === "function")) { return call; } return userMappingRow_assertThisInitialized(self); }

function userMappingRow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function userMappingRow_getPrototypeOf(o) { userMappingRow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return userMappingRow_getPrototypeOf(o); }

function userMappingRow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) userMappingRow_setPrototypeOf(subClass, superClass); }

function userMappingRow_setPrototypeOf(o, p) { userMappingRow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return userMappingRow_setPrototypeOf(o, p); }






var userMappingRow_UserMappingRow =
/*#__PURE__*/
function (_Component) {
  userMappingRow_inherits(UserMappingRow, _Component);

  function UserMappingRow() {
    userMappingRow_classCallCheck(this, UserMappingRow);

    return userMappingRow_possibleConstructorReturn(this, userMappingRow_getPrototypeOf(UserMappingRow).apply(this, arguments));
  }

  userMappingRow_createClass(UserMappingRow, [{
    key: "componentDidMount",

    /* eslint-disable react/no-did-mount-set-state */
    value: function componentDidMount() {
      var opened = this.props.openId !== "" && this.props.id === this.props.openId;
      this.setState({
        opened: opened
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.props.openId !== "" && this.props.id === this.props.openId) {
        this.props.Collapse();
      } else {
        this.props.OpenCollapse(this.props.id);
      }
    }
    /* eslint-disable react/no-danger */

  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var opened = this.props.openId !== "" && this.props.id === this.props.openId;
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "collapsible-component-item" + (opened ? " row-opened" : "")
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "collapsible-item " + !opened
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "row"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        title: props.name,
        className: "property-item item-row-dnnproperty"
      }, props.dnnPropertyName), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "property-item item-row-aadproperty"
      }, props.aadClaimName), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "property-item item-row-actionButtons"
      }, props.deletable && external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: opened ? "delete-icon-hidden" : "delete-icon",
        dangerouslySetInnerHTML: {
          __html: external_window_dnn_nodeModules_CommonComponents_["SvgIcons"].TrashIcon
        },
        onClick: props.onDelete.bind(this)
      }), props.editable && external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: opened ? "edit-icon-active" : "edit-icon",
        dangerouslySetInnerHTML: {
          __html: external_window_dnn_nodeModules_CommonComponents_["SvgIcons"].EditIcon
        },
        onClick: this.toggle.bind(this)
      })))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Collapsible"], {
        fixedHeight: 205,
        keepContent: true,
        isOpened: opened,
        style: {
          "float": "left",
          width: "100%",
          overflow: "inherit"
        }
      }, opened && props.children));
    }
  }]);

  return UserMappingRow;
}(external_window_dnn_nodeModules_React_["Component"]);

userMappingRow_UserMappingRow.propTypes = {
  mappingId: prop_types_default.a.string,
  dnnPropertyName: prop_types_default.a.string,
  aadClaimName: prop_types_default.a.string,
  deletable: prop_types_default.a.bool,
  editable: prop_types_default.a.bool,
  OpenCollapse: prop_types_default.a.func,
  Collapse: prop_types_default.a.func,
  onDelete: prop_types_default.a.func,
  id: prop_types_default.a.string,
  openId: prop_types_default.a.string
};
userMappingRow_UserMappingRow.defaultProps = {
  collapsed: true,
  deletable: false,
  editable: true
};
/* harmony default export */ var userMappingRow = (userMappingRow_UserMappingRow);
// EXTERNAL MODULE: ./src/components/userMappings/userMappingEditor/style.less
var userMappingEditor_style = __webpack_require__(39);

// CONCATENATED MODULE: ./src/components/userMappings/userMappingEditor/index.jsx
function userMappingEditor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { userMappingEditor_typeof = function _typeof(obj) { return typeof obj; }; } else { userMappingEditor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return userMappingEditor_typeof(obj); }

function userMappingEditor_extends() { userMappingEditor_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return userMappingEditor_extends.apply(this, arguments); }

function userMappingEditor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function userMappingEditor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function userMappingEditor_createClass(Constructor, protoProps, staticProps) { if (protoProps) userMappingEditor_defineProperties(Constructor.prototype, protoProps); if (staticProps) userMappingEditor_defineProperties(Constructor, staticProps); return Constructor; }

function userMappingEditor_possibleConstructorReturn(self, call) { if (call && (userMappingEditor_typeof(call) === "object" || typeof call === "function")) { return call; } return userMappingEditor_assertThisInitialized(self); }

function userMappingEditor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function userMappingEditor_getPrototypeOf(o) { userMappingEditor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return userMappingEditor_getPrototypeOf(o); }

function userMappingEditor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) userMappingEditor_setPrototypeOf(subClass, superClass); }

function userMappingEditor_setPrototypeOf(o, p) { userMappingEditor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return userMappingEditor_setPrototypeOf(o, p); }










var userMappingEditor_UserMappingEditor =
/*#__PURE__*/
function (_Component) {
  userMappingEditor_inherits(UserMappingEditor, _Component);

  function UserMappingEditor() {
    var _this;

    userMappingEditor_classCallCheck(this, UserMappingEditor);

    _this = userMappingEditor_possibleConstructorReturn(this, userMappingEditor_getPrototypeOf(UserMappingEditor).call(this));
    _this.state = {
      mappingDetail: {
        DnnPropertyName: "",
        AadClaimName: ""
      },
      error: {
        dnnPropertyName: false,
        aadClaimName: false
      },
      triedToSubmit: false
    };
    return _this;
  }

  userMappingEditor_createClass(UserMappingEditor, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var props = this.props;
      var state = this.state;
      state.mappingDetail["MappingId"] = props.mappingId;
      state.mappingDetail["DnnPropertyName"] = props.dnnPropertyName;
      state.mappingDetail["AadClaimName"] = props.aadClaimName;
      state.error["dnnPropertyName"] = props.dnnPropertyName === null;
      state.error["aadClaimName"] = props.aadClaimName === null;
    }
    /* eslint-disable react/no-did-update-set-state */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props,
          state = this.state;

      if (props !== prevProps && props.mappingDetail) {
        if (props.mappingDetail["DnnPropertyName"] === undefined || props.mappingDetail["DnnPropertyName"] === "") {
          state.error["dnnPropertyName"] = true;
        } else if (props.mappingDetail["DnnPropertyName"] !== "" && props.mappingDetail["DnnPropertyName"] !== undefined) {
          state.error["dnnPropertyName"] = false;
        }

        this.setState({
          mappingDetail: userMappingEditor_extends({}, props.mappingDetail),
          triedToSubmit: false,
          error: state.error
        });
      }
    }
  }, {
    key: "onSettingChange",
    value: function onSettingChange(key, event) {
      var state = this.state,
          props = this.props;

      var mappingDetail = userMappingEditor_extends({}, state.mappingDetail);

      if (key === "DnnPropertyName") {
        state.error["dnnPropertyName"] = !props.onValidate(mappingDetail, event.value);
      }

      if (mappingDetail[key] === "" && key === "AadClaimName" && props.dnnPropertyName !== "PortalId") {
        state.error["aadClaimName"] = true;
      } else if (mappingDetail[key] !== "" && key === "AadClaimName") {
        state.error["aadClaimName"] = false;
      }

      mappingDetail[key] = userMappingEditor_typeof(event) === "object" ? event.target.value : event;
      this.setState({
        mappingDetail: mappingDetail,
        triedToSubmit: false,
        error: state.error
      });
      props.dispatch(actions_settings.userMappingClientModified(mappingDetail));
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var props = this.props,
          state = this.state;
      this.setState({
        triedToSubmit: true
      });

      if (state.error.dnnPropertyName || state.error.aadClaimName) {
        return;
      }

      props.onUpdate(state.mappingDetail);
      props.Collapse();
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      var props = this.props;

      if (props.mappingClientModified) {
        utils["a" /* default */].utilities.confirm(resources.get("SettingsRestoreWarning"), resources.get("Yes"), resources.get("No"), function () {
          props.dispatch(actions_settings.cancelUserMappingClientModified());
          props.Collapse();
        });
      } else {
        props.Collapse();
      }
    }
    /* eslint-disable react/no-danger */

  }, {
    key: "render",
    value: function render() {
      if (this.state.mappingDetail !== undefined || this.props.id === "add") {
        var columnOne = external_window_dnn_nodeModules_React_default.a.createElement("div", {
          key: "column-one",
          className: "left-column"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
          withLabel: true,
          label: resources.get("lblDnnPropertyName"),
          tooltipMessage: resources.get("lblDnnPropertyName.Help"),
          inputStyle: {
            margin: "0"
          },
          value: this.state.mappingDetail.DnnPropertyName,
          enabled: false
        })));
        var columnTwo = external_window_dnn_nodeModules_React_default.a.createElement("div", {
          key: "column-two",
          className: "right-column"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
          withLabel: true,
          label: resources.get("lblAadClaimName"),
          tooltipMessage: resources.get("lblAadClaimName.Help"),
          inputStyle: {
            margin: "0"
          },
          error: this.state.error.aadClaimName,
          errorMessage: resources.get("InvalidAadClaimName"),
          value: this.state.mappingDetail.AadClaimName,
          onChange: this.onSettingChange.bind(this, "AadClaimName")
        })));
        return external_window_dnn_nodeModules_React_default.a.createElement("div", {
          className: "usermapping-editor"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridSystem"], {
          numberOfColumns: 2
        }, [columnOne, columnTwo]), external_window_dnn_nodeModules_React_default.a.createElement("div", {
          className: "editor-buttons-box"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Button"], {
          type: "secondary",
          onClick: this.onCancel.bind(this)
        }, resources.get("Cancel")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Button"], {
          type: "primary",
          onClick: this.onSave.bind(this)
        }, resources.get("SaveSettings"))));
      } else return external_window_dnn_nodeModules_React_default.a.createElement("div", null);
    }
  }]);

  return UserMappingEditor;
}(external_window_dnn_nodeModules_React_["Component"]);

userMappingEditor_UserMappingEditor.propTypes = {
  dispatch: prop_types_default.a.func.isRequired,
  mappingDetail: prop_types_default.a.object,
  mappingId: prop_types_default.a.string,
  dnnPropertyName: prop_types_default.a.string,
  aadClaimName: prop_types_default.a.string,
  Collapse: prop_types_default.a.func,
  onUpdate: prop_types_default.a.func,
  id: prop_types_default.a.string,
  mappingClientModified: prop_types_default.a.bool,
  onValidate: prop_types_default.a.func
};

function userMappingEditor_mapStateToProps() {
  return {};
}

/* harmony default export */ var userMappingEditor = (Object(external_window_dnn_nodeModules_ReactRedux_["connect"])(userMappingEditor_mapStateToProps)(userMappingEditor_UserMappingEditor));
// EXTERNAL MODULE: ./src/components/userMappings/style.less
var userMappings_style = __webpack_require__(41);

// CONCATENATED MODULE: ./src/components/userMappings/index.jsx
function userMappings_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { userMappings_typeof = function _typeof(obj) { return typeof obj; }; } else { userMappings_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return userMappings_typeof(obj); }

function userMappings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function userMappings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function userMappings_createClass(Constructor, protoProps, staticProps) { if (protoProps) userMappings_defineProperties(Constructor.prototype, protoProps); if (staticProps) userMappings_defineProperties(Constructor, staticProps); return Constructor; }

function userMappings_possibleConstructorReturn(self, call) { if (call && (userMappings_typeof(call) === "object" || typeof call === "function")) { return call; } return userMappings_assertThisInitialized(self); }

function userMappings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function userMappings_getPrototypeOf(o) { userMappings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return userMappings_getPrototypeOf(o); }

function userMappings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) userMappings_setPrototypeOf(subClass, superClass); }

function userMappings_setPrototypeOf(o, p) { userMappings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return userMappings_setPrototypeOf(o, p); }











var userMappings_UserMappings =
/*#__PURE__*/
function (_Component) {
  userMappings_inherits(UserMappings, _Component);

  function UserMappings() {
    var _this;

    userMappings_classCallCheck(this, UserMappings);

    _this = userMappings_possibleConstructorReturn(this, userMappings_getPrototypeOf(UserMappings).call(this));
    _this.state = {
      openId: "",
      tableFields: [],
      error: {
        mapping: false
      }
    };
    return _this;
  }

  userMappings_createClass(UserMappings, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var props = this.props;
      props.dispatch(actions_settings.getUserMappingSettings());
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var state = this.state;
      state.error["mapping"] = nextProps.mapping === null;
    }
  }, {
    key: "onUpdateMapping",
    value: function onUpdateMapping(mappingDetail) {
      var _this2 = this;

      var props = this.props;
      var payload = {
        DnnPropertyName: mappingDetail.DnnPropertyName,
        AadClaimName: mappingDetail.AadClaimName
      };
      props.dispatch(actions_settings.updateUserMapping(payload, function () {
        utils["a" /* default */].utilities.notify(resources.get("MappingUpdateSuccess"));

        _this2.collapse();

        props.dispatch(actions_settings.getUserMappingSettings());
      }, function (error) {
        var errorMessage = JSON.parse(error.responseText);
        utils["a" /* default */].utilities.notifyError(errorMessage.Message);
      }));
    }
  }, {
    key: "onDeleteMapping",
    value: function onDeleteMapping(mappingId) {
      var _this3 = this;

      var props = this.props;
      utils["a" /* default */].utilities.confirm(resources.get("MappingDeletedWarning"), resources.get("Yes"), resources.get("No"), function () {
        var originalUserMappingName = mappingId.split("-")[0];
        var payload = {
          dnnMappingName: originalUserMappingName
        };
        props.dispatch(actions_settings.deleteUserMapping(payload, function () {
          utils["a" /* default */].utilities.notify(resources.get("MappingDeleteSuccess"));

          _this3.collapse();

          props.dispatch(actions_settings.getUserMappingSettings());
        }, function (error) {
          var errorMessage = JSON.parse(error.responseText);
          utils["a" /* default */].utilities.notifyError(errorMessage.Message);
        }));
      });
    }
  }, {
    key: "onClickCancel",
    value: function onClickCancel() {
      utils["a" /* default */].utilities.closePersonaBar();
    }
    /* eslint-disable react/no-did-update-set-state */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;

      if (props !== prevProps) {
        var tableFields = [];

        if (tableFields.length === 0) {
          tableFields.push({
            "name": resources.get("DnnProperty.Header"),
            "id": "DnnProperty"
          });
          tableFields.push({
            "name": resources.get("AadProperty.Header"),
            "id": "AadProperty"
          });
        }

        this.setState({
          tableFields: tableFields
        });
      }
    }
  }, {
    key: "uncollapse",
    value: function uncollapse(id) {
      this.setState({
        openId: id
      });
    }
  }, {
    key: "collapse",
    value: function collapse() {
      if (this.state.openId !== "") {
        this.setState({
          openId: ""
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle(openId) {
      if (openId !== "") {
        this.uncollapse(openId);
      }
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var tableHeaders = this.state.tableFields.map(function (field) {
        var className = "header-" + field.id;
        return external_window_dnn_nodeModules_React_default.a.createElement("div", {
          className: className,
          key: "header-" + field.id
        }, external_window_dnn_nodeModules_React_default.a.createElement("span", null, field.name, "\xA0 "));
      });
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "header-row"
      }, tableHeaders);
    }
  }, {
    key: "renderMappings",
    value: function renderMappings() {
      var _this4 = this;

      var i = 0;

      if (this.props.mapping) {
        return this.props.mapping.map(function (item, index) {
          var id = "row-" + i++;
          var mappingId = item.DnnPropertyName + "-" + item.AadClaimName;
          return external_window_dnn_nodeModules_React_default.a.createElement(userMappingRow, {
            mappingId: mappingId,
            dnnPropertyName: item.DnnPropertyName,
            aadClaimName: item.AadClaimName,
            index: index,
            key: "role-" + index,
            closeOnClick: true,
            openId: _this4.state.openId,
            OpenCollapse: _this4.toggle.bind(_this4),
            Collapse: _this4.collapse.bind(_this4),
            onDelete: _this4.onDeleteMapping.bind(_this4, mappingId),
            id: id
          }, external_window_dnn_nodeModules_React_default.a.createElement(userMappingEditor, {
            mappingId: mappingId,
            dnnPropertyName: item.DnnPropertyName,
            aadClaimName: item.AadClaimName,
            Collapse: _this4.collapse.bind(_this4),
            onUpdate: _this4.onUpdateMapping.bind(_this4),
            id: id,
            openId: _this4.state.openId
          }));
        });
      }
    }
    /* eslint-disable react/no-danger */

  }, {
    key: "render",
    value: function render() {
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "dnn-azuread-aad-userMappingSettings"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "items"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "AddItemRow"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "sectionTitle"
      }, resources.get("lblUsersMapping"))), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "items-grid"
      }, this.renderHeader(), this.renderMappings())));
    }
  }]);

  return UserMappings;
}(external_window_dnn_nodeModules_React_["Component"]);

userMappings_UserMappings.propTypes = {
  mapping: prop_types_default.a.array
};

function userMappings_mapStateToProps(state) {
  return {
    mapping: state.settings.userMapping
  };
}

/* harmony default export */ var userMappings = (Object(external_window_dnn_nodeModules_ReactRedux_["connect"])(userMappings_mapStateToProps)(userMappings_UserMappings));
// EXTERNAL MODULE: ./src/components/roleMappings/roleMappingRow/style.less
var roleMappingRow_style = __webpack_require__(43);

// CONCATENATED MODULE: ./src/components/roleMappings/roleMappingRow/index.jsx
function roleMappingRow_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { roleMappingRow_typeof = function _typeof(obj) { return typeof obj; }; } else { roleMappingRow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return roleMappingRow_typeof(obj); }

function roleMappingRow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function roleMappingRow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function roleMappingRow_createClass(Constructor, protoProps, staticProps) { if (protoProps) roleMappingRow_defineProperties(Constructor.prototype, protoProps); if (staticProps) roleMappingRow_defineProperties(Constructor, staticProps); return Constructor; }

function roleMappingRow_possibleConstructorReturn(self, call) { if (call && (roleMappingRow_typeof(call) === "object" || typeof call === "function")) { return call; } return roleMappingRow_assertThisInitialized(self); }

function roleMappingRow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function roleMappingRow_getPrototypeOf(o) { roleMappingRow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return roleMappingRow_getPrototypeOf(o); }

function roleMappingRow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) roleMappingRow_setPrototypeOf(subClass, superClass); }

function roleMappingRow_setPrototypeOf(o, p) { roleMappingRow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return roleMappingRow_setPrototypeOf(o, p); }






var roleMappingRow_RoleMappingRow =
/*#__PURE__*/
function (_Component) {
  roleMappingRow_inherits(RoleMappingRow, _Component);

  function RoleMappingRow() {
    roleMappingRow_classCallCheck(this, RoleMappingRow);

    return roleMappingRow_possibleConstructorReturn(this, roleMappingRow_getPrototypeOf(RoleMappingRow).apply(this, arguments));
  }

  roleMappingRow_createClass(RoleMappingRow, [{
    key: "componentDidMount",

    /* eslint-disable react/no-did-mount-set-state */
    value: function componentDidMount() {
      var opened = this.props.openId !== "" && this.props.id === this.props.openId;
      this.setState({
        opened: opened
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.props.openId !== "" && this.props.id === this.props.openId) {
        this.props.Collapse();
      } else {
        this.props.OpenCollapse(this.props.id);
      }
    }
    /* eslint-disable react/no-danger */

  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var opened = this.props.openId !== "" && this.props.id === this.props.openId;
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "collapsible-component-item" + (opened ? " row-opened" : "")
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "collapsible-item " + !opened
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "row"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        title: props.name,
        className: "role-item item-row-dnnrole"
      }, props.dnnRoleName), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "role-item item-row-aadrole"
      }, props.aadRoleName), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "role-item item-row-actionButtons"
      }, props.deletable && external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: opened ? "delete-icon-hidden" : "delete-icon",
        dangerouslySetInnerHTML: {
          __html: external_window_dnn_nodeModules_CommonComponents_["SvgIcons"].TrashIcon
        },
        onClick: props.onDelete.bind(this)
      }), props.editable && external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: opened ? "edit-icon-active" : "edit-icon",
        dangerouslySetInnerHTML: {
          __html: external_window_dnn_nodeModules_CommonComponents_["SvgIcons"].EditIcon
        },
        onClick: this.toggle.bind(this)
      })))), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Collapsible"], {
        fixedHeight: 205,
        keepContent: true,
        isOpened: opened,
        style: {
          "float": "left",
          width: "100%",
          overflow: "inherit"
        }
      }, opened && props.children));
    }
  }]);

  return RoleMappingRow;
}(external_window_dnn_nodeModules_React_["Component"]);

roleMappingRow_RoleMappingRow.propTypes = {
  mappingId: prop_types_default.a.string,
  dnnRoleName: prop_types_default.a.string,
  aadRoleName: prop_types_default.a.string,
  deletable: prop_types_default.a.bool,
  editable: prop_types_default.a.bool,
  OpenCollapse: prop_types_default.a.func,
  Collapse: prop_types_default.a.func,
  onDelete: prop_types_default.a.func,
  id: prop_types_default.a.string,
  openId: prop_types_default.a.string
};
roleMappingRow_RoleMappingRow.defaultProps = {
  collapsed: true,
  deletable: true,
  editable: true
};
/* harmony default export */ var roleMappingRow = (roleMappingRow_RoleMappingRow);
// EXTERNAL MODULE: ./src/components/roleMappings/roleMappingEditor/style.less
var roleMappingEditor_style = __webpack_require__(45);

// CONCATENATED MODULE: ./src/components/roleMappings/roleMappingEditor/index.jsx
function roleMappingEditor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { roleMappingEditor_typeof = function _typeof(obj) { return typeof obj; }; } else { roleMappingEditor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return roleMappingEditor_typeof(obj); }

function roleMappingEditor_extends() { roleMappingEditor_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return roleMappingEditor_extends.apply(this, arguments); }

function roleMappingEditor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function roleMappingEditor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function roleMappingEditor_createClass(Constructor, protoProps, staticProps) { if (protoProps) roleMappingEditor_defineProperties(Constructor.prototype, protoProps); if (staticProps) roleMappingEditor_defineProperties(Constructor, staticProps); return Constructor; }

function roleMappingEditor_possibleConstructorReturn(self, call) { if (call && (roleMappingEditor_typeof(call) === "object" || typeof call === "function")) { return call; } return roleMappingEditor_assertThisInitialized(self); }

function roleMappingEditor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function roleMappingEditor_getPrototypeOf(o) { roleMappingEditor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return roleMappingEditor_getPrototypeOf(o); }

function roleMappingEditor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) roleMappingEditor_setPrototypeOf(subClass, superClass); }

function roleMappingEditor_setPrototypeOf(o, p) { roleMappingEditor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return roleMappingEditor_setPrototypeOf(o, p); }










var roleMappingEditor_RoleMappingEditor =
/*#__PURE__*/
function (_Component) {
  roleMappingEditor_inherits(RoleMappingEditor, _Component);

  function RoleMappingEditor() {
    var _this;

    roleMappingEditor_classCallCheck(this, RoleMappingEditor);

    _this = roleMappingEditor_possibleConstructorReturn(this, roleMappingEditor_getPrototypeOf(RoleMappingEditor).call(this));
    _this.state = {
      mappingDetail: {
        DnnRoleName: "",
        AadRoleName: ""
      },
      error: {
        dnnRoleName: false,
        aadRoleName: false
      },
      triedToSubmit: false
    };
    return _this;
  }

  roleMappingEditor_createClass(RoleMappingEditor, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var props = this.props;
      var state = this.state;
      state.mappingDetail["MappingId"] = props.mappingId;
      state.mappingDetail["DnnRoleName"] = props.dnnRoleName;
      state.mappingDetail["AadRoleName"] = props.aadRoleName;
      state.error["dnnRoleName"] = props.dnnRoleName === null;
      state.error["aadRoleName"] = props.aadRoleName === null;
    }
    /* eslint-disable react/no-did-update-set-state */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props,
          state = this.state;

      if (props !== prevProps && props.mappingDetail) {
        if (props.mappingDetail["DnnRoleName"] === undefined || props.mappingDetail["DnnRoleName"] === "") {
          state.error["dnnRoleName"] = true;
        } else if (props.mappingDetail["DnnRoleName"] !== "" && props.mappingDetail["DnnRoleName"] !== undefined) {
          state.error["dnnRoleName"] = false;
        }

        this.setState({
          mappingDetail: roleMappingEditor_extends({}, props.mappingDetail),
          triedToSubmit: false,
          error: state.error
        });
      }
    }
  }, {
    key: "onSettingChange",
    value: function onSettingChange(key, event) {
      var state = this.state,
          props = this.props;

      var mappingDetail = roleMappingEditor_extends({}, state.mappingDetail);

      if (key === "DnnRoleName") {
        state.error["dnnRoleName"] = !props.onValidate(mappingDetail, event.value);
      }

      if (mappingDetail[key] === "" && key === "AadRoleName") {
        state.error["aadRoleName"] = true;
      } else if (mappingDetail[key] !== "" && key === "AadRoleName") {
        state.error["aadRoleName"] = false;
      }

      if (key === "DnnRoleName") {
        mappingDetail[key] = event.value;
      } else {
        mappingDetail[key] = roleMappingEditor_typeof(event) === "object" ? event.target.value : event;
      }

      this.setState({
        mappingDetail: mappingDetail,
        triedToSubmit: false,
        error: state.error
      });
      props.dispatch(actions_settings.roleMappingClientModified(mappingDetail));
    }
  }, {
    key: "getRolePropertyOptions",
    value: function getRolePropertyOptions() {
      var options = [];

      if (this.props.availableRoles !== undefined) {
        options = this.props.availableRoles.map(function (item) {
          return {
            label: item,
            value: item
          };
        });
      }

      return options;
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var props = this.props,
          state = this.state;
      this.setState({
        triedToSubmit: true
      });

      if (state.error.dnnRoleName || state.error.aadRoleName) {
        return;
      }

      props.onUpdate(state.mappingDetail);
      props.Collapse();
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      var props = this.props;

      if (props.mappingClientModified) {
        utils["a" /* default */].utilities.confirm(resources.get("SettingsRestoreWarning"), resources.get("Yes"), resources.get("No"), function () {
          props.dispatch(actions_settings.cancelRoleMappingClientModified());
          props.Collapse();
        });
      } else {
        props.Collapse();
      }
    }
    /* eslint-disable react/no-danger */

  }, {
    key: "render",
    value: function render() {
      if (this.state.mappingDetail !== undefined || this.props.id === "add") {
        var columnOne = external_window_dnn_nodeModules_React_default.a.createElement("div", {
          key: "column-one",
          className: "left-column"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["DropdownWithError"], {
          enabled: true,
          withLabel: true,
          label: resources.get("lblDnnRoleName"),
          tooltipMessage: resources.get("lblDnnRoleName.Help"),
          error: this.state.error.dnnRoleName,
          errorMessage: resources.get("ErrorMappingDuplicated"),
          options: this.getRolePropertyOptions(),
          value: this.state.mappingDetail.DnnRoleName,
          onSelect: this.onSettingChange.bind(this, "DnnRoleName")
        })));
        var columnTwo = external_window_dnn_nodeModules_React_default.a.createElement("div", {
          key: "column-two",
          className: "right-column"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["InputGroup"], null, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["SingleLineInputWithError"], {
          withLabel: true,
          label: resources.get("lblAadRoleName"),
          tooltipMessage: resources.get("lblAadRoleName.Help"),
          inputStyle: {
            margin: "0"
          },
          error: this.state.error.aadRoleName,
          errorMessage: resources.get("InvalidAadRoleName"),
          value: this.state.mappingDetail.AadRoleName,
          onChange: this.onSettingChange.bind(this, "AadRoleName")
        })));
        return external_window_dnn_nodeModules_React_default.a.createElement("div", {
          className: "rolemapping-editor"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["GridSystem"], {
          numberOfColumns: 2
        }, [columnOne, columnTwo]), external_window_dnn_nodeModules_React_default.a.createElement("div", {
          className: "editor-buttons-box"
        }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Button"], {
          type: "secondary",
          onClick: this.onCancel.bind(this)
        }, resources.get("Cancel")), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Button"], {
          type: "primary",
          onClick: this.onSave.bind(this)
        }, resources.get("SaveSettings"))));
      } else return external_window_dnn_nodeModules_React_default.a.createElement("div", null);
    }
  }]);

  return RoleMappingEditor;
}(external_window_dnn_nodeModules_React_["Component"]);

roleMappingEditor_RoleMappingEditor.propTypes = {
  dispatch: prop_types_default.a.func.isRequired,
  mappingDetail: prop_types_default.a.object,
  mappingId: prop_types_default.a.string,
  dnnRoleName: prop_types_default.a.string,
  aadRoleName: prop_types_default.a.string,
  Collapse: prop_types_default.a.func,
  onUpdate: prop_types_default.a.func,
  id: prop_types_default.a.string,
  mappingClientModified: prop_types_default.a.bool,
  availableRoles: prop_types_default.a.array,
  onValidate: prop_types_default.a.func
};

function roleMappingEditor_mapStateToProps() {
  return {// profileMappingDetail: state.siteBehavior.aliasDetail,
    // profileMappingClientModified: state.siteBehavior.siteAliasClientModified
  };
}

/* harmony default export */ var roleMappingEditor = (Object(external_window_dnn_nodeModules_ReactRedux_["connect"])(roleMappingEditor_mapStateToProps)(roleMappingEditor_RoleMappingEditor));
// EXTERNAL MODULE: ./src/components/roleMappings/style.less
var roleMappings_style = __webpack_require__(47);

// CONCATENATED MODULE: ./src/components/roleMappings/index.jsx
function roleMappings_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { roleMappings_typeof = function _typeof(obj) { return typeof obj; }; } else { roleMappings_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return roleMappings_typeof(obj); }

function roleMappings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function roleMappings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function roleMappings_createClass(Constructor, protoProps, staticProps) { if (protoProps) roleMappings_defineProperties(Constructor.prototype, protoProps); if (staticProps) roleMappings_defineProperties(Constructor, staticProps); return Constructor; }

function roleMappings_possibleConstructorReturn(self, call) { if (call && (roleMappings_typeof(call) === "object" || typeof call === "function")) { return call; } return roleMappings_assertThisInitialized(self); }

function roleMappings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function roleMappings_getPrototypeOf(o) { roleMappings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return roleMappings_getPrototypeOf(o); }

function roleMappings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) roleMappings_setPrototypeOf(subClass, superClass); }

function roleMappings_setPrototypeOf(o, p) { roleMappings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return roleMappings_setPrototypeOf(o, p); }













var roleMappings_RoleMappings =
/*#__PURE__*/
function (_Component) {
  roleMappings_inherits(RoleMappings, _Component);

  function RoleMappings() {
    var _this;

    roleMappings_classCallCheck(this, RoleMappings);

    _this = roleMappings_possibleConstructorReturn(this, roleMappings_getPrototypeOf(RoleMappings).call(this));
    _this.state = {
      openId: "",
      tableFields: [],
      error: {
        mapping: false
      }
    };
    return _this;
  }

  roleMappings_createClass(RoleMappings, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var props = this.props;
      props.dispatch(actions_settings.getRoleSettings());
      props.dispatch(actions_settings.getAvailableRoles());
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var state = this.state;
      state.error["mapping"] = nextProps.mapping === null;
    }
  }, {
    key: "onValidateMapping",
    value: function onValidateMapping(mappingDetail, newDnnRoleName) {
      var originalRoleName = null;

      if (mappingDetail.MappingId) {
        originalRoleName = mappingDetail.MappingId.split("-")[0];
      }

      if (originalRoleName !== newDnnRoleName) {
        // The ItemName of this row has changed. Let's see if that property has already been mapped
        if (this.props.mapping.find(function (p) {
          return p.DnnRoleName === newDnnRoleName;
        }) !== undefined) {
          return false; // Not valid; it's already in the list
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  }, {
    key: "onUpdateMapping",
    value: function onUpdateMapping(mappingDetail) {
      var _this2 = this;

      var props = this.props;
      var originalRoleName = mappingDetail.MappingId ? mappingDetail.MappingId.split("|")[0] : null;

      if (originalRoleName !== mappingDetail.DnnRoleName) {
        // The RoleName of this row has changed. Let's see if that property has already been mapped
        if (this.props.mapping.find(function (p) {
          return p.DnnRoleName === mappingDetail.DnnRoleName;
        }) !== undefined) {
          utils["a" /* default */].utilities.notifyError(resources.get("ErrorMappingDuplicated"));
          return;
        }
      }

      var payload = {
        originalDnnRoleName: originalRoleName,
        mappingDetail: mappingDetail
      };
      props.dispatch(actions_settings.updateRoleMapping(payload, function () {
        utils["a" /* default */].utilities.notify(resources.get("MappingUpdateSuccess"));

        _this2.collapse();

        props.dispatch(actions_settings.getRoleSettings());
      }, function (error) {
        var errorMessage = JSON.parse(error.responseText);
        utils["a" /* default */].utilities.notifyError(errorMessage.Message);
      }));
    }
  }, {
    key: "onDeleteMapping",
    value: function onDeleteMapping(mappingId) {
      var _this3 = this;

      var props = this.props;
      utils["a" /* default */].utilities.confirm(resources.get("MappingDeletedWarning"), resources.get("Yes"), resources.get("No"), function () {
        var originalRoleName = mappingId.split("|")[0];
        var payload = {
          dnnRoleName: originalRoleName
        };
        props.dispatch(actions_settings.deleteRoleMapping(payload, function () {
          utils["a" /* default */].utilities.notify(resources.get("MappingDeleteSuccess"));

          _this3.collapse();

          props.dispatch(actions_settings.getRoleSettings());
        }, function (error) {
          var errorMessage = JSON.parse(error.responseText);
          utils["a" /* default */].utilities.notifyError(errorMessage.Message);
        }));
      });
    }
  }, {
    key: "onClickCancel",
    value: function onClickCancel() {
      utils["a" /* default */].utilities.closePersonaBar();
    }
    /* eslint-disable react/no-did-update-set-state */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;

      if (props !== prevProps) {
        var tableFields = [];

        if (tableFields.length === 0) {
          tableFields.push({
            "name": resources.get("DnnRole.Header"),
            "id": "DnnRole"
          });
          tableFields.push({
            "name": resources.get("AadRole.Header"),
            "id": "AadRole"
          });
        }

        this.setState({
          tableFields: tableFields
        });
      }
    }
  }, {
    key: "uncollapse",
    value: function uncollapse(id) {
      this.setState({
        openId: id
      });
    }
  }, {
    key: "collapse",
    value: function collapse() {
      if (this.state.openId !== "") {
        this.setState({
          openId: ""
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle(openId) {
      if (openId !== "") {
        this.uncollapse(openId);
      }
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var tableHeaders = this.state.tableFields.map(function (field) {
        var className = "header-" + field.id;
        return external_window_dnn_nodeModules_React_default.a.createElement("div", {
          className: className,
          key: "header-" + field.id
        }, external_window_dnn_nodeModules_React_default.a.createElement("span", null, field.name, "\xA0 "));
      });
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "header-row"
      }, tableHeaders);
    }
  }, {
    key: "renderMappings",
    value: function renderMappings() {
      var _this4 = this;

      var i = 0;

      if (this.props.mapping) {
        return this.props.mapping.map(function (item, index) {
          var id = "row-" + i++;
          var mappingId = item.DnnRoleName + "|" + item.AadRoleName;
          return external_window_dnn_nodeModules_React_default.a.createElement(roleMappingRow, {
            mappingId: mappingId,
            dnnRoleName: item.DnnRoleName,
            aadRoleName: item.AadRoleName,
            index: index,
            key: "role-" + index,
            closeOnClick: true,
            openId: _this4.state.openId,
            OpenCollapse: _this4.toggle.bind(_this4),
            Collapse: _this4.collapse.bind(_this4),
            onDelete: _this4.onDeleteMapping.bind(_this4, mappingId),
            id: id
          }, external_window_dnn_nodeModules_React_default.a.createElement(roleMappingEditor, {
            availableRoles: _this4.props.roles,
            mappingId: mappingId,
            dnnRoleName: item.DnnRoleName,
            aadRoleName: item.AadRoleName,
            Collapse: _this4.collapse.bind(_this4),
            onUpdate: _this4.onUpdateMapping.bind(_this4),
            onValidate: _this4.onValidateMapping.bind(_this4),
            id: id,
            openId: _this4.state.openId
          }));
        });
      }
    }
    /* eslint-disable react/no-danger */

  }, {
    key: "render",
    value: function render() {
      var opened = this.state.openId === "add";
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "dnn-azuread-aad-roleMappingSettings"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "items"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "AddItemRow"
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "sectionTitle"
      }, resources.get("lblRolesMapping")), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: opened ? "AddItemBox-active" : "AddItemBox",
        onClick: this.toggle.bind(this, opened ? "" : "add")
      }, external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "add-icon",
        dangerouslySetInnerHTML: {
          __html: external_window_dnn_nodeModules_CommonComponents_["SvgIcons"].AddIcon
        }
      }), " ", resources.get("cmdAddRoleMapping"))), external_window_dnn_nodeModules_React_default.a.createElement("div", {
        className: "items-grid"
      }, this.renderHeader(), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["Collapsible"], {
        isOpened: opened,
        style: {
          width: "100%",
          overflow: opened ? "visible" : "hidden"
        }
      }, external_window_dnn_nodeModules_React_default.a.createElement(roleMappingRow, {
        dnnRoleName: "-",
        aadRoleName: "-",
        deletable: false,
        editable: false,
        index: "add",
        key: "Item-add",
        closeOnClick: true,
        openId: this.state.openId,
        OpenCollapse: this.toggle.bind(this),
        Collapse: this.collapse.bind(this),
        onDelete: this.onDeleteMapping.bind(this),
        id: "add"
      }, external_window_dnn_nodeModules_React_default.a.createElement(roleMappingEditor, {
        availableRoles: this.props.roles,
        Collapse: this.collapse.bind(this),
        onUpdate: this.onUpdateMapping.bind(this),
        onValidate: this.onValidateMapping.bind(this),
        id: "add",
        openId: this.state.openId
      }))), this.renderMappings())));
    }
  }]);

  return RoleMappings;
}(external_window_dnn_nodeModules_React_["Component"]);

roleMappings_RoleMappings.propTypes = {
  mapping: prop_types_default.a.array,
  roles: prop_types_default.a.array
};

function roleMappings_mapStateToProps(state) {
  return {
    mapping: state.settings.roleMapping,
    roles: state.settings.roles
  };
}

/* harmony default export */ var roleMappings = (Object(external_window_dnn_nodeModules_ReactRedux_["connect"])(roleMappings_mapStateToProps)(roleMappings_RoleMappings));
// EXTERNAL MODULE: ./src/components/style.less
var components_style = __webpack_require__(49);

// CONCATENATED MODULE: ./src/components/App.jsx
function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }














var App_App =
/*#__PURE__*/
function (_Component) {
  App_inherits(App, _Component);

  function App() {
    App_classCallCheck(this, App);

    return App_possibleConstructorReturn(this, App_getPrototypeOf(App).call(this));
  }

  App_createClass(App, [{
    key: "onSelectTab",
    value: function onSelectTab(index) {
      this.props.dispatch(actions_settings.switchTab(index));
    }
  }, {
    key: "onSelectSubTab",
    value: function onSelectSubTab(index) {
      this.props.dispatch(actions_settings.switchMappingSubTab(index));
    }
  }, {
    key: "render",
    value: function render() {
      return external_window_dnn_nodeModules_React_default.a.createElement("div", {
        id: "AzureADAppContainer"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["PersonaBarPage"], {
        isOpen: "true"
      }, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["PersonaBarPageHeader"], {
        title: "Azure Active Directory",
        titleCharLimit: 30
      }), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["PersonaBarPageBody"], null, external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["DnnTabs"], {
        onSelect: this.onSelectTab.bind(this),
        selectedIndex: this.props.selectedTab,
        tabHeaders: [resources.get("GeneralSettings"), resources.get("AdvancedSettings"), resources.get("Mappings")]
      }, external_window_dnn_nodeModules_React_default.a.createElement(general, null), external_window_dnn_nodeModules_React_default.a.createElement(sync, null), external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_CommonComponents_["DnnTabs"], {
        onSelect: this.onSelectSubTab.bind(this),
        selectedIndex: this.props.selectedMappingSubTab,
        tabHeaders: [resources.get("TabUserMappings"), resources.get("TabUserProfileMappings"), resources.get("TabRoleMappings")],
        type: "secondary"
      }, external_window_dnn_nodeModules_React_default.a.createElement(userMappings, null), external_window_dnn_nodeModules_React_default.a.createElement(profileMappings, null), external_window_dnn_nodeModules_React_default.a.createElement(roleMappings, null)), ";"))));
    }
  }]);

  return App;
}(external_window_dnn_nodeModules_React_["Component"]);

App_App.propTypes = {
  dispatch: prop_types_default.a.func.isRequired,
  selectedTab: prop_types_default.a.number,
  selectedMappingSubTab: prop_types_default.a.number
};

function App_mapStateToProps(state) {
  return {
    selectedTab: state.settings.selectedTab,
    selectedMappingSubTab: state.settings.selectedMappingSubTab
  };
}

/* harmony default export */ var components_App = (Object(external_window_dnn_nodeModules_ReactRedux_["connect"])(App_mapStateToProps)(App_App));
// EXTERNAL MODULE: ./src/containers/DevTools.js
var DevTools = __webpack_require__(9);

// CONCATENATED MODULE: ./src/containers/Root.dev.js
function Root_dev_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Root_dev_typeof = function _typeof(obj) { return typeof obj; }; } else { Root_dev_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Root_dev_typeof(obj); }

function Root_dev_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Root_dev_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Root_dev_createClass(Constructor, protoProps, staticProps) { if (protoProps) Root_dev_defineProperties(Constructor.prototype, protoProps); if (staticProps) Root_dev_defineProperties(Constructor, staticProps); return Constructor; }

function Root_dev_possibleConstructorReturn(self, call) { if (call && (Root_dev_typeof(call) === "object" || typeof call === "function")) { return call; } return Root_dev_assertThisInitialized(self); }

function Root_dev_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Root_dev_getPrototypeOf(o) { Root_dev_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Root_dev_getPrototypeOf(o); }

function Root_dev_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Root_dev_setPrototypeOf(subClass, superClass); }

function Root_dev_setPrototypeOf(o, p) { Root_dev_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Root_dev_setPrototypeOf(o, p); }





var Root_dev_Root =
/*#__PURE__*/
function (_Component) {
  Root_dev_inherits(Root, _Component);

  function Root() {
    Root_dev_classCallCheck(this, Root);

    return Root_dev_possibleConstructorReturn(this, Root_dev_getPrototypeOf(Root).apply(this, arguments));
  }

  Root_dev_createClass(Root, [{
    key: "render",
    value: function render() {
      return external_window_dnn_nodeModules_React_default.a.createElement("div", null, external_window_dnn_nodeModules_React_default.a.createElement(components_App, null), external_window_dnn_nodeModules_React_default.a.createElement(DevTools["a" /* default */], null));
    }
  }]);

  return Root;
}(external_window_dnn_nodeModules_React_["Component"]);

/* harmony default export */ var Root_dev = __webpack_exports__["default"] = (Root_dev_Root);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "window.dnn.nodeModules.React"
var external_window_dnn_nodeModules_React_ = __webpack_require__(0);
var external_window_dnn_nodeModules_React_default = /*#__PURE__*/__webpack_require__.n(external_window_dnn_nodeModules_React_);

// EXTERNAL MODULE: external "window.dnn.nodeModules.ReactDOM"
var external_window_dnn_nodeModules_ReactDOM_ = __webpack_require__(12);

// EXTERNAL MODULE: external "window.dnn.nodeModules.ReactRedux"
var external_window_dnn_nodeModules_ReactRedux_ = __webpack_require__(5);

// EXTERNAL MODULE: external "window.dnn.nodeModules.Redux"
var external_window_dnn_nodeModules_Redux_ = __webpack_require__(8);

// EXTERNAL MODULE: external "window.dnn.nodeModules.ReduxThunk"
var external_window_dnn_nodeModules_ReduxThunk_ = __webpack_require__(13);
var external_window_dnn_nodeModules_ReduxThunk_default = /*#__PURE__*/__webpack_require__.n(external_window_dnn_nodeModules_ReduxThunk_);

// EXTERNAL MODULE: external "window.dnn.nodeModules.ReduxImmutableStateInvariant"
var external_window_dnn_nodeModules_ReduxImmutableStateInvariant_ = __webpack_require__(14);
var external_window_dnn_nodeModules_ReduxImmutableStateInvariant_default = /*#__PURE__*/__webpack_require__.n(external_window_dnn_nodeModules_ReduxImmutableStateInvariant_);

// EXTERNAL MODULE: ./src/constants/actionTypes/index.js + 1 modules
var actionTypes = __webpack_require__(4);

// CONCATENATED MODULE: ./src/reducers/settingsReducer.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function settings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    selectedTab: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["a" /* settings */].RETRIEVED_SETTINGS:
      return _objectSpread({}, state, {
        enabled: action.data.enabled,
        useGlobalSettings: action.data.useGlobalSettings,
        autoRedirect: action.data.autoRedirect,
        autoAuthorize: action.data.autoAuthorize,
        apiKey: action.data.apiKey,
        apiSecret: action.data.apiSecret,
        redirectUri: action.data.redirectUri,
        onErrorUri: action.data.onErrorUri,
        tenantId: action.data.tenantId,
        aadAppClientId: action.data.aadAppClientId,
        aadAppSecret: action.data.aadAppSecret,
        jwtAudiences: action.data.jwtAudiences,
        roleSyncEnabled: action.data.roleSyncEnabled,
        profileSyncEnabled: action.data.profileSyncEnabled,
        jwtAuthEnabled: action.data.jwtAuthEnabled,
        apiResource: action.data.apiResource,
        scopes: action.data.scopes,
        clientModified: action.data.clientModified,
        usernamePrefixEnabled: action.data.usernamePrefixEnabled,
        groupNamePrefixEnabled: action.data.groupNamePrefixEnabled
      });

    case actionTypes["a" /* settings */].SETTINGS_CLIENT_MODIFIED:
      return _objectSpread({}, state, {
        enabled: action.data.enabled,
        useGlobalSettings: action.data.useGlobalSettings,
        autoRedirect: action.data.autoRedirect,
        autoAuthorize: action.data.autoAuthorize,
        apiKey: action.data.apiKey,
        apiSecret: action.data.apiSecret,
        redirectUri: action.data.redirectUri,
        onErrorUri: action.data.onErrorUri,
        tenantId: action.data.tenantId,
        aadAppClientId: action.data.aadAppClientId,
        aadAppSecret: action.data.aadAppSecret,
        jwtAudiences: action.data.jwtAudiences,
        roleSyncEnabled: action.data.roleSyncEnabled,
        profileSyncEnabled: action.data.profileSyncEnabled,
        jwtAuthEnabled: action.data.jwtAuthEnabled,
        apiResource: action.data.apiResource,
        scopes: action.data.scopes,
        clientModified: action.data.clientModified,
        usernamePrefixEnabled: action.data.usernamePrefixEnabled,
        groupNamePrefixEnabled: action.data.groupNamePrefixEnabled
      });

    case actionTypes["a" /* settings */].UPDATED_SETTINGS:
      return _objectSpread({}, state, {
        clientModified: action.data.clientModified
      });

    case actionTypes["a" /* settings */].RETRIEVED_PROFILESETTINGS:
      return _objectSpread({}, state, {
        profileMapping: action.data.profileMapping
      });

    case actionTypes["a" /* settings */].RETRIEVED_ROLEMAPPINGSETTINGS:
      return _objectSpread({}, state, {
        roleMapping: action.data.roleMapping
      });

    case actionTypes["a" /* settings */].RETRIEVED_AVAILABLEROLES:
      return _objectSpread({}, state, {
        roles: action.data.roles
      });

    case actionTypes["a" /* settings */].SWITCH_TAB:
      return _objectSpread({}, state, {
        selectedTab: action.payload
      });

    case actionTypes["a" /* settings */].SWITCH_MAPPING_SUBTAB:
      return _objectSpread({}, state, {
        selectedSubTab: action.payload
      });

    case actionTypes["a" /* settings */].CANCELLED_PROFILEMAPPING_CLIENT_MODIFIED:
      return _objectSpread({}, state, {
        profileMappingClientModified: action.data.profileMappingClientModified
      });

    case actionTypes["a" /* settings */].PROFILEMAPPINGS_CLIENT_MODIFIED:
      return _objectSpread({}, state, {
        profileMappingDetail: action.data.profileMappingDetail,
        profileMappingClientModified: action.data.profileMappingClientModified
      });

    case actionTypes["a" /* settings */].RETRIEVED_PROFILEPROPERTIES:
      return _objectSpread({}, state, {
        profileProperties: action.data.profileProperties
      });

    case actionTypes["a" /* settings */].ROLEMAPPINGS_CLIENT_MODIFIED:
      return _objectSpread({}, state, {
        roleProperties: action.data.roleProperties
      });

    case actionTypes["a" /* settings */].RETRIEVED_USERMAPPINGSETTINGS:
      return _objectSpread({}, state, {
        userMapping: action.data.userMapping
      });

    case actionTypes["a" /* settings */].USERMAPPINGS_CLIENT_MODIFIED:
      return _objectSpread({}, state, {
        userMappingDetail: action.data.userMappingDetail,
        userMappingClientModified: action.data.userMappingClientModified
      });

    default:
      return _objectSpread({}, state);
  }
}
// CONCATENATED MODULE: ./src/reducers/rootReducer.js


var rootReducer = Object(external_window_dnn_nodeModules_Redux_["combineReducers"])({
  settings: settings
});
/* harmony default export */ var reducers_rootReducer = (rootReducer);
// EXTERNAL MODULE: ./src/containers/DevTools.js
var DevTools = __webpack_require__(9);

// CONCATENATED MODULE: ./src/store/configureStore.js





function configureStore(initialState) {
  var store = Object(external_window_dnn_nodeModules_Redux_["createStore"])(reducers_rootReducer, initialState, Object(external_window_dnn_nodeModules_Redux_["compose"])(Object(external_window_dnn_nodeModules_Redux_["applyMiddleware"])(external_window_dnn_nodeModules_ReduxThunk_default.a, external_window_dnn_nodeModules_ReduxImmutableStateInvariant_default()()), // TODO: apply only for development          
  DevTools["a" /* default */].instrument()));
  return store;
}
// EXTERNAL MODULE: ./src/containers/Root.js
var Root = __webpack_require__(18);
var Root_default = /*#__PURE__*/__webpack_require__.n(Root);

// EXTERNAL MODULE: ./src/utils/index.jsx
var utils = __webpack_require__(3);

// CONCATENATED MODULE: ./src/globals/application.js

var boilerPlate = {
  init: function init() {
    // This setting is required and define the public path 
    // to allow the web application to download assets on demand 
    // eslint-disable-next-line no-undef
    // __webpack_public_path__ = options.publicPath;        
    var options = window.dnn.initAzureAD();
    utils["a" /* default */].init(options.utility);
    utils["a" /* default */].moduleName = options.moduleName;
  },
  dispatch: function dispatch() {
    throw new Error("dispatch method needs to be overwritten from the Redux store");
  }
};
/* harmony default export */ var application = (boilerPlate);
// CONCATENATED MODULE: ./src/main.jsx






var main_store = configureStore({
  enabled: false,
  instrumentationKey: ""
});
application.dispatch = main_store.dispatch;
application.init();
var appContainer = document.getElementById("azureAD-container");
var initCallback = appContainer.getAttribute("data-init-callback");
application.init(initCallback);
Object(external_window_dnn_nodeModules_ReactDOM_["render"])(external_window_dnn_nodeModules_React_default.a.createElement(external_window_dnn_nodeModules_ReactRedux_["Provider"], {
  store: main_store
}, external_window_dnn_nodeModules_React_default.a.createElement(Root_default.a, null)), appContainer);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle-en.js.map