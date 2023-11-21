const form = document.querySelector('#form');
const todoInput = document.querySelector('#todo');
const todoList = document.querySelector('.tasks');

form.addEventListener("submit", addTodo);

function addTodo(e){
    e.preventDefault();
    if (todoInput.value !== '') {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo', 'flex', 'justify-between', 'items-center', 'bg-yellow-200', 'text-gray-500', 'rounded-lg', 'px-3', 'py-1', 'mb-2');
        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item");
        newTodo.innerText = todoInput.value;
        todoDiv.appendChild(newTodo);
        todoDiv.addEventListener('dblclick', (e) => {
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
        completedButton.classList.add('complete-btn', 'bg-teal-200', 'px-2', 'py-1', 'mr-1', 'rounded-lg', 'text-teal-600', 'hover:bg-teal-300', 'text-xs');
        btnDiv.appendChild(completedButton);
        completedButton.addEventListener('click', (e) => {
            if (newTodo.style.textDecoration == 'line-through') {
                newTodo.style.textDecoration = 'none';
                todoDiv.style.backgroundColor = 'yellow';
                completedButton.innerHTML = 'complete';
            } else {
                newTodo.style.textDecoration = 'line-through';
                todoDiv.style.backgroundColor = 'green';
                completedButton.innerHTML = 'completed';
            }
        });
        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `delete`;
        trashButton.classList.add('trash-btn', 'bg-rose-200', 'px-2', 'py-1', 'rounded-lg', 'text-rose-600', 'hover:bg-rose-300', 'text-xs');
        btnDiv.appendChild(trashButton);
        trashButton.addEventListener('click', () => {
            if (confirm("Delete a todo!") == true) {
                newTodo.parentNode.remove();
            }
        });
        todoDiv.append(btnDiv);
        //attach final Todo
        todoList.appendChild(todoDiv);
    } else {
        alert('u need to add todo');
    }
}
