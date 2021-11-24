let playerScore = 0;
let computerScore = 0;


//Function that returns rock, paper, or scissors
function computerPlay() {
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Asks player to choose a hand
function playerPlay() {
    let playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
    checkForErrors(playerChoice);
    return playerChoice;
};

//Verifies players input is valid
function checkForErrors(selection) {
    while (selection !== "rock" && selection !== "paper" && selection !== "scissors") {
        alert("That is not a valid option. Please try again");
        selection = playerPlay();
    };
};

//Plays out one round of rock, paper scissors
function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    let result;

    //Checking for and returns winner or ties
    if (playerSelection == computerSelection){
        result = "tie";
    }; 
    if (playerSelection == "rock" && computerSelection == "scissors"){
        result = "won";
    };
    if (playerSelection == "rock" && computerSelection == "paper"){
        result = "lost";
    };
    if (playerSelection == "paper" && computerSelection == "scissors"){
        result = "lost";
    };
    if (playerSelection == "paper" && computerSelection == "rock"){
        result = "win";
    };
    if (playerSelection == "scissors" && computerSelection == "rock"){
        result = "lost";
    };
    if (playerSelection == "scissors" && computerSelection == "paper"){
        result = "won";
    };

    //Display Result
    if (result == "tie") {
        console.log(`It is a tie! You chose ${playerSelection} and computer chose ${computerSelection}.`);
    } else {
        console.log(`You ${result}! You chose ${playerSelection} and computer chose ${computerSelection}.`);
    };

    return result;
};

function game(playerScore, computerScore) {
    let result;

    function updateScoreboard() {
        document.getElementById("playerScore").innerHTML = `${playerScore}`;
        document.getElementById("computerScore").innerHTML = `${computerScore}`;
    };
    
    function resetGame() {
        computerScore = 0;
        playerScore = 0;
        updateScoreboard();
    }

    for (let i = 0; i < 5; i++) {
        result = playRound();
        if (result == "won") {
            playerScore = ++playerScore;
            updateScoreboard();
        };
        if (result == "lost") {
            computerScore = ++computerScore;
            updateScoreboard();
        };
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    };
    if (playerScore > computerScore) {
        console.log("Game over, You won!");
    } else if (computerScore > playerScore) {
        console.log("Game over, You lost!");
    } else {
        console.log("Game over, it is a tie!");
    };
};

game(0,0);