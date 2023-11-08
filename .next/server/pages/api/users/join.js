"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/join";
exports.ids = ["pages/api/users/join"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/server/client.ts":
/*!******************************!*\
  !*** ./lib/server/client.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.client || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    global.client = client;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFNN0MsTUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQU0sSUFBSSxJQUFJRCx3REFBWSxFQUFFO0FBRWxELElBQUlHLElBQXNDLEVBQUU7SUFDMUNELE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0NBQ3ZCO0FBRUQsaUVBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbGliL3NlcnZlci9jbGllbnQudHM/MjFjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgY2xpZW50OiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcclxufVxyXG5cclxuY29uc3QgY2xpZW50ID0gZ2xvYmFsLmNsaWVudCB8fCBuZXcgUHJpc21hQ2xpZW50KClcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIGdsb2JhbC5jbGllbnQgPSBjbGllbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/server/client.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withHandler.ts":
/*!***********************************!*\
  !*** ./lib/server/withHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , handler , isPrivate =true  }) {\n    return async function(req, res) {\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        // if (isPrivate && !req.session.user) {\n        //   return res.status(401).json({ ok: false, error: 'Please Log in' })\n        // }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFlZSxTQUFTQSxXQUFXLENBQUMsRUFDbENDLE9BQU8sR0FDUEMsT0FBTyxHQUNQQyxTQUFTLEVBQUcsSUFBSSxHQUNMLEVBQUU7SUFDYixPQUFPLGVBQ0xDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNOO1FBQ2QsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDTSxRQUFRLENBQUNILEdBQUcsQ0FBQ0UsTUFBTSxDQUFRLEVBQUU7WUFDdEQsT0FBT0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRTtTQUM3QjtRQUNELHdDQUF3QztRQUN4Qyx1RUFBdUU7UUFDdkUsSUFBSTtRQUNKLElBQUk7WUFDRixNQUFNUCxPQUFPLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxDQUFDO1NBQ3hCLENBQUMsT0FBT0ssS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7WUFDbEIsT0FBT0wsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNLLElBQUksQ0FBQztnQkFBRUgsS0FBSzthQUFFLENBQUM7U0FDdkM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi9zZXJ2ZXIvd2l0aEhhbmRsZXIudHM/YWUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VUeXBlIHtcclxuICBvazogYm9vbGVhblxyXG4gIFtrZXk6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG50eXBlIG1ldGhvZCA9ICdHRVQnIHwgJ1BPU1QnIHwgJ0RFVEVMVEUnXHJcblxyXG5pbnRlcmZhY2UgQ29uZmlnVHlwZSB7XHJcbiAgbWV0aG9kczogbWV0aG9kW11cclxuICBoYW5kbGVyOiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHZvaWRcclxuICBpc1ByaXZhdGU/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhIYW5kbGVyKHtcclxuICBtZXRob2RzLFxyXG4gIGhhbmRsZXIsXHJcbiAgaXNQcml2YXRlID0gdHJ1ZSxcclxufTogQ29uZmlnVHlwZSkge1xyXG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoXHJcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgJiYgIW1ldGhvZHMuaW5jbHVkZXMocmVxLm1ldGhvZCBhcyBhbnkpKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKClcclxuICAgIH1cclxuICAgIC8vIGlmIChpc1ByaXZhdGUgJiYgIXJlcS5zZXNzaW9uLnVzZXIpIHtcclxuICAgIC8vICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgb2s6IGZhbHNlLCBlcnJvcjogJ1BsZWFzZSBMb2cgaW4nIH0pXHJcbiAgICAvLyB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBoYW5kbGVyKHJlcSwgcmVzKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSGFuZGxlciIsIm1ldGhvZHMiLCJoYW5kbGVyIiwiaXNQcml2YXRlIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJlbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/join.ts":
/*!*********************************!*\
  !*** ./pages/api/users/join.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    const { email , nickname , password  } = req.body;\n    const user = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n        data: {\n            email,\n            nickname,\n            password\n        }\n    });\n    return res.json({\n        ok: user ? true : false\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    methods: [\n        \"POST\"\n    ],\n    handler: handler,\n    isPrivate: false\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvam9pbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDK0M7QUFDNEI7QUFFM0UsZUFBZUUsT0FBTyxDQUNwQkMsR0FBbUIsRUFDbkJDLEdBQWtDLEVBQ2xDO0lBQ0EsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRUMsUUFBUSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtJQUM5QyxNQUFNQyxJQUFJLEdBQUcsTUFBTVQsc0VBQWtCLENBQUM7UUFDcENXLElBQUksRUFBRTtZQUNKTixLQUFLO1lBQ0xDLFFBQVE7WUFDUkMsUUFBUTtTQUNUO0tBQ0YsQ0FBQztJQUVGLE9BQU9ILEdBQUcsQ0FBQ1EsSUFBSSxDQUFDO1FBQ2RDLEVBQUUsRUFBRUosSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0tBQ3hCLENBQUM7Q0FDSDtBQUVELGlFQUFlUixtRUFBVyxDQUFDO0lBQ3pCYSxPQUFPLEVBQUU7UUFBQyxNQUFNO0tBQUM7SUFDakJaLE9BQU8sRUFBRUEsT0FBTztJQUNoQmEsU0FBUyxFQUFFLEtBQUs7Q0FDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvdXNlcnMvam9pbi50cz81MGJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uLy4uL2xpYi9zZXJ2ZXIvY2xpZW50J1xyXG5pbXBvcnQgd2l0aEhhbmRsZXIsIHsgUmVzcG9uc2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3NlcnZlci93aXRoSGFuZGxlcidcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XHJcbikge1xyXG4gIGNvbnN0IHsgZW1haWwsIG5pY2tuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcclxuICBjb25zdCB1c2VyID0gYXdhaXQgY2xpZW50LnVzZXIuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIG5pY2tuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgIG9rOiB1c2VyID8gdHJ1ZSA6IGZhbHNlLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhIYW5kbGVyKHtcclxuICBtZXRob2RzOiBbJ1BPU1QnXSxcclxuICBoYW5kbGVyOiBoYW5kbGVyLFxyXG4gIGlzUHJpdmF0ZTogZmFsc2UsXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJ3aXRoSGFuZGxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJlbWFpbCIsIm5pY2tuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwidXNlciIsImNyZWF0ZSIsImRhdGEiLCJqc29uIiwib2siLCJtZXRob2RzIiwiaXNQcml2YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/join.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/join.ts"));
module.exports = __webpack_exports__;

})();