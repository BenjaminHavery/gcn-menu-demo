self["webpackHotUpdate_N_E"]("pages/[topicSlug]",{

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


/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyJdLCJuYW1lcyI6WyJkYXlqcyIsImZvcm1hdCIsInZpZGVvc0J5RGF5IiwidmlkZW9zIiwiZ3JvdXBlZFZpZGVvcyIsImZvckVhY2giLCJ2aWRlbyIsImRhdGVTdHJpbmciLCJwdWJsaXNoRGF0ZSIsImRhdGVHcm91cCIsImZpbHRlciIsImciLCJwdXNoIiwiZmV0Y2hWaWRlb3MiLCJmZXRjaCIsImhlYWRlcnMiLCJyZWZlcnJlclBvbGljeSIsInJlc3BvbnNlIiwianNvbiIsInRvcGljcyIsIm1hcCIsInQiLCJ0aXRsZSIsInNsdWciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJwYWdlIiwiaHJlZiIsInByZXNlbnRlcnMiLCJwIiwibWFpbk5hdkl0ZW1zIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBQSxrQ0FBSyxHQUFHQyxNQUFSO0FBRU8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBaUI7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUMxQyxNQUFNQyxhQUFhLEdBQUcsRUFBdEI7QUFFQUQsUUFBTSxDQUFDRSxPQUFQLENBQWUsVUFBQUMsS0FBSyxFQUFJO0FBQ3RCLFFBQU1DLFVBQVUsR0FBR1Asa0NBQUssQ0FBQ00sS0FBSyxDQUFDRSxXQUFQLENBQUwsQ0FBeUJQLE1BQXpCLENBQWdDLFlBQWhDLENBQW5CO0FBQUEsUUFDTVEsU0FBUyxHQUFHTCxhQUFhLENBQUNNLE1BQWQsQ0FBcUIsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0osVUFBRixLQUFpQkEsVUFBckI7QUFBQSxLQUF0QixFQUF1RCxDQUF2RCxDQURsQjtBQUdBLFFBQUksQ0FBQyxDQUFDRSxTQUFOLEVBQWlCQSxTQUFTLENBQUNO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a0Isd0JBQXdCLHFCQUFxQiwrQkFBK0IscUJBQXFCLG9CQUFvQix5QkFBeUIscUJBQXFCLGdDQUFnQyxxQkFBcUIsOENBQThDLDBCQUEwQiw2QkFBNkIsdUJBQXVCLDZCQUE2QixHQUFHLGlCQUFpQixvSEFBb0gsb0JBQW9CLDZCQUE2Qix5QkFBeUIsa0NBQWtDLDJDQUEyQyxnQkFBZ0Isd0JBQXdCLEdBQUciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3RvcGljU2x1Z10uN2RkZjlmYTRlNDA4MTc4M2JhMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgZGF5anMgZnJvbSAnZGF5anMnXG5kYXlqcygpLmZvcm1hdCgpXG5cbmV4cG9ydCBjb25zdCB2aWRlb3NCeURheSA9ICh2aWRlb3MgPSBbXSkgPT4ge1xuICBjb25zdCBncm91cGVkVmlkZW9zID0gW107XG5cbiAgdmlkZW9zLmZvckVhY2godmlkZW8gPT4ge1xuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXlqcyh2aWRlby5wdWJsaXNoRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXG4gICAgICAgICAgZGF0ZUdyb3VwID0gZ3JvdXBlZFZpZGVvcy5maWx0ZXIoZyA9PiBnLmRhdGVTdHJpbmcgPT09IGRhdGVTdHJpbmcpWzBdO1xuICAgIFxuICAgIGlmICghIWRhdGVHcm91cCkgZGF0ZUdyb3VwLnZpZGVvcy5wdXNoKHZpZGVvKTtcbiAgICBlbHNlIGdyb3VwZWRWaWRlb3MucHVzaCh7IGRhdGVTdHJpbmcsIHZpZGVvczogW3ZpZGVvXSB9KTtcbiAgfSlcblxuICByZXR1cm4gZ3JvdXBlZFZpZGVvc1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFZpZGVvcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9nbG9iYWxjeWNsaW5nbmV0d29yay5jb20vYXBpL2RldnRhc2snLCB7XG4gICAgaGVhZGVyczoge30sXG4gICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG5cbmV4cG9ydCBjb25zdCB0b3BpY3MgPSBbXG4gICdHQ04gU2hvdycsXG4gICdIb3cgVG8nLFxuICAnTWFpbnRlbmFuY2UnLFxuICAnQXNrIEdDTicsXG4gICdUcmFpbmluZycsXG4gICdGZWF0dXJlcycsXG4gICdUb3AgMTBzJyxcbiAgJ0dDTiBSYWNpbmcnLFxuICAnR0NOIFRlY2gnLFxuXS5tYXAodCA9PiB7IHJldHVybiB7XG4gIHRpdGxlOiB0LFxuICBzbHVnOiB0LnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpLFxufX0pLm1hcChwYWdlID0+IHsgcmV0dXJuIHtcbiAgLi4ucGFnZSxcbiAgaHJlZjogYC8ke3BhZ2Uuc2x1Z31gLFxufX0pO1xuXG5leHBvcnQgY29uc3QgcHJlc2VudGVycyA9IFtcbiAgJ0Nvbm9yIER1bm5lJyxcbiAgJ0RhbmllbCBMbG95ZCcsXG4gICdKYW1lcyBMb3dzbGV5LVdpbGxpYW1zJyxcbiAgJ0pvbiBDYW5uaW5ncycsXG4gICdNYW5vbiBMbG95ZCcsXG4gICdPbGl2ZXIgQnJpZGdld29vZCcsXG4gICdTaW1vbiBSaWNoYXJkc29uJyxcbiAgJ1RvbSBMYXN0Jyxcbl0ubWFwKHAgPT4geyByZXR1cm4ge1xuICB0aXRsZTogcCxcbiAgc2x1ZzogcC5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKSxcbn19KS5tYXAocGFnZSA9PiB7IHJldHVybiB7XG4gIC4uLnBhZ2UsXG4gIGhyZWY6IGAvcHJlc2VudGVycy8ke3BhZ2Uuc2x1Z31gLFxufX0pO1xuXG5leHBvcnQgY29uc3QgbWFpbk5hdkl0ZW1zID0gW1xuICB7IHRpdGxlOiAnSG9tZScsIHNsdWc6ICcnLCBocmVmOiAnLycsIGNoaWxkcmVuOiBbXSB9LFxuICAuLi50b3BpY3MsXG4gIHsgdGl0bGU6ICdQcmVzZW50ZXJzJywgc2x1ZzogJ3ByZXNlbnRlcnMnLCBocmVmOiAnL3ByZXNlbnRlcnMnLCBjaGlsZHJlbjogcHJlc2VudGVycyB9LFxuXVxuXG5cblxuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6dC5kYXlqcz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1cIm1pbGxpc2Vjb25kXCIsZT1cInNlY29uZFwiLG49XCJtaW51dGVcIixyPVwiaG91clwiLGk9XCJkYXlcIixzPVwid2Vla1wiLHU9XCJtb250aFwiLGE9XCJxdWFydGVyXCIsbz1cInllYXJcIixmPVwiZGF0ZVwiLGg9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbXjAtOV0qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLGM9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLGQ9e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sJD1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LGw9e3M6JCx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrJChyLDIsXCIwXCIpK1wiOlwiKyQoaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocix1KSxzPW4taTwwLGE9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLHUpO3JldHVybisoLShyKyhuLWkpLyhzP2ktYTphLWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbihoKXtyZXR1cm57TTp1LHk6byx3OnMsZDppLEQ6ZixoOnIsbTpuLHM6ZSxtczp0LFE6YX1baF18fFN0cmluZyhofHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LHk9XCJlblwiLE09e307TVt5XT1kO3ZhciBtPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgU30sRD1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoIXQpcmV0dXJuIHk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpTVt0XSYmKHI9dCksZSYmKE1bdF09ZSxyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO01baV09dCxyPWl9cmV0dXJuIW4mJnImJih5PXIpLHJ8fCFuJiZ5fSx2PWZ1bmN0aW9uKHQsZSl7aWYobSh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IFMobil9LGc9bDtnLmw9RCxnLmk9bSxnLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdih0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIFM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkKHQpe3RoaXMuJEw9RCh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciAkPWQucHJvdG90eXBlO3JldHVybiAkLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoZy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGgpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sJC5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sJC4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gZ30sJC5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuIShcIkludmFsaWQgRGF0ZVwiPT09dGhpcy4kZC50b1N0cmluZygpKX0sJC5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj12KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LCQuaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB2KHQpPHRoaXMuc3RhcnRPZihlKX0sJC5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHYodCl9LCQuJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBnLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSwkLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSwkLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LCQuc3RhcnRPZj1mdW5jdGlvbih0LGEpe3ZhciBoPXRoaXMsYz0hIWcudShhKXx8YSxkPWcucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIG49Zy53KGguJHU/RGF0ZS5VVEMoaC4keSxlLHQpOm5ldyBEYXRlKGguJHksZSx0KSxoKTtyZXR1cm4gYz9uOm4uZW5kT2YoaSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZy53KGgudG9EYXRlKClbdF0uYXBwbHkoaC50b0RhdGUoXCJzXCIpLChjP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLGgpfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxEPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goZCl7Y2FzZSBvOnJldHVybiBjPyQoMSwwKTokKDMxLDExKTtjYXNlIHU6cmV0dXJuIGM/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugczp2YXIgdj10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsUz0oeTx2P3krNzp5KS12O3JldHVybiAkKGM/bS1TOm0rKDYtUyksTSk7Y2FzZSBpOmNhc2UgZjpyZXR1cm4gbChEK1wiSG91cnNcIiwwKTtjYXNlIHI6cmV0dXJuIGwoRCtcIk1pbnV0ZXNcIiwxKTtjYXNlIG46cmV0dXJuIGwoRCtcIlNlY29uZHNcIiwyKTtjYXNlIGU6cmV0dXJuIGwoRCtcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LCQuZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sJC4kc2V0PWZ1bmN0aW9uKHMsYSl7dmFyIGgsYz1nLnAocyksZD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0oaD17fSxoW2ldPWQrXCJEYXRlXCIsaFtmXT1kK1wiRGF0ZVwiLGhbdV09ZCtcIk1vbnRoXCIsaFtvXT1kK1wiRnVsbFllYXJcIixoW3JdPWQrXCJIb3Vyc1wiLGhbbl09ZCtcIk1pbnV0ZXNcIixoW2VdPWQrXCJTZWNvbmRzXCIsaFt0XT1kK1wiTWlsbGlzZWNvbmRzXCIsaClbY10sbD1jPT09aT90aGlzLiREKyhhLXRoaXMuJFcpOmE7aWYoYz09PXV8fGM9PT1vKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGYsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGYsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LCQuc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LCQuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW2cucCh0KV0oKX0sJC5hZGQ9ZnVuY3Rpb24odCxhKXt2YXIgZixoPXRoaXM7dD1OdW1iZXIodCk7dmFyIGM9Zy5wKGEpLGQ9ZnVuY3Rpb24oZSl7dmFyIG49dihoKTtyZXR1cm4gZy53KG4uZGF0ZShuLmRhdGUoKStNYXRoLnJvdW5kKGUqdCkpLGgpfTtpZihjPT09dSlyZXR1cm4gdGhpcy5zZXQodSx0aGlzLiRNK3QpO2lmKGM9PT1vKXJldHVybiB0aGlzLnNldChvLHRoaXMuJHkrdCk7aWYoYz09PWkpcmV0dXJuIGQoMSk7aWYoYz09PXMpcmV0dXJuIGQoNyk7dmFyICQ9KGY9e30sZltuXT02ZTQsZltyXT0zNmU1LGZbZV09MWUzLGYpW2NdfHwxLGw9dGhpcy4kZC5nZXRUaW1lKCkrdCokO3JldHVybiBnLncobCx0aGlzKX0sJC5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSwkLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm5cIkludmFsaWQgRGF0ZVwiO3ZhciBuPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixyPWcueih0aGlzKSxpPXRoaXMuJGxvY2FsZSgpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89aS53ZWVrZGF5cyxmPWkubW9udGhzLGg9ZnVuY3Rpb24odCxyLGkscyl7cmV0dXJuIHQmJih0W3JdfHx0KGUsbikpfHxpW3JdLnN1YnN0cigwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBnLnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9aS5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Zy5zKGErMSwyLFwiMFwiKSxNTU06aChpLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Zy5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChpLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChpLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpnLnMocywyLFwiMFwiKSxoOmQoMSksaGg6ZCgyKSxhOiQocyx1LCEwKSxBOiQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpnLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpnLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Zy5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6cn07cmV0dXJuIG4ucmVwbGFjZShjLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV8fGxbdF18fHIucmVwbGFjZShcIjpcIixcIlwiKX0pfSwkLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSwkLmRpZmY9ZnVuY3Rpb24odCxmLGgpe3ZhciBjLGQ9Zy5wKGYpLCQ9dih0KSxsPTZlNCooJC51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSx5PXRoaXMtJCxNPWcubSh0aGlzLCQpO3JldHVybiBNPShjPXt9LGNbb109TS8xMixjW3VdPU0sY1thXT1NLzMsY1tzXT0oeS1sKS82MDQ4ZTUsY1tpXT0oeS1sKS84NjRlNSxjW3JdPXkvMzZlNSxjW25dPXkvNmU0LGNbZV09eS8xZTMsYylbZF18fHksaD9NOmcuYShNKX0sJC5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKHUpLiREfSwkLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gTVt0aGlzLiRMXX0sJC5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj1EKHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LCQuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gZy53KHRoaXMuJGQsdGhpcyl9LCQudG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sJC50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LCQudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSwkLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sZH0oKSxwPVMucHJvdG90eXBlO3JldHVybiB2LnByb3RvdHlwZT1wLFtbXCIkbXNcIix0XSxbXCIkc1wiLGVdLFtcIiRtXCIsbl0sW1wiJEhcIixyXSxbXCIkV1wiLGldLFtcIiRNXCIsdV0sW1wiJHlcIixvXSxbXCIkRFwiLGZdXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3BbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pLHYuZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuJGl8fCh0KGUsUyx2KSx0LiRpPSEwKSx2fSx2LmxvY2FsZT1ELHYuaXNEYXlqcz1tLHYudW5peD1mdW5jdGlvbih0KXtyZXR1cm4gdigxZTMqdCl9LHYuZW49TVt5XSx2LkxzPU0sdi5wPXt9LHZ9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=