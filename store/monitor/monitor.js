/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/user-agent/index.js":
/*!******************************************!*\
  !*** ./node_modules/user-agent/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = __webpack_require__(/*! ./lib/user-agent */ \"./node_modules/user-agent/lib/user-agent.js\");\n\n//# sourceURL=webpack://monitor/./node_modules/user-agent/index.js?");

/***/ }),

/***/ "./node_modules/user-agent/lib/user-agent.js":
/*!***************************************************!*\
  !*** ./node_modules/user-agent/lib/user-agent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/*!\n * user-agent\n * Copyright(c) 2010-2011 TJ Holowaychuk.\n * Authored by TJ Holowaychuk\n * MIT Licensed\n */\n\n/**\n * Library version.\n */\n\nexports.version = '1.0.4'\n\n/**\n * Parse the given user-agent string into an object of usable data.\n *\n * Example:\n *\n *      var userAgent = require('user-agent')\n *      userAgent.parse('Mozilla/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/526.9 (KHTML, like Gecko) Version/4.0dp1 Safari/526.8')\n *      // => { name: 'safari', version: '4.0dp1', os: 'Windows XP', full: '... same string as above ...' }\n *\n * @param  {String} str\n * @return {Object}\n * @api public\n */\n\nexports.parse = function(str) {\n  var agent = { full: str, name: name(str) };\n  agent.version = version(str, agent.name);\n  agent.fullName = agent.name + ' ' + agent.version;\n  agent.os = os(str);\n  return agent;\n};\n\n/**\n * Get the browser version based on the given browser name.\n *\n * @param  {String} str\n * @param  {String} name\n * @return {String}\n * @api private\n */\n\nfunction version(str, name) {\n  if (name === 'safari') name = 'version';\n  if (name){\n\t  return new RegExp(name + '[\\\\/ ]([\\\\d\\\\w\\\\.-]+)', 'i').exec(str) && RegExp.$1 || '';\n  }else{\n\t  var m=str.match(/version[\\/ ]([\\d\\w\\.]+)/i);\n\t  return m && m.length>1 ? m[1] : '';\n  }  \n}\n\n/**\n * Supported operating systems.\n */\n\nvar operatingSystems = {\n    'iPad': /ipad/i\n  , 'iPhone': /iphone/i\n  , 'Windows Vista': /windows nt 6\\.0/i\n  , 'Windows 7': /windows nt 6\\.\\d+/i\n  , 'Windows 2003': /windows nt 5\\.2+/i\n  , 'Windows XP': /windows nt 5\\.1+/i\n  , 'Windows 2000': /windows nt 5\\.0+/i\n  , 'OS X $1.$2': /os x (\\d+)[._](\\d+)/i\n  , 'Linux': /linux/i\n  , 'Googlebot': /googlebot/i\n};\n\nvar osNames = Object.keys(operatingSystems);\n\n/**\n * Get operating system from the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction os(str) {\n  var captures;\n  for (var i = 0, len = osNames.length; i < len; ++i) {\n    if (captures = operatingSystems[osNames[i]].exec(str)) {\n      return ~osNames[i].indexOf('$1')\n        ? osNames[i].replace(/\\$(\\d+)/g, function(_, n){\n          return captures[n]\n        }) : osNames[i];\n    }\n  }\n  return '';\n}\n\n/**\n * Supported browser names.\n */\n\nvar names = [\n   'opera'\n , 'konqueror'\n , 'firefox'\n , 'chrome'\n , 'epiphany'\n , 'safari'\n , 'msie'\n , 'curl'\n];\n\n/**\n * Get browser name for the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction name(str) {\n  str = str.toLowerCase();\n  for (var i = 0, len = names.length; i < len; ++i) {\n    if (str.indexOf(names[i]) !== -1) return names[i];\n  }\n  return '';\n}\n\n\n//# sourceURL=webpack://monitor/./node_modules/user-agent/lib/user-agent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monitor_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor/index */ \"./src/monitor/index.js\");\n\n\n//# sourceURL=webpack://monitor/./src/index.js?");

/***/ }),

