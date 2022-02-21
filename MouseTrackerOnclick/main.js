const setColor = (x, y) => {
    if(x%2===0 && y%2===0) {
        return "red";
    } else if(x%2!==0 && y%2!==0) {
        return "blue";
    } else {
        return "green";
    };
};

document.body.addEventListener("click", (event)=>{
    const x = event.clientX;
    const y = event.clientY;
    console.log(x, y)
    const color = setColor(x, y);
    document.body.style.backgroundColor = color;
    
});