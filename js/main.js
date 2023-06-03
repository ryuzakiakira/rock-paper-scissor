// A function to get the computer's choice
// generate a random number from and including 1 and to and including 3
// if number === 1 choose rock
// if number === 2 choose paper
// if number === 3 choose scissor

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissor";
    } else {
        return "something went wrong";
    }
}

// get user choice and convert to lower case. 
function playerSelection() {
    return prompt("Choose your weapon!! Rock!? Paper!? or Scissor!?", "").toLowerCase();
}

// A function to decide who won and who lost takes two inputs getComputerChoice and playerSelection
// rock beats scissor 
// paper beats rock
// scissor beats paper
// keep track of the score

let playerScore = 0;
let computerScore = 0;

function winnerSelection(computerChoice, playerChoice) {
    
    if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore += 1
        return `Computer choose ${computerChoice}! You lose!`
    } else if (playerChoice === "paper" && computerChoice === "scissor") {
        computerScore += 1
        return `Computer choose ${computerChoice}! You lose!`
    } else if (playerChoice === "scissor" && computerChoice === "rock") {
        computerScore += 1
        return `Computer choose ${computerChoice}! You lose!`
    } else if (playerChoice === computerChoice) {
        return `Computer choose ${computerChoice}! It's a tie.`
    } else if (playerChoice === "") {
        return "No input"
    } else {
        playerScore += 1
        return `Computer choose ${computerChoice}! You win!`
    }
}    

// A function that lets the game run for 5 rounds and keeps track of the score
// loop for 5 times 
// check who won each time and add 1 to their score 
// if player score more than computer player win
// else computer win

function game() {
    for (let i = 1; i <=5; i++) {
        console.log(winnerSelection(getComputerChoice(), playerSelection()))
    }
    if (playerScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("You Lose!")
    }
}

game()

