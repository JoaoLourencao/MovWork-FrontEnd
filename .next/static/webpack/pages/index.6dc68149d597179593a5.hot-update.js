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

  function handleChallangeSuceeded() {}

  function handleChallangeFailed() {}

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/".concat(activeChallenge.type, ".svg"),
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeFailedButton,
          onClick: resetChallenge,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeSuceededButton,
          onClick: completChallenge,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeNotActive,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Finalize um ciclo para receber um desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "icons/level-up.svg",
            alt: "Level up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 29
          }, this), "Avance de level completando desafios."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, this)
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxhbmdlQm94LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VCb3giLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRDaGFsbGVuZ2UiLCJDb3VudGRvd25Db250ZXh0IiwicmVzZXRDb3VudGRvd24iLCJoYW5kbGVDaGFsbGFuZ2VTdWNlZWRlZCIsImhhbmRsZUNoYWxsYW5nZUZhaWxlZCIsInN0eWxlcyIsImNoYWxsZW5nZUJveENvbnRhaW5lciIsImNoYWxsZW5nZUFjdGl2ZSIsImFtb3VudCIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImNoYWxsZW5nZUZhaWxlZEJ1dHRvbiIsImNoYWxsZW5nZVN1Y2VlZGVkQnV0dG9uIiwiY2hhbGxlbmdlTm90QWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsWUFBVCxHQUF5QjtBQUFBOztBQUFBLG9CQUVrQ0Msd0RBQVUsQ0FBQ0MsNEVBQUQsQ0FGNUM7QUFBQSxNQUVwQkMsZUFGb0IsZUFFcEJBLGVBRm9CO0FBQUEsTUFFSEMsY0FGRyxlQUVIQSxjQUZHO0FBQUEsTUFFYUMsZ0JBRmIsZUFFYUEsZ0JBRmI7O0FBQUEscUJBR0RKLHdEQUFVLENBQUNLLDJFQUFELENBSFQ7QUFBQSxNQUdwQkMsY0FIb0IsZ0JBR3BCQSxjQUhvQjs7QUFLNUIsV0FBU0MsdUJBQVQsR0FBa0MsQ0FFakM7O0FBRUQsV0FBU0MscUJBQVQsR0FBZ0MsQ0FFL0I7O0FBQ0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLGlGQUFNLENBQUNDLHFCQUF2QjtBQUFBLGNBQ0tSLGVBQWUsZ0JBQ1o7QUFBSyxlQUFTLEVBQUVPLGlGQUFNLENBQUNFLGVBQXZCO0FBQUEsOEJBQ0k7QUFBQSw2QkFBZVQsZUFBZSxDQUFDVSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLGtCQUFXVixlQUFlLENBQUNXLElBQTNCLFNBQVI7QUFBK0MsYUFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUEsb0JBQUlYLGVBQWUsQ0FBQ1k7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQVNJO0FBQUEsZ0NBQ0k7QUFDSSxjQUFJLEVBQUMsUUFEVDtBQUVJLG1CQUFTLEVBQUVMLGlGQUFNLENBQUNNLHFCQUZ0QjtBQUdJLGlCQUFPLEVBQUVaLGNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFRSTtBQUNJLGNBQUksRUFBQyxRQURUO0FBRUksbUJBQVMsRUFBRU0saUZBQU0sQ0FBQ08sdUJBRnRCO0FBR0ksaUJBQU8sRUFBRVosZ0JBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFksZ0JBNEJaO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFSyxpRkFBTSxDQUFDUSxrQkFBdkI7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsa0NBQ0k7QUFBSyxlQUFHLEVBQUMsb0JBQVQ7QUFBOEIsZUFBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBN0JSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJDSDs7R0F2RGVsQixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkYzY4MTQ5ZDU5NzE3OTU5M2E1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgQ291bnRkb3duQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlQm94ICgpIHtcclxuXHJcbiAgICBjb25zdCB7IGFjdGl2ZUNoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2UsIGNvbXBsZXRDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpXHJcbiAgICBjb25zdCB7IHJlc2V0Q291bnRkb3duIH0gPSB1c2VDb250ZXh0KENvdW50ZG93bkNvbnRleHQpXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbGxhbmdlU3VjZWVkZWQoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbGxhbmdlRmFpbGVkKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VCb3hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7YWN0aXZlQ2hhbGxlbmdlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VBY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+R2FuaGUge2FjdGl2ZUNoYWxsZW5nZS5hbW91bnR9IHhwPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGljb25zLyR7YWN0aXZlQ2hhbGxlbmdlLnR5cGV9LnN2Z2B9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ob3ZvIGRlc2FmaW88L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FjdGl2ZUNoYWxsZW5nZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUZhaWxlZEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q2hhbGxlbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWxoZWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlU3VjZWVkZWRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb21wbGV0Q2hhbGxlbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV0ZWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VOb3RBY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZpbmFsaXplIHVtIGNpY2xvIHBhcmEgcmVjZWJlciB1bSBkZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sZXZlbC11cC5zdmdcIiBhbHQ9XCJMZXZlbCB1cFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF2YW5jZSBkZSBsZXZlbCBjb21wbGV0YW5kbyBkZXNhZmlvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=