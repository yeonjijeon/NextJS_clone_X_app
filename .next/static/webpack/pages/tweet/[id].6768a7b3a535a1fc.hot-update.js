"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/components/Search.tsx":
/*!*************************************!*\
  !*** ./pages/components/Search.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Search() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"bg-gray-200 rounded-full w-full py-2\",\n            placeholder: \"Search\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                height: \"1em\",\n                viewBox: \"0 0 512 512\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\INFOREX\\\\Desktop\\\\NextJS_clone_X_app\\\\pages\\\\components\\\\Search.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\INFOREX\\\\Desktop\\\\NextJS_clone_X_app\\\\pages\\\\components\\\\Search.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\INFOREX\\\\Desktop\\\\NextJS_clone_X_app\\\\pages\\\\components\\\\Search.tsx\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\INFOREX\\\\Desktop\\\\NextJS_clone_X_app\\\\pages\\\\components\\\\Search.tsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n};\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxNQUFNLEdBQUc7SUFDL0IscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLEtBQUs7a0JBQ2xCLDRFQUFDQyxPQUFLO1lBQ0pELFNBQVMsRUFBQyxzQ0FBc0M7WUFDaERFLFdBQVcsRUFBQyxRQUFRO3NCQUVwQiw0RUFBQ0MsS0FBRztnQkFDRkMsS0FBSyxFQUFDLDRCQUE0QjtnQkFDbENDLE1BQU0sRUFBQyxLQUFLO2dCQUNaQyxPQUFPLEVBQUMsYUFBYTswQkFFckIsNEVBQUNDLE1BQUk7b0JBQUNDLENBQUMsRUFBQywwT0FBME87Ozs7O3dCQUFHOzs7OztvQkFDalA7Ozs7O2dCQUNBOzs7OztZQUNKLENBQ1A7Q0FDRjtBQWpCdUJWLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2gudHN4P2IyOWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgdy1mdWxsIHB5LTJcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk00MTYgMjA4YzAgNDUuOS0xNC45IDg4LjMtNDAgMTIyLjdMNTAyLjYgNDU3LjRjMTIuNSAxMi41IDEyLjUgMzIuOCAwIDQ1LjNzLTMyLjggMTIuNS00NS4zIDBMMzMwLjcgMzc2Yy0zNC40IDI1LjItNzYuOCA0MC0xMjIuNyA0MEM5My4xIDQxNiAwIDMyMi45IDAgMjA4UzkzLjEgMCAyMDggMFM0MTYgOTMuMSA0MTYgMjA4ek0yMDggMzUyYTE0NCAxNDQgMCAxIDAgMC0yODggMTQ0IDE0NCAwIDEgMCAwIDI4OHpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2lucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJTZWFyY2giLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Search.tsx\n");

/***/ })

});