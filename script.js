// console.log("linked");

const userinput = document.getElementById("user-input");
function addTodo(){
const todolist = document.getElementById("content");
todolist.innerText = userinput.value;
}