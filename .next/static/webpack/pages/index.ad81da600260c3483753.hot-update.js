webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ChallangeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallangeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContext */ "./src/contexts/ChallengeContext.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\jotap\\Desktop\\projeto\\nlw04\\MovWork-FrontEnd\\src\\components\\ChallangeBox.tsx",
    _s = $RefreshSig$();





function ChallengeBox() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      activeChallenge = _useContext.activeChallenge,
      resetChallenge = _useContext.resetChallenge,
      completChallenge = _useContext.completChallenge;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]),
      resetCountdown = _useContext2.resetCountdown;

  function handleChallangeSuceeded() {
    completChallenge();
    resetCountdown();
  }

  function handleChallangeFailed() {
    resetChallenge();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/".concat(activeChallenge.type, ".svg"),
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeFailedButton,
          onClick: resetChallenge,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeSuceededButton,
          onClick: completChallenge,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeNotActive,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Finalize um ciclo para receber um desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "icons/level-up.svg",
            alt: "Level up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 29
          }, this), "Avance de level completando desafios."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, this)
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_s(ChallengeBox, "w8yDK150NWPBJ7CqyXq/OSG3Lqo=");

_c = ChallengeBox;

var _c;

$RefreshReg$(_c, "ChallengeBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxhbmdlQm94LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VCb3giLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRDaGFsbGVuZ2UiLCJDb3VudGRvd25Db250ZXh0IiwicmVzZXRDb3VudGRvd24iLCJoYW5kbGVDaGFsbGFuZ2VTdWNlZWRlZCIsImhhbmRsZUNoYWxsYW5nZUZhaWxlZCIsInN0eWxlcyIsImNoYWxsZW5nZUJveENvbnRhaW5lciIsImNoYWxsZW5nZUFjdGl2ZSIsImFtb3VudCIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImNoYWxsZW5nZUZhaWxlZEJ1dHRvbiIsImNoYWxsZW5nZVN1Y2VlZGVkQnV0dG9uIiwiY2hhbGxlbmdlTm90QWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsWUFBVCxHQUF5QjtBQUFBOztBQUFBLG9CQUVrQ0Msd0RBQVUsQ0FBQ0MsNEVBQUQsQ0FGNUM7QUFBQSxNQUVwQkMsZUFGb0IsZUFFcEJBLGVBRm9CO0FBQUEsTUFFSEMsY0FGRyxlQUVIQSxjQUZHO0FBQUEsTUFFYUMsZ0JBRmIsZUFFYUEsZ0JBRmI7O0FBQUEscUJBR0RKLHdEQUFVLENBQUNLLDJFQUFELENBSFQ7QUFBQSxNQUdwQkMsY0FIb0IsZ0JBR3BCQSxjQUhvQjs7QUFLNUIsV0FBU0MsdUJBQVQsR0FBa0M7QUFDOUJILG9CQUFnQjtBQUNoQkUsa0JBQWM7QUFDakI7O0FBRUQsV0FBU0UscUJBQVQsR0FBZ0M7QUFDNUJMLGtCQUFjO0FBRWpCOztBQUNELHNCQUNJO0FBQUssYUFBUyxFQUFFTSxpRkFBTSxDQUFDQyxxQkFBdkI7QUFBQSxjQUNLUixlQUFlLGdCQUNaO0FBQUssZUFBUyxFQUFFTyxpRkFBTSxDQUFDRSxlQUF2QjtBQUFBLDhCQUNJO0FBQUEsNkJBQWVULGVBQWUsQ0FBQ1UsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFHSTtBQUFBLGdDQUNJO0FBQUssYUFBRyxrQkFBV1YsZUFBZSxDQUFDVyxJQUEzQixTQUFSO0FBQStDLGFBQUcsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFBLG9CQUFJWCxlQUFlLENBQUNZO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFTSTtBQUFBLGdDQUNJO0FBQ0ksY0FBSSxFQUFDLFFBRFQ7QUFFSSxtQkFBUyxFQUFFTCxpRkFBTSxDQUFDTSxxQkFGdEI7QUFHSSxpQkFBTyxFQUFFWixjQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBUUk7QUFDSSxjQUFJLEVBQUMsUUFEVDtBQUVJLG1CQUFTLEVBQUVNLGlGQUFNLENBQUNPLHVCQUZ0QjtBQUdJLGlCQUFPLEVBQUVaLGdCQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURZLGdCQTRCWjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUssaUZBQU0sQ0FBQ1Esa0JBQXZCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLGtDQUNJO0FBQUssZUFBRyxFQUFDLG9CQUFUO0FBQThCLGVBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQTdCUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQ0g7O0dBekRlbEIsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZDgxZGE2MDAyNjBjMzQ4Mzc1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0XCI7XHJcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZUJveCAoKSB7XHJcblxyXG4gICAgY29uc3QgeyBhY3RpdmVDaGFsbGVuZ2UsIHJlc2V0Q2hhbGxlbmdlLCBjb21wbGV0Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxyXG4gICAgY29uc3QgeyByZXNldENvdW50ZG93biB9ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsYW5nZVN1Y2VlZGVkKCl7XHJcbiAgICAgICAgY29tcGxldENoYWxsZW5nZSgpO1xyXG4gICAgICAgIHJlc2V0Q291bnRkb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbGxhbmdlRmFpbGVkKCl7XHJcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHthY3RpdmVDaGFsbGVuZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5HYW5oZSB7YWN0aXZlQ2hhbGxlbmdlLmFtb3VudH0geHA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5vdm8gZGVzYWZpbzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YWN0aXZlQ2hhbGxlbmdlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlRmFpbGVkQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRDaGFsbGVuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhbGhlaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VTdWNlZWRlZEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbXBsZXRDaGFsbGVuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZU5vdEFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmluYWxpemUgdW0gY2ljbG8gcGFyYSByZWNlYmVyIHVtIGRlc2FmaW88L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsLXVwLnN2Z1wiIGFsdD1cIkxldmVsIHVwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXZhbmNlIGRlIGxldmVsIGNvbXBsZXRhbmRvIGRlc2FmaW9zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==