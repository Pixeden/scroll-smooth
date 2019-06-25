'use strict';

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