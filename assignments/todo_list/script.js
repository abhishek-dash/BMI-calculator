const submitButton=document.querySelector('button');
const todoInput=document.querySelector('input');
const todoList=document.querySelector('div.todos');
submitButton.addEventListener('click',addTodo);
todoList.addEventListener('click',removeTodo);
var val=0
function addTodo() {
    const para=document.createElement('p');
    para.innerHTML=todoInput.value;
    para.setAttribute('key',val);
    val=val+1
    todoList.appendChild(para);
    todoInput.value="";
}
function removeTodo(e) {
    const item=e.target
    item.remove()
}