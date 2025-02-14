let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");

const scores = document.createElement("div");
const roundResult = document.createElement("div");

results.appendChild(scores);
results.appendChild(roundResult);

function getComputerChoice() {
    let value = Math.random();

    if (value <= 0.33) {
        return "rock"
    } else if (0.33 < value && value <= 0.66) {
        return "paper"
    }

    return "scissors"
}

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(humanChoice, computerChoice) {
    let resultMessage = '';
    let capitalisedHumanChoice = capitalise(humanChoice);
    let capitalisedComputerChoice = capitalise(computerChoice);

    if (humanChoice === computerChoice) {
        resultMessage = `Draw! You both chose ${capitalisedHumanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = `You win! ${capitalisedHumanChoice} beats ${capitalisedComputerChoice}.`;
        ++humanScore;
    } else {
        resultMessage = `You lose! ${capitalisedComputerChoice} beats ${capitalisedHumanChoice}.`;
        ++computerScore;
    }

    roundResult.textContent = resultMessage;
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    scores.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    roundResult.textContent = "";
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
        scores.textContent = `You: ${humanScore}, Computer: ${computerScore}`;

        if (humanScore === 5) {
            alert('You won!');
            reset();
        }

        if (computerScore === 5) {
            alert('You lost!');
            reset();
        }
    });
});