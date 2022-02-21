const endTime = new Date("2022-06-01 23:59:59").getTime();

setInterval(()=>{
    const currentTime = new Date().getTime();

    const spanDays = document.querySelector("span.d");
    const spanHours = document.querySelector("span.h");
    const spanMinutes = document.querySelector("span.m");
    const spanSeconds = document.querySelector("span.s")

    const timeLeft = (endTime - currentTime)/1000;
    let days =Math.trunc(timeLeft/(60*60*24));
    days = days < 10 ? `0${days}` : days;
    let hours = Math.trunc((timeLeft/(60*60))%24);
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = Math.trunc((timeLeft/(60))%60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = Math.trunc(timeLeft%60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    spanDays.textContent = days;
    spanHours.textContent = hours;
    spanMinutes.textContent = minutes;
    spanSeconds.textContent = seconds;
},1000)