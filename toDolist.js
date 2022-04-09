let taskInp
let storeInp
function addToDiv(params) {
    let myTodo  =`
    <div id="todo">
    
        <div class="w-100 bg-light h-50 d-flex justify-content-between mb-3">
        <div class="text-light w-25 sidediv" >
        <button class="btn btn-primary h-75">Edit</button>
        <button class="btn btn-danger h-75">Del</button>
        </div> 
        <textarea class="w-75 bg-light text-dark show" id="storeTask"></textarea>
        </div>

    </div>`
    // console.log(myTodo.value);
    storeInp = document.getElementById('storeTask').value;
    taskInp = document.getElementById('tasks').value;
    // console.log(taskInp)
    // taskInp = storeInp; 
    console.log(storeInp);
    document.getElementById('storeTask').value = myTodo;

    // document.getElementById('storeTask').push(storeInp)
    document.getElementById('todo').innerHTML += myTodo
    document.getElementById('storeTask').value = storeInp;
    
}