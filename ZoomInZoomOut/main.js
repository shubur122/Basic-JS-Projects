const showItem = document.getElementsByClassName("showItem")[0];
const listItems = [...document.getElementsByTagName("li")];
const uList = document.querySelector("ul");
const btnWrap = document.querySelector(".btnWrap")
const btnMagnify = btnWrap.getElementsByClassName("magnify")[0];
const btnShrink = btnWrap.getElementsByClassName("shrink")[0];

let toggleButton = false;
let fontSize = 18, fontSizeMax=36, fontSizeMin = 10;

listItems.forEach((listItem)=>{listItem.style.fontSize=fontSize+"px"});

showItem.addEventListener("click", ()=> {
    if(!toggleButton) {
        uList.style.display ="table";
        showItem.style.backgroundColor ="hsl(357, 100%, 60%)";
        showItem.textContent = "Hide Item";
        btnWrap.style.display="block";
        toggleButton = !toggleButton;
    } else if (toggleButton){
        uList.style.display ="none";
        showItem.style.backgroundColor ="rgb(50, 228, 50";
        showItem.textContent = "Show Item";
        btnWrap.style.display="none";
        toggleButton = !toggleButton;
    }
});
btnMagnify.addEventListener("click", () => {
    if(toggleButton&&(fontSize<fontSizeMax)){
        fontSize+=2;
    }
    listItems.forEach((listItem)=>{listItem.style.fontSize=fontSize+"px"});
});
btnShrink.addEventListener("click", () => {
    if(toggleButton&&(fontSize>fontSizeMin)){
        fontSize-=2;
    }
    listItems.forEach((listItem)=>{listItem.style.fontSize=fontSize+"px"});
});

let array = [0, 20, 30, 450 ,45 ,45 ,45];
for(int i =0; i<array.length;i++){

}