const form = document.querySelector("#form");
const todoInput = document.querySelector("#todo");
const todoDescription = document.querySelector("#description");
const todoUrgent = document.querySelector("#urgent");
const todoNotUrgent = document.querySelector("#notUrgent");
// const todoDueDate = document.querySelector("#dueDate");
const todoList = document.querySelector(".tasks");
const formModal = document.querySelector("#formModal");
const formBackground = document.querySelector("#formBackground");
const todoDivClass = [
    "todo",
    "flex",
    "justify-between",
    "space-x-3",
    "bg-white",
    "rounded-lg",
    "px-3",
    "py-3",
    "mb-2",
];
const completedButtonClass = [
    "complete-btn",
    "bg-[#BDE0FE]",
    "px-2",
    "py-1",
    "mr-1",
    "rounded-lg",
    "hover:text-white",
    "hover:bg-[#A2D2FF]",
    "text-xs",
];
const trashButtonClass = [
    "trash-btn",
    "bg-[#FFC8DD]",
    "px-2",
    "py-1",
    "rounded-lg",
    "hover:text-white",
    "hover:bg-[#FFAFCC]",
    "text-xs",
];

document.addEventListener("DOMContentLoaded", getTodos);
form.addEventListener("submit", addTodo);

// validation the input
function validate(task) {
    if (task !== "") {
        console.log("herer");
        return true;
    } else {
        if (task.value === "") {
            alert("u need to add todo");
            return false;
        }
        //  else if (date.value === "") {
        //     alert("u need to add due date");
        //     return false;
        // }
        else {
            alert("u need to fill form");
            return false;
        }
    }
}

