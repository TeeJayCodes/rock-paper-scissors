//Create a function named getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'. getComputerChoice calls the getRandomNumber function, and uses its return value to decide which of the 3 choices to return
let choice;
let playerSelection;
let computerSelection;
let message;

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

//Write a function that plays one round of Rock Paper Scissors. It should take two parameters, one being case-insensitive playerSelection and the other being computerSelection. Then return a string that declares the winner or a tie
function playGame(playerSelection, computerSelection) {
    playerSelection = formatSelection(playerSelection); 
    computerSelection = getComputerChoice();
    
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
function pickWinner() {
    playerSelection = formatSelection(playerSelection);
    switch(true) {
        case playerSelection === computerSelection:
            message = "It's a tie!";
            break;
        case playerSelection === "Rock" && computerSelection === "Paper":
            message = "You Lose! Paper beats Rock";
            break;
        case playerSelection === "Rock" && computerSelection === "Scissors":
            message = "You Win! Rock beats Scissors";
            break;
        case playerSelection === "Scissors" && computerSelection === "Rock":
            message = "You Lose! Rock beats Scissors";
            break;
        case playerSelection === "Scissors" && computerSelection === "Paper":
            message = "You Win! Scissors beats Paper";
            break;
        case playerSelection === "Paper" && computerSelection === "Rock":
            message = "You Win! Paper beats Rock";
            break;
        case playerSelection === "Paper" && computerSelection === "Scissors":
            message = "You Lose! Scissors beats Paper";
            break;
    }
    return message;
}