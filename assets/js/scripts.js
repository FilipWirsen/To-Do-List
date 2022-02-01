document.addEventListener("DOMContentLoaded", function(){

    let inputField = document.getElementById('input-field');
    inputField.focus();

   inputField.addEventListener("keydown", function(event){
       if (event.key === "Enter") {
           addTask();
       }
   }) 



});

function addTask(){
    let userInput = document.getElementById('input-field').value;
    let li = document.createElement('li');
    li.innerHTML = `${userInput}`;
        if (userInput !== ""){
            document.getElementById('task-list').appendChild(li);
            removeTaskBtn();
        } else {
            alert("You must type something!");
        }

        
    // Clears the input-field after each "submit"
    document.getElementById('input-field').value = "";
}

// Add Fontawsome icons to each li element and give it class close

function removeTaskBtn(){

    let tasks = document.getElementsByTagName('li');
    let span = document.createElement('span');
    span.innerHTML = `<i class="fas fa-times close"></i>`;
        for (let i = 0; i < tasks.length; i++){
            if (tasks[i].hasChildNodes){
                tasks[i].appendChild(span);
            }
            
        }

    

}





