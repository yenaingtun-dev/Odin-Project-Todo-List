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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const form = document.querySelector('#form');\nconst todoInput = document.querySelector('#todo');\nconst tasks = document.querySelector('.tasks');\n\nform.addEventListener('click', (e) => {\n    e.preventDefault();\n    if (todoInput.value !== '') {\n        const li = document.createElement('li');\n        li.innerHTML = `${todoInput.value} <button id=\"delete\">delete</button> <button id=\"complete\">complete</button>`;\n        tasks.appendChild(li)\n        todoInput.value = '';\n        const deleteTask =  document.getElementById('delete');\n        const completeTask =  document.getElementById('complete');\n        deleteTask.addEventListener('click', (e) => {\n            // console.log(li.parentNode.removeChild(li));\n        });\n        completeTask.addEventListener('click', (e) => {\n            e.target.style.textDecoration =  \"line-through\";\n        });\n    }\n})\n\n//# sourceURL=webpack://13.odin-project-todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;