/***/ "./src/monitor/index.js":
/*!******************************!*\
  !*** ./src/monitor/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_jsError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jsError */ \"./src/monitor/lib/jsError.js\");\n/* harmony import */ var _lib_xhr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/xhr */ \"./src/monitor/lib/xhr.js\");\n/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/fetch */ \"./src/monitor/lib/fetch.js\");\n/* harmony import */ var _lib_blankScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/blankScreen */ \"./src/monitor/lib/blankScreen.js\");\n/* harmony import */ var _lib_timing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/timing */ \"./src/monitor/lib/timing.js\");\n/* harmony import */ var _lib_longTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/longTask */ \"./src/monitor/lib/longTask.js\");\n/* harmony import */ var _lib_pv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/pv */ \"./src/monitor/lib/pv.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_lib_jsError__WEBPACK_IMPORTED_MODULE_0__.injectJsError)();\r\n(0,_lib_xhr__WEBPACK_IMPORTED_MODULE_1__.injectXHR)();\r\n(0,_lib_fetch__WEBPACK_IMPORTED_MODULE_2__.injectFetch)();\r\n(0,_lib_blankScreen__WEBPACK_IMPORTED_MODULE_3__.blankScreen)();\r\n(0,_lib_timing__WEBPACK_IMPORTED_MODULE_4__.timing)();\r\n(0,_lib_longTask__WEBPACK_IMPORTED_MODULE_5__.longTask)();\r\n(0,_lib_pv__WEBPACK_IMPORTED_MODULE_6__.pv)();\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/index.js?");

/***/ }),

/***/ "./src/monitor/lib/blankScreen.js":
/*!****************************************!*\
  !*** ./src/monitor/lib/blankScreen.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blankScreen: () => (/* binding */ blankScreen)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_onload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/onload */ \"./src/monitor/utils/onload.js\");\n\r\n\r\n\r\nfunction blankScreen() {\r\n    let wrapperElements = ['html', 'body', 'app-workbench', '.work-bench'];\r\n    let emptyPoints = 0;\r\n    function getSelector(element) {\r\n        const { id, className, nodeName } = element;\r\n        if (id) {\r\n            return '#' + id;\r\n        } else if (className) {\r\n            // 过滤空白符 + 拼接\r\n            return (\r\n                '.' +\r\n                className\r\n                    .split(' ')\r\n                    .filter((item) => !!item)\r\n                    .join('.')\r\n            );\r\n        } else {\r\n            return nodeName.toLowerCase();\r\n        }\r\n    }\r\n    function isWrapper(element) {\r\n        let selector = getSelector(element);\r\n        // if (wrapperElements.indexOf(selector) !== -1) {\r\n        if (wrapperElements.includes(selector)) {\r\n            emptyPoints++;\r\n        }\r\n    }\r\n    // 刚开始页面内容为空，等页面渲染完成，再去做判断\r\n    (0,_utils_onload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\r\n        let xElements, yElements;\r\n        for (let i = 0; i < 9; i++) {\r\n            xElements = document.elementsFromPoint(\r\n                (window.innerWidth * i) / 10,\r\n                window.innerHeight / 2\r\n            );\r\n            yElements = document.elementsFromPoint(\r\n                window.innerWidth / 2,\r\n                (window.innerHeight * i) / 10\r\n            );\r\n            isWrapper(xElements[0]);\r\n            isWrapper(yElements[0]);\r\n        }\r\n        // 白屏\r\n        if (emptyPoints >= 0) {\r\n            const centerElements = document.elementsFromPoint(\r\n                window.innerWidth / 2,\r\n                window.innerHeight / 2\r\n            );\r\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\r\n                kind: 'stability',\r\n                type: 'blank',\r\n                emptyPoints: emptyPoints + '',\r\n                screen: window.screen.width + 'X' + window.screen.height,\r\n                viewPoint: window.innerWidth + 'X' + window.innerHeight,\r\n                selector: getSelector(centerElements[0]),\r\n            });\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/lib/blankScreen.js?");

/***/ }),

