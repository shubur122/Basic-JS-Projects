let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    const ul = document.createElement("ul");
    btn.textContent = "Dodaj 10 elementów listy";
    document.body.appendChild(btn);
    document.body.appendChild(ul);
    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
    const ul = document.querySelector("ul");
    for(let i = 0; i<10; i++) {
        const li = document.createElement("li");
        li.style.fontSize = `${size}px`;
        li.textContent = `${orderElement}`;
        size++;
        orderElement++;
        ul.appendChild(li);
    }
}

init()