// let heading = document.getElementById("heading"); // h1
// console.log(heading);

// let headings = document.getElementsByClassName("heading")
// console.log(headings);
// console.dir(headings)

// document.getElementsByTagName(""); 

// document.querySelector(""); 
// document.querySelectorAll(""); 

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna college students";

// let divs = document.querySelectorAll(".box");
// console.dir(divs)
// let idx= 1;
// for (div of divs) {
//     div.innerText = `new unique value ${idx}`
//     idx++;
// }

// getAttribute (attr) this is for find your class name id name 
// setAttribute (attr, value) this is for change your class and id name

// let div = document.querySelector("div");
// div.style.fontSize = "26px";
// div.style.backgroundColor = "green";
// div.innerText = "hello!"

// let newbutton = document.createElement("button");
// newbutton.innerText = "click me!";
// console.log(newbutton);

// let div = document.querySelector("div");
// div.append(newbutton);
// div.prepend(newbutton);
// div.before(newbutton);
// div.after(newbutton);

// let newheading = document.createElement("h1");
// newheading.innerHTML = "<i>hi i am new</i>";
// document.querySelector("body").append(newheading);
// let para = document.querySelector("div");
// para.remove();

// let newBtn = document.createElement("button");
// newBtn.innerText = "clicl me!";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newBtn);

const form = document.getElementById('todoform');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');

// handle form submit 
form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent form from submitting normally
    const task = input.value.trim();
    if(task === "") return;
    addTodo(task);
    saveTodo(task);
    input.value = ''; // clear input field
});

// add todo to the list
function addTodo(task) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${task}</span>
    <button class="deleteBtn">Delete</button>;
    list.appendChild(li)`
};

list.addEventListener('click', function(e) {
    if(e.target.classList.contains('deleteBtn')) {
        const li = e.target.parentElement;
        list.removeChild(li);
        removeTodo(e.target.previousElementSibling.textContent);
    }
    if(e.target.tagName === 'SPAN') {
        e.target.classList.toggle('completed');
    }
})

function saveTodo(task){
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(task);
    localStorage.setItem('todos', JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', function() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(addTodo)
});

function removeTodo(task){
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(t => t !== task);
    localStorage.setItem('todos', JSON.stringify(todos));
}











