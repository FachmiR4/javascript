const choice = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scorePlayer = document.getElementById('scorePlayer');
const scoreComputer = document.getElementById("scoreComputer");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choice[Math.floor(Math.random() * 3)];
    let result = '';

    if(playerChoice === computerChoice){
        result = "it's a tie!"
    }else{
        switch(playerChoice){
            case "rock":
               result = (computerChoice === "scissors") ? "you win!" : "you lose!";
               break;
            case "paper":
                result = (computerChoice === "rock") ? "you win!" : "you lose!";
                break;
            case "scissors":
               result = (computerChoice === "paper") ? "you win!" : "you lose!";
               break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent =`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText")
    switch(result){
        case "you win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            scorePlayer.textContent = playerScore;
            break
        case "you lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            scoreComputer.textContent = computerScore;
            break
    }
}