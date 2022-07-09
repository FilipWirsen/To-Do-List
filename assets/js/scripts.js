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
    // Gets all tasks and displays them in a list to the user.
    taskList = document.getElementById('task-list');
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++){
        taskList.innerHTML += 
        "<li class='list-group-item rounded-top-right-20 rounded-bottom-20'>" + tasks[i] + "<i class='fas fa-trash' onclick='deleteTask("+i+")'></i> <i class='fas fa-check' onclick='checkTask("+i+")'></i> <i class='fas fa-edit'></i></li>";
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

function deleteTask(index) {
    // Runs when trash icon is clicked. Removes task from tasks array, runs updateStorage and displayTasks functions.
    tasks.splice(index, 1);
    displayTasks();

}

function checkTask(index) {
    // Runs when check icon is clicked. Checks if task is checked and removes strike, else adds strike. Runs updateStorage and displayTasks functions.
    if (tasks[index].includes("<strike>")) {
        tasks[index] = tasks[index].replace("<strike>", "");
        tasks[index] = tasks[index].replace("</strike>", "");
    } else {
        tasks[index] =  `<strike> ${tasks[index]} </strike>`;
    }
    displayTasks();
}