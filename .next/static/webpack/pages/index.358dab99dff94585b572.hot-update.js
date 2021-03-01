webpackHotUpdate_N_E("pages/index",{

/***/ "./challenges.json":
false,

/***/ "./src/contexts/ChallengeContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/ChallengeContext.tsx ***!
  \*******************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\jotap\\Desktop\\projeto\\nlw04\\MovWork-FrontEnd\\src\\contexts\\ChallengeContext.tsx",
    _s = $RefreshSig$();


var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      challengesCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: "Valendo ".concat(challenge.amount, "xp!")
      });
    }
  }, []);

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completChallenge() {
    if (!activeChallenge) {
      return;
    }

    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      challengesCompleted: challengesCompleted,
      experienceToNextLevel: experienceToNextLevel,
      levelUp: levelUp,
      completChallenge: completChallenge,
      startNewChallenge: startNewChallenge,
      resetChallenge: resetChallenge,
      activeChallenge: activeChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

_s(ChallengesProvider, "mXQLPpEuqfijIicM0DJuMSLmJHY=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsImxldmVsVXAiLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsInBlcm1pc3Npb24iLCJib2R5IiwiY2hhbGxlbmdlIiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0Q2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIiwic3RhcnROZXdDaGFsbGVuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQWdFO0FBQUE7O0FBQUEsTUFBbkNDLFFBQW1DLFFBQW5DQSxRQUFtQzs7QUFBQSxrQkFDekNDLHNEQUFRLENBQUMsQ0FBRCxDQURpQztBQUFBLE1BQzVEQyxLQUQ0RDtBQUFBLE1BQ3JEQyxRQURxRDs7QUFBQSxtQkFFakJGLHNEQUFRLENBQUMsQ0FBRCxDQUZTO0FBQUEsTUFFNURHLGlCQUY0RDtBQUFBLE1BRXpDQyxvQkFGeUM7O0FBQUEsbUJBR2JKLHNEQUFRLENBQUMsQ0FBRCxDQUhLO0FBQUEsTUFHNURLLG1CQUg0RDtBQUFBLE1BR3ZDQyxzQkFIdUM7O0FBQUEsbUJBS3JCTixzREFBUSxDQUFDLElBQUQsQ0FMYTtBQUFBLE1BSzVETyxlQUw0RDtBQUFBLE1BSzNDQyxrQkFMMkM7O0FBT25FLE1BQU1DLHFCQUFxQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDVixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCOztBQUVBLFdBQVNXLE9BQVQsR0FBbUI7QUFDakJWLFlBQVEsQ0FBQ0QsS0FBSyxHQUFDLENBQVAsQ0FBUjtBQUNEOztBQUVEWSx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0JBQVksQ0FBQ0MsaUJBQWI7O0FBRUEsUUFBR0QsWUFBWSxDQUFDRSxVQUFiLEtBQTRCLFNBQS9CLEVBQXlDO0FBQ3JDLFVBQUlGLFlBQUosQ0FBaUIsY0FBakIsRUFBaUM7QUFDN0JHLFlBQUksb0JBQWFDLFNBQVMsQ0FBQ0MsTUFBdkI7QUFEeUIsT0FBakM7QUFHSDtBQUNKLEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBVUEsV0FBU0MsY0FBVCxHQUF5QjtBQUNyQlosc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNIOztBQUVELFdBQVNhLGdCQUFULEdBQTJCO0FBQ3ZCLFFBQUcsQ0FBQ2QsZUFBSixFQUFvQjtBQUNoQjtBQUNIOztBQUhzQixRQUtoQlksTUFMZ0IsR0FLTlosZUFMTSxDQUtoQlksTUFMZ0I7QUFPdkIsUUFBSUcsZUFBZSxHQUFHbkIsaUJBQWlCLEdBQUdnQixNQUExQzs7QUFFQSxRQUFHRyxlQUFlLElBQUliLHFCQUF0QixFQUE0QztBQUN4Q2EscUJBQWUsR0FBR0EsZUFBZSxHQUFHYixxQkFBcEM7QUFDQUcsYUFBTztBQUNWOztBQUVEUix3QkFBb0IsQ0FBQ2tCLGVBQUQsQ0FBcEI7QUFDQWQsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRiwwQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUMsQ0FBckIsQ0FBdEI7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUE0QixTQUFLLEVBQUU7QUFBQ0osV0FBSyxFQUFMQSxLQUFEO0FBQVFFLHVCQUFpQixFQUFqQkEsaUJBQVI7QUFBMkJFLHlCQUFtQixFQUFuQkEsbUJBQTNCO0FBQWdESSwyQkFBcUIsRUFBckJBLHFCQUFoRDtBQUF1RUcsYUFBTyxFQUFQQSxPQUF2RTtBQUFnRlMsc0JBQWdCLEVBQWhCQSxnQkFBaEY7QUFBa0dFLHVCQUFpQixFQUFqQkEsaUJBQWxHO0FBQXFISCxvQkFBYyxFQUFkQSxjQUFySDtBQUFxSWIscUJBQWUsRUFBZkE7QUFBckksS0FBbkM7QUFBQSxjQUNLUjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQW5EZUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1OGRhYjk5ZGZmOTQ1ODViNTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xyXG5cclxuaW50ZXJmYWNlIGNoYWxsZW5nZXtcclxuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhe1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxuICAgIGFjdGl2ZUNoYWxsZW5nZTogY2hhbGxlbmdlOyBcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY29tcGxldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3Bze1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7Y2hpbGRyZW59OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpXHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgICAgc2V0TGV2ZWwobGV2ZWwrMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcblxyXG4gICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpe1xyXG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8nLCB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9eHAhYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wbGV0Q2hhbGxlbmdlKCl7XHJcbiAgICAgICAgaWYoIWFjdGl2ZUNoYWxsZW5nZSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHthbW91bnR9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcblxyXG4gICAgICAgIGlmKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpe1xyXG4gICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCsxKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWQsIGV4cGVyaWVuY2VUb05leHRMZXZlbCwgbGV2ZWxVcCwgY29tcGxldENoYWxsZW5nZSwgc3RhcnROZXdDaGFsbGVuZ2UsIHJlc2V0Q2hhbGxlbmdlLCBhY3RpdmVDaGFsbGVuZ2V9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==