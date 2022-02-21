let size = 100;

document.body.style.height="5000px";

const div = document.createElement('div');
const title = document.createElement('h1');
title.textContent = "On Scroll Change color";
div.style.position = "fixed";
div.style.left = "0";
div.style.top = "0";
div.style.width = "100%";
div.style.height = size +"px";

document.body.appendChild(div);
div.appendChild(title);

let flag = true;

const changeHeight = function() {
    if(size>window.innerHeight/2){
        flag = !flag;
    } else if(size<=0){
        flag = !flag;
    }

    if(flag){
        size+=5
        div.style.backgroundColor="green";
    } else {
        size-=5
        div.style.backgroundColor="red";
    }
    div.style.height=size+"px";
}

window.addEventListener("scroll", changeHeight);