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

eval("const form = document.querySelector(\"#form\");\nconst todoInput = document.querySelector(\"#todo\");\nconst todoDescription = document.querySelector(\"#description\");\nconst todoUrgent = document.querySelector(\"#urgent\");\nconst todoNotUrgent = document.querySelector(\"#notUrgent\");\nconst todoDueDate = document.querySelector(\"#dueDate\");\nconst todoList = document.querySelector(\".tasks\");\nconst formModal = document.querySelector(\"#formModal\");\nconst formBackground = document.querySelector(\"#formBackground\");\n\ndocument.addEventListener(\"DOMContentLoaded\", getTodos);\nform.addEventListener(\"submit\", addTodo);\n\nfunction addTodo(e) {\n    e.preventDefault();\n    if (todoInput.value !== \"\" && todoDueDate.value !== \"\") {\n        const todoDiv = document.createElement(\"div\");\n        todoDiv.classList.add(\n            \"todo\",\n            \"flex\",\n            \"justify-between\",\n            \"space-x-3\",\n            \"bg-white\",\n            \"rounded-lg\",\n            \"px-3\",\n            \"py-3\",\n            \"mb-2\"\n        );\n        const textDiv = document.createElement(\"div\");\n        const newTodo = document.createElement(\"li\");\n        if (todoNotUrgent.checked) {\n            newTodo.classList.add(\n                \"todo-item\",\n                \"w-28\",\n                \"font-semibold\",\n                \"uppercase\"\n            );\n        } else {\n            newTodo.classList.add(\n                \"todo-item\",\n                \"text-red-300\",\n                \"w-28\",\n                \"font-semibold\",\n                \"uppercase\"\n            );\n        }\n        const newTodoDescription = document.createElement(\"p\");\n        newTodoDescription.classList.add(\"text-xs\", \"my-1\", \"sm:w-80\");\n        const newTodoDueDate = document.createElement(\"p\");\n        newTodoDueDate.classList.add(\"text-xs\", \"underline\");\n        newTodo.innerText = todoInput.value;\n        newTodoDescription.innerHTML = todoDescription.value;\n        newTodoDueDate.innerHTML = todoDueDate.value;\n        textDiv.appendChild(newTodo);\n        textDiv.appendChild(newTodoDescription);\n        textDiv.appendChild(newTodoDueDate);\n        todoDiv.append(textDiv);\n        newTodo.addEventListener(\"dblclick\", (e) => {\n            const editTodo = prompt(\"edit todo\", newTodo.innerHTML);\n            if (editTodo !== null && editTodo !== \"\") {\n                newTodo.innerHTML = editTodo;\n            }\n        });\n        todoInput.value = \"\";\n        todoDescription.value = \"\";\n        todoDueDate.value = \"\";\n        const btnDiv = document.createElement(\"div\");\n        // complete button\n        const completedButton = document.createElement(\"button\");\n        completedButton.innerHTML = `complete`;\n        completedButton.classList.add(\n            \"complete-btn\",\n            \"bg-[#BDE0FE]\",\n            \"px-2\",\n            \"py-1\",\n            \"mr-1\",\n            \"rounded-lg\",\n            \"hover:text-white\",\n            \"hover:bg-[#A2D2FF]\",\n            \"text-xs\"\n        );\n        btnDiv.appendChild(completedButton);\n        let isCompleted = false;\n        completedButton.addEventListener(\"click\", (e) => {\n            if (newTodo.style.textDecoration == \"line-through\") {\n                newTodo.style.textDecoration = \"none\";\n                todoDiv.style.backgroundColor = \"white\";\n                completedButton.innerHTML = \"complete\";\n                removeLocalTodos(e.target);\n                saveLocalTodos({\n                    id: newTodoId,\n                    title: newTodo.innerHTML,\n                    description: newTodoDescription.innerHTML,\n                    duedate: newTodoDueDate.innerHTML,\n                    notUrgent: todoNotUrgent.checked,\n                    urgent: todoUrgent.checked,\n                    completed: false,\n                });\n            } else {\n                newTodo.style.textDecoration = \"line-through\";\n                todoDiv.style.backgroundColor = \"#CDB4DB\";\n                completedButton.innerHTML = \"completed\";\n                removeLocalTodos(e.target);\n                saveLocalTodos({\n                    id: newTodoId,\n                    title: newTodo.innerHTML,\n                    description: newTodoDescription.innerHTML,\n                    duedate: newTodoDueDate.innerHTML,\n                    notUrgent: todoNotUrgent.checked,\n                    urgent: todoUrgent.checked,\n                    completed: false,\n                });\n            }\n        });\n        //trash button\n        const trashButton = document.createElement(\"button\");\n        trashButton.innerHTML = `delete`;\n        trashButton.classList.add(\n            \"trash-btn\",\n            \"bg-[#FFC8DD]\",\n            \"px-2\",\n            \"py-1\",\n            \"rounded-lg\",\n            \"hover:text-white\",\n            \"hover:bg-[#FFAFCC]\",\n            \"text-xs\"\n        );\n        btnDiv.appendChild(trashButton);\n        trashButton.addEventListener(\"click\", (e) => {\n            if (confirm(\"Delete a todo!\") == true) {\n                removeTodo(e);\n            }\n        });\n        todoDiv.append(btnDiv);\n        //attach final Todo\n        todoList.appendChild(todoDiv);\n        formModal.style.display = \"none\";\n        formBackground.style.display = \"none\";\n        const newTodoId = Math.random().toString(16).slice(2);\n        saveLocalTodos({\n            id: newTodoId,\n            title: newTodo.innerHTML,\n            description: newTodoDescription.innerHTML,\n            duedate: newTodoDueDate.innerHTML,\n            notUrgent: todoNotUrgent.checked,\n            urgent: todoUrgent.checked,\n            completed: isCompleted,\n        });\n    } else {\n        if (todoInput.value === \"\") {\n            alert(\"u need to add todo\");\n        } else if (todoDueDate.value === \"\") {\n            alert(\"u need to add due date\");\n        } else {\n            alert(\"u need to fill form\");\n        }\n    }\n}\n\nfunction getTodos() {\n    let todos;\n    if (localStorage.getItem(\"todos\") === null) {\n        todos = [];\n    } else {\n        todos = JSON.parse(localStorage.getItem(\"todos\"));\n    }\n    todos.forEach(function (todo) {\n        const todoDiv = document.createElement(\"div\");\n        todoDiv.classList.add(\n            \"todo\",\n            \"flex\",\n            \"justify-between\",\n            \"space-x-3\",\n            \"bg-white\",\n            \"rounded-lg\",\n            \"px-3\",\n            \"py-3\",\n            \"mb-2\"\n        );\n        const textDiv = document.createElement(\"div\");\n        const newTodo = document.createElement(\"li\");\n        if (todo.notUrgent) {\n            newTodo.classList.add(\n                \"todo-item\",\n                \"w-28\",\n                \"font-semibold\",\n                \"uppercase\"\n            );\n        } else {\n            newTodo.classList.add(\n                \"todo-item\",\n                \"text-red-300\",\n                \"w-28\",\n                \"font-semibold\",\n                \"uppercase\"\n            );\n        }\n        const newTodoDescription = document.createElement(\"p\");\n        newTodoDescription.classList.add(\"text-xs\", \"my-1\", \"sm:w-80\");\n        const newTodoDueDate = document.createElement(\"p\");\n        newTodoDueDate.classList.add(\"text-xs\", \"underline\");\n        newTodo.innerText = todo.title;\n        newTodoDescription.innerHTML = todo.description;\n        newTodoDueDate.innerHTML = todo.duedate;\n        textDiv.appendChild(newTodo);\n        textDiv.appendChild(newTodoDescription);\n        textDiv.appendChild(newTodoDueDate);\n        todoDiv.append(textDiv);\n        newTodo.addEventListener(\"dblclick\", (e) => {\n            const editTodo = prompt(\"edit todo\", newTodo.innerHTML);\n            if (editTodo !== null && editTodo !== \"\") {\n                removeLocalTodos(e.target);\n                newTodo.innerHTML = editTodo;\n                saveLocalTodos({\n                    id: todo.id,\n                    title: newTodo.innerHTML,\n                    description: newTodoDescription.innerHTML,\n                    duedate: newTodoDueDate.innerHTML,\n                    notUrgent: todoNotUrgent.checked,\n                    urgent: todoUrgent.checked,\n                    completed: false,\n                });\n            }\n        });\n        newTodoDescription.addEventListener(\"dblclick\", (e) => {\n            const editTodoDescription = prompt(\n                \"edit todo description\",\n                newTodoDescription.innerHTML\n            );\n            if (editTodoDescription !== null && editTodoDescription !== \"\") {\n                removeTodo(e);\n                newTodoDescription.innerHTML = editTodoDescription;\n                saveLocalTodos({\n                    id: todo.id,\n                    title: newTodo.innerHTML,\n                    description: newTodoDescription.innerHTML,\n                    duedate: newTodoDueDate.innerHTML,\n                    notUrgent: todoNotUrgent.checked,\n                    urgent: todoUrgent.checked,\n                    completed: false,\n                });\n            }\n        });\n        // complete button\n        const btnDiv = document.createElement(\"div\");\n        const completedButton = document.createElement(\"button\");\n        completedButton.innerHTML = `complete`;\n        completedButton.classList.add(\n            \"complete-btn\",\n            \"bg-[#BDE0FE]\",\n            \"px-2\",\n            \"py-1\",\n            \"mr-1\",\n            \"rounded-lg\",\n            \"hover:text-white\",\n            \"hover:bg-[#A2D2FF]\",\n            \"text-xs\"\n        );\n        btnDiv.appendChild(completedButton);\n        if (todo.completed) {\n            newTodo.style.textDecoration = \"line-through\";\n            todoDiv.style.backgroundColor = \"#CDB4DB\";\n            completedButton.innerHTML = \"completed\";\n        }\n        completedButton.addEventListener(\"click\", (e) => {\n            if (newTodo.style.textDecoration == \"line-through\") {\n                newTodo.style.textDecoration = \"none\";\n                todoDiv.style.backgroundColor = \"white\";\n                completedButton.innerHTML = \"complete\";\n                removeTodo(e, todo.id);\n                saveLocalTodos({\n                    id: todo.id,\n                    title: newTodo.innerHTML,\n                    description: newTodoDescription.innerHTML,\n                    duedate: newTodoDueDate.innerHTML,\n                    notUrgent: todoNotUrgent.checked,\n                    urgent: todoUrgent.checked,\n                    completed: false,\n                });\n            } else {\n                newTodo.style.textDecoration = \"line-through\";\n                todoDiv.style.backgroundColor = \"#CDB4DB\";\n                completedButton.innerHTML = \"completed\";\n                removeTodo(e, todo.id);\n                saveLocalTodos({\n                    id: todo.id,\n                    title: newTodo.innerHTML,\n                    description: newTodoDescription.innerHTML,\n                    duedate: newTodoDueDate.innerHTML,\n                    notUrgent: todoNotUrgent.checked,\n                    urgent: todoUrgent.checked,\n                    completed: true,\n                });\n            }\n        });\n        //trash button\n        const trashButton = document.createElement(\"button\");\n        trashButton.innerHTML = `delete`;\n        trashButton.classList.add(\n            \"trash-btn\",\n            \"bg-[#FFC8DD]\",\n            \"px-2\",\n            \"py-1\",\n            \"rounded-lg\",\n            \"hover:text-white\",\n            \"hover:bg-[#FFAFCC]\",\n            \"text-xs\"\n        );\n        btnDiv.appendChild(trashButton);\n        trashButton.addEventListener(\"click\", (e) => {\n            if (confirm(\"Delete a todo!\") == true) {\n                removeTodo(e);\n            }\n        });\n        todoDiv.append(btnDiv);\n        todoList.appendChild(todoDiv);\n    });\n}\n\nfunction saveLocalTodos(todo) {\n    let todos;\n    if (localStorage.getItem(\"todos\") === null) {\n        todos = [];\n    } else {\n        todos = JSON.parse(localStorage.getItem(\"todos\"));\n    }\n    todos.push(todo);\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\n}\n\nfunction removeTodo(e, todoId) {\n    const item = e.target;\n    if (item.classList[0] === \"trash-btn\") {\n        const todo = item.parentElement.parentElement;\n        removeLocalTodos(todo);\n        todo.remove();\n    }\n    if (item.classList[0] === \"complete-btn\") {\n        const todo = item.parentElement.parentElement;\n        todo.classList.toggle(\"completed\");\n        removeLocalTodos(todo, todoId);\n    }\n}\n\nfunction removeLocalTodos(todo, todoId) {\n    let todos;\n    if (localStorage.getItem(\"todos\") === null) {\n        todos = [];\n    } else {\n        todos = JSON.parse(localStorage.getItem(\"todos\"));\n    }\n    // const todoIndex = todo.children[0].innerText;\n    // const todoIndex = todo.children[0].getElementsByTagName('li')[0].innerHTML;\n    // todos.splice(todos.indexOf(todoIndex), 1);\n    todos.splice(todos.indexOf(todoId), 1);\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\n}\n\n\n//# sourceURL=webpack://13.odin-project-todo-list/./src/index.js?");

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