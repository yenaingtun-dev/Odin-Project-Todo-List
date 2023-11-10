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

eval("const todos = [];\nlet count = 0;\nconst form = document.querySelector('#todo_form');\nconst lists = document.querySelector('.todo_lists');\nform.addEventListener('submit', createTask);\n\nclass Todo {\n    constructor(todo) {\n        console.log(todo);\n    }\n}\n\n// create tasks\nfunction createTask(e) {\n    e.preventDefault();\n    let task = document.getElementById('todo');\n    todoLists(task.value);\n    task.value = '';\n}\n\n// add task to todo\nfunction todoLists(task) {\n    todos.push(task);\n    appendTodo(task);\n}\n\n// append todo to view\nfunction appendTodo(task) {\n    const listItem = document.createElement('li');\n    listItem.textContent = task;\n    listItem.id = count++;\n    listItem.classList.add('todo_list');\n    lists.appendChild(listItem);\n}\n\ntodos.forEach(list => {\n    console.log(list);\n    list.addEventListener('click', toggleTask(list.id));\n});\n\nfunction toggleTask(id) {\n    console.log(id);\n}\n\n//# sourceURL=webpack://13.odin-project-todo-list/./src/index.js?");

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