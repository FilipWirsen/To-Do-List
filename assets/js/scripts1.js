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
    let taskText = inputField.value;
    let task = {taskText, done: false}
    tasks.push(task);
    console.log(tasks);

    inputField.value = "";
}