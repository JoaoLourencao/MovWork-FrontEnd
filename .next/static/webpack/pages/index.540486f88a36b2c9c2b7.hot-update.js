webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengeContext */ "./src/contexts/ChallengeContext.tsx");


var _jsxFileName = "C:\\Users\\jotap\\Desktop\\projeto\\nlw04\\MovWork-FrontEnd\\src\\contexts\\CountdownContext.tsx",
    _s = $RefreshSig$();



var countdownTimeout;
var CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function CountdownProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      startNewChallenge = _useContext.startNewChallenge;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.05 * 60),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1];

  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes: minutes,
      seconds: seconds,
      hasFinished: hasFinished,
      isActive: isActive,
      startCountdown: startCountdown,
      resetCountdown: resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, this);
}

_s(CountdownProvider, "12y2hdgftYDMRrFBdoqHz5/jB4s=");

_c = CountdownProvider;

var _c;

$RefreshReg$(_c, "CountdownProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvdW50ZG93blByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzZXRIYXNGaW5pc2hlZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdBLElBQUlBLGdCQUFKO0FBT08sSUFBTUMsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdEM7QUFFQSxTQUFTQyxpQkFBVCxPQUFzQztBQUFBOztBQUFBLE1BQVZDLFFBQVUsUUFBVkEsUUFBVTs7QUFBQSxvQkFDWEMsd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FEQztBQUFBLE1BQ2pDQyxpQkFEaUMsZUFDakNBLGlCQURpQzs7QUFBQSxrQkFHakJDLHNEQUFRLENBQUMsT0FBTyxFQUFSLENBSFM7QUFBQSxNQUdsQ0MsSUFIa0M7QUFBQSxNQUc1QkMsT0FINEI7O0FBQUEsbUJBSVRGLHNEQUFRLENBQUMsS0FBRCxDQUpDO0FBQUEsTUFJbENHLFFBSmtDO0FBQUEsTUFJeEJDLFdBSndCOztBQUFBLG1CQUtISixzREFBUSxDQUFDLEtBQUQsQ0FMTDtBQUFBLE1BS2xDSyxXQUxrQztBQUFBLE1BS3JCQyxjQUxxQjs7QUFPekMsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsTUFBTVMsT0FBTyxHQUFHVCxJQUFJLEdBQUcsRUFBdkI7O0FBRUEsV0FBU1UsY0FBVCxHQUEwQjtBQUN0QlAsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNIOztBQUVELFdBQVNRLGNBQVQsR0FBMEI7QUFDdEJDLGdCQUFZLENBQUNyQixnQkFBRCxDQUFaO0FBQ0FZLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsV0FBTyxDQUFDLE9BQU8sRUFBUixDQUFQO0FBQ0FJLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0g7O0FBRURRLHlEQUFTLENBQUMsWUFBSTtBQUNWLFFBQUdYLFFBQVEsSUFBSUYsSUFBSSxHQUFHLENBQXRCLEVBQXdCO0FBQ3BCVCxzQkFBZ0IsR0FBR3VCLFVBQVUsQ0FBQyxZQUFNO0FBQ2hDYixlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDSCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdILEtBSkQsTUFJTSxJQUFHRSxRQUFRLElBQUlGLElBQUksSUFBSSxDQUF2QixFQUF5QjtBQUMzQkssb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUYsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUwsdUJBQWlCO0FBQ3BCO0FBQ0osR0FWUSxFQVVOLENBQUNJLFFBQUQsRUFBV0YsSUFBWCxDQVZNLENBQVQ7QUFhQSxzQkFDSSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUU7QUFBQ00sYUFBTyxFQUFQQSxPQUFEO0FBQVVHLGFBQU8sRUFBUEEsT0FBVjtBQUFtQkwsaUJBQVcsRUFBWEEsV0FBbkI7QUFBZ0NGLGNBQVEsRUFBUkEsUUFBaEM7QUFBMENRLG9CQUFjLEVBQWRBLGNBQTFDO0FBQTBEQyxvQkFBYyxFQUFkQTtBQUExRCxLQUFsQztBQUFBLGNBQ0toQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQXZDZUQsaUI7O0tBQUFBLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0MDQ4NmY4OGEzNmIyYzljMmI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZHJlbiwgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4vQ2hhbGxlbmdlQ29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhe1xyXG4gICAgbWludXRlczogbnVtYmVyO1xyXG4gICAgc2Vjb25kczogbnVtYmVyO1xyXG4gICAgaGFzRmluaXNoZWQ6IGJvb2xlYW47XHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhblxyXG4gICAgc3RhcnRDb3VudGRvd246ICgpPT52b2lkO1xyXG4gICAgcmVzZXRDb3VudGRvd246ICgpPT52b2lkO1xyXG59XHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93blByb3ZpZGVyUHJvcHN7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRkb3duQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ291bnRkb3duQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93blByb3ZpZGVyKHtjaGlsZHJlbn0pe1xyXG4gICAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcclxuICAgIFxyXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4wNSAqIDYwKTtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpO1xyXG4gICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICBzZXRUaW1lKDAuMDUgKiA2MCk7XHJcbiAgICAgICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGlzQWN0aXZlICYmIHRpbWUgPiAwKXtcclxuICAgICAgICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZSh0aW1lIC0gMSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1lbHNlIGlmKGlzQWN0aXZlICYmIHRpbWUgPT0gMCl7XHJcbiAgICAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q291bnRkb3duQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e21pbnV0ZXMsIHNlY29uZHMsIGhhc0ZpbmlzaGVkLCBpc0FjdGl2ZSwgc3RhcnRDb3VudGRvd24sIHJlc2V0Q291bnRkb3dufX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvdW50ZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==