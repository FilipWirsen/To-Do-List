var tasks = [];
const inputField = document.getElementById('input-field');

window.onload = function (){
    // Sets focus on input field, checks if localstorage exsists and runs displayTasks function.
    inputField.focus();
    inputField.addEventListener("keydown", function(event){
        if (event.key === "Enter") {
            addTask();
        }

    });
    if (JSON.parse(localStorage.getItem("taskList") != null)) {
        tasks = JSON.parse(localStorage.getItem("taskList"));
        displayTasks();
    }
};

function displayTasks() {
    // Gets all tasks and displays them in a list to the  user.
    taskList = document.getElementById('task-list');
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++){
        taskList.innerHTML += 
        "<li class='list-group-item rounded-top-right-20 rounded-bottom-20'>" + tasks[i] + "<i class='fas fa-trash' onclick='deleteTask("+i+")'></i> <i class='fas fa-check' onclick='checkTask("+i+")'></i> <i class='fas fa-edit' onclick='editTask("+i+")' data-bs-toggle='modal' data-bs-target='#exampleModal'></i></li>";
    }
}

function addTask() {
    // Runs when "Add task" button is clicked. Adds user input to tasks array and runs displayTasks function.
    if (inputField.value.trim() != "") {
        tasks.push(inputField.value.trim());
        displayTasks();
        updateStorage();
        inputField.value = "";
    } else {
        alert("Cant leave field empty");
    }
}

function deleteTask(index) {
    // Runs when trash icon is clicked. Removes task from tasks array, runs updateStorage and displayTasks functions.
    tasks.splice(index, 1);
    updateStorage();
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
    updateStorage();
    displayTasks();
}

function editTask(index) {
    // Runs when edit icon is clicked. If task is checked, remove strike and show modal for editing task.
    modalBody = document.getElementById("modalBody");
    if (tasks[index].includes("<strike>")) {
        tasks[index] = tasks[index].replace("<strike>", "");
        tasks[index] = tasks[index].replace("</strike>", "");
    }
    modalBody.innerHTML = "<input type='text' id='modalText' class='form-control' placeholder="+tasks[index]+">";
    document.getElementById("modalFooter").innerHTML = "<button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button> <button type='button' class='btn btn-primary' id='modal-button' data-bs-dismiss='modal' onclick='updateTask("+index+")'>Save changes</button>";
} 


function updateTask(index) {
    // Runs when "save changes" button inside modal is clicked. Updates task and runs updateStorage and displayTasks functions.
    let updatedTask = document.getElementById("modalText").value;
    if (updatedTask.trim() == "") {
        alert("Cant leave field empty.");
    } else {
        tasks[index] = updatedTask;
        updateStorage();
        displayTasks();
    }
}

function updateStorage() {
    // Updates localstorage.
    localStorage.setItem("taskList", JSON.stringify(tasks));
}