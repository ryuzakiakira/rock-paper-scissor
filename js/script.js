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
    if (e.target.nodeName === 'IMG') {
        console.log(e.target.id);
        return e.target.id;
    };
    return '';
}

// decide who won and who lost in each round and keeps track of the score, takes two inputs getComputerChoice and playerSelection

let playerScore = 0;
let computerScore = 0;

function winnerSelection(computerChoice, playerChoice) {
    
    if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore += 1
        return `Computer choose ${computerChoice}. You lose!`
    } else if (playerChoice === "paper" && computerChoice === "scissor") {
        computerScore += 1
        return `Computer choose ${computerChoice}. You lose!`
    } else if (playerChoice === "scissor" && computerChoice === "rock") {
        computerScore += 1
        return `Computer choose ${computerChoice}. You lose!`
    } else if (playerChoice === computerChoice) {
        return `Computer choose ${computerChoice}. It's a tie.`
    } else if (playerChoice === "") {
        return "No input"
    } else {
        playerScore += 1
        return `Computer choose ${computerChoice}, You win!`
    }
}    

// starts the game and pick the winner

function gameStart(event) {
    // for (let i = 1; i <=5; i++) {
    //     console.log(winnerSelection(getComputerChoice(), playerSelection(event)))
    // };

    console.log(winnerSelection(getComputerChoice(), playerSelection(event)))
    // console.log(`${playerScore}  ${computerScore}`)
    

};

// let game run for 5 rounds

// function game() {
//     let round = 0;

//     while (round <= 4) {
//         window.addEventListener('click', function(event) {
//             gameStart(event);
//         });
//         round++

//     };
// };

// game()

window.addEventListener('click', function(event) {
    gameStart(event);
});