/***/ "./src/monitor/lib/fetch.js":
/*!**********************************!*\
  !*** ./src/monitor/lib/fetch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   injectFetch: () => (/* binding */ injectFetch)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\r\n\r\nfunction injectFetch () {\r\n    let oldFetch = window.fetch;\r\n\r\n    function hijackFetch (url, options) {\r\n        let startTime = Date.now();\r\n        return new Promise((resolve, reject) => {\r\n            oldFetch.apply(this, [url, options]).then(async response => {\r\n                // response 为流数据\r\n                const oldResponseJson = response.__proto__.json;\r\n                response.__proto__.json = function(...responseRest) {\r\n                    return new Promise((responseResolve, responseReject) => {\r\n                        oldResponseJson.apply(this, responseRest).then(result => {\r\n                            responseResolve(result);\r\n                        }, (responseRejection) => {\r\n                            // 接口\r\n                            sendLogData({\r\n                                url,\r\n                                startTime,\r\n                                statusText: response.statusText,\r\n                                status: response.status,\r\n                                eventType: 'error',\r\n                                response: responseRejection.stack,\r\n                                options\r\n                            })\r\n                            responseReject(responseRejection)\r\n                        })\r\n                    })\r\n                }\r\n                resolve(response)\r\n            }, rejection => {\r\n                // 连接未连接上\r\n                sendLogData({\r\n                    url,\r\n                    startTime,\r\n                    eventType: 'load',\r\n                    response: rejection.stack,\r\n                    options\r\n                })\r\n                reject(rejection)\r\n            })\r\n        })\r\n    }\r\n    window.fetch = hijackFetch;\r\n}\r\n\r\nconst sendLogData = ({\r\n    startTime,\r\n    statusText = '',\r\n    status = '',\r\n    eventType,\r\n    url,\r\n    options,\r\n    response,\r\n}) => {\r\n    // 持续时间\r\n    let duration = Date.now() - startTime;\r\n    const { method = 'get', body } = options || {}\r\n    _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\r\n        kind: \"stability\",\r\n        type: \"fetch\",\r\n        eventType: eventType,\r\n        pathname: url,\r\n        status: status + \"-\" + statusText, // 状态码\r\n        duration,\r\n        response: response ? JSON.stringify(response) : \"\", // 响应体\r\n        method,\r\n        params: body || \"\", // 入参\r\n    });\r\n}\n\n//# sourceURL=webpack://monitor/./src/monitor/lib/fetch.js?");

/***/ }),

/***/ "./src/monitor/lib/jsError.js":
/*!************************************!*\
  !*** ./src/monitor/lib/jsError.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   injectJsError: () => (/* binding */ injectJsError)\n/* harmony export */ });\n/* harmony import */ var _utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getLastEvent */ \"./src/monitor/utils/getLastEvent.js\");\n/* harmony import */ var _utils_getSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getSelector */ \"./src/monitor/utils/getSelector.js\");\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\r\n\r\n\r\n\r\nfunction injectJsError() {\r\n  // 监听全局未捕获的错误\r\n  window.addEventListener(\r\n    \"error\",\r\n    (event) => {\r\n      console.log(\"error+++++++++++\", event);\r\n      let lastEvent = (0,_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // 获取到最后一个交互事件\r\n      // 脚本加载错误\r\n      if (event.target && (event.target.src || event.target.href)) {\r\n        _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send({\r\n          kind: \"stability\", // 监控指标的大类，稳定性\r\n          type: \"error\", // 小类型，这是一个错误\r\n          errorType: \"resourceError\", // js执行错误\r\n          filename: event.target.src || event.target.href, // 哪个文件报错了\r\n          tagName: event.target.tagName,\r\n          selector: (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event.target), // 代表最后一个操作的元素\r\n        });\r\n      } else {\r\n        _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send({\r\n          kind: \"stability\", // 监控指标的大类，稳定性\r\n          type: \"error\", // 小类型，这是一个错误\r\n          errorType: \"jsError\", // js执行错误\r\n          message: event.message, // 报错信息\r\n          filename: event.filename, // 哪个文件报错了\r\n          position: `${event.lineno}:${event.colno}`, // 报错的行列位置\r\n          stack: getLines(event.error.stack),\r\n          selector: lastEvent ? (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEvent.path) : \"\", // 代表最后一个操作的元素\r\n        });\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  window.addEventListener(\r\n    \"unhandledrejection\",\r\n    (event) => {\r\n      console.log(\"unhandledrejection-------- \", event);\r\n      let lastEvent = (0,_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // 获取到最后一个交互事件\r\n      let message;\r\n      let filename;\r\n      let line = 0;\r\n      let column = 0;\r\n      let stack = \"\";\r\n      let reason = event.reason;\r\n      if (typeof reason === \"string\") {\r\n        message = reason;\r\n      } else if (typeof reason === \"object\") {\r\n        message = reason.message;\r\n        if (reason.stack) {\r\n          let matchResult = reason.stack.match(/at\\s+(.+):(\\d+):(\\d+)/);\r\n          filename = matchResult[1];\r\n          line = matchResult[2];\r\n          column = matchResult[3];\r\n        }\r\n        stack = getLines(reason.stack);\r\n      }\r\n      _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send({\r\n        kind: \"stability\", // 监控指标的大类，稳定性\r\n        type: \"error\", // 小类型，这是一个错误\r\n        errorType: \"promiseError\", // js执行错误\r\n        message, // 报错信息\r\n        filename, // 哪个文件报错了\r\n        position: `${line}:${column}`, // 报错的行列位置\r\n        stack,\r\n        selector: lastEvent ? (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEvent.path) : \"\", // 代表最后一个操作的元素\r\n      });\r\n    },\r\n    true\r\n  );\r\n}\r\n\r\nfunction getLines(stack) {\r\n  return stack\r\n    .split(\"\\n\")\r\n    .slice(1)\r\n    .map((item) => item.replace(/^\\s+at\\s+/g, \"\"))\r\n    .join(\"^\");\r\n}\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/lib/jsError.js?");

