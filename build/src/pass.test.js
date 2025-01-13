"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _react1 = require("@testing-library/react");
var _pass = /*#__PURE__*/ _interop_require_default(require("./pass"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
it("should work", function() {
    var renderSpy = jest.fn(function() {
        return /*#__PURE__*/ _react.default.createElement("div", null, "mock a");
    });
    jest.spyOn(require("./pass"), "A").mockImplementation(renderSpy);
    var b = (0, _react1.render)(/*#__PURE__*/ _react.default.createElement(_pass.default, null));
    b.debug();
    expect(renderSpy).toHaveBeenCalled();
});
