const form = document.querySelector('#form');
const todoInput = document.querySelector('#todo');
const todoList = document.querySelector('.tasks');

form.addEventListener("submit", addTodo);

function addTodo(e){
    e.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    // complete button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<button>complete</button>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    completedButton.addEventListener('click', () => {
        if (newTodo.style.textDecoration == 'line-through') {
            newTodo.style.textDecoration = 'none';
        } else {
            newTodo.style.textDecoration = 'line-through';
        }
    });
    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<button">delete</button>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    trashButton.addEventListener('click', () => {
        newTodo.parentNode.remove();
    });
    //attach final Todo
    todoList.appendChild(todoDiv);
}
