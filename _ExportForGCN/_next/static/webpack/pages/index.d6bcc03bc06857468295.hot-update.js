self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Video */ "./components/Video.js");
/* harmony import */ var _components_VideoCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VideoCard */ "./components/VideoCard.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/ben/test/gcn-menu-demo/pages/index.js";




dayjs__WEBPACK_IMPORTED_MODULE_4__().format();
var __N_SSG = true;
function Home(_ref) {
  var videos = _ref.videos;
  console.log('render with', videos);
  var latest = videos[0],
      others = videos.filter(function (v) {
    return v._id !== latest._id;
  });
  console.log(dayjs__WEBPACK_IMPORTED_MODULE_4__(video.publishDate));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Video__WEBPACK_IMPORTED_MODULE_2__.default, {
      video: latest
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: video.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Latest Videos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VideoCard__WEBPACK_IMPORTED_MODULE_3__.VcList, {
      videos: others
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGF5anMiLCJmb3JtYXQiLCJIb21lIiwidmlkZW9zIiwiY29uc29sZSIsImxvZyIsImxhdGVzdCIsIm90aGVycyIsImZpbHRlciIsInYiLCJfaWQiLCJ2aWRlbyIsInB1Ymxpc2hEYXRlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0FBLGtDQUFLLEdBQUdDLE1BQVI7O0FBR2UsU0FBU0MsSUFBVCxPQUEwQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkYsTUFBM0I7QUFDQSxNQUFNRyxNQUFNLEdBQUdILE1BQU0sQ0FBQyxDQUFELENBQXJCO0FBQUEsTUFDTUksTUFBTSxHQUFHSixNQUFNLENBQUNLLE1BQVAsQ0FBYyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVVKLE1BQU0sQ0FBQ0ksR0FBckI7QUFBQSxHQUFmLENBRGY7QUFHQU4sU0FBTyxDQUFDQyxHQUFSLENBQVlMLGtDQUFLLENBQUNXLEtBQUssQ0FBQ0MsV0FBUCxDQUFqQjtBQUVBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsc0RBQUQ7QUFBTyxXQUFLLEVBQUdOO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBSUssS0FBSyxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRSw4REFBQyx5REFBRDtBQUFRLFlBQU0sRUFBR047QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7S0FoQnVCTCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ2YmNjMDNiYzA2ODU3NDY4Mjk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vY29tcG9uZW50cy9WaWRlbydcbmltcG9ydCB7IFZjTGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvVmlkZW9DYXJkJ1xuXG5pbXBvcnQgeyBmZXRjaFZpZGVvcyB9IGZyb20gJy4uL2RhdGEnXG5cbmltcG9ydCAqIGFzIGRheWpzIGZyb20gJ2RheWpzJ1xuZGF5anMoKS5mb3JtYXQoKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB2aWRlb3MgfSkge1xuICBjb25zb2xlLmxvZygncmVuZGVyIHdpdGgnLCB2aWRlb3MpO1xuICBjb25zdCBsYXRlc3QgPSB2aWRlb3NbMF0sXG4gICAgICAgIG90aGVycyA9IHZpZGVvcy5maWx0ZXIodiA9PiB2Ll9pZCAhPT0gbGF0ZXN0Ll9pZCk7XG5cbiAgY29uc29sZS5sb2coZGF5anModmlkZW8ucHVibGlzaERhdGUpKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxWaWRlbyB2aWRlbz17IGxhdGVzdCB9Lz5cbiAgICAgIDxwPnt2aWRlby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8aDI+TGF0ZXN0IFZpZGVvczwvaDI+XG4gICAgICA8VmNMaXN0IHZpZGVvcz17IG90aGVycyB9Lz5cbiAgICA8L0xheW91dD5cbiAgICBcbiAgKVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgdmlkZW9zID0gYXdhaXQgZmV0Y2hWaWRlb3MoKTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdmlkZW9zIH19XG59XG4iXSwic291cmNlUm9vdCI6IiJ9