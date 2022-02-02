const inputField = document.getElementById('input-field');
const taskListNode = document.getElementById('task-list');
const tasks = JSON.parse(localStorage.getItem('taskList')) || [];


document.addEventListener("DOMContentLoaded", function(){
    inputField.focus();
    inputField.addEventListener("keydown", function(event){
        if (event.key === "Enter") {
                addTask();
            }
        });
        getTaskList();
    });



function addTask() {
    let userInput = inputField.value;
    let task = {userInput, done: false}
    saveStorage();
    outputTasks();
    tasks.push(task);
    console.log(tasks);
    inputField.value = "";
}

function outputTasks(){
    let li = document.createElement('li');
    let userInput = inputField.value
    li.innerHTML = `${userInput} <i class="fas fa-times close"></i>`;
        if (userInput !== ""){
            taskListNode.appendChild(li);
        } else {
            alert("You must type something");
        }
}

function saveStorage(){
    localStorage.setItem('taskList',JSON.stringify(tasks));
}

function getTaskList (){
    let taskList = JSON.parse(localStorage.getItem('taskList'));
    for (i = 0; i < taskList.length; i++){
        let li = document.createElement('li');
        li.innerHTML = `${taskList[i].userInput} <i class="fas fa-times close"></i>`;
        taskListNode.appendChild(li);
    }
}


