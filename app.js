const addTaskBtn = document.getElementById('add-task-btn');
const addTaskInput = document.getElementById('add-task');
const taskList = document.getElementById('task-list')

addTaskBtn.addEventListener('click', addTask);

function addTask(){
    const taskText = addTaskInput.value.trim();

    const li = document.createElement('li');
    li.textContent = taskText;

    taskList.appendChild(li)
    addTaskInput.value = '';
}
