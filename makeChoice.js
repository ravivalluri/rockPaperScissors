const makeComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 1) {
        computerChoice = 'rock';
    } else if (computerChoice == 2) {
        computerChoice = 'scissors';
    } else {
        computerChoice = 'paper';
    }
    return computerChoice;
};
const play = (playChoice, computerChoice) => {
    if (playChoice == computerChoice) {
        return 'Draw';
    } else if (playChoice == 'rock') {
        if (computerChoice == 'scissors') {
            return 'You win';
        } else if (computerChoice == 'paper') {
            return 'Computer wins';
        }
    } else if (playChoice == 'paper') {
        if (computerChoice == 'scissors') {
            return 'Computer wins';
        } else if (computerChoice == 'rock') {
            return 'You win';
        }
    } else if (playChoice == 'scissors') {
        if (computerChoice == 'rock') {
            return 'Computer wins';
        } else if (computerChoice == 'paper') {
            return 'You win';
        }
    }
};

module.exports = {
    play,
    makeComputerChoice
};