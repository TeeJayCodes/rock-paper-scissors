let choice;
let playerSelection;
let computerSelection;
let message;
let gameWinner;
let playerWinCount = 0;
let computerWinCount = 0;
let roundResult = document.createElement(`div`);


//getComputerChoice randomly selects 'Rock', 'Paper', or 'Scissors' for the computer
function getComputerChoice() {
    getRandomNumber();
    switch(choice) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }
    return choice;
}

//getRandomNumber assigns a random int from 1 through 3 inclusive to the choice variable, with each int representing 1 of the 3 choices in the game, and returns choice
function getRandomNumber() {
    choice = Math.ceil(Math.random() * 3);
    return choice;
}

//playRound takes two parameters, one being case-insensitive playerSelection and the other being computerSelection. It returns a string that declares the round's winner
function playRound(playerSelection, computerSelection) {
    playerSelection = formatSelection(playerSelection); 
    computerSelection = getComputerChoice();
    pickRoundWinner(playerSelection, computerSelection);
    roundResult.textContent = message;
    if (message.includes("Win")) {
        playerWinCount = ++playerWinCount;
    } else if (message.includes("Lose")) {
        computerWinCount = ++computerWinCount;
    }
    return message;
}

//formatSelection makes a selection case-insensitive so the returned string will always only have the first letter capitalized
function formatSelection(selection) {
    let firstLetter = selection.charAt(0);
    let firstLetterUppercase = firstLetter.toUpperCase();
    let remainingLetters = selection.substring(1);
    let remainingLettersLowercase = remainingLetters.toLowerCase();
    let selectionFinalFormat = firstLetterUppercase + remainingLettersLowercase;
    return selectionFinalFormat;
}

//pickRoundWinner determines who the round winner is, or if it's a tie, and returns the appropriate message
function pickRoundWinner(playerSelection, computerSelection) {
    switch(true) {
        case playerSelection === computerSelection:
            message = "It's a tie! Nobody wins this round.";
            break;
        case playerSelection === "Rock" && computerSelection === "Paper":
            message = "You Lose this round! Paper beats Rock!";
            break;
        case playerSelection === "Rock" && computerSelection === "Scissors":
            message = "You Win this round! Rock beats Scissors!";
            break;
        case playerSelection === "Scissors" && computerSelection === "Rock":
            message = "You Lose this round! Rock beats Scissors!";
            break;
        case playerSelection === "Scissors" && computerSelection === "Paper":
            message = "You Win this round! Scissors beats Paper!";
            break;
        case playerSelection === "Paper" && computerSelection === "Rock":
            message = "You Win this round! Paper beats Rock!";
            break;
        case playerSelection === "Paper" && computerSelection === "Scissors":
            message = "You Lose this round! Scissors beats Paper!";
            break;
    }
    return message;
}

//pickGameWinner prints the current score and, if there is one, the game winner, then resets the score
function pickGameWinner() {
    if (playerWinCount === 5) {
        PLAYERWINS.textContent = ` You win the game! The final score is Player - ${playerWinCount} and Computer - ${computerWinCount}`;
        roundResult.append(PLAYERWINS);
        playerWinCount = 0;
        computerWinCount = 0;
    } else if (computerWinCount === 5) {
        COMPUTERWINS.textContent = ` You lose the game! The final score is Player - ${playerWinCount} and Computer - ${computerWinCount}`;
        roundResult.append(COMPUTERWINS);
        playerWinCount = 0;
        computerWinCount = 0;
    } else {
    document.body.append(roundResult);
    roundResult.append(SCORE);
    }
}


const ROCK = document.querySelector(`.rock`)
const PAPER = document.querySelector(`.paper`)
const SCISSORS = document.querySelector(`.scissors`)
const SCORE = document.createElement(`h3`);
const PLAYERWINS = document.createElement(`h2`);
const COMPUTERWINS = document.createElement(`h2`);


ROCK.addEventListener(`click`, function() {
    playRound(`Rock`);
    SCORE.textContent = ` Player score is ${playerWinCount} - Computer Score is ${computerWinCount}`;
    pickGameWinner();
});
PAPER.addEventListener(`click`, function() {
    playRound(`Paper`);
    SCORE.textContent = ` Player score is ${playerWinCount} - Computer Score is ${computerWinCount}`;
    pickGameWinner();
});
SCISSORS.addEventListener(`click`, function() {
    playRound(`Scissors`);
    SCORE.textContent = ` Player score is ${playerWinCount} - Computer Score is ${computerWinCount}`;
    pickGameWinner();
});