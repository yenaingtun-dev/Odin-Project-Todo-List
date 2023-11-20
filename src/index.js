const form = document.querySelector('#form');
const todoInput = document.querySelector('#todo');
const tasks = document.querySelector('.tasks');

form.addEventListener('click', (e) => {
    e.preventDefault();
    if (todoInput.value !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${todoInput.value} <button id="delete">delete</button> <button id="complete">complete</button>`;
        tasks.appendChild(li)
        todoInput.value = '';
        const deleteTask =  document.getElementById('delete');
        const completeTask =  document.getElementById('complete');
        deleteTask.addEventListener('click', (e) => {
            // console.log(li.parentNode.removeChild(li));
        });
        completeTask.addEventListener('click', (e) => {
            e.target.style.textDecoration =  "line-through";
        });
    }
})