/***/ }),

/***/ "./src/monitor/lib/longTask.js":
/*!*************************************!*\
  !*** ./src/monitor/lib/longTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   longTask: () => (/* binding */ longTask)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_formatTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/formatTime */ \"./src/monitor/utils/formatTime.js\");\n/* harmony import */ var _utils_getLastEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getLastEvent */ \"./src/monitor/utils/getLastEvent.js\");\n/* harmony import */ var _utils_getSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getSelector */ \"./src/monitor/utils/getSelector.js\");\n\r\n\r\n\r\n\r\n\r\nfunction longTask() {\r\n    new PerformanceObserver((list) => {\r\n        list.getEntries().forEach((entry) => {\r\n            if (entry.duration > 100) {\r\n                let lastEvent = (0,_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n                requestIdleCallback(() => {\r\n                    _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\r\n                        kind: 'experience',\r\n                        type: 'longTask',\r\n                        eventType: lastEvent ? lastEvent.type : '',\r\n                        startTime: (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(entry.startTime), // 开始时间\r\n                        duration: (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(entry.duration), // 持续时间\r\n                        selector: lastEvent\r\n                            ? (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(lastEvent.path || lastEvent.target)\r\n                            : '',\r\n                    });\r\n                });\r\n            }\r\n        });\r\n    }).observe({ entryTypes: ['longtask'] });\r\n}\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/lib/longTask.js?");

/***/ }),

/***/ "./src/monitor/lib/pv.js":
/*!*******************************!*\
  !*** ./src/monitor/lib/pv.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pv: () => (/* binding */ pv)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\r\nfunction pv() {\r\n  var connection = navigator.connection;\r\n  _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\r\n    kind: \"business\",\r\n    type: \"pv\",\r\n    effectiveType: connection.effectiveType, //网络环境\r\n    rtt: connection.rtt, //往返时间\r\n    screen: `${window.screen.width}x${window.screen.height}`, //设备分辨率\r\n  });\r\n  let startTime = Date.now();\r\n  window.addEventListener(\r\n    \"unload\",\r\n    () => {\r\n      let stayTime = Date.now() - startTime;\r\n      _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\r\n        kind: \"business\",\r\n        type: \"stayTime\",\r\n        stayTime,\r\n      });\r\n    },\r\n    false\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/lib/pv.js?");

/***/ }),

