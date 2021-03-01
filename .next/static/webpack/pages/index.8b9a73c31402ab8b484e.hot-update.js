webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jotap_Desktop_projeto_nlw04_MovWork_FrontEnd_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\jotap\\Desktop\\projeto\\nlw04\\MovWork-FrontEnd\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();



var countdownTimeout;
function Countdown() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0.1 * 60),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(C_Users_jotap_Desktop_projeto_nlw04_MovWork_FrontEnd_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRight = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(C_Users_jotap_Desktop_projeto_nlw04_MovWork_FrontEnd_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRight = _String$padStart$spli4[1];

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: "".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownButton, " ").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownButtonActive),
      onClick: resetCountdown,
      children: "Abandonar um ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownButton,
      onClick: startCountdown,
      children: "Iniciar ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

_s(Countdown, "ocrxlP93zfM61bh38iet/2CNRQY=");

_c = Countdown;

var _c;

$RefreshReg$(_c, "Countdown");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCJdLCJuYW1lcyI6WyJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInN0eWxlcyIsImNvdW50ZG93bkNvbnRhaW5lciIsImNvdW50ZG93bkJ1dHRvbiIsImNvdW50ZG93bkJ1dHRvbkFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQSxnQkFBSjtBQUVPLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxNQUFNLEVBQVAsQ0FEUjtBQUFBLE1BQ2pCQyxJQURpQjtBQUFBLE1BQ1hDLE9BRFc7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBLE1BRWpCRyxRQUZpQjtBQUFBLE1BRVBDLFdBRk87O0FBSXhCLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLElBQUksR0FBRyxFQUFsQixDQUFoQjtBQUNBLE1BQU1PLE9BQU8sR0FBR1AsSUFBSSxHQUFHLEVBQXZCOztBQUx3Qiw4QkFPVVEsTUFBTSxDQUFDSixPQUFELENBQU4sQ0FBZ0JLLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDQyxLQUFqQyxDQUF1QyxFQUF2QyxDQVBWO0FBQUE7QUFBQSxNQU9qQkMsVUFQaUI7QUFBQSxNQU9MQyxXQVBLOztBQUFBLCtCQVFVSixNQUFNLENBQUNELE9BQUQsQ0FBTixDQUFnQkUsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNDLEtBQWpDLENBQXVDLEVBQXZDLENBUlY7QUFBQTtBQUFBLE1BUWpCRyxVQVJpQjtBQUFBLE1BUUxDLFdBUks7O0FBVXhCLFdBQVNDLGNBQVQsR0FBMEI7QUFDdEJaLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDSDs7QUFFRCxXQUFTYSxjQUFULEdBQTBCO0FBQ3RCQyxnQkFBWSxDQUFDcEIsZ0JBQUQsQ0FBWjtBQUNBTSxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FGLFdBQU8sQ0FBQyxNQUFNLEVBQVAsQ0FBUDtBQUNIOztBQUVEaUIseURBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBR2hCLFFBQVEsSUFBSUYsSUFBSSxHQUFHLENBQXRCLEVBQXdCO0FBQ3BCSCxzQkFBZ0IsR0FBR3NCLFVBQVUsQ0FBQyxZQUFNO0FBQ2hDbEIsZUFBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0gsT0FGNEIsRUFFMUIsSUFGMEIsQ0FBN0I7QUFHSDtBQUNKLEdBTlEsRUFNTixDQUFDRSxRQUFELEVBQVdGLElBQVgsQ0FOTSxDQUFUO0FBUUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRW9CLDhFQUFNLENBQUNDLGtCQUF2QjtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBT1Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQU1JO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBYUtaLFFBQVEsZ0JBQ0w7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFTLFlBQUtrQiw4RUFBTSxDQUFDRSxlQUFaLGNBQStCRiw4RUFBTSxDQUFDRyxxQkFBdEMsQ0FBL0I7QUFBOEYsYUFBTyxFQUFFUCxjQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGdCQUtMO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFFSSw4RUFBTSxDQUFDRSxlQUF4QztBQUF5RCxhQUFPLEVBQUVQLGNBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUJIOztHQXJEZWpCLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGI5YTczYzMxNDAyYWI4YjQ4NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XHJcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwLjEgKiA2MCk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcclxuXHJcbiAgICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xyXG4gICAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcclxuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHNldFRpbWUoMC4xICogNjApXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoaXNBY3RpdmUgJiYgdGltZSA+IDApe1xyXG4gICAgICAgICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZExlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRSaWdodH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7aXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZX1gfSBvbkNsaWNrPXtyZXNldENvdW50ZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgQWJhbmRvbmFyIHVtIGNpY2xvICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gb25DbGljaz17c3RhcnRDb3VudGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgIEluaWNpYXIgY2ljbG9cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=