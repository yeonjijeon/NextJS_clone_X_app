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
exports.id = "pages/api/post/[id]/like";
exports.ids = ["pages/api/post/[id]/like"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

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

/***/ "(api)/./lib/server/withSession.ts":
/*!***********************************!*\
  !*** ./lib/server/withSession.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookieOptions = {\n    cookieName: \"xAppSession\",\n    password: process.env.COOKIE_PASSWORD\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieOptions);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhTZXNzaW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJEO0FBWTNELE1BQU1DLGFBQWEsR0FBRztJQUNwQkMsVUFBVSxFQUFFLGFBQWE7SUFDekJDLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7Q0FDdEM7QUFFTSxTQUFTQyxjQUFjLENBQUNDLEVBQU8sRUFBRTtJQUN0QyxPQUFPUiwwRUFBdUIsQ0FBQ1EsRUFBRSxFQUFFUCxhQUFhLENBQUM7Q0FDbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbGliL3NlcnZlci93aXRoU2Vzc2lvbi50cz82ZjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlIH0gZnJvbSAnaXJvbi1zZXNzaW9uL25leHQnXHJcblxyXG5kZWNsYXJlIG1vZHVsZSAnaXJvbi1zZXNzaW9uJyB7XHJcbiAgaW50ZXJmYWNlIElyb25TZXNzaW9uRGF0YSB7XHJcbiAgICB1c2VyPzoge1xyXG4gICAgICBpZDogbnVtYmVyXHJcbiAgICAgIG5pY2tuYW1lOiBzdHJpbmdcclxuICAgICAgZW1haWw6IHN0cmluZ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29va2llT3B0aW9ucyA9IHtcclxuICBjb29raWVOYW1lOiAneEFwcFNlc3Npb24nLFxyXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5DT09LSUVfUEFTU1dPUkQhLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aEFwaVNlc3Npb24oZm46IGFueSkge1xyXG4gIHJldHVybiB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZShmbiwgY29va2llT3B0aW9ucylcclxufVxyXG4iXSwibmFtZXMiOlsid2l0aElyb25TZXNzaW9uQXBpUm91dGUiLCJjb29raWVPcHRpb25zIiwiY29va2llTmFtZSIsInBhc3N3b3JkIiwicHJvY2VzcyIsImVudiIsIkNPT0tJRV9QQVNTV09SRCIsIndpdGhBcGlTZXNzaW9uIiwiZm4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/server/withSession.ts\n");

/***/ }),

