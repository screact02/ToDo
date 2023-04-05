// console.log("linked");

const userinput = document.getElementById("user-input");
function addTodo(){
const createElement = document.createElement("input");
createElement.setAttribute("type","checkbox");
document.getElementById("checkbox").appendChild(createElement);

const todolist = document.getElementById("list");
todolist.innerText = userinput.value;
}

