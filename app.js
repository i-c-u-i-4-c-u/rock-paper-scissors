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

    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie"
    } else if (playerSelection === "rock" && computerSelection === "scissors" || 
                playerSelection === "scissors" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "rock") {
                    return "You win"
                } else {
                    return "You lose"
                }

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beat Paper"
    } else if (computerSelection === "scissors" && playerSelection === "paper"){
        return "You lose! Scissors beat Paper"
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! Paper beat Rock"
    } else {
        return "Good Job! You win"
    }

}


const playerSelection = prompt("Choose : 'Rock' 'Scissors' or 'Paper'", "").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

