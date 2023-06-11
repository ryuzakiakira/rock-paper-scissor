 // get the computer's choice

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

// get user choice

function playerSelection(e) {
    if (e.target.nodeName === 'BUTTON') {
        // console.log(target.id);
        return e.target.id;
    };
};

// const playerSelection = (e) => {
//     if (e.target.nodeName === 'BUTTON') {
//         return e.target.id;
//     }
// }

// console.log(playerSelection())


// decide who won and who lost in each round and keeps track of the score, takes two inputs getComputerChoice and playerSelection

let playerScore = 0;
let computerScore = 0;

function winnerSelection(computerChoice, playerChoice) {
    
    if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore += 1
        return `Computer choose ${computerChoice}, you choose ${playerChoice}! You lose!`
    } else if (playerChoice === "paper" && computerChoice === "scissor") {
        computerScore += 1
        return `Computer choose ${computerChoice}, you choose ${playerChoice}! You lose!`
    } else if (playerChoice === "scissor" && computerChoice === "rock") {
        computerScore += 1
        return `Computer choose ${computerChoice}, you choose ${playerChoice}! You lose!`
    } else if (playerChoice === computerChoice) {
        return `Computer choose ${computerChoice},you choose ${playerChoice}! It's a tie.`
    } else if (playerChoice === "") {
        return "No input"
    } else {
        playerScore += 1
        return `Computer choose ${computerChoice},you choose ${playerChoice}! You win!`
    }
}    

// let the game run for 5 rounds and pick the winner

function game(event) {
    // for (let i = 1; i <=5; i++) {
    //     console.log(winnerSelection(getComputerChoice(), playerSelection))
    // };

    console.log(winnerSelection(getComputerChoice(), playerSelection(Event)))
    if (playerScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("You Lose!")
    }
};

document.addEventListener('click', function(event) {
    game(Event)
});