let color = 100;
document.body.style.backgroundColor = `rgb(${color},${color},${color})`;

window.addEventListener("keydown",(e, which)=>{
    switch(e.which) {
        case 38:
            if(color<255){
                color +=5 
            }
            break;
        case 40:
            if(color>0){
                color -= 5;
            } 
            break;
    }
    document.body.style.backgroundColor = `rgb(${color},${color},${color})`;
})