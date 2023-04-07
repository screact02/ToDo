// console.log("linked");


function addTodo(){
//creating a container//
const userinput = document.getElementById("user-input");
const createDiv = document.createElement("div");
createDiv.id= "task";
createDiv.style = "display:flex";
createDiv.style = "background-color:gold";
document.getElementById("content").appendChild(createDiv);

//creating a checkbox//
const checkbox = document.createElement("input");
checkbox.setAttribute("type","checkbox");
document.getElementById("task").appendChild(checkbox);

//creating a label//
const paragraph = document.createElement("paragraph");
document.getElementById("task").appendChild(paragraph);
paragraph.style = "margin:0";
paragraph.innerText = userinput.value;

//to display the todo task//
checkbox.onclick = function(){
paragraph.style = "text-decoration-line: line-through";
const removeTask = document.createElement("button");
removeTask.id = "removeTask";
removeTask.setAttribute('value', 'remove task');
document.getElementById("task").appendChild(removeTask);
removeTask.onclick = function(){
const removeElement = document.getElementById("task");
removeElement.remove();
  }
}
}

