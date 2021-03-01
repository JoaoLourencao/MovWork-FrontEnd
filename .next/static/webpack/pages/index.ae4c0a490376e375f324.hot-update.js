webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);


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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: "Valendo ".concat(challenge.amount)
      });
    }
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

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

  function startNewChallenge() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
    setActiveChallenge(challenge);
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
    lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwicGVybWlzc2lvbiIsImJvZHkiLCJjaGFsbGVuZ2UiLCJhbW91bnQiLCJsZXZlbFVwIiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0Q2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQXdCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQWdFO0FBQUE7O0FBQUEsTUFBbkNDLFFBQW1DLFFBQW5DQSxRQUFtQzs7QUFBQSxrQkFDekNDLHNEQUFRLENBQUMsQ0FBRCxDQURpQztBQUFBLE1BQzVEQyxLQUQ0RDtBQUFBLE1BQ3JEQyxRQURxRDs7QUFBQSxtQkFFakJGLHNEQUFRLENBQUMsQ0FBRCxDQUZTO0FBQUEsTUFFNURHLGlCQUY0RDtBQUFBLE1BRXpDQyxvQkFGeUM7O0FBQUEsbUJBR2JKLHNEQUFRLENBQUMsQ0FBRCxDQUhLO0FBQUEsTUFHNURLLG1CQUg0RDtBQUFBLE1BR3ZDQyxzQkFIdUM7O0FBQUEsbUJBS3JCTixzREFBUSxDQUFDLElBQUQsQ0FMYTtBQUFBLE1BSzVETyxlQUw0RDtBQUFBLE1BSzNDQyxrQkFMMkM7O0FBT25FLE1BQU1DLHFCQUFxQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDVixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCO0FBRUFXLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnQkFBWSxDQUFDQyxpQkFBYjs7QUFFQSxRQUFHRCxZQUFZLENBQUNFLFVBQWIsS0FBNEIsU0FBL0IsRUFBeUM7QUFDckMsVUFBSUYsWUFBSixDQUFpQixjQUFqQixFQUFpQztBQUM3QkcsWUFBSSxvQkFBYUMsU0FBUyxDQUFDQyxNQUF2QjtBQUR5QixPQUFqQztBQUdIO0FBQ0osR0FSUSxFQVFOLEVBUk0sQ0FBVDs7QUFVQSxXQUFTQyxPQUFULEdBQW1CO0FBQ2pCakIsWUFBUSxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxDQUFSO0FBQ0Q7O0FBRUQsV0FBU21CLGNBQVQsR0FBeUI7QUFDckJaLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDSDs7QUFFRCxXQUFTYSxnQkFBVCxHQUEyQjtBQUN2QixRQUFHLENBQUNkLGVBQUosRUFBb0I7QUFDaEI7QUFDSDs7QUFIc0IsUUFLaEJXLE1BTGdCLEdBS05YLGVBTE0sQ0FLaEJXLE1BTGdCO0FBT3ZCLFFBQUlJLGVBQWUsR0FBR25CLGlCQUFpQixHQUFHZSxNQUExQzs7QUFFQSxRQUFHSSxlQUFlLElBQUliLHFCQUF0QixFQUE0QztBQUN4Q2EscUJBQWUsR0FBR0EsZUFBZSxHQUFHYixxQkFBcEM7QUFDQVUsYUFBTztBQUNWOztBQUVEZix3QkFBb0IsQ0FBQ2tCLGVBQUQsQ0FBcEI7QUFDQWQsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRiwwQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUMsQ0FBckIsQ0FBdEI7QUFDSDs7QUFFRCxXQUFTa0IsaUJBQVQsR0FBNEI7QUFDeEIsUUFBTUMsb0JBQW9CLEdBQUdkLElBQUksQ0FBQ2UsS0FBTCxDQUFXZixJQUFJLENBQUNnQixNQUFMLEtBQWdCQyw2Q0FBVSxDQUFDQyxNQUF0QyxDQUE3QjtBQUNBLFFBQU1YLFNBQVMsR0FBR1UsNkNBQVUsQ0FBQ0gsb0JBQUQsQ0FBNUI7QUFFQWhCLHNCQUFrQixDQUFDUyxTQUFELENBQWxCO0FBQ0g7O0FBRUQsc0JBQ0kscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsU0FBSyxFQUFFO0FBQUNoQixXQUFLLEVBQUxBLEtBQUQ7QUFBUUUsdUJBQWlCLEVBQWpCQSxpQkFBUjtBQUEyQkUseUJBQW1CLEVBQW5CQSxtQkFBM0I7QUFBZ0RJLDJCQUFxQixFQUFyQkEscUJBQWhEO0FBQXVFVSxhQUFPLEVBQVBBLE9BQXZFO0FBQWdGRSxzQkFBZ0IsRUFBaEJBLGdCQUFoRjtBQUFrR0UsdUJBQWlCLEVBQWpCQSxpQkFBbEc7QUFBcUhILG9CQUFjLEVBQWRBLGNBQXJIO0FBQXFJYixxQkFBZSxFQUFmQTtBQUFySSxLQUFuQztBQUFBLGNBQ0tSO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0dBMURlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWU0YzBhNDkwMzc2ZTM3NWYzMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tIFwiLi4vLi4vY2hhbGxlbmdlcy5qc29uXCI7XHJcblxyXG5pbnRlcmZhY2UgY2hhbGxlbmdle1xyXG4gICAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGF7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBjaGFsbGVuZ2U7IFxyXG4gICAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICBjb21wbGV0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHN7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHtjaGlsZHJlbn06IENoYWxsZW5nZXNQcm92aWRlclByb3BzKXtcclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG5cclxuICAgICAgICBpZihOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKXtcclxuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvJywge1xyXG4gICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgICAgc2V0TGV2ZWwobGV2ZWwrMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKXtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGxldENoYWxsZW5nZSgpe1xyXG4gICAgICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7YW1vdW50fSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuXHJcbiAgICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG5cclxuICAgICAgICBpZihmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKXtcclxuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG4gICAgICAgICAgICBsZXZlbFVwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQrMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSlcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWQsIGV4cGVyaWVuY2VUb05leHRMZXZlbCwgbGV2ZWxVcCwgY29tcGxldENoYWxsZW5nZSwgc3RhcnROZXdDaGFsbGVuZ2UsIHJlc2V0Q2hhbGxlbmdlLCBhY3RpdmVDaGFsbGVuZ2V9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==