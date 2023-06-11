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
    const roundWinner = document.querySelector('.roundWinner')
    roundWinner.innerHTML = `<p>${winnerSelection(getComputerChoice(), playerSelection(event))}</p>`;

    const score = document.querySelector('.score')
    score.innerHTML = `<p>Your Score : ${playerScore} | Computer's Score : ${computerScore}</p>`;
};

// reset game run for 5 rounds

    window.addEventListener('click', function(event) {
        gameStart(event);
        console.log(`${typeof(computerScore)} || ${typeof(playerScore)}`)
        if (computerScore === 5 || playerScore === 5) {
            const winner = document.querySelector('.winner');
            winner.innerHTML = `<p>${computerScore} || ${playerScore}</p>`;
            winner.setAttribute('style', 'font-size: 30px')
            playerScore = 0;
            computerScore = 0;
        }
    });

