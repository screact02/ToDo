// console.log("linked");


function addTodo(){
//creating a container//
const userinput = document.getElementById("user-input");
const createDiv = document.createElement("div");
const id = Math.random();
createDiv.id= id;
createDiv.style = "display:flex";
// createDiv.style = "background-color:gold";
document.getElementById("content").appendChild(createDiv);

//creating a checkbox//
const checkbox = document.createElement("input");
checkbox.setAttribute("type","checkbox");
document.getElementById(id).appendChild(checkbox);

//creating a label//
const paragraph = document.createElement("paragraph");
document.getElementById(id).appendChild(paragraph);
paragraph.style = "margin:0";
paragraph.innerText = userinput.value;
document.getElementById("user-input").value = "";
//to display the todo task//
checkbox.onclick = function(){
paragraph.style = "text-decoration-line: line-through";
  const removeTask = document.createElement("button");
  removeTask.id = "removeTask";
  removeTask.textContent = "X";
  removeTask.style = "background-color:#a8bbd9";
  removeTask.setAttribute('value', 'remove task');
  document.getElementById(id).appendChild(removeTask);
  
removeTask.onclick = function(){
const removeElement = document.getElementById(id);
removeElement.remove();

  }
}
}

