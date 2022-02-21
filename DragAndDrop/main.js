const div = document.querySelector("div");
let divX = 150, divY = 50;;
let insertDivX, insertDivY;

div.style.left = `${divX}px`
div.style.top = `${divY}px`

let moveActive = false;

div.addEventListener("mousedown",(event)=>{
    div.style.backgroundColor = "gray";
    moveActive = true;
    insertDivX = event.offsetX;
    insertDivY = event.offsetY;
})

div.addEventListener("mousemove",(event)=>{
    if(moveActive){
        divX = event.clientX - insertDivX;
        divY = event.clientY - insertDivY;
        div.style.left = `${divX}px`
        div.style.top = `${divY}px`
    }
})

div.addEventListener("mouseup",()=>{
    div.style.backgroundColor = "black";
    moveActive = false;
})
