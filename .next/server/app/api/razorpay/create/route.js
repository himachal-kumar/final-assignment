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
exports.id = "app/api/razorpay/create/route";
exports.ids = ["app/api/razorpay/create/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frazorpay%2Fcreate%2Froute&page=%2Fapi%2Frazorpay%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frazorpay%2Fcreate%2Froute.ts&appDir=%2FUsers%2F75waymacmini25%2FDesktop%2Fngo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2F75waymacmini25%2FDesktop%2Fngo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frazorpay%2Fcreate%2Froute&page=%2Fapi%2Frazorpay%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frazorpay%2Fcreate%2Froute.ts&appDir=%2FUsers%2F75waymacmini25%2FDesktop%2Fngo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2F75waymacmini25%2FDesktop%2Fngo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_75waymacmini25_Desktop_ngo_src_app_api_razorpay_create_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/razorpay/create/route.ts */ \"(rsc)/./src/app/api/razorpay/create/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/razorpay/create/route\",\n        pathname: \"/api/razorpay/create\",\n        filename: \"route\",\n        bundlePath: \"app/api/razorpay/create/route\"\n    },\n    resolvedPagePath: \"/Users/75waymacmini25/Desktop/ngo/src/app/api/razorpay/create/route.ts\",\n    nextConfigOutput,\n    userland: _Users_75waymacmini25_Desktop_ngo_src_app_api_razorpay_create_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/razorpay/create/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyYXpvcnBheSUyRmNyZWF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmF6b3JwYXklMkZjcmVhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyYXpvcnBheSUyRmNyZWF0ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRjc1d2F5bWFjbWluaTI1JTJGRGVza3RvcCUyRm5nbyUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkY3NXdheW1hY21pbmkyNSUyRkRlc2t0b3AlMkZuZ28maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDc0I7QUFDbkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZ28vP2Q3ODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzLzc1d2F5bWFjbWluaTI1L0Rlc2t0b3AvbmdvL3NyYy9hcHAvYXBpL3Jhem9ycGF5L2NyZWF0ZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmF6b3JwYXkvY3JlYXRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmF6b3JwYXkvY3JlYXRlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yYXpvcnBheS9jcmVhdGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvNzV3YXltYWNtaW5pMjUvRGVza3RvcC9uZ28vc3JjL2FwcC9hcGkvcmF6b3JwYXkvY3JlYXRlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3Jhem9ycGF5L2NyZWF0ZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frazorpay%2Fcreate%2Froute&page=%2Fapi%2Frazorpay%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frazorpay%2Fcreate%2Froute.ts&appDir=%2FUsers%2F75waymacmini25%2FDesktop%2Fngo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2F75waymacmini25%2FDesktop%2Fngo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/razorpay/create/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/razorpay/create/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var razorpay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! razorpay */ \"(rsc)/./node_modules/razorpay/dist/razorpay.js\");\n/* harmony import */ var razorpay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(razorpay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/order */ \"(rsc)/./src/models/order.ts\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/user */ \"(rsc)/./src/models/user.ts\");\n\n\n\n\n\n// Razorpay instance\nconst razorpay = new (razorpay__WEBPACK_IMPORTED_MODULE_1___default())({\n    key_id: \"rzp_test_1FGhUyAJx6vnYE\",\n    key_secret: \"c62L38n5PxbRhgbLkEJjmY9U\"\n});\nasync function POST(req) {\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    try {\n        const body = await req.json();\n        const { totalAmount, userId, campaignId, fundingPlanId } = body;\n        if (!userId) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Authentication required\"\n            }, {\n                status: 401\n            });\n        }\n        if (!campaignId) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Campaign ID is required\"\n            }, {\n                status: 400\n            });\n        }\n        if (!fundingPlanId) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Funding Plan ID is required\"\n            }, {\n                status: 400\n            });\n        }\n        const totalAmountInt = parseInt(totalAmount);\n        if (!totalAmountInt || totalAmountInt <= 0) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Invalid amount\"\n            }, {\n                status: 400\n            });\n        }\n        // Create order in Razorpay\n        const options = {\n            amount: totalAmountInt * 100,\n            currency: \"INR\",\n            receipt: `receipt_${Date.now()}`\n        };\n        const order = await razorpay.orders.create(options);\n        // Create pending order in DB\n        const newOrder = new _models_order__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            user: userId,\n            campaign: campaignId,\n            fundingPlan: fundingPlanId,\n            amount: totalAmountInt,\n            status: \"pending\"\n        });\n        await newOrder.save();\n        // Link order to user\n        await _models_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findByIdAndUpdate(userId, {\n            $push: {\n                orders: newOrder._id\n            }\n        });\n        // Response: Razorpay order + our DB orderId\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: true,\n            razorpayOrder: order,\n            orderId: newOrder._id\n        });\n    } catch (error) {\n        console.error(\"Error creating Razorpay order:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: error.error?.description || \"Error creating payment order\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yYXpvcnBheS9jcmVhdGUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNYO0FBQ007QUFDSDtBQUNGO0FBRWpDLG9CQUFvQjtBQUNwQixNQUFNSyxXQUFXLElBQUlKLGlEQUFRQSxDQUFDO0lBQzVCSyxRQUFRQyx5QkFBMkI7SUFDbkNHLFlBQVlILDBCQUErQjtBQUM3QztBQUVPLGVBQWVLLEtBQUtDLEdBQVk7SUFDckMsTUFBTVgsd0RBQVNBO0lBRWYsSUFBSTtRQUNGLE1BQU1ZLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQixNQUFNLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBRSxHQUFHTDtRQUUzRCxJQUFJLENBQUNHLFFBQVE7WUFDWCxPQUFPakIsa0ZBQVlBLENBQUNlLElBQUksQ0FBQztnQkFBRUssU0FBUztZQUEwQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDakY7UUFFQSxJQUFJLENBQUNILFlBQVk7WUFDZixPQUFPbEIsa0ZBQVlBLENBQUNlLElBQUksQ0FBQztnQkFBRUssU0FBUztZQUEwQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDakY7UUFFQSxJQUFJLENBQUNGLGVBQWU7WUFDbEIsT0FBT25CLGtGQUFZQSxDQUFDZSxJQUFJLENBQUM7Z0JBQUVLLFNBQVM7WUFBOEIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JGO1FBRUEsTUFBTUMsaUJBQWlCQyxTQUFTUDtRQUNoQyxJQUFJLENBQUNNLGtCQUFrQkEsa0JBQWtCLEdBQUc7WUFDMUMsT0FBT3RCLGtGQUFZQSxDQUFDZSxJQUFJLENBQUM7Z0JBQUVLLFNBQVM7WUFBaUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3hFO1FBRUEsMkJBQTJCO1FBQzNCLE1BQU1HLFVBQVU7WUFDZEMsUUFBUUgsaUJBQWlCO1lBQ3pCSSxVQUFVO1lBQ1ZDLFNBQVMsQ0FBQyxRQUFRLEVBQUVDLEtBQUtDLEdBQUcsR0FBRyxDQUFDO1FBQ2xDO1FBRUEsTUFBTUMsUUFBUSxNQUFNekIsU0FBUzBCLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUjtRQUUzQyw2QkFBNkI7UUFDN0IsTUFBTVMsV0FBVyxJQUFJOUIscURBQUtBLENBQUM7WUFDekIrQixNQUFNakI7WUFDTmtCLFVBQVVqQjtZQUNWa0IsYUFBYWpCO1lBQ2JNLFFBQVFIO1lBQ1JELFFBQVE7UUFDVjtRQUVBLE1BQU1ZLFNBQVNJLElBQUk7UUFFbkIscUJBQXFCO1FBQ3JCLE1BQU1qQyxvREFBSUEsQ0FBQ2tDLGlCQUFpQixDQUFDckIsUUFBUTtZQUNuQ3NCLE9BQU87Z0JBQUVSLFFBQVFFLFNBQVNPLEdBQUc7WUFBQztRQUNoQztRQUVBLDRDQUE0QztRQUM1QyxPQUFPeEMsa0ZBQVlBLENBQUNlLElBQUksQ0FBQztZQUN2QjBCLFNBQVM7WUFDVEMsZUFBZVo7WUFDZmEsU0FBU1YsU0FBU08sR0FBRztRQUN2QjtJQUNGLEVBQUUsT0FBT0ksT0FBWTtRQUNuQkMsUUFBUUQsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDaEQsT0FBTzVDLGtGQUFZQSxDQUFDZSxJQUFJLENBQ3RCO1lBQUVLLFNBQVN3QixNQUFNQSxLQUFLLEVBQUVFLGVBQWU7UUFBK0IsR0FDdEU7WUFBRXpCLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmdvLy4vc3JjL2FwcC9hcGkvcmF6b3JwYXkvY3JlYXRlL3JvdXRlLnRzP2MwZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgUmF6b3JwYXkgZnJvbSBcInJhem9ycGF5XCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIkAvbW9kZWxzL29yZGVyXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvdXNlclwiO1xuXG4vLyBSYXpvcnBheSBpbnN0YW5jZVxuY29uc3QgcmF6b3JwYXkgPSBuZXcgUmF6b3JwYXkoe1xuICBrZXlfaWQ6IHByb2Nlc3MuZW52LlJBWk9SUEFZX0tFWV9JRCBhcyBzdHJpbmcsXG4gIGtleV9zZWNyZXQ6IHByb2Nlc3MuZW52LlJBWk9SUEFZX0tFWV9TRUNSRVQgYXMgc3RyaW5nXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3QgeyB0b3RhbEFtb3VudCwgdXNlcklkLCBjYW1wYWlnbklkLCBmdW5kaW5nUGxhbklkIH0gPSBib2R5O1xuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiQXV0aGVudGljYXRpb24gcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICAgIH1cblxuICAgIGlmICghY2FtcGFpZ25JZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJDYW1wYWlnbiBJRCBpcyByZXF1aXJlZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFmdW5kaW5nUGxhbklkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkZ1bmRpbmcgUGxhbiBJRCBpcyByZXF1aXJlZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdG90YWxBbW91bnRJbnQgPSBwYXJzZUludCh0b3RhbEFtb3VudCk7XG4gICAgaWYgKCF0b3RhbEFtb3VudEludCB8fCB0b3RhbEFtb3VudEludCA8PSAwKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgYW1vdW50XCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgb3JkZXIgaW4gUmF6b3JwYXlcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgYW1vdW50OiB0b3RhbEFtb3VudEludCAqIDEwMCwgLy8gYW1vdW50IGluIHBhaXNlXG4gICAgICBjdXJyZW5jeTogXCJJTlJcIixcbiAgICAgIHJlY2VpcHQ6IGByZWNlaXB0XyR7RGF0ZS5ub3coKX1gLFxuICAgIH07XG5cbiAgICBjb25zdCBvcmRlciA9IGF3YWl0IHJhem9ycGF5Lm9yZGVycy5jcmVhdGUob3B0aW9ucyk7XG5cbiAgICAvLyBDcmVhdGUgcGVuZGluZyBvcmRlciBpbiBEQlxuICAgIGNvbnN0IG5ld09yZGVyID0gbmV3IE9yZGVyKHtcbiAgICAgIHVzZXI6IHVzZXJJZCxcbiAgICAgIGNhbXBhaWduOiBjYW1wYWlnbklkLFxuICAgICAgZnVuZGluZ1BsYW46IGZ1bmRpbmdQbGFuSWQsXG4gICAgICBhbW91bnQ6IHRvdGFsQW1vdW50SW50LFxuICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IG5ld09yZGVyLnNhdmUoKTtcblxuICAgIC8vIExpbmsgb3JkZXIgdG8gdXNlclxuICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodXNlcklkLCB7XG4gICAgICAkcHVzaDogeyBvcmRlcnM6IG5ld09yZGVyLl9pZCB9LFxuICAgIH0pO1xuXG4gICAgLy8gUmVzcG9uc2U6IFJhem9ycGF5IG9yZGVyICsgb3VyIERCIG9yZGVySWRcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHJhem9ycGF5T3JkZXI6IG9yZGVyLFxuICAgICAgb3JkZXJJZDogbmV3T3JkZXIuX2lkLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIFJhem9ycGF5IG9yZGVyOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBtZXNzYWdlOiBlcnJvci5lcnJvcj8uZGVzY3JpcHRpb24gfHwgXCJFcnJvciBjcmVhdGluZyBwYXltZW50IG9yZGVyXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJSYXpvcnBheSIsImRiQ29ubmVjdCIsIk9yZGVyIiwiVXNlciIsInJhem9ycGF5Iiwia2V5X2lkIiwicHJvY2VzcyIsImVudiIsIlJBWk9SUEFZX0tFWV9JRCIsImtleV9zZWNyZXQiLCJSQVpPUlBBWV9LRVlfU0VDUkVUIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwidG90YWxBbW91bnQiLCJ1c2VySWQiLCJjYW1wYWlnbklkIiwiZnVuZGluZ1BsYW5JZCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJ0b3RhbEFtb3VudEludCIsInBhcnNlSW50Iiwib3B0aW9ucyIsImFtb3VudCIsImN1cnJlbmN5IiwicmVjZWlwdCIsIkRhdGUiLCJub3ciLCJvcmRlciIsIm9yZGVycyIsImNyZWF0ZSIsIm5ld09yZGVyIiwidXNlciIsImNhbXBhaWduIiwiZnVuZGluZ1BsYW4iLCJzYXZlIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCIkcHVzaCIsIl9pZCIsInN1Y2Nlc3MiLCJyYXpvcnBheU9yZGVyIiwib3JkZXJJZCIsImVycm9yIiwiY29uc29sZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/razorpay/create/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// lib/mongodb.ts\n\nconst MONGODB_URI = \"mongodb://localhost:27017/ngo_db\";\nif (!MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\n// Prevent multiple connections in dev\nlet isConnected = false;\nconst connectDB = async ()=>{\n    if (isConnected) {\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI);\n        isConnected = true;\n        console.log(\"✅ MongoDB connected\");\n    } catch (err) {\n        console.error(\"❌ MongoDB connection error:\", err);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUJBQWlCO0FBQ2U7QUFFaEMsTUFBTUMsY0FBY0Msa0NBQXVCO0FBRTNDLElBQUksQ0FBQ0QsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFFQSxzQ0FBc0M7QUFDdEMsSUFBSUMsY0FBYztBQUVsQixNQUFNQyxZQUFZO0lBQ2hCLElBQUlELGFBQWE7UUFDZjtJQUNGO0lBRUEsSUFBSTtRQUNGLE1BQU1MLHVEQUFnQixDQUFDQztRQUN2QkksY0FBYztRQUNkRyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLEtBQUs7UUFDWkYsUUFBUUcsS0FBSyxDQUFDLCtCQUErQkQ7SUFDL0M7QUFDRjtBQUVBLGlFQUFlSixTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmdvLy4vc3JjL2xpYi9tb25nb2RiLnRzPzUzYzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL21vbmdvZGIudHNcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIik7XG59XG5cbi8vIFByZXZlbnQgbXVsdGlwbGUgY29ubmVjdGlvbnMgaW4gZGV2XG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZTtcblxuY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkkpO1xuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcIuKchSBNb25nb0RCIGNvbm5lY3RlZFwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6XCIsIGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0REIiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/order.ts":
/*!*****************************!*\
  !*** ./src/models/order.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// models/order.ts\n\nconst OrderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    user: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    campaign: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Campaign\",\n        required: true\n    },\n    fundingPlan: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"FundingPlan\",\n        required: true\n    },\n    amount: {\n        type: Number,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"pending\",\n            \"paid\",\n            \"failed\"\n        ],\n        default: \"pending\"\n    },\n    paymentId: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Order || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", OrderSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL29yZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtCQUFrQjtBQUNvQztBQWF0RCxNQUFNRSxjQUFjLElBQUlELDRDQUFNQSxDQUM1QjtJQUNFRSxNQUFNO1FBQUVDLE1BQU1ILDRDQUFNQSxDQUFDSSxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztRQUFRQyxVQUFVO0lBQUs7SUFDakVDLFVBQVU7UUFBRUwsTUFBTUgsNENBQU1BLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO1FBQVlDLFVBQVU7SUFBSztJQUN6RUUsYUFBYTtRQUFFTixNQUFNSCw0Q0FBTUEsQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRO1FBQUVDLEtBQUs7UUFBZUMsVUFBVTtJQUFLO0lBQy9FRyxRQUFRO1FBQUVQLE1BQU1RO1FBQVFKLFVBQVU7SUFBSztJQUN2Q0ssUUFBUTtRQUNOVCxNQUFNVTtRQUNOQyxNQUFNO1lBQUM7WUFBVztZQUFRO1NBQVM7UUFDbkNDLFNBQVM7SUFDWDtJQUNBQyxXQUFXO1FBQUViLE1BQU1VO0lBQU87QUFDNUIsR0FDQTtJQUFFSSxZQUFZO0FBQUs7QUFHckIsaUVBQWVsQix3REFBZSxDQUFDb0IsS0FBSyxJQUNsQ3BCLHFEQUFjLENBQVMsU0FBU0UsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25nby8uL3NyYy9tb2RlbHMvb3JkZXIudHM/YzZjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2RlbHMvb3JkZXIudHNcbmltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50IH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9yZGVyIGV4dGVuZHMgRG9jdW1lbnQge1xuICB1c2VyOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZDsgICAgICAgIC8vIHJlZmVyZW5jZSB0byBVc2VyXG4gIGNhbXBhaWduOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZDsgICAgLy8gcmVmZXJlbmNlIHRvIENhbXBhaWduXG4gIGZ1bmRpbmdQbGFuOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZDsgLy8gcmVmZXJlbmNlIHRvIEZ1bmRpbmdQbGFuXG4gIGFtb3VudDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgLy8gdG90YWwgYW1vdW50IHBhaWRcbiAgc3RhdHVzOiBcInBlbmRpbmdcIiB8IFwicGFpZFwiIHwgXCJmYWlsZWRcIjsgLy8gcGF5bWVudCBzdGF0dXNcbiAgcGF5bWVudElkPzogc3RyaW5nOyAgICAgICAgICAgICAgICAgICAvLyBSYXpvcnBheSAvIFN0cmlwZSAvIGN1c3RvbSBwYXltZW50IGlkXG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5jb25zdCBPcmRlclNjaGVtYSA9IG5ldyBTY2hlbWE8SU9yZGVyPihcbiAge1xuICAgIHVzZXI6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiVXNlclwiLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGNhbXBhaWduOiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIkNhbXBhaWduXCIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgZnVuZGluZ1BsYW46IHsgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiRnVuZGluZ1BsYW5cIiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBhbW91bnQ6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHN0YXR1czoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZW51bTogW1wicGVuZGluZ1wiLCBcInBhaWRcIiwgXCJmYWlsZWRcIl0sXG4gICAgICBkZWZhdWx0OiBcInBlbmRpbmdcIixcbiAgICB9LFxuICAgIHBheW1lbnRJZDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fFxuICBtb25nb29zZS5tb2RlbDxJT3JkZXI+KFwiT3JkZXJcIiwgT3JkZXJTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiT3JkZXJTY2hlbWEiLCJ1c2VyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsImNhbXBhaWduIiwiZnVuZGluZ1BsYW4iLCJhbW91bnQiLCJOdW1iZXIiLCJzdGF0dXMiLCJTdHJpbmciLCJlbnVtIiwiZGVmYXVsdCIsInBheW1lbnRJZCIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJPcmRlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/order.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBRTNELE1BQU1HLGFBQWEsSUFBSUgsNENBQU1BLENBQUM7SUFDNUJJLE1BQU07UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3JDQyxPQUFPO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7UUFBTUUsUUFBUTtJQUFLO0lBQ3BEQyxVQUFVO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztBQUMzQztBQUVBLE1BQU1JLE9BQU9ULDRDQUFNQSxDQUFDUyxJQUFJLElBQUlWLCtDQUFLQSxDQUFDLFFBQVFFO0FBRTFDLGlFQUFlUSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmdvLy4vc3JjL21vZGVscy91c2VyLnRzPzhiNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxufSk7XG5cbmNvbnN0IFVzZXIgPSBtb2RlbHMuVXNlciB8fCBtb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJcbiJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsIlVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/razorpay","vendor-chunks/asynckit","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/call-bind-apply-helpers","vendor-chunks/debug","vendor-chunks/get-proto","vendor-chunks/mime-db","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/form-data","vendor-chunks/follow-redirects","vendor-chunks/axios","vendor-chunks/supports-color","vendor-chunks/proxy-from-env","vendor-chunks/mime-types","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/has-flag","vendor-chunks/get-intrinsic","vendor-chunks/es-set-tostringtag","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/delayed-stream","vendor-chunks/combined-stream"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frazorpay%2Fcreate%2Froute&page=%2Fapi%2Frazorpay%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frazorpay%2Fcreate%2Froute.ts&appDir=%2FUsers%2F75waymacmini25%2FDesktop%2Fngo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2F75waymacmini25%2FDesktop%2Fngo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();