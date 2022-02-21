const square = document.createElement("div");
square.classList.add("box");
document.body.appendChild(square);

let size = 100;
square.style.height = size + "px";
square.style.width = size + "px";
let grow = false;

window.addEventListener("scroll", ()=>{
    if(size>=window.innerHeight/2) {
        grow = !grow;
    } else if (size==100) {
        grow = !grow;
    }

    if(grow){
        size += 5;
    } else {
        size-=5;
    }
    square.style.height = size + "px";
    square.style.width = size + "px";
})