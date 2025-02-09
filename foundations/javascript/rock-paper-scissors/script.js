function getComputerChoice() {
    let value = Math.random();

    if (value <= 0.33) {
        return "rock"
    } else if (0.33 < value && value <= 0.66) {
        return "paper"
    }

    return "scissors"
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    humanChoice.toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Please input one of: Rock, Paper, Scissors.");
    }

    humanChoice.toLowerCase();

    if (humanChoice == "rock") {
        return 'rock'
    } else if (humanChoice == "paper") {
        return 'paper'
    } else if (humanChoice == "scissors") {
        return 'scissors'
    }

    return null
}


function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == 'rock') {
            if (computerChoice == 'rock') {
                console.log("Draw! You both chose Rock.");
            } else if (computerChoice == 'paper') {
                console.log("You lose! Paper beats Rock.");
                ++computerScore;
            } else {
                console.log("You win! Rock beats Scissors.");
                ++humanScore;
            }
        } else if (humanChoice == 'paper') {
            if (computerChoice == 'paper') {
                console.log("Draw! You both chose Paper.");
            } else if (computerChoice == 'rock') {
                console.log("You win! Paper beats Rock.");
                ++humanScore;
            } else {
                console.log("You lose! Scissors beats Paper.");
                ++computerScore;
            }
        } else {
            if (computerChoice == 'scissors') {
                console.log("Draw! You both chose Scissors.");
            } else if (computerChoice == 'rock') {
                console.log("You lose! Rock beats Scissors.");
                ++computerScore;
            } else {
                console.log("You win! Scissors beats Paper.");
                ++humanScore;
            }
        }
    }
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(); 
        console.log(humanChoice);
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);
        
        console.log(humanScore);
        console.log(computerScore);
    }

}

playGame();