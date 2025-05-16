const addTaskBtn = document.getElementById('add-task-btn');
const addTaskInput = document.getElementById('add-task');
const taskList = document.getElementById('task-list')

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = addTaskInput.value.trim();

    if (taskText === '') {
        alert('You didnt write your task')
        return
    }

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    li.appendChild(checkbox)
    li.appendChild(document.createTextNode(`${taskText}`))

    taskList.appendChild(li)
    addTaskInput.value = '';
}

addTaskInput.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        addTask();
    }
})