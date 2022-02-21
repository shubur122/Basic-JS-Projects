const h1 = document.querySelector("h1");

document.body.addEventListener("mousemove", (event)=>{
    const x = event.clientX, y=event.clientY;
    h1.textContent = `Mouse co-ordinates:
    X:${x}, Y:${y}`
    const innerWidth = window.innerWidth, innerHeight = window.innerHeight;
    const red = x/innerWidth * 100
    const green = y/innerHeight * 100
    const blue = (red+green)/2
    document.body.style.backgroundColor=`rgb(${red}%,${green}%,${blue}%)`
})