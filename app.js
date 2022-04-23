const blank = 'images/black_background.png';

const choices = [
    'images/rock.png',
    'images/paper.png',
    'images/scissors.png'
];

const player = {
    score: 0,
    choiceDisplay: document.querySelector('#playerPick img'),
    scoreLabel: document.querySelector('#humanScore'),
    inputs: {
        rockImage: document.querySelector('#rock'),
        paperImage: document.querySelector('#paper'),
        scissorsImage: document.querySelector('#scissors')
    }
};

const computer = {
    choice: '',
    score: 0,
    choiceDisplay: document.querySelector('#computerPick img'),
    scoreLabel: document.querySelector('#computerScore'),
    decide() { 
        this.choice = choices[Math.floor(Math.random() * 3)]; 
    }
};

const resetButton = document.querySelector('#reset');

const winningScoreSelection = document.querySelector('#rounds');
let winningScore = parseInt(winningScoreSelection.value);

const scoresDisplay = document.querySelector('#scoresDisplay');

winningScoreSelection.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

player.inputs.rockImage.addEventListener('click', function () {
    computer.decide();

    player.choiceDisplay.src = choices[0];
    computer.choiceDisplay.src = computer.choice;

    if (computer.choice === choices[1]) {
        updateScore(computer);
    } else if (computer.choice === choices[2]) {
        updateScore(player);
    }

    decideWinner();
});

player.inputs.paperImage.addEventListener('click', function () {
    computer.decide();

    player.choiceDisplay.src = choices[1];
    computer.choiceDisplay.src = computer.choice;

    if (computer.choice === choices[0]) {
        updateScore(player);
    } else if (computer.choice === choices[2]) {
        updateScore(computer);
    }

    decideWinner();
});

player.inputs.scissorsImage.addEventListener('click', function () {
    computer.decide();

    player.choiceDisplay.src = choices[2];
    computer.choiceDisplay.src = computer.choice;

    if (computer.choice === choices[0]) {
        updateScore(computer);
    } else if (computer.choice === choices[1]) {
        updateScore(player);
    }

    decideWinner();
});

resetButton.addEventListener('click', reset);

function updateScore(winner) {
    winner.score++;
    winner.scoreLabel.innerText = winner.score;
}

function decideWinner() {
    if (winningScore === player.score || winningScore === computer.score) {
        let winnerLabel = document.createElement('p');

        if (winningScore === player.score) {
            winnerLabel.innerText = 'You win';
            winnerLabel.style.color = '#7cfc00';
        } else {
            winnerLabel.innerText = 'Computer wins';
            winnerLabel.style.color = '#dc143c';
        }

        togglePlayerInputs(true);
        scoresDisplay.appendChild(winnerLabel);
    }
}

function reset() {
    togglePlayerInputs(false);

    player.score = 0;
    player.scoreLabel.innerText = player.score;
    player.choiceDisplay.src = blank;

    computer.score = 0;
    computer.scoreLabel.innerText = computer.score;
    computer.choiceDisplay.src = blank;

    if (scoresDisplay.children.length === 3) {
        scoresDisplay.removeChild(scoresDisplay.lastChild);  
    } 
}

function togglePlayerInputs(disable) {
    for (let key in player.inputs) {
        player.inputs[key].disabled = disable;
    }
}