/***/ "./src/monitor/lib/timing.js":
/*!***********************************!*\
  !*** ./src/monitor/lib/timing.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timing: () => (/* binding */ timing)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_onload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/onload */ \"./src/monitor/utils/onload.js\");\n/* harmony import */ var _utils_formatTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/formatTime */ \"./src/monitor/utils/formatTime.js\");\n/* harmony import */ var _utils_getLastEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getLastEvent */ \"./src/monitor/utils/getLastEvent.js\");\n/* harmony import */ var _utils_getSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getSelector */ \"./src/monitor/utils/getSelector.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction timing() {\r\n    let FMP, LCP;\r\n    // 增加一个性能条目的观察者\r\n    new PerformanceObserver((entryList, observer) => {\r\n        const perfEntries = entryList.getEntries();\r\n        FMP = perfEntries[0];\r\n        observer.disconnect(); // 不再观察了\r\n    }).observe({ entryTypes: ['element'] }); // 观察页面中有意义的元素\r\n    // 增加一个性能条目的观察者\r\n    new PerformanceObserver((entryList, observer) => {\r\n        const perfEntries = entryList.getEntries();\r\n        const lastEntry = perfEntries[perfEntries.length - 1];\r\n        LCP = lastEntry;\r\n        observer.disconnect(); // 不再观察了\r\n    }).observe({ entryTypes: ['largest-contentful-paint'] }); // 观察页面中最大的元素\r\n    // 增加一个性能条目的观察者\r\n    new PerformanceObserver((entryList, observer) => {\r\n        const lastEvent = (0,_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n        const firstInput = entryList.getEntries()[0];\r\n        if (firstInput) {\r\n            // 开始处理的时间 - 开始点击的时间，差值就是处理的延迟\r\n            let inputDelay = firstInput.processingStart - firstInput.startTime;\r\n            let duration = firstInput.duration; // 处理的耗时\r\n            if (inputDelay > 0 || duration > 0) {\r\n                _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\r\n                    kind: 'experience', // 用户体验指标\r\n                    type: 'firstInputDelay', // 首次输入延迟\r\n                    inputDelay: inputDelay ? (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(inputDelay) : 0, // 延迟的时间\r\n                    duration: duration ? (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(duration) : 0,\r\n                    startTime: firstInput.startTime, // 开始处理的时间\r\n                    selector: lastEvent\r\n                        ? (0,_utils_getSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(lastEvent.path || lastEvent.target)\r\n                        : '',\r\n                });\r\n            }\r\n        }\r\n        observer.disconnect(); // 不再观察了\r\n    }).observe({ type: 'first-input', buffered: true }); // 第一次交互\r\n\r\n    // 刚开始页面内容为空，等页面渲染完成，再去做判断\r\n    (0,_utils_onload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\r\n        setTimeout(() => {\r\n            const {\r\n                fetchStart,\r\n                connectStart,\r\n                connectEnd,\r\n                requestStart,\r\n                responseStart,\r\n                responseEnd,\r\n                domLoading,\r\n                domInteractive,\r\n                domContentLoadedEventStart,\r\n                domContentLoadedEventEnd,\r\n                loadEventStart,\r\n            } = window.performance.timing;\r\n            // 发送时间指标\r\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\r\n                kind: 'experience', // 用户体验指标\r\n                type: 'timing', // 统计每个阶段的时间\r\n                connectTime: connectEnd - connectStart, // TCP连接耗时\r\n                ttfbTime: responseStart - requestStart, // 首字节到达时间\r\n                responseTime: responseEnd - responseStart, // response响应耗时\r\n                parseDOMTime: loadEventStart - domLoading, // DOM解析渲染的时间\r\n                domContentLoadedTime:\r\n                    domContentLoadedEventEnd - domContentLoadedEventStart, // DOMContentLoaded事件回调耗时\r\n                timeToInteractive: domInteractive - fetchStart, // 首次可交互时间\r\n                loadTime: loadEventStart - fetchStart, // 完整的加载时间\r\n            });\r\n            // 发送性能指标\r\n            let FP = performance.getEntriesByName('first-paint')[0];\r\n            let FCP = performance.getEntriesByName('first-contentful-paint')[0];\r\n            console.log('FP', FP);\r\n            console.log('FCP', FCP);\r\n            console.log('FMP', FMP);\r\n            console.log('LCP', LCP);\r\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\r\n                kind: 'experience',\r\n                type: 'paint',\r\n                firstPaint: FP ? (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(FP.startTime) : 0,\r\n                firstContentPaint: FCP ? (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(FCP.startTime) : 0,\r\n                firstMeaningfulPaint: FMP ? (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(FMP.startTime) : 0,\r\n                largestContentfulPaint: LCP\r\n                    ? (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(LCP.renderTime || LCP.loadTime)\r\n                    : 0,\r\n            });\r\n        }, 3000);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/lib/timing.js?");

