const button = document.querySelector("button.addDiv");
let counter = 1;
const addDivOnClick = () => {
    const newDiv = document.createElement("div");
    if(counter % 10 == 0){
        newDiv.classList.add("circleGold")
    }else if(counter % 5 == 0) {
        newDiv.classList.add("circleBlue")
    } 
    newDiv.textContent = counter;
    document.querySelector("div.container").appendChild(newDiv);
    counter++;
};

button.addEventListener("click", addDivOnClick);