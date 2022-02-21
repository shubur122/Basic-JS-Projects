const pickNameBtn = document.getElementsByClassName('pickName')[0];
const nameSpace = document.querySelector(".text");
const addNameBtn = document.querySelector(".add");
const radio = document.getElementsByName('gender');

const namesMale = ["Liam", "Noah", "Oliver", "Elijah", "William", "James", "Benjamin", "Lucas", "Henry", "Alexander"]
const namesFemale = ["Olivia", "Emma", "Ava", "Charlotte", "Sophia", "Amelia", "Isabella", "Mia", "Evelyn", "Harper"]

const generateName = (array) => {
    const index = Math.trunc(Math.random()*array.length);
    nameSpace.textContent = array[index];
}

const addNameToList = (namesList) => {
    let nameExists = false;
    const newName = document.getElementById("name").value.trim();
    if(newName!==""){
        namesList.forEach((name)=>{
            if(newName.toLowerCase() === name.toLowerCase()) {
                nameExists = true;
            }
        });
        if(!nameExists){
            namesList.push(newName);
        }
    }
}
addNameBtn.addEventListener("click", ()=>{
        if(radio[0].checked){
            addNameToList(namesMale);
        } else if (radio[1].checked) {
            addNameToList(namesFemale);
        }
})

pickNameBtn.addEventListener("click", ()=>{
    if(radio[0].checked){
        generateName(namesMale);
    } else if (radio[1].checked) {
        generateName(namesFemale);
    }
})