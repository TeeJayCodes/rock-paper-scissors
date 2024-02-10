let choice;
let playerSelection;
let computerSelection;
let message;
let gameWinner;
let playerWinCount = 0;
let computerWinCount = 0;


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
    pickWinner(playerSelection, computerSelection);
    console.log(message);
    return message;
}

//playGame keeps score for five rounds and announces the game's winner at the end
function playGame(playerSelection) {
    for (let i = 0; i < 5; ++i) {
        playerSelection = prompt("Rock, Paper, or Scissors?");
        playRound(playerSelection);
        if (message.includes("Win")) {
            playerWinCount = ++playerWinCount;
        } else if (message.includes("Lose")) {
            computerWinCount = ++computerWinCount;
        }
    }
    if (playerWinCount > computerWinCount) {
        gameWinner = `You Win the game! Your score is ${playerWinCount} and the computer's score is ${computerWinCount}.`;
    } else if (playerWinCount < computerWinCount) {
        gameWinner = `You Lose the game! Your score is ${playerWinCount} and the computer's score is ${computerWinCount}.`;
    } else {
        gameWinner = `The game is a tie! Your score is ${playerWinCount} and the computer's score is ${computerWinCount}.`;
    }
    playerWinCount = 0;
    computerWinCount = 0;
    return gameWinner;
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

//pickWinner determines who the winner is, or if it's a tie, and returns the appropriate message
function pickWinner(playerSelection, computerSelection) {
    switch(true) {
        case playerSelection === computerSelection:
            message = "It's a tie! Nobody wins this round.";
            break;
        case playerSelection === "Rock" && computerSelection === "Paper":
            message = "You Lose this round! Paper beats Rock";
            break;
        case playerSelection === "Rock" && computerSelection === "Scissors":
            message = "You Win this round! Rock beats Scissors";
            break;
        case playerSelection === "Scissors" && computerSelection === "Rock":
            message = "You Lose this round! Rock beats Scissors";
            break;
        case playerSelection === "Scissors" && computerSelection === "Paper":
            message = "You Win this round! Scissors beats Paper";
            break;
        case playerSelection === "Paper" && computerSelection === "Rock":
            message = "You Win this round! Paper beats Rock";
            break;
        case playerSelection === "Paper" && computerSelection === "Scissors":
            message = "You Lose this round! Scissors beats Paper";
            break;
    }
    return message;
}