function addTodo(e) {
    e.preventDefault();
    if (validate(todoInput.value)) {
        const todoDiv = document.createElement("div");
        const textDiv = document.createElement("div");
        const newTodo = document.createElement("li");
        const newTodoDescription = document.createElement("p");
        // const newTodoDueDate = document.createElement("p");
        const btnDiv = document.createElement("div");
        const completedButton = document.createElement("button");
        const trashButton = document.createElement("button");
        const newTodoId = Math.random().toString(16).slice(2);
        let isCompleted = false;
        todoDiv.classList.add(...todoDivClass);
        if (todoNotUrgent.checked) {
            newTodo.classList.add(
                "todo-item",
                "w-28",
                "font-semibold",
                "uppercase"
            );
        } else {
            newTodo.classList.add(
                "todo-item",
                "text-red-300",
                "w-28",
                "font-semibold",
                "uppercase"
            );
        }
        newTodoDescription.classList.add("text-xs", "my-1", "sm:w-80");
        // newTodoDueDate.classList.add("text-xs", "underline");
        newTodo.innerText = todoInput.value;
        newTodoDescription.innerHTML = todoDescription.value;
        // newTodoDueDate.innerHTML = todoDueDate.value;
        textDiv.appendChild(newTodo);
        textDiv.appendChild(newTodoDescription);
        // textDiv.appendChild(newTodoDueDate);
        todoDiv.append(textDiv);
        newTodo.addEventListener("dblclick", (e) => {
            const editTodo = prompt("edit todo", newTodo.innerHTML);
            if (editTodo !== null && editTodo !== "") {
                newTodo.innerHTML = editTodo;
            }
        });
        todoInput.value = "";
        todoDescription.value = "";
        // todoDueDate.value = "";
        // complete button
        completedButton.innerHTML = `complete`;
        completedButton.classList.add(...completedButtonClass);
        btnDiv.appendChild(completedButton);
        completedButton.addEventListener("click", (e) => {
            if (isCompleted !== false) {
                newTodo.style.textDecoration = "none";
                todoDiv.style.backgroundColor = "white";
                completedButton.innerHTML = "complete";
                removeTodo(e);
                isCompleted = false;
                saveLocalTodos({
                    id: newTodoId,
                    title: newTodo.innerHTML,
                    description: newTodoDescription.innerHTML,
                    // duedate: newTodoDueDate.innerHTML,
                    notUrgent: todoNotUrgent.checked,
                    urgent: todoUrgent.checked,
                    completed: false,
                });
                // console.log("false");
            } else {
                newTodo.style.textDecoration = "line-through";
                todoDiv.style.backgroundColor = "#CDB4DB";
                completedButton.innerHTML = "completed";
                removeTodo(e);
                isCompleted = true;
                saveLocalTodos({
                    id: newTodoId,
                    title: newTodo.innerHTML,
                    description: newTodoDescription.innerHTML,
                    // duedate: newTodoDueDate.innerHTML,
                    notUrgent: todoNotUrgent.checked,
                    urgent: todoUrgent.checked,
                    completed: true,
                });
                // console.log("true");
            }
        });
        //trash button
        trashButton.innerHTML = `delete`;
        trashButton.classList.add(...trashButtonClass);
        btnDiv.appendChild(trashButton);
        trashButton.addEventListener("click", (e) => {
            if (confirm("Delete a todo!") == true) {
                removeTodo(e);
            }
        });
        todoDiv.append(btnDiv);
        //attach final Todo
        todoList.appendChild(todoDiv);
        formModal.style.display = "none";
        formBackground.style.display = "none";
        saveLocalTodos({
            id: newTodoId,
            title: newTodo.innerHTML,
            description: newTodoDescription.innerHTML,
            // duedate: newTodoDueDate.innerHTML,
            notUrgent: todoNotUrgent.checked,
            urgent: todoUrgent.checked,
            completed: isCompleted,
        });
    } else {
        console.error("fill the form!");
    }
}

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add(...todoDivClass);
        const textDiv = document.createElement("div");
        const newTodo = document.createElement("li");
        if (todo.notUrgent) {
            newTodo.classList.add(
                "todo-item",
                "w-28",
                "font-semibold",
                "uppercase"
            );
        } else {
            newTodo.classList.add(
                "todo-item",
                "text-red-300",
                "w-28",
                "font-semibold",
                "uppercase"
            );
        }
        const newTodoDescription = document.createElement("p");
        newTodoDescription.classList.add("text-xs", "my-1", "sm:w-80");
        // const newTodoDueDate = document.createElement("p");
        // newTodoDueDate.classList.add("text-xs", "underline");
        newTodo.innerText = todo.title;
        newTodoDescription.innerHTML = todo.description;
        // newTodoDueDate.innerHTML = todo.duedate;
        textDiv.appendChild(newTodo);
        textDiv.appendChild(newTodoDescription);
        // textDiv.appendChild(newTodoDueDate);
        todoDiv.append(textDiv);
        newTodo.addEventListener("dblclick", (e) => {
            const editTodo = prompt("edit todo", newTodo.innerHTML);
            if (editTodo !== null && editTodo !== "") {
                removeTodo(e);
                newTodo.innerHTML = editTodo;
                saveLocalTodos({
                    id: todo.id,
                    title: newTodo.innerHTML,
                    description: newTodoDescription.innerHTML,
                    // duedate: newTodoDueDate.innerHTML,
                    notUrgent: todoNotUrgent.checked,
                    urgent: todoUrgent.checked,
                    completed: false,
                });
            }
        });
        newTodoDescription.addEventListener("dblclick", (e) => {
            const editTodoDescription = prompt(
                "edit todo description",
                newTodoDescription.innerHTML
            );
            if (editTodoDescription !== null && editTodoDescription !== "") {
                removeTodo(e);
                newTodoDescription.innerHTML = editTodoDescription;
                saveLocalTodos({
                    id: todo.id,
                    title: newTodo.innerHTML,
                    description: newTodoDescription.innerHTML,
                    // duedate: newTodoDueDate.innerHTML,
                    notUrgent: todoNotUrgent.checked,
                    urgent: todoUrgent.checked,
                    completed: false,
                });
            }
        });
        // complete button
        const btnDiv = document.createElement("div");
        const completedButton = document.createElement("button");
        completedButton.innerHTML = `complete`;
        completedButton.classList.add(...completedButtonClass);
        btnDiv.appendChild(completedButton);
        if (todo.completed) {
            newTodo.style.textDecoration = "line-through";
            todoDiv.style.backgroundColor = "#CDB4DB";
            completedButton.innerHTML = "completed";
        }
        completedButton.addEventListener("click", (e) => {
            if (newTodo.style.textDecoration == "line-through") {
                newTodo.style.textDecoration = "none";
                todoDiv.style.backgroundColor = "white";
                completedButton.innerHTML = "complete";
                removeTodo(e, todo.id);
                saveLocalTodos({
                    id: todo.id,
                    title: newTodo.innerHTML,
                    description: newTodoDescription.innerHTML,
                    // duedate: newTodoDueDate.innerHTML,
                    notUrgent: todoNotUrgent.checked,
                    urgent: todoUrgent.checked,
                    completed: false,
                });
            } else {
                newTodo.style.textDecoration = "line-through";
                todoDiv.style.backgroundColor = "#CDB4DB";
                completedButton.innerHTML = "completed";
                removeTodo(e, todo.id);
                saveLocalTodos({
                    id: todo.id,
                    title: newTodo.innerHTML,
                    description: newTodoDescription.innerHTML,
                    // duedate: newTodoDueDate.innerHTML,
                    notUrgent: todoNotUrgent.checked,
                    urgent: todoUrgent.checked,
                    completed: true,
                });
            }
        });
        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `delete`;
        trashButton.classList.add(...trashButtonClass);
        btnDiv.appendChild(trashButton);
        trashButton.addEventListener("click", (e) => {
            if (confirm("Delete a todo!") == true) {
                removeTodo(e);
            }
        });
        todoDiv.append(btnDiv);
        todoList.appendChild(todoDiv);
    });
}

// save local todo
function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todos);
}

// remove todo
function removeTodo(e, todoId) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        // console.log("trash");
        const todo = item.parentElement.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }
    if (item.classList[0] === "complete-btn") {
        // console.log("complete");
        const todo = item.parentElement.parentElement;
        // console.log(todo.children[0].children[0].innerHTML);
        const todoName = todo.children[0].children[0].innerHTML;
        todo.classList.toggle("completed");
        removeLocalTodos(todo, todoId, todoName);
    }
}

// remove local save todos
function removeLocalTodos(todo, todoId, todoName) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    if (!todoName) {
        todoName = todo.children[0].children[0].innerHTML;
    }
    // const todoIndex = todo.children[0].innerText;
    // const todoIndex = todo.children[0].getElementsByTagName('li')[0].innerHTML;
    // todos.splice(todos.indexOf(todoIndex), 1);
    if (todoName) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].title === todoName) {
                todos.splice(i, 1);
            }
        }
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    // todos.splice(todos.indexOf(todoId), 1);
}
