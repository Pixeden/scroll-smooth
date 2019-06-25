'use strict';

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