/***/ "(api)/./pages/api/post/[id]/like.ts":
/*!*************************************!*\
  !*** ./pages/api/post/[id]/like.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n/* harmony import */ var _lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/server/withSession */ \"(api)/./lib/server/withSession.ts\");\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const { query: { id  } , session: { user  } ,  } = req;\n    const aleradyExists = await _lib_server_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].like.findFirst({\n        where: {\n            postId: +id.toString(),\n            userId: user === null || user === void 0 ? void 0 : user.id\n        }\n    });\n    if (aleradyExists) {\n        await _lib_server_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].like[\"delete\"]({\n            where: {\n                id: aleradyExists.id\n            }\n        });\n    } else {\n        await _lib_server_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].like.create({\n            data: {\n                user: {\n                    connect: {\n                        id: user === null || user === void 0 ? void 0 : user.id\n                    }\n                },\n                post: {\n                    connect: {\n                        id: +id.toString()\n                    }\n                }\n            }\n        });\n    }\n    res.json({\n        ok: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__.withApiSession)((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"POST\"\n    ],\n    handler\n})));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9baWRdL2xpa2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM4RTtBQUNYO0FBQ2pCO0FBRWxELGVBQWVHLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLE1BQU0sRUFDSkMsS0FBSyxFQUFFLEVBQUVDLEVBQUUsR0FBRSxHQUNiQyxPQUFPLEVBQUUsRUFBRUMsSUFBSSxHQUFFLEtBQ2xCLEdBQUdMLEdBQUc7SUFFUCxNQUFNTSxhQUFhLEdBQUcsTUFBTVIseUVBQXFCLENBQUM7UUFDaERXLEtBQUssRUFBRTtZQUNMQyxNQUFNLEVBQUUsQ0FBQ1AsRUFBRSxDQUFDUSxRQUFRLEVBQUU7WUFDdEJDLE1BQU0sRUFBRVAsSUFBSSxhQUFKQSxJQUFJLFdBQUksR0FBUkEsS0FBQUEsQ0FBUSxHQUFSQSxJQUFJLENBQUVGLEVBQUU7U0FDakI7S0FDRixDQUFDO0lBRUYsSUFBSUcsYUFBYSxFQUFFO1FBQ2pCLE1BQU1SLHlFQUFrQixDQUFDO1lBQ3ZCVyxLQUFLLEVBQUU7Z0JBQ0xOLEVBQUUsRUFBRUcsYUFBYSxDQUFDSCxFQUFFO2FBQ3JCO1NBQ0YsQ0FBQztLQUNILE1BQU07UUFDTCxNQUFNTCxzRUFBa0IsQ0FBQztZQUN2QmlCLElBQUksRUFBRTtnQkFDSlYsSUFBSSxFQUFFO29CQUNKVyxPQUFPLEVBQUU7d0JBQ1BiLEVBQUUsRUFBRUUsSUFBSSxhQUFKQSxJQUFJLFdBQUksR0FBUkEsS0FBQUEsQ0FBUSxHQUFSQSxJQUFJLENBQUVGLEVBQUU7cUJBQ2I7aUJBQ0Y7Z0JBQ0RjLElBQUksRUFBRTtvQkFDSkQsT0FBTyxFQUFFO3dCQUNQYixFQUFFLEVBQUUsQ0FBQ0EsRUFBRSxDQUFDUSxRQUFRLEVBQUU7cUJBQ25CO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7SUFFRFYsR0FBRyxDQUFDaUIsSUFBSSxDQUFDO1FBQ1BDLEVBQUUsRUFBRSxJQUFJO0tBQ1QsQ0FBQztDQUNIO0FBRUQsaUVBQWV0Qix1RUFBYyxDQUMzQkQsbUVBQVcsQ0FBQztJQUNWd0IsT0FBTyxFQUFFO1FBQUMsTUFBTTtLQUFDO0lBQ2pCckIsT0FBTztDQUNSLENBQUMsQ0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvcG9zdC9baWRdL2xpa2UudHM/ZTcyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHdpdGhIYW5kbGVyLCB7IFJlc3BvbnNlVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zZXJ2ZXIvd2l0aEhhbmRsZXInXHJcbmltcG9ydCB7IHdpdGhBcGlTZXNzaW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3NlcnZlci93aXRoU2Vzc2lvbidcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi8uLi8uLi9saWIvc2VydmVyL2NsaWVudCdcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XHJcbikge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICBzZXNzaW9uOiB7IHVzZXIgfSxcclxuICB9ID0gcmVxXHJcblxyXG4gIGNvbnN0IGFsZXJhZHlFeGlzdHMgPSBhd2FpdCBjbGllbnQubGlrZS5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgcG9zdElkOiAraWQudG9TdHJpbmcoKSxcclxuICAgICAgdXNlcklkOiB1c2VyPy5pZCxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgaWYgKGFsZXJhZHlFeGlzdHMpIHtcclxuICAgIGF3YWl0IGNsaWVudC5saWtlLmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGFsZXJhZHlFeGlzdHMuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBhd2FpdCBjbGllbnQubGlrZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgY29ubmVjdDoge1xyXG4gICAgICAgICAgICBpZDogdXNlcj8uaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zdDoge1xyXG4gICAgICAgICAgY29ubmVjdDoge1xyXG4gICAgICAgICAgICBpZDogK2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVzLmpzb24oe1xyXG4gICAgb2s6IHRydWUsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwaVNlc3Npb24oXHJcbiAgd2l0aEhhbmRsZXIoe1xyXG4gICAgbWV0aG9kczogWydQT1NUJ10sXHJcbiAgICBoYW5kbGVyLFxyXG4gIH0pXHJcbilcclxuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwid2l0aEFwaVNlc3Npb24iLCJjbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsInNlc3Npb24iLCJ1c2VyIiwiYWxlcmFkeUV4aXN0cyIsImxpa2UiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInBvc3RJZCIsInRvU3RyaW5nIiwidXNlcklkIiwiZGVsZXRlIiwiY3JlYXRlIiwiZGF0YSIsImNvbm5lY3QiLCJwb3N0IiwianNvbiIsIm9rIiwibWV0aG9kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/[id]/like.ts\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(\n      req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(\n      context.req,\n      context.res,\n      sessionOptions\n    );\n    Object.defineProperty(\n      context.req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMEJBQTBCLDREQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0Ysa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbm9kZV9tb2R1bGVzL2lyb24tc2Vzc2lvbi9uZXh0L2Rpc3QvaW5kZXgubWpzPzg0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC9pbmRleC50c1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIHNyYy9nZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uLnRzXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzZXNzaW9uKTtcbiAgICAgIGN1cnJlbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2Vzc2lvbltrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbmV4dC9pbmRleC50c1xuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEFwaUhhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKHJlcSwgcmVzKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhyZXEsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgcmVxLFxuICAgICAgXCJzZXNzaW9uXCIsXG4gICAgICBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pXG4gICAgKTtcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XG4gIH07XG59XG5mdW5jdGlvbiB3aXRoSXJvblNlc3Npb25Tc3IoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEdldFNlcnZlclNpZGVQcm9wc0hhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2Vzc2lvbk9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBhd2FpdCBvcHRpb25zKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKFxuICAgICAgY29udGV4dC5yZXEsXG4gICAgICBjb250ZXh0LnJlcyxcbiAgICAgIHNlc3Npb25PcHRpb25zXG4gICAgKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICBjb250ZXh0LnJlcSxcbiAgICAgIFwic2Vzc2lvblwiLFxuICAgICAgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKVxuICAgICk7XG4gICAgcmV0dXJuIGhhbmRsZXIoY29udGV4dCk7XG4gIH07XG59XG5leHBvcnQge1xuICB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSxcbiAgd2l0aElyb25TZXNzaW9uU3NyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post/[id]/like.ts"));
module.exports = __webpack_exports__;

})();