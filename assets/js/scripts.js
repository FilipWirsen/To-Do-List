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
        }
}