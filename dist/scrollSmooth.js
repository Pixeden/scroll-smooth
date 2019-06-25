'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _tools = require('./tools');

exports.default = function (target) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$duration = _ref.duration,
      duration = _ref$duration === undefined ? 500 : _ref$duration,
      _ref$context = _ref.context,
      context = _ref$context === undefined ? window : _ref$context,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 0 : _ref$offset,
      _ref$ease = _ref.ease,
      ease = _ref$ease === undefined ? 'easeInOutCubic' : _ref$ease,
      callback = _ref.callback;

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object') return;

  var start = context.scrollTop || window.pageYOffset;
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
      typeof callback === 'function' && callback(target);
    } else {
      rAF(tick);
    }
  };

  tick();
};

module.exports = exports['default'];