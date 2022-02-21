const slideList =[{
    img: "Slider/images/img1.jpg",
    text: "Text1",
},
{
    img: "Slider/images/img2.jpg",
    text: "Text2",
},
{
    img: "Slider/images/img3.jpg",
    text: "Text3",
}];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];
let preventOnPress = true;

const slideTime = 20000;
let activeElement = 0;


const changeDot = ()=> {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[activeElement].classList.add("active");

};
const changeSlide = () => {
    activeElement++;
    if(activeElement === slideList.length) {
        activeElement = 0;
    } 
    image.src = slideList[activeElement].img;
    h1.textContent = slideList[activeElement].text;
    changeDot();
};
const keyChangeSlide = (e) => {
    if(e.which == "ArrowLeft" || e.which == "ArrowRight"){
        clearInterval(intervalID);
        e.which == "ArrowLeft" ? activeElement-- : activeElement++;
        if(activeElement<0) {
            activeElement = slideList.length -1;
        }
        if(activeElement===slideList.length) {
            activeElement = 0;
        }
        image.src = slideList[activeElement].img;
        h1.textContent = slideList[activeElement].text;
        changeDot();
        intervalID = setInterval(changeSlide, slideTime);
    };
};
let intervalID = setInterval(changeSlide, slideTime);
window.addEventListener("keydown", (e)=>{
    if(!preventOnPress){
        keyChangeSlide(e)
        preventOnPress = !preventOnPress;
    };
});
window.addEventListener("keyup", (e)=>{
    if(e.key == "ArrowLeft" || e.key == "ArrowRight"){
        preventOnPress = !preventOnPress;
    }
});


