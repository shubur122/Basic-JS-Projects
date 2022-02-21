const sessionSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
};

const game = {
    playerChoice: "",
    computerChoice: "",
    winner: "",
    optionSelection(){
        game.playerChoice = this.dataset.option;
        options.forEach((option) => {option.style.boxShadow = ''})
        this.style.boxShadow = "0 0 0 4px black"
    },
    randomChoice(){
        const random = options[Math.trunc(Math.random()*3)].dataset.option
        return random;
    },
    pickWinner(){
        if(game.playerChoice === game.computerChoice) {
            return "Draw!";
        } else if ((game.playerChoice === "Paper" && game.computerChoice === "Rock")||(game.playerChoice === "Rock" && game.computerChoice === "Scissors")||(game.playerChoice == "Scissors" && game.computerChoice === "Paper")) {
            return "Player";
        } else {
            return "Computer";
        }
    },
    updateStats(){
        document.querySelector('p.numbers span').textContent = ++sessionSummary.numbers;

        if(game.winner === "Player") {
            document.querySelector("[data-summary='winner']").style ="color: green";
            document.querySelector('p.wins span').textContent = ++sessionSummary.wins;
        } else if (game.winner==="Draw!") {
            document.querySelector("[data-summary='winner']").style ="color: grey";
            document.querySelector('p.draws span').textContent = ++sessionSummary.draws;
        } else {
            document.querySelector("[data-summary='winner']").style ="color: red";
            document.querySelector('p.losses span').textContent = ++sessionSummary.losses;
        };

        document.querySelector("[data-summary='yourChoice']").textContent = game.playerChoice;
        document.querySelector("[data-summary='computerChoice']").textContent = game.computerChoice;
        document.querySelector("[data-summary='winner']").textContent = game.winner;
    },
    start(){
        if(game.playerChoice===""){
            return alert("Choose rock, paper or scissors!!!");
        } 
        game.computerChoice = game.randomChoice();
        game.winner = game.pickWinner();
        game.updateStats();
        game.end();
    },
    end(){
        document.querySelector(`[data-option=${game.playerChoice}]`).style.boxShadow ="";
        game.playerChoice = "";
        game.computerChoice ="";
    }
};


const options = document.querySelectorAll(".select img");

options.forEach((option)=>{
    option.addEventListener('click', game.optionSelection)
})

document.querySelector(".start").addEventListener("click", game.start)