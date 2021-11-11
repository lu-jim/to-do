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

/***/ "./src/ToDo.js":
/*!*********************!*\
  !*** ./src/ToDo.js ***!
  \*********************/
/***/ ((module) => {

eval("class ToDo {\n  constructor(description, length) {\n    this.description = description;\n    this.completed = false;\n    this.index = length;\n  }\n}\n\nmodule.exports = { ToDo };\n\n\n//# sourceURL=webpack://to-do/./src/ToDo.js?");

/***/ }),

/***/ "./src/changeList.js":
/*!***************************!*\
  !*** ./src/changeList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeList)\n/* harmony export */ });\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ \"./src/todoList.js\");\n\n\nconst changeList = (el) => {\n  if (el && el.matches('input.task-check')) {\n    const updateList = _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList();\n    updateList[el.id.replace('task-', '')].completed = !updateList[el.id.replace('task-', '')].completed;\n    localStorage.setItem('list', JSON.stringify(updateList));\n    if (updateList[el.id.replace('task-', '')].completed) {\n      el.parentElement.setAttribute('class', 'list-item list-done');\n    } else el.parentElement.setAttribute('class', 'list-item');\n  }\n};\n\n\n\n\n//# sourceURL=webpack://to-do/./src/changeList.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo.js */ \"./src/ToDo.js\");\n/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ToDo_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass todoList {\n  static getList = () => JSON.parse(localStorage.getItem('list')) || [];\n\n  //  Add task to local storage\n  static saveToDo = (task) => {\n    const list = [...todoList.getList(), JSON.parse(JSON.stringify(task))];\n    localStorage.setItem('list', JSON.stringify(list));\n  };\n\n  // Add task to DOM\n  static addTask(task) {\n    const list = document.querySelector('#to-do');\n    const entry = document.createElement('li');\n    entry.className = 'list-item';\n    let completedClass;\n    if (task.completed) {\n      completedClass = 'checked=\"checked\"';\n    } else completedClass = '';\n    entry.innerHTML = `<input type=\"checkbox\" id=\"task-${task.index}\" class=\"task-check\" ${completedClass}\"> <form class=\"description-form\" id=\"form-${task.index}\"><input type=\"text\" class=\"list-description\" id=\"description-${task.index}\" value='${task.description}'></form> <a ref=\"\" class=\"delete\" id=\"delete-${task.index}\">x</a>`;\n    list.appendChild(entry);\n    // Update value\n    document.querySelector(`#form-${task.index}`).addEventListener('submit', (e) => {\n      todoList.updateList(`${task.index}`);\n      e.preventDefault();\n      todoList.reset();\n      todoList.showToDo();\n    });\n    // Delete item\n    document.querySelector(`#delete-${task.index}`).addEventListener('click', () => {\n      todoList.deleteToDo(`${task.index}`);\n      todoList.reset();\n      todoList.showToDo();\n    });\n  }\n\n  static showToDo() {\n    const list = todoList.getList();\n    list.forEach((task) => {\n      todoList.addTask(task);\n      task.index = list.indexOf(task);\n    });\n  }\n\n  static clearField = () => {\n    document.querySelector('.list-input').value = '';\n  };\n\n  static createToDo = () => {\n    document.querySelector('#form').addEventListener('submit', (e) => {\n      const task = document.querySelector('.list-input').value;\n      const newIndex = todoList.getList().length;\n      e.preventDefault();\n\n      const todo = new _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(task, newIndex);\n      todoList.addTask(todo);\n      todoList.saveToDo(todo);\n      todoList.clearField();\n    });\n  };\n\n  static deleteToDo = (index) => {\n    let list = todoList.getList();\n    const numIndex = Number(index);\n    list = list.filter((task) => task.index !== numIndex);\n    list.forEach((task) => {\n      task.index = list.indexOf(task);\n    });\n    localStorage.setItem('list', JSON.stringify(list));\n  };\n\n  static clearCompleted = () => {\n    document.querySelector('.list-item');\n    let list = todoList.getList();\n    list = list.filter((task) => !task.completed);\n    list.forEach((task) => {\n      task.index = list.indexOf(task);\n    });\n    localStorage.setItem('list', JSON.stringify(list));\n  };\n\n  static clearAll = () => {\n    localStorage.clear();\n  };\n\n  static reset = () => {\n    document.querySelectorAll('.list-item').forEach((e) => e.remove());\n  };\n\n  static updateList = (index) => {\n    const list = todoList.getList();\n    const newDescription = document.getElementById(`description-${index}`);\n    list[`${index}`].description = newDescription.value;\n    localStorage.setItem('list', JSON.stringify(list));\n  };\n\n  static testList = () => true;\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/todoList.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/changeList.js");
/******/ 	
/******/ })()
;