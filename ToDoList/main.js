
const ul = document.querySelector("ul");
const form = document.querySelector('form')
const taskNumber = document.querySelector("h1 span")
const taskInput = document.querySelector(".taskText");
const search = document.querySelector(".search");
const toDoList = [];

let addActive = false;

const renderTasks = (array = toDoList) => {
    ul.textContent = "";
    array.forEach((elem, key)=>{
        elem.dataset.key = key;
        ul.appendChild(elem);
    })
    taskNumber.textContent = toDoList.length;
    if(toDoList.length < 3){
        search.style.display = "none";
    } else {
        search.style.display = "block";
    }
};
const removeTask = (e)=>{
    e.target.parentNode.style.textDecoration = "line-through";
    const index = e.target.parentNode.dataset.key;
    if(e.target.textContent == "For sure?"){
        toDoList.splice(index, 1);
        renderTasks();
    }
    e.target.textContent = "For sure?"
};

const addTask = (e)=>{
    e.preventDefault();
    taskInput.style.display = "inline-block";
    const titleContent = taskInput.value;
    addActive = !addActive;
    if(titleContent != ""){
        const newTask = document.createElement("li");
        newTask.className = "task";
        newTask.innerHTML = titleContent + `<button class="remove">x</button`;
        toDoList.push(newTask);
        renderTasks();
        taskInput.value = "";
        newTask.querySelector('.remove').addEventListener('click', removeTask);
        addActive = !addActive;
        renderTasks();
    }
    if(addActive == false){
        taskInput.style.display = "none";
    }
};

const searchTasks = (e) =>{
    const searchedPhrase = e.target.value.toLowerCase();
    const matches = toDoList.filter(task => task.textContent.toLowerCase().includes(searchedPhrase))
    renderTasks(matches);
};

form.addEventListener("submit", addTask);
search.addEventListener("input", searchTasks);


