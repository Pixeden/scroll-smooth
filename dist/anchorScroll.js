'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _scrollSmooth = require('./scrollSmooth');

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