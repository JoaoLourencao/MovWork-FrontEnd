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

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3');

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: "Valendo ".concat(challenge.amount, "xp!")
      });
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();
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
    lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInVzZUVmZmVjdCIsInJlcXVlc3RQZXJtaXNzaW9uIiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0Q2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBd0JPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsT0FBZ0U7QUFBQTs7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DOztBQUFBLGtCQUN6Q0Msc0RBQVEsQ0FBQyxDQUFELENBRGlDO0FBQUEsTUFDNURDLEtBRDREO0FBQUEsTUFDckRDLFFBRHFEOztBQUFBLG1CQUVqQkYsc0RBQVEsQ0FBQyxDQUFELENBRlM7QUFBQSxNQUU1REcsaUJBRjREO0FBQUEsTUFFekNDLG9CQUZ5Qzs7QUFBQSxtQkFHYkosc0RBQVEsQ0FBQyxDQUFELENBSEs7QUFBQSxNQUc1REssbUJBSDREO0FBQUEsTUFHdkNDLHNCQUh1Qzs7QUFBQSxtQkFLckJOLHNEQUFRLENBQUMsSUFBRCxDQUxhO0FBQUEsTUFLNURPLGVBTDREO0FBQUEsTUFLM0NDLGtCQUwyQzs7QUFPbkUsTUFBTUMscUJBQXFCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUNWLEtBQUssR0FBRyxDQUFULElBQWMsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBOUI7O0FBRUEsV0FBU1csT0FBVCxHQUFtQjtBQUNqQlYsWUFBUSxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxDQUFSO0FBQ0Q7O0FBRUQsV0FBU1ksaUJBQVQsR0FBNEI7QUFDeEIsUUFBTUMsb0JBQW9CLEdBQUdKLElBQUksQ0FBQ0ssS0FBTCxDQUFXTCxJQUFJLENBQUNNLE1BQUwsS0FBZ0JDLDZDQUFVLENBQUNDLE1BQXRDLENBQTdCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRiw2Q0FBVSxDQUFDSCxvQkFBRCxDQUE1QjtBQUVBTixzQkFBa0IsQ0FBQ1csU0FBRCxDQUFsQjtBQUVBLFFBQUlDLEtBQUosQ0FBVSxtQkFBVjs7QUFFQSxRQUFHQyxZQUFZLENBQUNDLFVBQWIsS0FBNEIsU0FBL0IsRUFBeUM7QUFDckMsVUFBSUQsWUFBSixDQUFpQixjQUFqQixFQUFpQztBQUM3QkUsWUFBSSxvQkFBYUosU0FBUyxDQUFDSyxNQUF2QjtBQUR5QixPQUFqQztBQUdIO0FBQ0o7O0FBRURDLHlEQUFTLENBQUMsWUFBTTtBQUNaSixnQkFBWSxDQUFDSyxpQkFBYjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsY0FBVCxHQUF5QjtBQUNyQm5CLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDSDs7QUFFRCxXQUFTb0IsZ0JBQVQsR0FBMkI7QUFDdkIsUUFBRyxDQUFDckIsZUFBSixFQUFvQjtBQUNoQjtBQUNIOztBQUhzQixRQUtoQmlCLE1BTGdCLEdBS05qQixlQUxNLENBS2hCaUIsTUFMZ0I7QUFPdkIsUUFBSUssZUFBZSxHQUFHMUIsaUJBQWlCLEdBQUdxQixNQUExQzs7QUFFQSxRQUFHSyxlQUFlLElBQUlwQixxQkFBdEIsRUFBNEM7QUFDeENvQixxQkFBZSxHQUFHQSxlQUFlLEdBQUdwQixxQkFBcEM7QUFDQUcsYUFBTztBQUNWOztBQUVEUix3QkFBb0IsQ0FBQ3lCLGVBQUQsQ0FBcEI7QUFDQXJCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUYsMEJBQXNCLENBQUNELG1CQUFtQixHQUFDLENBQXJCLENBQXRCO0FBQ0g7O0FBRUQsc0JBQ0kscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsU0FBSyxFQUFFO0FBQUNKLFdBQUssRUFBTEEsS0FBRDtBQUFRRSx1QkFBaUIsRUFBakJBLGlCQUFSO0FBQTJCRSx5QkFBbUIsRUFBbkJBLG1CQUEzQjtBQUFnREksMkJBQXFCLEVBQXJCQSxxQkFBaEQ7QUFBdUVHLGFBQU8sRUFBUEEsT0FBdkU7QUFBZ0ZnQixzQkFBZ0IsRUFBaEJBLGdCQUFoRjtBQUFrR2YsdUJBQWlCLEVBQWpCQSxpQkFBbEc7QUFBcUhjLG9CQUFjLEVBQWRBLGNBQXJIO0FBQXFJcEIscUJBQWUsRUFBZkE7QUFBckksS0FBbkM7QUFBQSxjQUNLUjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQTVEZUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEyMjI2MzIzNDUzN2U4NTMyNDgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xyXG5cclxuaW50ZXJmYWNlIGNoYWxsZW5nZXtcclxuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhe1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxuICAgIGFjdGl2ZUNoYWxsZW5nZTogY2hhbGxlbmdlOyBcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY29tcGxldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3Bze1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7Y2hpbGRyZW59OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpXHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgICAgc2V0TGV2ZWwobGV2ZWwrMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcblxyXG4gICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKTtcclxuXHJcbiAgICAgICAgaWYoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJyl7XHJcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05vdm8gZGVzYWZpbycsIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCl7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRDaGFsbGVuZ2UoKXtcclxuICAgICAgICBpZighYWN0aXZlQ2hhbGxlbmdlKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qge2Ftb3VudH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgICAgICAgbGV2ZWxVcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICAgICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkKzEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZCwgZXhwZXJpZW5jZVRvTmV4dExldmVsLCBsZXZlbFVwLCBjb21wbGV0Q2hhbGxlbmdlLCBzdGFydE5ld0NoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2UsIGFjdGl2ZUNoYWxsZW5nZX19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9