/***/ }),

/***/ "./src/monitor/lib/xhr.js":
/*!********************************!*\
  !*** ./src/monitor/lib/xhr.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   injectXHR: () => (/* binding */ injectXHR)\n/* harmony export */ });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\r\n\r\nfunction injectXHR() {\r\n  let XMLHttpRequest = window.XMLHttpRequest;\r\n  let oldOpen = XMLHttpRequest.prototype.open;\r\n  XMLHttpRequest.prototype.open = function (method, url, async) {\r\n    // 把上报接口过滤掉\r\n    if (!url.match(/logstores/) && !url.match(/sockjs/)) {\r\n      this.logData = { method, url, async };\r\n    }\r\n    return oldOpen.apply(this, arguments);\r\n  };\r\n  let oldSend = XMLHttpRequest.prototype.send;\r\n  XMLHttpRequest.prototype.send = function (body) {\r\n    if (this.logData) {\r\n      let startTime = Date.now();\r\n      let handler = (type) => (event) => {\r\n        // 持续时间\r\n        let duration = Date.now() - startTime;\r\n        let status = this.status;\r\n        let statusText = this.statusText;\r\n        _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\r\n          kind: \"stability\",\r\n          type: \"xhr\",\r\n          eventType: type,\r\n          pathname: this.logData.url,\r\n          status: status + \"-\" + statusText, // 状态码\r\n          duration,\r\n          response: this.response ? JSON.stringify(this.response) : \"\", // 响应体\r\n          params: body || \"\", // 入参\r\n        });\r\n      };\r\n      this.addEventListener(\"load\", handler(\"load\"), false);\r\n      this.addEventListener(\"error\", handler, false);\r\n      this.addEventListener(\"abort\", handler, false);\r\n    }\r\n    return oldSend.apply(this, arguments);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/lib/xhr.js?");

/***/ }),

/***/ "./src/monitor/utils/formatTime.js":
/*!*****************************************!*\
  !*** ./src/monitor/utils/formatTime.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((time) => new Date(time).getTime());\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/formatTime.js?");

/***/ }),

/***/ "./src/monitor/utils/getLastEvent.js":
/*!*******************************************!*\
  !*** ./src/monitor/utils/getLastEvent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet lastEvent;\r\n\r\n[\"click\", \"touchstart\", \"mousedown\", \"keydown\", \"mouseover\"].forEach(\r\n  (eventType) => {\r\n    document.addEventListener(\r\n      eventType,\r\n      (event) => {\r\n        lastEvent = event;\r\n      },\r\n      {\r\n        capture: true, // 是在捕获阶段还是冒泡阶段执行\r\n        passive: true, // 默认不阻止默认事件\r\n      }\r\n    );\r\n  }\r\n);\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  return lastEvent;\r\n}\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/getLastEvent.js?");

/***/ }),

/***/ "./src/monitor/utils/getSelector.js":
/*!******************************************!*\
  !*** ./src/monitor/utils/getSelector.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getSelectors(path) {\r\n    // 反转 + 过滤 + 映射 + 拼接\r\n    return path\r\n        .reverse()\r\n        .filter((element) => {\r\n            return element !== document && element !== window;\r\n        })\r\n        .map((element) => {\r\n            let selector = '';\r\n            if (element.id) {\r\n                return `${element.nodeName.toLowerCase()}#${element.id}`;\r\n            } else if (\r\n                element.className &&\r\n                typeof element.className === 'string'\r\n            ) {\r\n                return `${element.nodeName.toLowerCase()}.${element.className}`;\r\n            } else {\r\n                selector = element.nodeName.toLowerCase();\r\n            }\r\n            return selector;\r\n        })\r\n        .join(' ');\r\n}\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(pathsOrTarget) {\r\n    if (Array.isArray(pathsOrTarget)) {\r\n        return getSelectors(pathsOrTarget);\r\n    } else {\r\n        let path = [];\r\n        while (pathsOrTarget) {\r\n            path.push(pathsOrTarget);\r\n            pathsOrTarget = pathsOrTarget.parentNode;\r\n        }\r\n        return getSelectors(path);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/getSelector.js?");

/***/ }),

