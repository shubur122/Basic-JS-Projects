const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const clock = document.querySelector(".time div");

let time = 0.00;
let active = false;
let timerID = 0;
const timer = () =>{
    if(!active){
        active = !active;
        startBtn.textContent = "Stop";
        timerID = setInterval(start, 10);
    } else {
        active = !active
        startBtn.textContent = "Start";
        clearInterval(timerID);
    }
}
const start = ()=>{
    time++;
    clock.textContent = (time/100).toFixed(2);
}

const stopTimer = () =>{
    clearInterval(timerID);
    time = 0;
    clock.textContent = "---";
    active = false;
    startBtn.textContent = "Start";
}
startBtn.addEventListener("click", timer)
resetBtn.addEventListener("click", stopTimer)