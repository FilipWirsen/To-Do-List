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
        
    });



function addTask() {
    let userInput = inputField.value;
    let task = {userInput, done: false}
    saveTaskToStorage();
    outputTask();
    tasks.push(task);
    console.log(tasks);
    inputField.value = "";
}

function saveTaskToStorage(){
    localStorage.setItem('taskList', JSON.stringify('tasks'));
}

function outputTask(){
    let li = document.createElement('li');
    let userInput = inputField.value
    li.innerHTML = `${userInput} <i class="fas fa-times close"></i>`;
        if (userInput !== ""){
            taskListNode.appendChild(li);
        } else {
            alert("You must type something!");
        }

}



