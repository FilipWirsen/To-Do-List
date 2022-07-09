var tasks = [];
const inputField = document.getElementById('input-field');

window.onload = function (){
    inputField.focus();
    inputField.addEventListener("keydown", function(event){
        if (event.key === "Enter") {
            addTask();
            displayTasks();
        }

    });
}

function displayTasks() {
    // Gets all tasks and displays them in a list to user.
    taskList = document.getElementById('task-list');
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++){
        taskList.innerHTML += 
        "<li class='list-group-item rounded-top-right-20 rounded-bottom-20'>" + tasks[i] + "<i class='fas fa-trash'></i> <i class='fas fa-check'></i> <i class='fas fa-edit'></i></li>";
    }
}

function addTask() {
    // Runs when "Add task" button is clicked. Adds user input to tasks array and runs displayTasks function.
    if (inputField.value.trim() != "") {
        tasks.push(inputField.value.trim());
        displayTasks();
        inputField.value = "";
    } else {
        alert("Cant leave field empty");
    }
}