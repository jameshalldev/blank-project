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

/***/ "./src/tm-shopify-tools.scss":
/*!***********************************!*\
  !*** ./src/tm-shopify-tools.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/tm-shopify-tools.css\");\n\n//# sourceURL=webpack://tm-shopify-tools/./src/tm-shopify-tools.scss?");

/***/ }),

/***/ "./src/tm-shopify-tools.js":
/*!*********************************!*\
  !*** ./src/tm-shopify-tools.js ***!
  \*********************************/
/***/ (() => {

eval("window.addEventListener('DOMContentLoaded', (event) => {\n    // Elements\n    const tmst = document.querySelector('[data-tmst]'),\n          tmstToggle = tmst.querySelector('[data-tmst-toggle]'),\n          tmstCustomizeTheme = tmst.querySelector('[data-customize-theme]'),\n          tmstCurrentUrl = tmst.querySelector('[data-current-url]'),\n          tmstClose = tmst.querySelector('[data-tmst-close]'),\n          tmstPreviewBar = document.getElementById('preview-bar-iframe'),\n          tmstPreviewBarToggle = document.querySelector('[data-preview-bar-toggle]'),\n          tmstUrlCopyAnchors = document.querySelectorAll('[data-url-copy]');\n\n    // General toggle\n    (function() {\n        if (!tmst || !tmstToggle) return;\n        let tmstActive = false;\n\n        tmstToggle.addEventListener('click', (e) => {\n\n            if (tmstCustomizeTheme && e.ctrlKey || e.metaKey) {\n                let customizeUrl = tmstCustomizeTheme.getAttribute('href');\n                window.open(customizeUrl, '_blank').focus();\n                return;\n            }\n\n            if (e.shiftKey) {\n                let currentUrl = tmstCurrentUrl.getAttribute('data-url');\n                if (currentUrl) navigator.clipboard.writeText(currentUrl);\n                return;\n            }\n\n            if (tmstActive) {\n                tmst.classList.remove('tmst--active');\n                tmstActive = false;\n            } else {\n                tmst.classList.add('tmst--active');\n                tmstActive = true;\n            }\n        });\n\n        window.addEventListener('click', (event) => {\n            if (tmstActive && event.target.closest('div.tmst') == null) {\n                tmst.classList.remove('tmst--active');\n                tmstActive = false;\n            }\n        })\n    })();\n\n    // Close\n    (function() {\n        if (!tmst || !tmstClose) return;\n        tmstClose.addEventListener('click', () => {\n            tmst.remove();\n        });\n    })();\n\n    // Toggle Shopify's native preview bar\n    (function() {\n        window.onload = () => {\n            if (window.location.href.includes('127.0.0.1:9292') && tmstPreviewBarToggle) {\n                tmstPreviewBarToggle.remove();\n            }\n\n            if (!tmstPreviewBar || !tmstPreviewBarToggle) return;\n            \n            let tmstPreviewBarVisibility = 'hidden';\n            tmstPreviewBar.style.display = 'none';\n            tmstPreviewBarToggle.addEventListener('click', () => {\n                if (tmstPreviewBarVisibility == 'hidden') {\n                    tmstPreviewBarVisibility = 'visible';\n                    tmstPreviewBar.style.display = 'block';\n                    tmstPreviewBarToggle.classList.add('tmst-item-active');\n                } else {\n                    tmstPreviewBarVisibility = 'hidden';\n                    tmstPreviewBar.style.display = 'none';\n                    tmstPreviewBarToggle.classList.remove('tmst-item-active');\n                }\n            });\n        }\n    })();\n\n    // Update Copy and Go buttons on theme selection\n    (function() {\n        if (!tmstUrlCopyAnchors) return;\n        tmstUrlCopyAnchors.forEach((anchor) => {\n            anchor.addEventListener('click', () => {\n                let dataUrl = anchor.getAttribute('data-url');\n                if (dataUrl) navigator.clipboard.writeText(dataUrl);\n            });\n        });\n    })();\n});\n\n\n//# sourceURL=webpack://tm-shopify-tools/./src/tm-shopify-tools.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/tm-shopify-tools.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/tm-shopify-tools.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;