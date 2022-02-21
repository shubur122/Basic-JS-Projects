const timer = () =>{
    let seconds = 0;
    document.body.textContent = `0 seconds`;
    return ()=>{
        seconds++;
        document.body.textContent = `${seconds} seconds`;
    }
}

const clock = timer();
setInterval(clock, 1000);