/***/ "./src/monitor/utils/onload.js":
/*!*************************************!*\
  !*** ./src/monitor/utils/onload.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {\r\n  if (document.readyState === \"complete\") {\r\n    callback();\r\n  } else {\r\n    window.addEventListener(\"load\", callback);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/onload.js?");

/***/ }),

/***/ "./src/monitor/utils/tracker.js":
/*!**************************************!*\
  !*** ./src/monitor/utils/tracker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 主机\r\nlet host = '127.0.0.1:3000';\r\n// 项目名\r\nlet project = 'monitor';\r\n// 存储名\r\nlet logstore = 'monitor-store';\r\nlet userAgent = __webpack_require__(/*! user-agent */ \"./node_modules/user-agent/index.js\");\r\n\r\nconst colorHash = {\r\n    fetch: {\r\n        color: '#c41d7f',\r\n        background: '#fff0f6',\r\n    },\r\n    error: {\r\n        color: 'red',\r\n        background: 'white',\r\n    },\r\n    longTask: {\r\n        color: '#d4b106',\r\n        background: '#feffe6',\r\n    },\r\n    pv: {\r\n        color: '#d46b08',\r\n        background: '#fff7e6',\r\n    },\r\n    stayTime: {\r\n        color: '#08979c',\r\n        background: '#e6fffb',\r\n    },\r\n    firstInputDelay: {\r\n        color: '#389e0d',\r\n        background: '#f6ffed',\r\n    },\r\n    timing: {\r\n        color: '#096dd9',\r\n        background: '#e6f7ff',\r\n    },\r\n    paint: {\r\n        color: '#531dab',\r\n        background: '#f9f0ff',\r\n    },\r\n    xhr: {\r\n        color: '#1d39c4',\r\n        background: '#f0f5ff',\r\n    },\r\n    blank: {\r\n        color: '#d4380d',\r\n        background: '#fffbe6',\r\n    },\r\n    other4: {\r\n        color: '#7cb305',\r\n        background: '#fcffe6',\r\n    },\r\n    other5: {\r\n        color: '#cf1322',\r\n        background: '#fff1f0',\r\n    },\r\n};\r\n\r\nfunction getExtraData() {\r\n    return {\r\n        title: document.title,\r\n        url: location.href,\r\n        timestamp: Date.now(),\r\n        userAgent: userAgent.parse(navigator.userAgent).name,\r\n    };\r\n}\r\n\r\nclass SendTracker {\r\n    constructor() {\r\n        // 上报的路径\r\n        this.url = `http://${host}/${project}/logstores/${logstore}/track`;\r\n        this.xhr = new XMLHttpRequest();\r\n    }\r\n    send(data = {}) {\r\n        let extraData = getExtraData();\r\n        let log = { ...data, ...extraData };\r\n        // 阿里云要求值不能为数字\r\n        for (const key in log) {\r\n            if (typeof log[key] === 'number') {\r\n                log[key] = `${log[key]}`;\r\n            }\r\n        }\r\n        const { color, background } = colorHash[log.type];\r\n        console.log(\r\n            `%c${log.type}`,\r\n            `color:${color};background:${background};padding:0 7px;border-radius:2px;border: 1px solid ${color};font-size:14px;`,\r\n            log\r\n        );\r\n        // 接入日志系统，此处以阿里云为例\r\n        let body = JSON.stringify({\r\n            __logs__: [log],\r\n        });\r\n        this.xhr.open('POST', this.url, true);\r\n        this.xhr.setRequestHeader('Content-Type', 'application/json');\r\n        this.xhr.setRequestHeader('x-log-apiversion', '1.0.0');\r\n        this.xhr.setRequestHeader('x-log-bodyrawsize', body.length);\r\n        this.xhr.onload = function () {\r\n            console.log(this.xhr.response);\r\n        };\r\n        this.xhr.onerror = function (error) {\r\n            console.log('日志入库错误');\r\n        };\r\n        this.xhr.send(body);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SendTracker());\r\n\n\n//# sourceURL=webpack://monitor/./src/monitor/utils/tracker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;