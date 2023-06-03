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

function gameOn(computerChoice, playerChoice) {
    if (playerChoice === "rock" && computerChoice === "paper") {
        return `Computer choose ${computerChoice}! You lose!`
    } else if (playerChoice === "paper" && computerChoice === "scissor") {
        return `Computer choose ${computerChoice}! You lose!`
    } else if (playerChoice === "scissor" && computerChoice === "rock") {
        return `Computer choose ${computerChoice}! You lose!`
    } else if (playerChoice === computerChoice) {
        return `Computer choose ${computerChoice}! It's a tie.`
    } else {
        return `Computer choose ${computerChoice}! You win!`
    }
}

console.log(gameOn(getComputerChoice(),playerSelection()))
