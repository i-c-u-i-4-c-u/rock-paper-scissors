
// reference and declaration
const main = document.querySelector(".main");
let round = document.querySelector("#round");
const help = document.querySelector("#help");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let playerSelectionTxt = document.querySelector("#your-selection");
let computerSelection = document.querySelector("#computer-selection");
const resultTag = document.querySelector("#result-tag");

const selectionButton = document.querySelectorAll("#selection-button > *");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");

let compScore = 0;
let playerScores = 0;
let roundCount = 0;

// Get computer choice
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3 );
    switch (randomChoice) {
        case 0:
            randomChoice = "rock";
            break;
        case 1:
            randomChoice = "paper";
            break;
        case 2:
            randomChoice = "scissors";
    }
    computerSelection.textContent = `Computer Selection: ${randomChoice.toUpperCase()}`;
    return randomChoice;
}

// Get player choice and play round

let playerSelection;
rock.addEventListener("click", () => {
    playerSelection = "rock";
    playerSelectionTxt.textContent = `Your Selection: ROCK`;
    playRound();
})

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound();
    playerSelectionTxt.textContent = `Your Selection: ${playerSelection.toUpperCase()}`
})

paper.addEventListener("click", () => {
    playerSelection = "paper";
    playRound();
    playerSelectionTxt.textContent = `Your Selection: ${playerSelection.toUpperCase()}`
})

// Reset round and score value
function reset(){
    compScore = 0;
 playerScores = 0;
 roundCount = 0;
 playerScore.textContent = "0";
 round.textContent = "Round 1";
 computerScore.textContent = "0";
}


//Play Round

function playRound() {
   

        round.textContent = `Round ${++roundCount}`;
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
     resultTag.textContent = "It's a tie";
    } else if (computerSelection === "rock") {
        if (playerSelection === "scissors"){
     computerScore.textContent = ++compScore;

     resultTag.textContent = `You lose! ${computerSelection} beat ${playerSelection}`;
        } else {
            playerScore.textContent = ++playerScores;
            resultTag.textContent = `You win! ${playerSelection} beat ${computerSelection}`;
        }
    } else if (computerSelection === "scissors"){
        if (playerSelection === "paper"){
            computerScore.textContent = ++compScore;
            resultTag.textContent = `You lose! ${computerSelection} beat ${playerSelection}`;
        } else {
            playerScore.textContent = ++playerScores;
            resultTag.textContent = `You win! ${playerSelection} beat ${computerSelection}`;
        }
    } else if (computerSelection === "paper"){
        if (playerSelection === "rock"){
            computerScore.textContent = ++compScore;
            resultTag.textContent = `You lose! ${computerSelection} beat ${playerSelection}`;
        } else {
            playerScore.textContent = ++playerScores;
            resultTag.textContent = `You win! ${playerSelection} beat ${computerSelection}`;
        }
    }
console.log(playerScores)
    if (playerScores === 5) {
        resultTag.textContent = "You win this round. Press a button to start new game.";
        selectionButton.forEach((elem) => {
            elem.addEventListener("click", reset)
        })
    } else if (compScore === 5 ){
        resultTag.textContent = "Computer win this round. Press a button to start new game.";
        selectionButton.forEach((elem) => {
            elem.addEventListener("click", reset)
        })
    }

}
