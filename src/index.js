const todos = [];
let count = 0;
const form = document.querySelector('#todo_form');
const lists = document.querySelector('.todo_lists');
form.addEventListener('submit', createTask);

class Todo {
    constructor(todo) {
        console.log(todo);
    }
}

// create tasks
function createTask(e) {
    e.preventDefault();
    let task = document.getElementById('todo');
    todoLists(task.value);
    task.value = '';
}

// add task to todo
function todoLists(task) {
    todos.push(task);
    appendTodo(task);
}

// append todo to view
function appendTodo(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    listItem.id = count++;
    listItem.classList.add('todo_list');
    lists.appendChild(listItem);
}

todos.forEach(list => {
    console.log(list);
    list.addEventListener('click', toggleTask(list.id));
});

function toggleTask(id) {
    console.log(id);
}