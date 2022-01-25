(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("scrollSmooth", [], factory);
	else if(typeof exports === 'object')
		exports["scrollSmooth"] = factory();
	else
		root["scrollSmooth"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _tools = __webpack_require__(1);

exports.default = function (target) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$duration = _ref.duration,
      duration = _ref$duration === undefined ? 500 : _ref$duration,
      _ref$context = _ref.context,
      context = _ref$context === undefined ? window : _ref$context,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 0 : _ref$offset,
      _ref$ease = _ref.ease,
      ease = _ref$ease === undefined ? "easeInOutCubic" : _ref$ease,
      callback = _ref.callback;

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== "object") return;

  var start = context.scrollTop !== null && context.scrollTop !== undefined ? context.scrollTop : window.pageYOffset;
  var end = (0, _tools.calcEndPoint)(target, context, offset);
  var clock = performance.now();
  var rAF = window.requestAnimationFrame;

  var tick = function tick() {
    var elapsed = performance.now() - clock;
    var pos = (0, _tools.setPosition)(start, end, elapsed, duration, ease);
    if (context !== window) {
      context.scrollTop = pos;
    } else {
      window.scroll(0, pos);
    }

    if (elapsed > duration) {
      typeof callback === "function" && callback(target);
    } else {
      rAF(tick);
    }
  };

  tick();
};

module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var easeFunctions = exports.easeFunctions = {
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

var isNumeric = exports.isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var setPosition = exports.setPosition = function setPosition(begin, end, elapsed, duration) {
  var ease = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'easeInOutCubic';

  return elapsed > duration ? end : begin + (end - begin) * easeFunctions[ease](elapsed / duration);
};

var calcEndPoint = exports.calcEndPoint = function calcEndPoint(target) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isNumeric(target)) {
    return parseInt(target) + offset;
  }

  var y = context === window || context === document.documentElement ? window.pageYOffset : context.scrollTop - context.getBoundingClientRect().top;

  var distance = target.nodeName.toLowerCase() === 'html' ? -y : target.getBoundingClientRect().top + y;

  return distance + offset;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollSmooth = __webpack_require__(0);

var _scrollSmooth2 = _interopRequireDefault(_scrollSmooth);

var _tools = __webpack_require__(1);

var _anchorScroll = __webpack_require__(3);

var _anchorScroll2 = _interopRequireDefault(_anchorScroll);

var _observe = __webpack_require__(4);

var _observe2 = _interopRequireDefault(_observe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  to: _scrollSmooth2.default,
  calcEndPoint: _tools.calcEndPoint,
  anchorScroll: _anchorScroll2.default,
  observe: _observe2.default
};
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _scrollSmooth = __webpack_require__(0);

var _scrollSmooth2 = _interopRequireDefault(_scrollSmooth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$query = _ref.query,
      query = _ref$query === undefined ? '[href^="#"]:not([href="#"]' : _ref$query,
      _ref$match = _ref.match,
      match = _ref$match === undefined ? function (target) {
    return document.getElementById(target.hash.substring(1));
  } : _ref$match,
      _ref$hashChange = _ref.hashChange,
      hashChange = _ref$hashChange === undefined ? true : _ref$hashChange,
      scrollSmoothConfig = _ref.scrollSmoothConfig;

  var links = document.querySelectorAll(query);
  var handler = function handler(e) {
    e.preventDefault();
    var dest = match(e.target);

    if (!dest) return;

    if (hashChange) {
      history.replaceState(null, null, '#' + dest.id);
    }

    (0, _scrollSmooth2.default)(dest, _extends({}, scrollSmoothConfig));
  };

  Array.from(links).map(function (link) {
    link.addEventListener('click', handler, false);
  });
};

module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$activeClass = _ref.activeClass,
      activeClass = _ref$activeClass === undefined ? 'active' : _ref$activeClass,
      _ref$query = _ref.query,
      query = _ref$query === undefined ? '[href^="#"]:not([href="#"]):not([href="#0"])' : _ref$query,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? [0.25, 0.5, 0.75] : _ref$threshold,
      _ref$detectType = _ref.detectType,
      detectType = _ref$detectType === undefined ? 'max' : _ref$detectType;

  var options = { threshold: threshold };

  var removeClass = function removeClass(node) {
    return node.classList.remove(activeClass);
  };
  var addClass = function addClass(node) {
    return node.classList.add(activeClass);
  };

  var unsetAllActives = function unsetAllActives() {
    document.querySelectorAll('.' + activeClass).forEach(removeClass);
  };

  var setActive = function setActive(activeNode) {
    unsetAllActives();
    addClass(document.querySelector('a[href="#' + activeNode.id + '"]'));
  };

  var callback = function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio >= Math[detectType].apply(Math, _toConsumableArray(threshold))) {
        setActive(entry.target);
      }
    });
  };

  var links = document.querySelectorAll(query);
  var observer = new IntersectionObserver(callback, options);
  var observeTarget = function observeTarget(link) {
    var target = document.querySelector('#' + link.hash.slice(1));
    observer.observe(target);
  };

  links.forEach(observeTarget);
};

module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.umd.js.map