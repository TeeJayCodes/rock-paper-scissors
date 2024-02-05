//Create a function named getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'. getComputerChoice calls the getRandomNumber function, and uses its return value to decide which of the 3 choices to return
let choice;

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