self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./data/index.js":
/*!***********************!*\
  !*** ./data/index.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "videosByDay": function() { return /* binding */ videosByDay; },
/* harmony export */   "fetchVideos": function() { return /* binding */ fetchVideos; },
/* harmony export */   "topics": function() { return /* binding */ topics; },
/* harmony export */   "presenters": function() { return /* binding */ presenters; },
/* harmony export */   "mainNavItems": function() { return /* binding */ mainNavItems; }
/* harmony export */ });
/* harmony import */ var _home_ben_test_gcn_menu_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_ben_test_gcn_menu_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ben_test_gcn_menu_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_ben_test_gcn_menu_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_ben_test_gcn_menu_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_ben_test_gcn_menu_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_ben_test_gcn_menu_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


dayjs__WEBPACK_IMPORTED_MODULE_4__().format();
var videosByDay = function videosByDay() {
  var videos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var groupedVideos = [];
  videos.forEach(function (video) {
    var dateString = dayjs__WEBPACK_IMPORTED_MODULE_4__(video.publishDate).format('DD/MM/YYYY'),
        dateGroup = groupedVideos.filter(function (g) {
      return g.dateString === dateString;
    })[0];
    if (!!dateGroup) dateGroup.videos.push(video);else groupedVideos.push({
      dateString: dateString,
      videos: [video]
    });
  });
  return groupedVideos;
};
function fetchVideos() {
  return _fetchVideos.apply(this, arguments);
}

function _fetchVideos() {
  _fetchVideos = (0,_home_ben_test_gcn_menu_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_ben_test_gcn_menu_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var response;
    return _home_ben_test_gcn_menu_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://globalcyclingnetwork.com/api/devtask', {
              headers: {},
              referrerPolicy: 'no-referrer'
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.json());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchVideos.apply(this, arguments);
}

