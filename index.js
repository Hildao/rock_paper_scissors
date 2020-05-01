console.log("Welcome to Rock, Paper, Scissors!");


// Make a random selection for the computer
// A random choice of Rock, Paper or Scissors

const getComputerChoice = () => {
    //switch (Math.floor(Math.random() * 3))
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    };
};
getComputerChoice();

// Compare the two choices (User choice and the computer choice)
let compare = function (response, getComputerChoice) {

    if (response === getComputerChoice) {
        return "It is a tie!";
    }
    if (response === "rock") {
        if (getComputerChoice === "scissors") {
            //Rock wins
            return "You Win!";
        } else {
            // paper wins
            return "You lose! Try again.";
        }
    }
    if (response === "paper") {
        if (getComputerChoice === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again.";
        }
    }
    if (response === "scissors") {
        if (getComputerChoice === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Obtain a choice from the user
const handleUserResponse = response => {
    // Strip capitalisation/ignore capitalisation of words
    response = response.toLowerCase();

    // Validate the user's choice and tell them if they made a mistake
    if (response === 'rock' || response === 'paper' || response === 'scissors') {
        response;
        // Report on who won
        console.log("Computer: ", getComputerChoice());
        console.log(compare(response, getComputerChoice()));
        readline.close();
    } else {
        readline.question("oops! invalid choice. Try again!\n", handleUserResponse);
    };
};

readline.question("Please choose either rock paper or scissors!\n", handleUserResponse);