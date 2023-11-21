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

eval("const form = document.querySelector('#form');\nconst todoInput = document.querySelector('#todo');\nconst todoList = document.querySelector('.tasks');\n\nform.addEventListener(\"submit\", addTodo);\n\nfunction addTodo(e){\n    e.preventDefault();\n    const todoDiv = document.createElement(\"div\");\n    todoDiv.classList.add('todo', 'flex', 'justify-between', 'items-center', 'bg-yellow-200', 'text-gray-500', 'rounded-lg', 'px-3', 'py-1', 'mb-2');\n    const newTodo = document.createElement(\"li\");\n    newTodo.classList.add(\"todo-item\");\n    newTodo.innerText = todoInput.value;\n    todoDiv.appendChild(newTodo);\n    todoInput.value = \"\";\n    const btnDiv = document.createElement(\"div\");\n    // complete button\n    const completedButton = document.createElement(\"button\");\n    completedButton.innerHTML = `complete`;\n    completedButton.classList.add('complete-btn', 'bg-teal-200', 'px-2', 'py-1', 'mr-1', 'rounded-lg', 'text-teal-600', 'hover:bg-teal-300', 'text-xs');\n    btnDiv.appendChild(completedButton);\n    completedButton.addEventListener('click', (e) => {\n        if (newTodo.style.textDecoration == 'line-through') {\n            newTodo.style.textDecoration = 'none';\n            todoDiv.style.backgroundColor = 'yellow';\n            completedButton.innerHTML = 'complete';\n        } else {\n            newTodo.style.textDecoration = 'line-through';\n            todoDiv.style.backgroundColor = 'green';\n            completedButton.innerHTML = 'completed';\n        }\n    });\n    //trash button\n    const trashButton = document.createElement(\"button\");\n    trashButton.innerHTML = `delete`;\n    trashButton.classList.add('trash-btn', 'bg-rose-200', 'px-2', 'py-1', 'rounded-lg', 'text-rose-600', 'hover:bg-rose-300', 'text-xs');\n    btnDiv.appendChild(trashButton);\n    trashButton.addEventListener('click', () => {\n        if (confirm(\"Delete a todo!\") == true) {\n            newTodo.parentNode.remove();\n        }\n    });\n    todoDiv.append(btnDiv);\n    //attach final Todo\n    todoList.appendChild(todoDiv);\n}\n\n\n//# sourceURL=webpack://13.odin-project-todo-list/./src/index.js?");

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