var topics = ['GCN Show', 'How To', 'Maintenance', 'Ask GCN', 'Training', 'Features', 'Top 10s', 'GCN Racing', 'GCN Tech'].map(function (t) {
  return {
    title: t,
    slug: t.replace(/\s+/g, '-').toLowerCase()
  };
}).map(function (page) {
  return _objectSpread(_objectSpread({}, page), {}, {
    href: "/".concat(page.slug)
  });
});
var presenters = ['Conor Dunne', 'Daniel Lloyd', 'James Lowsley-Williams', 'Jon Cannings', 'Manon Lloyd', 'Oliver Bridgewood', 'Simon Richardson', 'Tom Last'].map(function (p) {
  return {
    title: p,
    slug: p.replace(/\s+/g, '-').toLowerCase()
  };
}).map(function (page) {
  return _objectSpread(_objectSpread({}, page), {}, {
    href: "/presenters/".concat(page.slug)
  });
});
var mainNavItems = [{
  title: 'Home',
  slug: '',
  href: '/',
  children: []
}].concat((0,_home_ben_test_gcn_menu_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(topics), [{
  title: 'Presenters',
  slug: 'presenters',
  href: '/presenters',
  children: presenters
}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9pbmRleC5qcyJdLCJuYW1lcyI6WyJkYXlqcyIsImZvcm1hdCIsInZpZGVvc0J5RGF5IiwidmlkZW9zIiwiZ3JvdXBlZFZpZGVvcyIsImZvckVhY2giLCJ2aWRlbyIsImRhdGVTdHJpbmciLCJwdWJsaXNoRGF0ZSIsImRhdGVHcm91cCIsImZpbHRlciIsImciLCJwdXNoIiwiZmV0Y2hWaWRlb3MiLCJmZXRjaCIsImhlYWRlcnMiLCJyZWZlcnJlclBvbGljeSIsInJlc3BvbnNlIiwianNvbiIsInRvcGljcyIsIm1hcCIsInQiLCJ0aXRsZSIsInNsdWciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJwYWdlIiwiaHJlZiIsInByZXNlbnRlcnMiLCJwIiwibWFpbk5hdkl0ZW1zIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBQSxrQ0FBSyxHQUFHQyxNQUFSO0FBRU8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBaUI7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUMxQyxNQUFNQyxhQUFhLEdBQUcsRUFBdEI7QUFFQUQsUUFBTSxDQUFDRSxPQUFQLENBQWUsVUFBQUMsS0FBSyxFQUFJO0FBQ3RCLFFBQU1DLFVBQVUsR0FBR1Asa0NBQUssQ0FBQ00sS0FBSyxDQUFDRSxXQUFQLENBQUwsQ0FBeUJQLE1BQXpCLENBQWdDLFlBQWhDLENBQW5CO0FBQUEsUUFDTVEsU0FBUyxHQUFHTCxhQUFhLENBQUNNLE1BQWQsQ0FBcUIsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0osVUFBRixLQUFpQkEsVUFBckI7QUFBQSxLQUF0QixFQUF1RCxDQUF2RCxDQURsQjtBQUdBLFFBQUksQ0FBQyxDQUFDRSxTQUFOLEVBQWlCQSxTQUFTLENBQUNOLE1BQVYsQ0FBaUJTLElBQWpCLENBQXNCTixLQUF0QixFQUFqQixLQUNLRixhQUFhLENBQUNRLElBQWQsQ0FBbUI7QUFBRUwsZ0JBQVUsRUFBVkEsVUFBRjtBQUFjSixZQUFNLEVBQUUsQ0FBQ0csS0FBRDtBQUF0QixLQUFuQjtBQUNOLEdBTkQ7QUFRQSxTQUFPRixhQUFQO0FBQ0QsQ0FaTTtBQWVBLFNBQWVTLFdBQXRCO0FBQUE7QUFBQTs7OzZRQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2tCQyxLQUFLLENBQUMsOENBQUQsRUFBaUQ7QUFDM0VDLHFCQUFPLEVBQUUsRUFEa0U7QUFFM0VDLDRCQUFjLEVBQUU7QUFGMkQsYUFBakQsQ0FEdkI7O0FBQUE7QUFDQ0Msb0JBREQ7QUFBQSw2Q0FLRUEsUUFBUSxDQUFDQyxJQUFULEVBTEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVNBLElBQU1DLE1BQU0sR0FBRyxDQUNwQixVQURvQixFQUVwQixRQUZvQixFQUdwQixhQUhvQixFQUlwQixTQUpvQixFQUtwQixVQUxvQixFQU1wQixVQU5vQixFQU9wQixTQVBvQixFQVFwQixZQVJvQixFQVNwQixVQVRvQixFQVVwQkMsR0FWb0IsQ0FVaEIsVUFBQUMsQ0FBQyxFQUFJO0FBQUUsU0FBTztBQUNsQkMsU0FBSyxFQUFFRCxDQURXO0FBRWxCRSxRQUFJLEVBQUVGLENBQUMsQ0FBQ0csT0FBRixDQUFVLE1BQVYsRUFBa0IsR0FBbEIsRUFBdUJDLFdBQXZCO0FBRlksR0FBUDtBQUdYLENBYm9CLEVBYWxCTCxHQWJrQixDQWFkLFVBQUFNLElBQUksRUFBSTtBQUFFLHlDQUNiQSxJQURhO0FBRWhCQyxRQUFJLGFBQU1ELElBQUksQ0FBQ0gsSUFBWDtBQUZZO0FBR2hCLENBaEJvQixDQUFmO0FBa0JBLElBQU1LLFVBQVUsR0FBRyxDQUN4QixhQUR3QixFQUV4QixjQUZ3QixFQUd4Qix3QkFId0IsRUFJeEIsY0FKd0IsRUFLeEIsYUFMd0IsRUFNeEIsbUJBTndCLEVBT3hCLGtCQVB3QixFQVF4QixVQVJ3QixFQVN4QlIsR0FUd0IsQ0FTcEIsVUFBQVMsQ0FBQyxFQUFJO0FBQUUsU0FBTztBQUNsQlAsU0FBSyxFQUFFTyxDQURXO0FBRWxCTixRQUFJLEVBQUVNLENBQUMsQ0FBQ0wsT0FBRixDQUFVLE1BQVYsRUFBa0IsR0FBbEIsRUFBdUJDLFdBQXZCO0FBRlksR0FBUDtBQUdYLENBWndCLEVBWXRCTCxHQVpzQixDQVlsQixVQUFBTSxJQUFJLEVBQUk7QUFBRSx5Q0FDYkEsSUFEYTtBQUVoQkMsUUFBSSx3QkFBaUJELElBQUksQ0FBQ0gsSUFBdEI7QUFGWTtBQUdoQixDQWZ3QixDQUFuQjtBQWlCQSxJQUFNTyxZQUFZLElBQ3ZCO0FBQUVSLE9BQUssRUFBRSxNQUFUO0FBQWlCQyxNQUFJLEVBQUUsRUFBdkI7QUFBMkJJLE1BQUksRUFBRSxHQUFqQztBQUFzQ0ksVUFBUSxFQUFFO0FBQWhELENBRHVCLHdJQUVwQlosTUFGb0IsSUFHdkI7QUFBRUcsT0FBSyxFQUFFLFlBQVQ7QUFBdUJDLE1BQUksRUFBRSxZQUE3QjtBQUEyQ0ksTUFBSSxFQUFFLGFBQWpEO0FBQWdFSSxVQUFRLEVBQUVIO0FBQTFFLENBSHVCLEVBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdkZGY5ZmE0ZTQwODE3ODNiYTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIGRheWpzIGZyb20gJ2RheWpzJ1xuZGF5anMoKS5mb3JtYXQoKVxuXG5leHBvcnQgY29uc3QgdmlkZW9zQnlEYXkgPSAodmlkZW9zID0gW10pID0+IHtcbiAgY29uc3QgZ3JvdXBlZFZpZGVvcyA9IFtdO1xuXG4gIHZpZGVvcy5mb3JFYWNoKHZpZGVvID0+IHtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF5anModmlkZW8ucHVibGlzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxuICAgICAgICAgIGRhdGVHcm91cCA9IGdyb3VwZWRWaWRlb3MuZmlsdGVyKGcgPT4gZy5kYXRlU3RyaW5nID09PSBkYXRlU3RyaW5nKVswXTtcbiAgICBcbiAgICBpZiAoISFkYXRlR3JvdXApIGRhdGVHcm91cC52aWRlb3MucHVzaCh2aWRlbyk7XG4gICAgZWxzZSBncm91cGVkVmlkZW9zLnB1c2goeyBkYXRlU3RyaW5nLCB2aWRlb3M6IFt2aWRlb10gfSk7XG4gIH0pXG5cbiAgcmV0dXJuIGdyb3VwZWRWaWRlb3Ncbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hWaWRlb3MoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZ2xvYmFsY3ljbGluZ25ldHdvcmsuY29tL2FwaS9kZXZ0YXNrJywge1xuICAgIGhlYWRlcnM6IHt9LFxuICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuXG5leHBvcnQgY29uc3QgdG9waWNzID0gW1xuICAnR0NOIFNob3cnLFxuICAnSG93IFRvJyxcbiAgJ01haW50ZW5hbmNlJyxcbiAgJ0FzayBHQ04nLFxuICAnVHJhaW5pbmcnLFxuICAnRmVhdHVyZXMnLFxuICAnVG9wIDEwcycsXG4gICdHQ04gUmFjaW5nJyxcbiAgJ0dDTiBUZWNoJyxcbl0ubWFwKHQgPT4geyByZXR1cm4ge1xuICB0aXRsZTogdCxcbiAgc2x1ZzogdC5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKSxcbn19KS5tYXAocGFnZSA9PiB7IHJldHVybiB7XG4gIC4uLnBhZ2UsXG4gIGhyZWY6IGAvJHtwYWdlLnNsdWd9YCxcbn19KTtcblxuZXhwb3J0IGNvbnN0IHByZXNlbnRlcnMgPSBbXG4gICdDb25vciBEdW5uZScsXG4gICdEYW5pZWwgTGxveWQnLFxuICAnSmFtZXMgTG93c2xleS1XaWxsaWFtcycsXG4gICdKb24gQ2FubmluZ3MnLFxuICAnTWFub24gTGxveWQnLFxuICAnT2xpdmVyIEJyaWRnZXdvb2QnLFxuICAnU2ltb24gUmljaGFyZHNvbicsXG4gICdUb20gTGFzdCcsXG5dLm1hcChwID0+IHsgcmV0dXJuIHtcbiAgdGl0bGU6IHAsXG4gIHNsdWc6IHAucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCksXG59fSkubWFwKHBhZ2UgPT4geyByZXR1cm4ge1xuICAuLi5wYWdlLFxuICBocmVmOiBgL3ByZXNlbnRlcnMvJHtwYWdlLnNsdWd9YCxcbn19KTtcblxuZXhwb3J0IGNvbnN0IG1haW5OYXZJdGVtcyA9IFtcbiAgeyB0aXRsZTogJ0hvbWUnLCBzbHVnOiAnJywgaHJlZjogJy8nLCBjaGlsZHJlbjogW10gfSxcbiAgLi4udG9waWNzLFxuICB7IHRpdGxlOiAnUHJlc2VudGVycycsIHNsdWc6ICdwcmVzZW50ZXJzJywgaHJlZjogJy9wcmVzZW50ZXJzJywgY2hpbGRyZW46IHByZXNlbnRlcnMgfSxcbl1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=