const spanTxt = document.querySelector(".text");
const spanCursor = document.querySelector(".cursor");
const text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
const text2 = "Voluptate debitis ipsum aliquid quas asperiores minus cupiditate aspernatur, eaque obcaecati molestiae alias perspiciatis libero."
const text3 = "Et vitae saepe, aut maiores sed rerum."
const texts = [text1, text2, text3];
const time = 100;
let txtIndex = 0;
let letterIndex = 0;

const addLetter = () => {
    if(letterIndex>=0){
        spanTxt.textContent += texts[txtIndex][letterIndex];
    }
    letterIndex++;
    if(letterIndex === texts[txtIndex].length){
        txtIndex++;
        if(txtIndex === texts.length) return;
        return setTimeout(()=>{     
            letterIndex = 0;       
            spanTxt.textContent = "";
            addLetter();
        }, 2000)
    }
    setTimeout(addLetter, time)
};

addLetter();

const cursorBlinking = () => {
    spanCursor.classList.toggle("active");
}
setInterval(cursorBlinking, 400)

