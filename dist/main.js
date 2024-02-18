/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayResults: () => (/* binding */ displayResults)\n/* harmony export */ });\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n\r\n\r\nasync function displayResults(data) {\r\n  const bookList = document.getElementById(\"bookList\");\r\n  bookList.innerHTML = \"\";\r\n\r\n  data.works.forEach((work) => {\r\n    const title = work.title ? work.title : \"Titolo non disponibile\";\r\n    const authors = work.authors\r\n      ? work.authors.map((author) => author.name).join(\", \")\r\n      : \"Autori non disponibili\";\r\n    const coverUrl = work.cover_id\r\n      ? `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`\r\n      : \"no-cover.jpg\";\r\n\r\n    const listItem = document.createElement(\"li\");\r\n    listItem.classList.add(\"book-item\");\r\n\r\n    const coverImage = document.createElement(\"img\");\r\n    coverImage.src = coverUrl;\r\n    coverImage.alt = \"Copertina del libro\";\r\n    coverImage.classList.add(\"book-cover\");\r\n    listItem.appendChild(coverImage);\r\n\r\n    const bookDetails = document.createElement(\"div\");\r\n    bookDetails.classList.add(\"book-details\");\r\n\r\n    const titleElement = document.createElement(\"strong\");\r\n    titleElement.textContent = title;\r\n    bookDetails.appendChild(titleElement);\r\n\r\n    const authorsElement = document.createElement(\"p\");\r\n    authorsElement.textContent = \"Autori: \" + authors;\r\n    bookDetails.appendChild(authorsElement);\r\n\r\n    listItem.appendChild(bookDetails);\r\n\r\n    listItem.addEventListener(\"click\", async () => {\r\n      const modal = document.getElementById(\"modal\");\r\n      modal.style.display = \"block\";\r\n\r\n      const modalDescription = document.getElementById(\"modalDescription\");\r\n      try {\r\n        const bookResponse = await fetch(\r\n          `https://openlibrary.org${work.key}.json`\r\n        );\r\n        if (bookResponse.ok) {\r\n          const bookData = await bookResponse.json();\r\n          let description = \"Descrizione non disponibile\";\r\n          if (bookData.description && bookData.description.value) {\r\n            description = bookData.description.value;\r\n          }\r\n          modalDescription.textContent = description;\r\n        } else {\r\n          throw new Error(\"Errore nel caricamento della descrizione del libro\");\r\n        }\r\n      } catch (error) {\r\n        console.error(\r\n          \"Errore nel caricamento della descrizione del libro:\",\r\n          error\r\n        );\r\n        modalDescription.textContent = \"Descrizione non disponibile\";\r\n      }\r\n    });\r\n\r\n    bookList.appendChild(listItem);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://correzzione-progetto/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  const searchButton = document.getElementById(\"searchButton\");\r\n  searchButton.addEventListener(\"click\", _search_js__WEBPACK_IMPORTED_MODULE_0__.searchBooks);\r\n\r\n  const closeModal = document.querySelector(\".close\");\r\n  closeModal.addEventListener(\"click\", function () {\r\n    const modal = document.getElementById(\"modal\");\r\n    modal.style.display = \"none\";\r\n  });\r\n\r\n  document.addEventListener(\"keydown\", function (event) {\r\n    const modal = document.getElementById(\"modal\");\r\n    if (event.key === \"Escape\" && modal.style.display === \"block\") {\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  window.addEventListener(\"click\", function (event) {\r\n    const modal = document.getElementById(\"modal\");\r\n    if (event.target === modal) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  const categoryInput = document.getElementById(\"categoryInput\");\r\n  categoryInput.addEventListener(\"keydown\", function (event) {\r\n    if (event.key === \"Enter\") {\r\n      (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.searchBooks)();\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://correzzione-progetto/./src/index.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchBooks: () => (/* binding */ searchBooks)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\r\n\r\nasync function searchBooks() {\r\n  const category = document.getElementById(\"categoryInput\").value.trim();\r\n\r\n  try {\r\n    const response = await fetch(\r\n      `https://openlibrary.org/subjects/${category}.json`\r\n    );\r\n    if (!response.ok) {\r\n      throw new Error(\"Errore nella ricerca dei libri\");\r\n    }\r\n    const data = await response.json();\r\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.displayResults)(data);\r\n  } catch (error) {\r\n    console.error(\"Errore nella ricerca dei libri:\", error);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://correzzione-progetto/./src/search.js?");

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