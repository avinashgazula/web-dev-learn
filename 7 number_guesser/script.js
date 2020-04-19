let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);

}

function compareGuesses(userGuess, computerGuess, target) {
    if (Math.abs(target - userGuess) <= Math.abs(target - computerGuess)) {
        return true;
    }
    return false;
}

function updateScore(winner) {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        default:
            break;
            
    }
}

function advanceRound() {
    currentRoundNumber++;
}

