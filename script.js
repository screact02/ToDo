// console.log("linked");


function addTodo(){
  const userinput = document.getElementById("user-input");
const createContainer = document.createElement("div");
createContainer.id= "task";
createContainer.style = "display:flex";
createContainer.style = "background-color:gold";
document.getElementById("content").appendChild(createContainer);
const createCheckbox = document.createElement("input");
createCheckbox.setAttribute("type","checkbox");
document.getElementById("task").appendChild(createCheckbox);

const createParagraph = document.createElement("label");
document.getElementById("task").appendChild(createParagraph);
createParagraph.style = "margin:0";
createParagraph.innerText = userinput.value;

createCheckbox.onclick = function(){
  createParagraph.style = "text-decoration-line: line-through";
  const createRemoveButton = document.createElement("button");
  createRemoveButton.id = "removeTask";
  createRemoveButton.setAttribute('value', 'remove task');
  document.getElementById("task").appendChild(createRemoveButton);
  createRemoveButton.onclick = function(){
    createContainer.style = "display:none";

  }
}
}

