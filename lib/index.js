"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var imports = _ref.imports;
  return function (Component) {
    var ret = Component;
    for (var i = imports.length - 1; i >= 0; --i) {
      ret = imports[i](ret);
    }
    return ret;
  };
};

module.exports = exports['default'];