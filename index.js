console.log("Welcome to Rock, Paper, Scissors!");

// Obtain a choice from the user

// Report on who won

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse(response) {
    // Validdate the user's choice and tell them if they made a mistake

    //User options
    const userOption = ['rock', 'paper', 'scissors'];

    // user choice
    const userChoice = userOption[''];

    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        console.log(userChoice);
    } else {
        //  console.log('oops! invalid choice');      
    }

    // Strip capitalisation/ignore capitalisation of words


    // Make a random selection for the computer

    // A random choice of Rock, Paper or Scissors

    // Compare the two choices


    console.log(response);
    readline.close();
}


readline.question("Please choose either rock paper or scissors!\n", handleUserResponse);