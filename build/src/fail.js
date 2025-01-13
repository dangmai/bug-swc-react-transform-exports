"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
Object.defineProperty(exports, "A", {
    enumerable: true,
    get: function get() {
        return A;
    },
    set: function set(v) {
        A = v;
    },
    configurable: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
        return _default;
    },
    set: function set(v) {
        _default = v;
    },
    configurable: true
});
var A = function() {
    return /*#__PURE__*/ _react.default.createElement("div", null, "real a");
};
var B = function() {
    return /*#__PURE__*/ _react.default.createElement(A, null);
};
var _default = B;
