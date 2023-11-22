const form = document.querySelector('#form');
const todoInput = document.querySelector('#todo');
const todoList = document.querySelector('.tasks');

document.addEventListener("DOMContentLoaded", getTodos);
form.addEventListener("submit", addTodo);

function addTodo(e) {
    e.preventDefault();
    if (todoInput.value !== '') {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo', 'flex', 'justify-between', 'items-center', 'bg-white', 'rounded-lg', 'px-3', 'py-1', 'mb-2');
        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item", "w-28");
        newTodo.innerText = todoInput.value;
        todoDiv.appendChild(newTodo);
        newTodo.addEventListener('dblclick', (e) => {
            const editTodo = prompt('edit todo', newTodo.innerHTML);
            if (editTodo !== null && editTodo !== '') {
                newTodo.innerHTML = editTodo;
            }
        })
        todoInput.value = "";
        const btnDiv = document.createElement("div");
        // complete button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = `complete`;
        completedButton.classList.add('complete-btn', 'bg-[#BDE0FE]', 'px-2', 'py-1', 'mr-1', 'rounded-lg', 'hover:text-white', 'hover:bg-[#A2D2FF]', 'text-xs');
        btnDiv.appendChild(completedButton);
        completedButton.addEventListener('click', (e) => {
            if (newTodo.style.textDecoration == 'line-through') {
                newTodo.style.textDecoration = 'none';
                todoDiv.style.backgroundColor = 'white';
                completedButton.innerHTML = 'complete';
            } else {
                newTodo.style.textDecoration = 'line-through';
                todoDiv.style.backgroundColor = '#CDB4DB';
                completedButton.innerHTML = 'completed';
            }
        });
        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `delete`;
        trashButton.classList.add('trash-btn', 'bg-[#FFC8DD]', 'px-2', 'py-1', 'rounded-lg', 'hover:text-white', 'hover:bg-[#FFAFCC]', 'text-xs');
        btnDiv.appendChild(trashButton);
        trashButton.addEventListener('click', (e) => {
            if (confirm("Delete a todo!") == true) {
                removeTodo(e);
            }
        });
        todoDiv.append(btnDiv);
        //attach final Todo
        todoList.appendChild(todoDiv);
        saveLocalTodos(newTodo.innerHTML);
    } else {
        alert('u need to add todo');
    }
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

function removeTodo(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
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
        todoDiv.classList.add('todo', 'flex', 'justify-between', 'items-center', 'bg-white', 'rounded-lg', 'px-3', 'py-1', 'mb-2');
        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item", "w-28");
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);
        newTodo.addEventListener('dblclick', (e) => {
            const editTodo = prompt('edit todo', newTodo.innerHTML);
            if (editTodo !== null && editTodo !== '') {
                removeLocalTodos(e.target);
                newTodo.innerHTML = editTodo;
                saveLocalTodos(newTodo.innerHTML);
            }
        })
        const btnDiv = document.createElement("div");
        // complete button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = `complete`;
        completedButton.classList.add('complete-btn', 'bg-[#BDE0FE]', 'px-2', 'py-1', 'mr-1', 'rounded-lg', 'hover:text-white', 'hover:bg-[#A2D2FF]', 'text-xs');
        btnDiv.appendChild(completedButton);
        completedButton.addEventListener('click', (e) => {
            if (newTodo.style.textDecoration == 'line-through') {
                newTodo.style.textDecoration = 'none';
                todoDiv.style.backgroundColor = 'white';
                completedButton.innerHTML = 'complete';
            } else {
                newTodo.style.textDecoration = 'line-through';
                todoDiv.style.backgroundColor = '#CDB4DB';
                completedButton.innerHTML = 'completed';
            }
        });
        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `delete`;
        trashButton.classList.add('trash-btn', 'bg-[#FFC8DD]', 'px-2', 'py-1', 'rounded-lg', 'hover:text-white', 'hover:bg-[#FFAFCC]', 'text-xs');
        btnDiv.appendChild(trashButton);
        trashButton.addEventListener('click', (e) => {
            if (confirm("Delete a todo!") == true) {
                removeTodo(e);
            }
        });
        todoDiv.append(btnDiv);
        //attach final Todo
        todoList.appendChild(todoDiv);
    });
}