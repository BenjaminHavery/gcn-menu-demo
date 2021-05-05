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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./data/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/ben/test/gcn-menu-demo/pages/index.js";





dayjs__WEBPACK_IMPORTED_MODULE_5__().format();
var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var videos = _ref.videos;
  console.log('render with', videos);
  var latest = videos[0],
      others = videos.filter(function (v) {
    return v._id !== latest._id;
  });
  console.log(dayjs__WEBPACK_IMPORTED_MODULE_5__(latest.publishDate).format('DD/MM/YYYY'));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Video__WEBPACK_IMPORTED_MODULE_2__.default, {
      video: latest
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Latest Videos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), (0,_data__WEBPACK_IMPORTED_MODULE_4__.videosByDay)(others).map(function (group, key) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "date-group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: group.dateString
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VideoCard__WEBPACK_IMPORTED_MODULE_3__.VcList, {
          videos: group.videos
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this);
    })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGF5anMiLCJmb3JtYXQiLCJIb21lIiwidmlkZW9zIiwiY29uc29sZSIsImxvZyIsImxhdGVzdCIsIm90aGVycyIsImZpbHRlciIsInYiLCJfaWQiLCJwdWJsaXNoRGF0ZSIsInZpZGVvc0J5RGF5IiwibWFwIiwiZ3JvdXAiLCJrZXkiLCJkYXRlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBQSxrQ0FBSyxHQUFHQyxNQUFSOztBQUdlLFNBQVNDLElBQVQsT0FBMEI7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLE1BQTNCO0FBQ0EsTUFBTUcsTUFBTSxHQUFHSCxNQUFNLENBQUMsQ0FBRCxDQUFyQjtBQUFBLE1BQ01JLE1BQU0sR0FBR0osTUFBTSxDQUFDSyxNQUFQLENBQWMsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVSixNQUFNLENBQUNJLEdBQXJCO0FBQUEsR0FBZixDQURmO0FBR0FOLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxrQ0FBSyxDQUFDTSxNQUFNLENBQUNLLFdBQVIsQ0FBTCxDQUEwQlYsTUFBMUIsQ0FBaUMsWUFBakMsQ0FBWjtBQUVBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsc0RBQUQ7QUFBTyxXQUFLLEVBQUdLO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdJTSxrREFBVyxDQUFDTCxNQUFELENBQVgsQ0FBb0JNLEdBQXBCLENBQXdCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLDBCQUN4QjtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNFO0FBQUEsb0JBQU1ELEtBQUssQ0FBQ0U7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBUSxnQkFBTSxFQUFHRixLQUFLLENBQUNYO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHdCO0FBQUEsS0FBeEIsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEO0tBbkJ1QkQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMDhjZDljYmE5ZWExZjU1ZDIxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uL2NvbXBvbmVudHMvVmlkZW8nXG5pbXBvcnQgeyBWY0xpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvQ2FyZCdcblxuaW1wb3J0IHsgZmV0Y2hWaWRlb3MsIHZpZGVvc0J5RGF5IH0gZnJvbSAnLi4vZGF0YSdcblxuaW1wb3J0ICogYXMgZGF5anMgZnJvbSAnZGF5anMnXG5kYXlqcygpLmZvcm1hdCgpXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHZpZGVvcyB9KSB7XG4gIGNvbnNvbGUubG9nKCdyZW5kZXIgd2l0aCcsIHZpZGVvcyk7XG4gIGNvbnN0IGxhdGVzdCA9IHZpZGVvc1swXSxcbiAgICAgICAgb3RoZXJzID0gdmlkZW9zLmZpbHRlcih2ID0+IHYuX2lkICE9PSBsYXRlc3QuX2lkKTtcblxuICBjb25zb2xlLmxvZyhkYXlqcyhsYXRlc3QucHVibGlzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8VmlkZW8gdmlkZW89eyBsYXRlc3QgfS8+XG4gICAgICA8aDI+TGF0ZXN0IFZpZGVvczwvaDI+XG4gICAgICB7IHZpZGVvc0J5RGF5KG90aGVycykubWFwKChncm91cCwga2V5KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlLWdyb3VwJz5cbiAgICAgICAgICA8aDM+eyBncm91cC5kYXRlU3RyaW5nIH08L2gzPlxuICAgICAgICAgIDxWY0xpc3QgdmlkZW9zPXsgZ3JvdXAudmlkZW9zIH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB2aWRlb3MgPSBhd2FpdCBmZXRjaFZpZGVvcygpO1xuICByZXR1cm4geyBwcm9wczogeyB2aWRlb3MgfX1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=