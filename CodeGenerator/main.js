const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const btn = document.querySelector("button");
const div = document.querySelector(".codes");


const codeGenerator = (codesNumber, codeLength) => {
    div.textContent = "";
    for(let i = 0; i<codesNumber; i++){
        let code = "";
        for(let j = 0; j<codeLength; j++) {
            const index = Math.trunc(Math.random()*chars.length);
            code += chars[index];
        }
        code += "\n"
        div.textContent += code;
    }
}

btn.addEventListener("click", ()=>{
    const codesNumber = document.getElementById("codesNumber").value;
    const codeLength = document.getElementById("codeLength").value;
    codeGenerator(codesNumber, codeLength)
})