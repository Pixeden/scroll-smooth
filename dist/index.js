'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollSmooth = require('./scrollSmooth');

var _scrollSmooth2 = _interopRequireDefault(_scrollSmooth);

var _tools = require('./tools');

var _anchorScroll = require('./anchorScroll');

var _anchorScroll2 = _interopRequireDefault(_anchorScroll);

var _observe = require('./observe');

var _observe2 = _interopRequireDefault(_observe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  to: _scrollSmooth2.default,
  calcEndPoint: _tools.calcEndPoint,
  anchorScroll: _anchorScroll2.default,
  observe: _observe2.default
};
module.exports = exports['default'];