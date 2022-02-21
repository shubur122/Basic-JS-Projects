const input = document.getElementById("pass");
const div = document.querySelector(".message")
const passwords = ["aDmIn", "zIMa", "WIosna"];
const messages = ["Miłego dnia :)", "zimno", "kwiatuszki"];

const lcPasswords = passwords.map( password => password.toLowerCase()); 
// funkcja strzalkowa bez uzycia nawiasow klamrowych zwraca wynik dzialania(nie potrzeba return)

input.addEventListener("input", (e)=>{
    div.textContent = "";
    const text = e.target.value;
    lcPasswords.forEach((password, index)=>{
        if(password === text.toLowerCase()){
            div.textContent = messages[index];
            e.target.value = "";
        } 
    })
})
input.addEventListener("focus", (e)=>{
    e.target.classList.add("active");
})
input.addEventListener("blur", (e)=>{
    e.target.classList.remove("active");
})