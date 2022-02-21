document.body.textContent = "Click on window to start counting."

const add = (startNumber = 0) => {
    let number = startNumber;
    return ()=> {
        number++
        document.body.textContent = `Counter: ${number}`
    }
}
const counter = add();

document.addEventListener("click", counter);