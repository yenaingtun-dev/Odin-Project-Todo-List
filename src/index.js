const form = document.querySelector("#form");
const todoInput = document.querySelector("#todo");
const todoDescription = document.querySelector("#description");
const todoUrgent = document.querySelector("#urgent");
const todoNotUrgent = document.querySelector("#notUrgent");
const todoDueDate = document.querySelector("#dueDate");
const todoList = document.querySelector(".tasks");
const formModal = document.querySelector("#formModal");
const formBackground = document.querySelector("#formBackground");

document.addEventListener("DOMContentLoaded", getTodos);
form.addEventListener("submit", addTodo);

function addTodo(e) {
    e.preventDefault();
    if (todoInput.value !== "" && todoDueDate.value !== "") {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add(
            "todo",
            "flex",
            "justify-between",
            "space-x-3",
            "bg-white",
            "rounded-lg",
            "px-3",
            "py-3",
            "mb-2"
        );
        const textDiv = document.createElement("div");
        const newTodo = document.createElement("li");
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
        const newTodoDescription = document.createElement("p");
        newTodoDescription.classList.add("text-xs", "my-1", "sm:w-80");
        const newTodoDueDate = document.createElement("p");
        newTodoDueDate.classList.add("text-xs", "underline");
        newTodo.innerText = todoInput.value;
        newTodoDescription.innerHTML = todoDescription.value;
        newTodoDueDate.innerHTML = todoDueDate.value;
        textDiv.appendChild(newTodo);
        textDiv.appendChild(newTodoDescription);
        textDiv.appendChild(newTodoDueDate);
        todoDiv.append(textDiv);
        newTodo.addEventListener("dblclick", (e) => {
            const editTodo = prompt("edit todo", newTodo.innerHTML);
            if (editTodo !== null && editTodo !== "") {
                newTodo.innerHTML = editTodo;
            }
        });
        todoInput.value = "";
        todoDescription.value = "";
        todoDueDate.value = "";
        const btnDiv = document.createElement("div");
        // complete button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = `complete`;
        completedButton.classList.add(
            "complete-btn",
            "bg-[#BDE0FE]",
            "px-2",
            "py-1",
            "mr-1",
            "rounded-lg",
            "hover:text-white",
            "hover:bg-[#A2D2FF]",
            "text-xs"
        );
        btnDiv.appendChild(completedButton);
        let isCompleted = false;
        completedButton.addEventListener("click", (e) => {
            if (newTodo.style.textDecoration == "line-through") {
                newTodo.style.textDecoration = "none";
                todoDiv.style.backgroundColor = "white";
                completedButton.innerHTML = "complete";
                removeLocalTodos(e.target);
                saveLocalTodos({
                    id: newTodoId,
                    title: newTodo.innerHTML,
                    description: newTodoDescription.innerHTML,
                    duedate: newTodoDueDate.innerHTML,
                    notUrgent: todoNotUrgent.checked,
                    urgent: todoUrgent.checked,
                    completed: false,
                });
            } else {
                newTodo.style.textDecoration = "line-through";
                todoDiv.style.backgroundColor = "#CDB4DB";
                completedButton.innerHTML = "completed";
                removeLocalTodos(e.target);
                saveLocalTodos({
                    id: newTodoId,
                    title: newTodo.innerHTML,
                    description: newTodoDescription.innerHTML,
                    duedate: newTodoDueDate.innerHTML,
                    notUrgent: todoNotUrgent.checked,
                    urgent: todoUrgent.checked,
                    completed: false,
                });
            }
        });
        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `delete`;
        trashButton.classList.add(
            "trash-btn",
            "bg-[#FFC8DD]",
            "px-2",
            "py-1",
            "rounded-lg",
            "hover:text-white",
            "hover:bg-[#FFAFCC]",
            "text-xs"
        );
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
        const newTodoId = Math.random().toString(16).slice(2);
        saveLocalTodos({
            id: newTodoId,
            title: newTodo.innerHTML,
            description: newTodoDescription.innerHTML,
            duedate: newTodoDueDate.innerHTML,
            notUrgent: todoNotUrgent.checked,
            urgent: todoUrgent.checked,
            completed: isCompleted,
        });
    } else {
        if (todoInput.value === "") {
            alert("u need to add todo");
        } else if (todoDueDate.value === "") {
            alert("u need to add due date");
        } else {
            alert("u need to fill form");
        }
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
        todoDiv.classList.add(
            "todo",
            "flex",
            "justify-between",
            "space-x-3",
            "bg-white",
            "rounded-lg",
            "px-3",
            "py-3",
            "mb-2"
        );
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
        const newTodoDueDate = document.createElement("p");
        newTodoDueDate.classList.add("text-xs", "underline");
        newTodo.innerText = todo.title;
        newTodoDescription.innerHTML = todo.description;
        newTodoDueDate.innerHTML = todo.duedate;
        textDiv.appendChild(newTodo);
        textDiv.appendChild(newTodoDescription);
        textDiv.appendChild(newTodoDueDate);
        todoDiv.append(textDiv);
        newTodo.addEventListener("dblclick", (e) => {
            const editTodo = prompt("edit todo", newTodo.innerHTML);
            if (editTodo !== null && editTodo !== "") {
                removeLocalTodos(e.target);
                newTodo.innerHTML = editTodo;
                saveLocalTodos({
                    id: todo.id,
                    title: newTodo.innerHTML,
                    description: newTodoDescription.innerHTML,
                    duedate: newTodoDueDate.innerHTML,
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
                    duedate: newTodoDueDate.innerHTML,
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
        completedButton.classList.add(
            "complete-btn",
            "bg-[#BDE0FE]",
            "px-2",
            "py-1",
            "mr-1",
            "rounded-lg",
            "hover:text-white",
            "hover:bg-[#A2D2FF]",
            "text-xs"
        );
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
                    duedate: newTodoDueDate.innerHTML,
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
                    duedate: newTodoDueDate.innerHTML,
                    notUrgent: todoNotUrgent.checked,
                    urgent: todoUrgent.checked,
                    completed: true,
                });
            }
        });
        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `delete`;
        trashButton.classList.add(
            "trash-btn",
            "bg-[#FFC8DD]",
            "px-2",
            "py-1",
            "rounded-lg",
            "hover:text-white",
            "hover:bg-[#FFAFCC]",
            "text-xs"
        );
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

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodo(e, todoId) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed");
        removeLocalTodos(todo, todoId);
    }
}

function removeLocalTodos(todo, todoId) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    // const todoIndex = todo.children[0].innerText;
    // const todoIndex = todo.children[0].getElementsByTagName('li')[0].innerHTML;
    // todos.splice(todos.indexOf(todoIndex), 1);
    todos.splice(todos.indexOf(todoId), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
