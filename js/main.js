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
        return "something went wrong"
    }
}

console.log(getComputerChoice())


